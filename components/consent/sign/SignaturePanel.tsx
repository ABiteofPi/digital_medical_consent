"use client";

import { useEffect, useRef, useSyncExternalStore, type PointerEvent } from "react";
import { Panel } from "@/components/common/Panel";
import { useAppState } from "@/lib/app-state";
import { formatLongDate } from "@/lib/format";

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 280;

const noopSubscribe = () => () => {};

/** Today's date, read on the client only (the server render shows nothing). */
function useToday() {
  return useSyncExternalStore(noopSubscribe, () => formatLongDate(new Date()), () => "");
}

export function SignaturePanel({
  title,
  placeholder,
  clear,
  dateLocationLabel,
  location,
}: {
  title: string;
  placeholder: string;
  clear: string;
  dateLocationLabel: string;
  location: string;
}) {
  const { state, update } = useAppState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const today = useToday();
  const signature = state.signature;

  // Restore a saved signature when returning to the page.
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || !signature) return;
    const image = new Image();
    image.onload = () => context.drawImage(image, 0, 0);
    image.src = signature;
    // Only on mount: later strokes are already on the canvas.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function point(event: PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * CANVAS_WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * CANVAS_HEIGHT,
    };
  }

  function start(event: PointerEvent<HTMLCanvasElement>) {
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drawing.current = true;
    const { x, y } = point(event);
    context.lineWidth = 5;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#2b2a1c";
    context.beginPath();
    context.moveTo(x, y);
  }

  function move(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    const { x, y } = point(event);
    context.lineTo(x, y);
    context.stroke();
  }

  function end(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    drawing.current = false;
    update({ signature: event.currentTarget.toDataURL("image/png") });
  }

  function clearSignature() {
    canvasRef.current?.getContext("2d")?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    update({ signature: null });
  }

  return (
    <Panel title={title}>
      <div className="rounded-md border border-line bg-white px-5 pt-3 pb-4">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            aria-label={placeholder}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={end}
            onPointerCancel={end}
            className="block h-[140px] w-full cursor-crosshair touch-none"
          />
          {signature && (
            <button
              type="button"
              onClick={clearSignature}
              className="absolute top-0 right-0 rounded-md px-2 py-1 text-sm text-muted hover:bg-panel hover:text-ink"
            >
              {clear}
            </button>
          )}
        </div>
        <p className="border-b border-muted/60 pb-2 text-[13px] text-muted">{placeholder}</p>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <span className="text-[13px] text-muted">{dateLocationLabel}</span>
          <span className="text-base">{today && `${today}, ${location}`}</span>
        </div>
      </div>
    </Panel>
  );
}
