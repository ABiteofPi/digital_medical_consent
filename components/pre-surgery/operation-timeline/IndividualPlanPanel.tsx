import { Paragraphs } from "@/components/common/PageSection";
import { Panel } from "@/components/common/Panel";

export function IndividualPlanPanel({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <Panel tone="highlight" title={title}>
      <Paragraphs items={paragraphs} className="gap-5 leading-relaxed" />
    </Panel>
  );
}
