import type { ReactNode } from "react";
import { AccessibilityToolbar } from "./AccessibilityToolbar";
import { HospitalHeader } from "./HospitalHeader";

/** Frame shared by every form page: an iPad Pro 11″ wide column with header and toolbar. */
export function FlowShell({ children, banner }: { children: ReactNode; banner?: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[834px] flex-col bg-white shadow-[0_0_24px_rgb(0_0_0/0.06)]">
      <HospitalHeader />
      <AccessibilityToolbar />
      {banner}
      <main id="content" className="flex flex-1 flex-col pb-10">
        {children}
      </main>
    </div>
  );
}
