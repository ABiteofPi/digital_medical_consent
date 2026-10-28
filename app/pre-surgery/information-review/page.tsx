import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { MyQuestionsButton } from "@/components/common/MyQuestionsButton";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { IncorrectInfoPanel } from "@/components/pre-surgery/information-review/IncorrectInfoPanel";
import { OperationInfoPanel } from "@/components/pre-surgery/information-review/OperationInfoPanel";
import { PatientInfoPanel } from "@/components/pre-surgery/information-review/PatientInfoPanel";
import { preSurgerySteps } from "@/content/pre-surgery/flow";
import { informationReviewContent as c } from "@/content/pre-surgery/information-review";

export const metadata: Metadata = { title: "Information review · Pre-surgery form" };

export default function InformationReviewPage() {
  return (
    <>
      <MyQuestionsButton />
      <StepProgress steps={preSurgerySteps} current={c.step} />
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
