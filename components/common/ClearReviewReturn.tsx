"use client";

import { useEffect } from "react";
import { useAppState } from "@/lib/app-state";

/**
 * Drops the "Return to consent" banner state. Rendered on entry pages (landing,
 * consent welcome) so a stale review session doesn't follow the patient around.
 */
export function ClearReviewReturn() {
  const { state, update } = useAppState();
  const pending = state.reviewReturnPath !== null;

  useEffect(() => {
    if (pending) update({ reviewReturnPath: null });
  }, [pending, update]);

  return null;
}
