import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { AssistancePanel } from "@/components/consent/confirmation/AssistancePanel";
import { ConfirmationItemPanel } from "@/components/consent/confirmation/ConfirmationItemPanel";
import { ConfirmationNext } from "@/components/consent/confirmation/ConfirmationNext";
import { confirmationContent as c } from "@/content/consent/confirmation";
import { consentSteps } from "@/content/consent/flow";

export const metadata: Metadata = { title: "Confirmation · Consent form" };

export default function ConfirmationPage() {
  return (
    <>
      <StepProgress steps={consentSteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} lead={c.paragraphs} />
        <PanelStack>
          {c.items.map((item) => (
            <ConfirmationItemPanel key={item.id} {...item} />
          ))}
        </PanelStack>
        <div className="mt-6">
          <AssistancePanel {...c.assistance} />
        </div>
      </PageSection>
      <FlowNav backHref={c.back}>
        <ConfirmationNext
          itemIds={c.items.map((item) => item.id)}
          href={c.next}
          incompleteHint={c.incompleteHint}
        />
      </FlowNav>
    </>
  );
}
