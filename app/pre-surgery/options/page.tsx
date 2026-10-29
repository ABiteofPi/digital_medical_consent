import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { PanelStack } from "@/components/common/Panel";
import { StepProgress } from "@/components/common/StepProgress";
import { DoctorRecommendationPanel } from "@/components/pre-surgery/options/DoctorRecommendationPanel";
import { OptionCard } from "@/components/pre-surgery/options/OptionCard";
import { preSurgerySteps } from "@/content/pre-surgery/flow";
import { optionsContent as c } from "@/content/pre-surgery/options";

export const metadata: Metadata = { title: "Options · Pre-surgery form" };

export default function OptionsPage() {
  return (
    <>
      <StepProgress steps={preSurgerySteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} lead={c.lead} />
        <PanelStack>
          {c.options.map((option, index) => (
            <OptionCard key={option.title} number={index + 1} {...option} />
          ))}
        </PanelStack>
        <div className="mt-6">
          <DoctorRecommendationPanel {...c.recommendation} />
        </div>
      </PageSection>
      <FlowNav backHref={c.back} next={{ href: c.next }} />
    </>
  );
}
