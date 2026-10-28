"use client";

import { RemovableChip } from "@/components/common/Chip";
import { Panel } from "@/components/common/Panel";
import { removeItem, useAppState } from "@/lib/app-state";

type DraftsContent = {
  title: string;
  concernsHeading: string;
  questionsHeading: string;
  emptyConcerns: string;
  emptyQuestions: string;
  remove: string;
};

export function DraftsPanel({ content }: { content: DraftsContent }) {
  const { state, update } = useAppState();

  return (
    <Panel tone="highlight" title={content.title}>
      <DraftList
        heading={content.concernsHeading}
        empty={content.emptyConcerns}
        removeLabel={content.remove}
        items={state.concerns}
        onRemove={(item) => update((s) => ({ concerns: removeItem(s.concerns, item) }))}
      />
      <DraftList
        heading={content.questionsHeading}
        empty={content.emptyQuestions}
        removeLabel={content.remove}
        items={state.questions}
        onRemove={(item) => update((s) => ({ questions: removeItem(s.questions, item) }))}
      />
    </Panel>
  );
}

function DraftList({
  heading,
  empty,
  removeLabel,
  items,
  onRemove,
}: {
  heading: string;
  empty: string;
  removeLabel: string;
  items: string[];
  onRemove: (item: string) => void;
}) {
  return (
    <div className="mt-5 first-of-type:mt-2">
      <h3 className="mb-2.5 text-lg">{heading}</h3>
      {items.length === 0 ? (
        <p className="text-base text-muted">{empty}</p>
      ) : (
        <ul className="flex flex-col items-start gap-3">
          {items.map((item) => (
            <li key={item}>
              <RemovableChip label={item} removeLabel={removeLabel} onRemove={() => onRemove(item)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
