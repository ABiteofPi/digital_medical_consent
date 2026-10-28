import { Panel } from "@/components/common/Panel";
import { ReportIncorrectInfoButton } from "@/components/common/ReportIncorrectInfoButton";

export function IncorrectInfoPanel({ title, body }: { title: string; body: string }) {
  return (
    <Panel tone="highlight" title={title} action={<ReportIncorrectInfoButton />}>
      <p className="text-[1.0625rem] leading-relaxed">{body}</p>
    </Panel>
  );
}
