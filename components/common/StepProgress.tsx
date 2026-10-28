import Link from "next/link";

type Step = { label: string; href: string };

/**
 * Numbered progress line. Completed steps link back so the patient can review
 * earlier sections. `current` is 1-based; pass `allComplete` on summary pages.
 */
export function StepProgress({
  steps,
  current = 0,
  allComplete = false,
}: {
  steps: Step[];
  current?: number;
  allComplete?: boolean;
}) {
  // Steps are spaced evenly, so step i sits at (i + 1) / (n + 1) of the width.
  const filled = allComplete ? 100 : (current / (steps.length + 1)) * 100;

  return (
    <nav aria-label="Progress" className="relative my-6 h-8">
      <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-idle" />
      <div
        className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-ink"
        style={{ width: `${filled}%` }}
      />
      <ol className="relative flex h-full items-center justify-evenly">
        {steps.map((step, index) => {
          const number = index + 1;
          const status =
            allComplete || number < current ? "done" : number === current ? "current" : "upcoming";
          const boxClasses = {
            done: "border-ink bg-ink text-white hover:bg-black",
            current: "border-ink bg-[#cfcfcf] text-ink",
            upcoming: "border-transparent bg-idle text-white",
          }[status];
          const box = (
            <span
              className={`flex size-7 items-center justify-center rounded-md border-2 text-[14px] font-bold ${boxClasses}`}
            >
              {number}
            </span>
          );

          return (
            <li key={step.href} aria-current={status === "current" ? "step" : undefined}>
              {status === "done" ? (
                <Link href={step.href} aria-label={`${number}. ${step.label}`} title={step.label}>
                  {box}
                </Link>
              ) : (
                <span aria-label={`${number}. ${step.label}`} title={step.label}>
                  {box}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
