"use client";

import { useState } from "react";
import { ui } from "@/content/shared";
import { addItem, removeItem, useAppState } from "@/lib/app-state";
import { Button } from "./Button";
import { RemovableChip } from "./Chip";
import { Dialog } from "./Dialog";
import { TextArea } from "./TextArea";

const t = ui.myQuestions;

/** Lets the patient jot down questions from any information page. */
export function QuestionsDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, update, notify } = useAppState();
  const [draft, setDraft] = useState("");

  function addQuestion() {
    if (!draft.trim()) return;
    update((s) => ({ questions: addItem(s.questions, draft) }));
    setDraft("");
    notify(t.added);
  }

  const hasItems = state.questions.length + state.concerns.length > 0;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={t.dialogTitle}
      closeLabel={t.close}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            {t.close}
          </Button>
          <Button onClick={addQuestion} disabled={!draft.trim()}>
            {t.add}
          </Button>
        </>
      }
    >
      <p className="mb-4 text-base">{t.dialogIntro}</p>
      <TextArea
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder={t.placeholder}
        aria-label={t.placeholder}
      />
      <div className="mt-5 flex flex-col gap-4">
        {!hasItems && <p className="text-muted">{t.empty}</p>}
        {state.concerns.length > 0 && (
          <DraftGroup
            heading={t.concernsHeading}
            items={state.concerns}
            onRemove={(item) => update((s) => ({ concerns: removeItem(s.concerns, item) }))}
          />
        )}
        {state.questions.length > 0 && (
          <DraftGroup
            heading={t.questionsHeading}
            items={state.questions}
            onRemove={(item) => update((s) => ({ questions: removeItem(s.questions, item) }))}
          />
        )}
      </div>
    </Dialog>
  );
}

function DraftGroup({
  heading,
  items,
  onRemove,
}: {
  heading: string;
  items: string[];
  onRemove: (item: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-2 text-lg">{heading}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <RemovableChip label={item} onRemove={() => onRemove(item)} removeLabel={t.remove} />
          </li>
        ))}
      </ul>
    </div>
  );
}
