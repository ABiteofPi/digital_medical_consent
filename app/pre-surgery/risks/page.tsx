import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { IndividualRisksPanel } from "@/components/pre-surgery/risks/IndividualRisksPanel";
import { RiskCard } from "@/components/pre-surgery/risks/RiskCard";
import { preSurgerySteps } from "@/content/pre-surgery/flow";
import { risksContent as c } from "@/content/pre-surgery/risks";

export const metadata: Metadata = { title: "Risks · Pre-surgery form" };

export default function RisksPage() {
  const { label, levels, infoTitle, infoBody } = c.severity;
  return (
    <>
      <StepProgress steps={preSurgerySteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} lead={c.lead} />
        <PanelStack>
          {c.risks.map((risk) => (
            <RiskCard
              key={risk.title}
              {...risk}
              severityScale={{ label, levels, infoTitle, infoBody }}
            />
          ))}
        </PanelStack>
        <div className="mt-6">
          <IndividualRisksPanel {...c.individualRisks} />
        </div>
      </PageSection>
      <FlowNav backHref={c.back} next={{ href: c.next }} />
    </>
  );
}
