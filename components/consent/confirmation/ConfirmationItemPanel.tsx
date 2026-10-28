"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/common/Button";
import { Panel } from "@/components/common/Panel";
import { useAppState } from "@/lib/app-state";

/** One understanding statement with a checkbox and a link back to the related pre-surgery page. */
export function ConfirmationItemPanel({
  id,
  title,
  statement,
  review,
}: {
  id: string;
  title: string;
  statement: string;
  review: { label: string; href: string };
}) {
  const { state, update } = useAppState();
  const pathname = usePathname();
  const checked = Boolean(state.consentChecks[id]);
  const inputId = `confirm-${id}`;

  return (
    <Panel
      title={title}
      action={
        <ButtonLink
          href={review.href}
          variant="outline"
          onClick={() => update({ reviewReturnPath: pathname })}
        >
          {review.label}
        </ButtonLink>
      }
    >
      <div className="flex items-start gap-3">
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={(event) =>
            update((s) => ({ consentChecks: { ...s.consentChecks, [id]: event.target.checked } }))
          }
          className="mt-0.5 size-6 shrink-0 accent-ink"
        />
        <label htmlFor={inputId} className="text-[1.0625rem] leading-snug">
          {statement}
        </label>
      </div>
    </Panel>
  );
}
