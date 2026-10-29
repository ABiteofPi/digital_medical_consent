"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ui } from "@/content/shared";
import { fillTemplate } from "@/lib/format";
import { useAppState } from "@/lib/app-state";
import { QuestionMarkIcon } from "./icons";
import { QuestionsDialog } from "./QuestionsDialog";

/**
 * "My Questions (n)" bar shown in the sticky area of the pre-surgery flow.
 * Hidden on the paths listed in `hiddenOn`.
 */
export function MyQuestionsButton({ hiddenOn = [] }: { hiddenOn?: string[] }) {
  const { state } = useAppState();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (hiddenOn.includes(pathname)) return null;

  return (
    <div className="flex justify-end px-7.5 pt-4 pb-3">
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
