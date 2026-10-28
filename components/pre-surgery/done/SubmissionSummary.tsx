"use client";

import { useAppState } from "@/lib/app-state";
import { fillTemplate } from "@/lib/format";

export function SubmissionSummary({
  sentSummary,
  paragraphs,
}: {
  sentSummary: string;
  paragraphs: string[];
}) {
  const { state } = useAppState();

  return (
    <div className="flex flex-col gap-3 text-[1.0625rem]">
      <p>
        {fillTemplate(sentSummary, {
          questions: state.questions.length,
          concerns: state.concerns.length,
        })}
      </p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
