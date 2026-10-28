"use client";

import { ToggleChip } from "@/components/common/Chip";
import { Panel } from "@/components/common/Panel";
import { toggleItem, useAppState } from "@/lib/app-state";

export function FrequentQuestionsPanel({ title, options }: { title: string; options: string[] }) {
  const { state, update } = useAppState();

  return (
    <Panel title={title}>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <ToggleChip
            key={option}
            label={option}
            selected={state.questions.includes(option)}
            onToggle={() => update((s) => ({ questions: toggleItem(s.questions, option) }))}
          />
        ))}
      </div>
    </Panel>
  );
}
