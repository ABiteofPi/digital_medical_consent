import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { LegalConsentPanel } from "@/components/consent/sign/LegalConsentPanel";
import { SignaturePanel } from "@/components/consent/sign/SignaturePanel";
import { SimpleTermsPanel } from "@/components/consent/sign/SimpleTermsPanel";
import { SubmitConsentButton } from "@/components/consent/sign/SubmitConsentButton";
import { consentSteps } from "@/content/consent/flow";
import { signContent as c } from "@/content/consent/sign";

export const metadata: Metadata = { title: "Consent · Consent form" };

export default function SignPage() {
  return (
    <>
      <StepProgress steps={consentSteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} lead={c.lead} />
        <SimpleTermsPanel {...c.simpleTerms} />
        <PanelStack className="mt-6">
          <LegalConsentPanel content={c.legal} />
          <SignaturePanel {...c.signature} />
        </PanelStack>
      </PageSection>
      <FlowNav backHref={c.back}>
        <SubmitConsentButton
          label={c.submit}
          missingSignature={c.missingSignature}
          location={c.signature.location}
          doneHref={c.next}
        />
      </FlowNav>
    </>
  );
}
