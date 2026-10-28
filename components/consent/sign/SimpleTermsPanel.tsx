import { Panel } from "@/components/common/Panel";

export function SimpleTermsPanel({
  title,
  note,
  quote,
}: {
  title: string;
  note: string;
  quote: string;
}) {
  return (
    <Panel tone="highlight" title={title}>
      <p className="mb-4 text-base text-muted">{note}</p>
      <blockquote className="text-base leading-relaxed">{quote}</blockquote>
    </Panel>
  );
}
