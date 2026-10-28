"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import { ToggleChip } from "@/components/common/Chip";
import { Panel } from "@/components/common/Panel";
import { TextArea } from "@/components/common/TextArea";
import { addItem, toggleItem, useAppState } from "@/lib/app-state";

export function PrioritiesPanel({
  title,
  options,
  ownLabel,
  ownPlaceholder,
  add,
}: {
  title: string;
  options: string[];
  ownLabel: string;
  ownPlaceholder: string;
  add: string;
}) {
  const { state, update } = useAppState();
  const [draft, setDraft] = useState("");

  function addOwn() {
    update((s) => ({ concerns: addItem(s.concerns, draft) }));
    setDraft("");
  }

  return (
    <Panel title={title}>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <ToggleChip
            key={option}
            label={option}
            selected={state.concerns.includes(option)}
            onToggle={() => update((s) => ({ concerns: toggleItem(s.concerns, option) }))}
          />
        ))}
      </div>
      <label htmlFor="own-priority" className="mt-6 mb-2 block text-lg">
        {ownLabel}
      </label>
      <TextArea
        id="own-priority"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder={ownPlaceholder}
      />
      <div className="mt-3 flex justify-end">
        <Button size="sm" variant="outline" onClick={addOwn} disabled={!draft.trim()}>
          {add}
        </Button>
      </div>
    </Panel>
  );
}
