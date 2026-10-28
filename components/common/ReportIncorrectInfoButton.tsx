"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ui } from "@/content/shared";
import { useAppState } from "@/lib/app-state";
import { reportIncorrectInfo } from "@/lib/mock-api";
import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { TextArea } from "./TextArea";

const t = ui.reportIncorrectInfo;

/** "Report incorrect info" button with a mocked report dialog. */
export function ReportIncorrectInfoButton() {
  const { notify } = useAppState();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function send() {
    setSending(true);
    await reportIncorrectInfo({ message, page: pathname });
    setSending(false);
    setMessage("");
    setOpen(false);
    notify(t.success);
  }

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        {t.buttonLabel}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={t.dialogTitle}
        closeLabel={t.cancel}
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              {t.cancel}
            </Button>
            <Button onClick={send} disabled={!message.trim() || sending}>
              {sending ? t.submitting : t.submit}
            </Button>
          </>
        }
      >
        <p className="mb-4 text-base">{t.dialogIntro}</p>
        <TextArea
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={t.placeholder}
          aria-label={t.dialogTitle}
        />
      </Dialog>
    </>
  );
}
