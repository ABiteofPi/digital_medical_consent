import { InfoList, type InfoRow } from "@/components/common/InfoList";
import { Panel } from "@/components/common/Panel";

export function OperationInfoPanel({ title, rows }: { title: string; rows: InfoRow[] }) {
  return (
    <Panel title={title}>
      <InfoList rows={rows} />
    </Panel>
  );
}
