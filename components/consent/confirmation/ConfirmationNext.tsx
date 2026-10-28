"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/common/Button";
import { ui } from "@/content/shared";
import { useAppState } from "@/lib/app-state";

/** Next is enabled once every statement on the page is confirmed. */
export function ConfirmationNext({
  itemIds,
  href,
  incompleteHint,
}: {
  itemIds: string[];
  href: string;
  incompleteHint: string;
}) {
  const { state } = useAppState();
  const router = useRouter();
  const complete = itemIds.every((id) => state.consentChecks[id]);

  return (
    <>
      <Button size="nav" arrow="right" disabled={!complete} onClick={() => router.push(href)}>
        {ui.next}
      </Button>
      {!complete && <p className="text-sm text-muted">{incompleteHint}</p>}
    </>
  );
}
