import type { Metadata } from "next";
import { FlowShell } from "@/components/common/FlowShell";
import { MyQuestionsButton } from "@/components/common/MyQuestionsButton";
import { ReviewReturnBanner } from "@/components/common/ReviewReturnBanner";
import { myQuestionsHiddenOn } from "@/content/pre-surgery/flow";

export const metadata: Metadata = { title: "Pre-surgery form" };

export default function PreSurgeryLayout({ children }: LayoutProps<"/pre-surgery">) {
  return (
    <FlowShell
      banner={<ReviewReturnBanner />}
      actions={<MyQuestionsButton hiddenOn={myQuestionsHiddenOn} />}
    >
      {children}
    </FlowShell>
  );
}
