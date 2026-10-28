import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { MyQuestionsButton } from "@/components/common/MyQuestionsButton";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { DiagnosisPanel } from "@/components/pre-surgery/diagnosis-procedure/DiagnosisPanel";
import { ProcedurePanel } from "@/components/pre-surgery/diagnosis-procedure/ProcedurePanel";
import { WhyNowPanel } from "@/components/pre-surgery/diagnosis-procedure/WhyNowPanel";
import { diagnosisProcedureContent as c } from "@/content/pre-surgery/diagnosis-procedure";
import { preSurgerySteps } from "@/content/pre-surgery/flow";

export const metadata: Metadata = { title: "Diagnosis & procedure · Pre-surgery form" };

export default function DiagnosisProcedurePage() {
  return (
    <>
      <MyQuestionsButton />
      <StepProgress steps={preSurgerySteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} />
        <PanelStack>
          <DiagnosisPanel {...c.diagnosis} medicalTermLabel={c.medicalTermLabel} />
          <ProcedurePanel {...c.procedure} medicalTermLabel={c.medicalTermLabel} />
          <WhyNowPanel {...c.whyNow} />
        </PanelStack>
      </PageSection>
      <FlowNav backHref={c.back} next={{ href: c.next }} />
    </>
  );
}
