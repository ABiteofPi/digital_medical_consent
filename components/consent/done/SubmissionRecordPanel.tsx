"use client";

import { InfoList, type InfoRow } from "@/components/common/InfoList";
import { Panel } from "@/components/common/Panel";
import { useAppState } from "@/lib/app-state";
import { fillTemplate, formatDate, formatTime } from "@/lib/format";

export function SubmissionRecordPanel({
  title,
  rows,
  submittedLabel,
  submittedValue,
  submittedHint,
}: {
  title: string;
  rows: InfoRow[];
  submittedLabel: string;
  submittedValue: string;
  submittedHint: string;
}) {
  const { state } = useAppState();
  const submittedAt = state.consentSubmittedAt ? new Date(state.consentSubmittedAt) : null;

  const allRows: InfoRow[] = [
    ...rows,
    {
      label: submittedLabel,
      value: submittedAt
        ? fillTemplate(submittedValue, { date: formatDate(submittedAt), time: formatTime(submittedAt) })
        : "—",
      hint: submittedAt ? submittedHint : undefined,
    },
  ];

  return (
    <Panel title={title}>
      <InfoList rows={allRows} labelWidth="230px" />
    </Panel>
  );
}
