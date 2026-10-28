import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { IncorrectInfoPanel } from "@/components/consent/information-review/IncorrectInfoPanel";
import { OperationInfoPanel } from "@/components/consent/information-review/OperationInfoPanel";
import { PatientInfoPanel } from "@/components/consent/information-review/PatientInfoPanel";
import { consentSteps } from "@/content/consent/flow";
import { consentInformationReviewContent as c } from "@/content/consent/information-review";

export const metadata: Metadata = { title: "Information review · Consent form" };

export default function ConsentInformationReviewPage() {
  return (
    <>
      <StepProgress steps={consentSteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} lead={c.lead} />
        <PanelStack>
          <PatientInfoPanel {...c.patientPanel} />
          <OperationInfoPanel {...c.operationPanel} />
          <IncorrectInfoPanel {...c.incorrectPanel} />
        </PanelStack>
        <p className="mt-4 text-base">{c.footer}</p>
      </PageSection>
      <FlowNav backHref={c.back} next={{ href: c.next }} />
    </>
  );
}
