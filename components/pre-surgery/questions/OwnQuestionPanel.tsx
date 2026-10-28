"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Panel } from "@/components/common/Panel";
import { TextArea } from "@/components/common/TextArea";
import { addItem, useAppState } from "@/lib/app-state";

export function OwnQuestionPanel({
  title,
  placeholder,
  add,
}: {
  title: string;
  placeholder: string;
  add: string;
}) {
  const { update } = useAppState();
  const [draft, setDraft] = useState("");

  function addQuestion() {
    update((s) => ({ questions: addItem(s.questions, draft) }));
    setDraft("");
  }

  return (
    <Panel title={title}>
      <TextArea
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder={placeholder}
        aria-label={title}
      />
      <div className="mt-6 flex justify-end">
        <Button onClick={addQuestion} disabled={!draft.trim()}>
          {add}
        </Button>
      </div>
    </Panel>
  );
}
