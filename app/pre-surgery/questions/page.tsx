import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { MyQuestionsButton } from "@/components/common/MyQuestionsButton";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { DraftsPanel } from "@/components/pre-surgery/questions/DraftsPanel";
import { FrequentQuestionsPanel } from "@/components/pre-surgery/questions/FrequentQuestionsPanel";
import { OwnQuestionPanel } from "@/components/pre-surgery/questions/OwnQuestionPanel";
import { PrioritiesPanel } from "@/components/pre-surgery/questions/PrioritiesPanel";
import { SubmitQuestionsButton } from "@/components/pre-surgery/questions/SubmitQuestionsButton";
import { preSurgerySteps } from "@/content/pre-surgery/flow";
import { questionsContent as c } from "@/content/pre-surgery/questions";

export const metadata: Metadata = { title: "Your questions · Pre-surgery form" };

export default function QuestionsPage() {
  return (
    <>
      <MyQuestionsButton />
      <StepProgress steps={preSurgerySteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} lead={c.lead} />
        <PanelStack>
          <PrioritiesPanel {...c.priorities} />
          <FrequentQuestionsPanel {...c.frequentQuestions} />
          <OwnQuestionPanel {...c.ownQuestion} />
        </PanelStack>
        <div className="mt-6">
          <DraftsPanel content={c.drafts} />
        </div>
      </PageSection>
      <FlowNav backHref={c.back}>
        <SubmitQuestionsButton label={c.submit} doneHref={c.next} />
      </FlowNav>
    </>
  );
}
