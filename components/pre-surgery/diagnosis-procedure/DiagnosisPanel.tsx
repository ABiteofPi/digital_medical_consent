import { Panel } from "@/components/common/Panel";
import { MedicalTerm } from "./MedicalTerm";

export function DiagnosisPanel({
  title,
  body,
  medicalTerm,
  medicalTermLabel,
}: {
  title: string;
  body: string;
  medicalTerm: string;
  medicalTermLabel: string;
}) {
  return (
    <Panel title={title}>
      <p className="text-[1.0625rem] leading-relaxed">{body}</p>
      <MedicalTerm label={medicalTermLabel} term={medicalTerm} />
    </Panel>
  );
}
