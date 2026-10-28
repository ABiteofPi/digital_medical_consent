import type { Metadata } from "next";
import { FlowShell } from "@/components/common/FlowShell";
import { ReviewReturnBanner } from "@/components/common/ReviewReturnBanner";

export const metadata: Metadata = { title: "Pre-surgery form" };

export default function PreSurgeryLayout({ children }: LayoutProps<"/pre-surgery">) {
  return <FlowShell banner={<ReviewReturnBanner />}>{children}</FlowShell>;
}
