"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { ui } from "@/content/shared";
import { useAppState } from "@/lib/app-state";
import { submitQuestions } from "@/lib/mock-api";

export function SubmitQuestionsButton({ label, doneHref }: { label: string; doneHref: string }) {
  const { state, update } = useAppState();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function submit() {
    setSubmitting(true);
    const response = await submitQuestions({
      concerns: state.concerns,
      questions: state.questions,
    });
    update({ questionsSubmittedAt: response.receivedAt });
    router.push(doneHref);
  }

  return (
    <Button size="nav" arrow="right" onClick={submit} disabled={submitting}>
      {submitting ? ui.submitting : label}
    </Button>
  );
}
