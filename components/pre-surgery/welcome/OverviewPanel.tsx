import { Panel } from "@/components/common/Panel";

export function OverviewPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <Panel title={title}>
      <ol className="flex flex-col gap-3 text-[1.0625rem]">
        {items.map((item, index) => (
          <li key={item}>
            {index + 1}. {item}
          </li>
        ))}
      </ol>
    </Panel>
  );
}
