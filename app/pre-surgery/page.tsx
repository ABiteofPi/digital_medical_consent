import { ButtonLink } from "@/components/common/Button";
import { PageSection, PageTitle, Paragraphs } from "@/components/common/PageSection";
import { CollectQuestionsPanel } from "@/components/pre-surgery/welcome/CollectQuestionsPanel";
import { OverviewPanel } from "@/components/pre-surgery/welcome/OverviewPanel";
import { welcomeContent as c } from "@/content/pre-surgery/welcome";

export default function PreSurgeryWelcomePage() {
  return (
    <>
      <PageSection className="pt-10">
        <PageTitle size="welcome" title={c.greeting} lead={c.subtitle} />
        <div className="mt-10 flex flex-col gap-4">
          <Paragraphs items={c.intro} className="gap-6" />
          <OverviewPanel {...c.overview} />
          <Paragraphs items={c.middle} className="gap-6" />
          <CollectQuestionsPanel {...c.collectQuestions} />
          <Paragraphs items={c.outro} className="gap-6" />
        </div>
      </PageSection>
      <div className="mt-auto flex justify-end px-7.5 pt-12">
        <ButtonLink href={c.start.href} size="nav" arrow="right">
          {c.start.label}
        </ButtonLink>
      </div>
    </>
  );
}
