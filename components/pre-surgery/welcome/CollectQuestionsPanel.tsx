import { Paragraphs } from "@/components/common/PageSection";
import { Panel } from "@/components/common/Panel";

export function CollectQuestionsPanel({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <Panel tone="highlight" title={title}>
      <Paragraphs items={paragraphs} className="text-[1.0625rem] leading-relaxed" />
    </Panel>
  );
}
