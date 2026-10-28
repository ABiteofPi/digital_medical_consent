"use client";

import { useRouter } from "next/navigation";
import { reviewReturnBanner } from "@/content/pre-surgery/flow";
import { useAppState } from "@/lib/app-state";
import { Button } from "./Button";

/**
 * Shown in the pre-surgery flow when the patient arrived from a consent
 * "Review ..." button, so they can jump straight back.
 */
export function ReviewReturnBanner() {
  const { state, update } = useAppState();
  const router = useRouter();
  const returnPath = state.reviewReturnPath;

  if (!returnPath) return null;

  function goBack() {
    update({ reviewReturnPath: null });
    router.push(returnPath!);
  }

  return (
    <div className="flex items-center justify-between gap-4 border-b border-line bg-sand px-7.5 py-3">
      <p className="text-base">{reviewReturnBanner.text}</p>
      <Button size="sm" arrow="left" onClick={goBack}>
        {reviewReturnBanner.action}
      </Button>
    </div>
  );
}
