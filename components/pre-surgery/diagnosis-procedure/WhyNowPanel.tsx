import { Panel } from "@/components/common/Panel";

export function WhyNowPanel({ title, body }: { title: string; body: string }) {
  return (
    <Panel title={title}>
      <p className="text-[1.0625rem] leading-relaxed">{body}</p>
    </Panel>
  );
}
