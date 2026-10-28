"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Panel } from "@/components/common/Panel";
import { useAppState } from "@/lib/app-state";
import { requestAssistance } from "@/lib/mock-api";

export function AssistancePanel({
  title,
  body,
  action,
  sending,
  success,
}: {
  title: string;
  body: string;
  action: string;
  sending: string;
  success: string;
}) {
  const { notify } = useAppState();
  const pathname = usePathname();
  const [busy, setBusy] = useState(false);

  async function ask() {
    setBusy(true);
    await requestAssistance({ page: pathname });
    setBusy(false);
    notify(success);
  }

  return (
    <Panel
      tone="highlight"
      title={title}
      action={
        <Button variant="outline" onClick={ask} disabled={busy}>
          {busy ? sending : action}
        </Button>
      }
    >
      <p className="text-base leading-relaxed">{body}</p>
    </Panel>
  );
}
