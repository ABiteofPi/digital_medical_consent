import type { Metadata } from "next";
import { FlowShell } from "@/components/common/FlowShell";

export const metadata: Metadata = { title: "Consent form" };

export default function ConsentLayout({ children }: LayoutProps<"/consent">) {
  return <FlowShell>{children}</FlowShell>;
}
