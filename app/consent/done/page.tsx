import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, Paragraphs } from "@/components/common/PageSection";
import { StepProgress } from "@/components/common/StepProgress";
import { SubmissionRecordPanel } from "@/components/consent/done/SubmissionRecordPanel";
import { SubmittedOn } from "@/components/consent/done/SubmittedOn";
import { consentDoneContent as c } from "@/content/consent/done";
import { consentSteps } from "@/content/consent/flow";

export const metadata: Metadata = { title: "Done · Consent form" };

export default function ConsentDonePage() {
  return (
    <>
      <StepProgress steps={consentSteps} allComplete />
      <PageSection className="pt-4">
        <h1 className="text-[2.5rem] leading-tight">{c.title}</h1>
        <SubmittedOn template={c.subtitle} fallback={c.notSubmitted} />
        <div className="mt-8">
          <SubmissionRecordPanel {...c.record} />
        </div>
        <Paragraphs items={c.paragraphs} className="mt-8 text-[1.0625rem]" />
      </PageSection>
      <FlowNav next={{ href: c.finish.href, label: c.finish.label }} />
    </>
  );
}
