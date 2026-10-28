import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { StepProgress } from "@/components/common/StepProgress";
import { SubmissionSummary } from "@/components/pre-surgery/done/SubmissionSummary";
import { preSurgeryDoneContent as c } from "@/content/pre-surgery/done";
import { preSurgerySteps } from "@/content/pre-surgery/flow";

export const metadata: Metadata = { title: "All done · Pre-surgery form" };

export default function PreSurgeryDonePage() {
  return (
    <>
      <StepProgress steps={preSurgerySteps} allComplete />
      <PageSection className="pt-6">
        <PageTitle size="welcome" title={c.title} lead={c.subtitle} />
        <div className="mt-10">
          <SubmissionSummary sentSummary={c.sentSummary} paragraphs={c.paragraphs} />
        </div>
      </PageSection>
      <FlowNav backHref={c.back} next={{ href: c.finish.href, label: c.finish.label }} />
    </>
  );
}
