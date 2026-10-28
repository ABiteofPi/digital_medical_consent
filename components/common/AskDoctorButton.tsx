"use client";

import { useState } from "react";
import { Button } from "./Button";
import { QuestionsDialog } from "./QuestionsDialog";

/** Outline button that opens the questions dialog ("Write a question for your doctor"). */
export function AskDoctorButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <QuestionsDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
