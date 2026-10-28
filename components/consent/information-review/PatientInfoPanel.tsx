import { InfoList, type InfoRow } from "@/components/common/InfoList";
import { Panel } from "@/components/common/Panel";

export function PatientInfoPanel({ title, rows }: { title: string; rows: InfoRow[] }) {
  return (
    <Panel title={title}>
      <InfoList rows={rows} labelWidth="210px" />
    </Panel>
  );
}
