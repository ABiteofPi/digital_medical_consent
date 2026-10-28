type TimelineEntry = { title: string; body: string };

/** Chronological list of cards joined by a vertical line on the left. */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="mt-7 flex flex-col gap-3 border-l-2 border-ink pl-2.5">
      {entries.map((entry) => (
        <li key={entry.title} className="rounded-[10px] bg-panel px-5 py-5">
          <h2 className="mb-1.5 text-xl font-semibold">{entry.title}</h2>
          <p className="text-base">{entry.body}</p>
        </li>
      ))}
    </ol>
  );
}
