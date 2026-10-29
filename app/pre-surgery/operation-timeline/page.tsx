import type { Metadata } from "next";
import { FlowNav } from "@/components/common/FlowNav";
import { PageSection, PageTitle } from "@/components/common/PageSection";
import { StepProgress } from "@/components/common/StepProgress";
import { IndividualPlanPanel } from "@/components/pre-surgery/operation-timeline/IndividualPlanPanel";
import { Timeline } from "@/components/pre-surgery/operation-timeline/Timeline";
import { preSurgerySteps } from "@/content/pre-surgery/flow";
import { operationTimelineContent as c } from "@/content/pre-surgery/operation-timeline";

export const metadata: Metadata = { title: "Operation timeline · Pre-surgery form" };

export default function OperationTimelinePage() {
  return (
    <>
      <StepProgress steps={preSurgerySteps} current={c.step} />
      <PageSection>
        <PageTitle title={c.title} />
        <IndividualPlanPanel {...c.individualPlan} />
        <Timeline entries={c.timeline} />
      </PageSection>
      <FlowNav backHref={c.back} next={{ href: c.next }} />
    </>
  );
}
