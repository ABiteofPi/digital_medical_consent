import { Paragraphs } from "@/components/common/PageSection";
import { Panel } from "@/components/common/Panel";

export function OptionCard({
  number,
  title,
  paragraphs,
}: {
  number: number;
  title: string;
  paragraphs: string[];
}) {
  return (
    <Panel title={<span className="pl-1.5">{`${number}. ${title}`}</span>}>
      <Paragraphs items={paragraphs} className="gap-4 leading-relaxed" />
    </Panel>
  );
}
