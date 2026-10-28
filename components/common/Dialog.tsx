"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { CloseIcon } from "./icons";

/** Modal built on the native <dialog> element (focus trapping and Esc for free). */
export function Dialog({
  open,
  onClose,
  title,
  closeLabel,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  closeLabel: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      className="m-auto w-[calc(100%-60px)] max-w-[640px] rounded-xl bg-white p-0 text-ink"
    >
      <div className="flex items-start justify-between gap-4 px-6 pt-6">
        <h2 className="text-[1.625rem] leading-tight font-semibold">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="rounded-md p-1 hover:bg-panel"
        >
          <CloseIcon className="size-7" />
        </button>
      </div>
      <div className="px-6 py-4">{children}</div>
      {footer && <div className="flex justify-end gap-3 px-6 pb-6">{footer}</div>}
    </dialog>
  );
}
