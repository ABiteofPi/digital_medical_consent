import type { ReactNode } from "react";
import { ui } from "@/content/shared";
import { ButtonLink } from "./Button";

/**
 * Bottom navigation bar: optional Back link on the left and the primary action
 * on the right. Pass `next` for a simple link, or `children` for custom actions
 * such as mocked submit buttons.
 */
export function FlowNav({
  backHref,
  next,
  children,
}: {
  backHref?: string;
  next?: { href: string; label?: string };
  children?: ReactNode;
}) {
  return (
    <div className="mt-auto flex items-start justify-between gap-4 px-7.5 pt-12">
      <div>
        {backHref && (
          <ButtonLink href={backHref} variant="secondary" size="nav" arrow="left">
            {ui.back}
          </ButtonLink>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        {next && (
          <ButtonLink href={next.href} size="nav" arrow="right">
            {next.label ?? ui.next}
          </ButtonLink>
        )}
        {children}
      </div>
    </div>
  );
}
