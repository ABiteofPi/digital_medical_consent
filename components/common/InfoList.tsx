export type InfoRow = { label: string; value: string; hint?: string };

/** Two-column label / value list (patient details, operation details, records). */
export function InfoList({ rows, labelWidth = "200px" }: { rows: InfoRow[]; labelWidth?: string }) {
  return (
    <dl
      className="grid gap-x-4 gap-y-2.5 text-base"
      style={{ gridTemplateColumns: `${labelWidth} 1fr` }}
    >
      {rows.map((row) => (
        <div key={row.label} className="contents">
          <dt className="text-muted">{row.label}</dt>
          <dd className="tracking-wide">
            {row.value}
            {row.hint && <span className="ml-1 text-[0.75em] tracking-normal">{row.hint}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
