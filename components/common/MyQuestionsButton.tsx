"use client";

import { useState } from "react";
import { ui } from "@/content/shared";
import { fillTemplate } from "@/lib/format";
import { useAppState } from "@/lib/app-state";
import { QuestionMarkIcon } from "./icons";
import { QuestionsDialog } from "./QuestionsDialog";

/** "My Questions (n)" button shown top-right on pre-surgery information pages. */
export function MyQuestionsButton() {
  const { state } = useAppState();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end px-7.5 pt-5">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-[38px] items-center gap-2 rounded-lg bg-sand px-3 text-lg hover:bg-sand-strong"
      >
        <QuestionMarkIcon className="size-6" />
        {fillTemplate(ui.myQuestions.buttonLabel, { count: state.questions.length })}
      </button>
      <QuestionsDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
