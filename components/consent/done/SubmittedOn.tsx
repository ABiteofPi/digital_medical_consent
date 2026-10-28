"use client";

import { useAppState } from "@/lib/app-state";
import { formatDate } from "@/lib/format";

/** Subtitle line with the date the consent was submitted. */
export function SubmittedOn({ template, fallback }: { template: string; fallback: string }) {
  const { state } = useAppState();
  const submittedAt = state.consentSubmittedAt;

  return (
    <p className="mt-3 text-[1.375rem]">
      {submittedAt ? template.replace("{date}", formatDate(new Date(submittedAt))) : fallback}
    </p>
  );
}
