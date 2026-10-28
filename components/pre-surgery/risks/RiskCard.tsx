import type { ComponentProps } from "react";
import { Panel } from "@/components/common/Panel";
import { SeverityMeter } from "./SeverityMeter";

type SeverityProps = Omit<ComponentProps<typeof SeverityMeter>, "level">;

export function RiskCard({
  title,
  frequency,
  rate,
  paragraphs,
  severity,
  severityScale,
}: {
  title: string;
  frequency: string;
  rate: string;
  paragraphs: string[];
  severity: ComponentProps<typeof SeverityMeter>["level"];
  severityScale: SeverityProps;
}) {
  return (
    <Panel>
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="shrink-0 text-base">
          {frequency} - <span className="text-muted">{rate}</span>
        </p>
      </div>
      <div className="flex flex-col gap-1 text-base">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <SeverityMeter level={severity} {...severityScale} />
      </div>
    </Panel>
  );
}
