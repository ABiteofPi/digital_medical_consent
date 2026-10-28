import type { ReactNode } from "react";

/**
 * Rounded content card. "neutral" is the grey information panel; "highlight"
 * is the sand-coloured call-out used for guidance and actions.
 */
export function Panel({
  title,
  tone = "neutral",
  action,
  children,
  className = "",
}: {
  title?: ReactNode;
  tone?: "neutral" | "highlight";
  /** Rendered bottom-right, e.g. an outline button. */
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const highlight = tone === "highlight";
  return (
    <section className={`rounded-[10px] p-5 ${highlight ? "bg-sand" : "bg-panel"} ${className}`}>
      {title && (
        <h2
          className={
            highlight
              ? "mb-3 text-[1.625rem] leading-tight font-semibold"
              : "mb-4 text-xl leading-tight font-semibold"
          }
        >
          {title}
        </h2>
      )}
      {children}
      {action && <div className="mt-6 flex justify-end">{action}</div>}
    </section>
  );
}

/** Vertical stack of panels with the spacing used throughout the designs. */
export function PanelStack({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
}
