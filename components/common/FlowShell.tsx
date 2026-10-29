import type { ReactNode } from "react";
import { AccessibilityToolbar } from "./AccessibilityToolbar";
import { HospitalHeader } from "./HospitalHeader";
import { StickyChrome } from "./StickyChrome";

/**
 * Frame shared by every form page: an iPad Pro 11″ wide column whose header,
 * toolbar, banner and action bar stay pinned while the page content scrolls.
 */
export function FlowShell({
  children,
  banner,
  actions,
}: {
  children: ReactNode;
  banner?: ReactNode;
  /** Bar under the toolbar, e.g. the "My Questions" button. */
  actions?: ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[834px] flex-col bg-white shadow-[0_0_24px_rgb(0_0_0/0.06)]">
      <StickyChrome>
        <HospitalHeader />
        <AccessibilityToolbar />
        {banner}
        {actions}
      </StickyChrome>
      <main id="content" className="flex flex-1 flex-col pb-10">
        {children}
      </main>
    </div>
  );
}
