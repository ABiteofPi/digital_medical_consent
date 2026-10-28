import { AskDoctorButton } from "@/components/common/AskDoctorButton";
import { Panel } from "@/components/common/Panel";

export function DoctorRecommendationPanel({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action: string;
}) {
  return (
    <Panel tone="highlight" title={title} action={<AskDoctorButton label={action} />}>
      <p className="text-base leading-relaxed">{body}</p>
    </Panel>
  );
}
