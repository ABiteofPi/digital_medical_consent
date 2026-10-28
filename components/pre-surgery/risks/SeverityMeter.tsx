"use client";

import { useState } from "react";
import { InfoIcon } from "@/components/common/icons";
import type { SeverityLevel } from "@/content/pre-surgery/risks";

type Level = { id: SeverityLevel; label: string; color: string; muted: string };

/** Five-segment scale with a marker above the risk's severity level. */
export function SeverityMeter({
  level,
  levels,
  label,
  infoTitle,
  infoBody,
}: {
  level: SeverityLevel;
  levels: Level[];
  label: string;
  infoTitle: string;
  infoBody: string;
}) {
  const [infoOpen, setInfoOpen] = useState(false);
  const active = levels.find((entry) => entry.id === level) ?? levels[0];

  return (
    <div className="relative rounded-sm border border-line bg-panel px-3.5 pt-2 pb-2.5">
      <div className="flex items-end gap-1.5" aria-hidden>
        {levels.map((entry) => {
          const isActive = entry.id === level;
          return (
            <div key={entry.id} className="flex flex-col items-center">
              <span
                className={`mb-0.5 h-0 w-0 border-x-[7px] border-t-[7px] border-x-transparent ${isActive ? "border-t-ink" : "border-t-transparent"}`}
              />
              <span
                className={isActive ? "h-7 w-7" : "h-7 w-4.5"}
                style={{ background: isActive ? entry.color : entry.muted }}
              />
            </div>
          );
        })}
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[0.8125rem]">
        <span className="text-muted">{label}</span>
        <span className="font-medium">{active.label}</span>
        <button
          type="button"
          onClick={() => setInfoOpen((open) => !open)}
          aria-expanded={infoOpen}
          aria-label={infoTitle}
          className="rounded-full text-muted hover:text-ink"
        >
          <InfoIcon className="size-4" />
        </button>
      </p>
      {infoOpen && (
        <div
          role="note"
          className="absolute right-0 bottom-full z-10 mb-2 w-[300px] rounded-lg border border-line bg-white p-4 text-left text-sm shadow-lg"
        >
          <p className="mb-1 font-semibold">{infoTitle}</p>
          <p>{infoBody}</p>
          <ul className="mt-3 flex flex-col gap-1">
            {levels.map((entry) => (
              <li key={entry.id} className="flex items-center gap-2">
                <span className="size-3 rounded-sm" style={{ background: entry.color }} />
                {entry.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
