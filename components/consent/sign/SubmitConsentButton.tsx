"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { ui } from "@/content/shared";
import { useAppState } from "@/lib/app-state";
import { submitConsent } from "@/lib/mock-api";

export function SubmitConsentButton({
  label,
  missingSignature,
  location,
  doneHref,
}: {
  label: string;
  missingSignature: string;
  location: string;
  doneHref: string;
}) {
  const { state, update } = useAppState();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const signature = state.signature;

  async function submit() {
    if (!signature) return;
    setSubmitting(true);
    const response = await submitConsent({
      confirmations: state.consentChecks,
      signature,
      signedAt: new Date().toISOString(),
      location,
    });
    update({ consentSubmittedAt: response.receivedAt });
    router.push(doneHref);
  }

  return (
    <>
      <Button size="nav" arrow="right" onClick={submit} disabled={!signature || submitting}>
        {submitting ? ui.submitting : label}
      </Button>
      {!signature && <p className="text-sm text-muted">{missingSignature}</p>}
    </>
  );
}
