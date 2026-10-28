import { ButtonLink } from "@/components/common/Button";
import { ClearReviewReturn } from "@/components/common/ClearReviewReturn";
import { PageSection, PageTitle, Paragraphs } from "@/components/common/PageSection";
import { consentWelcomeContent as c } from "@/content/consent/welcome";

export default function ConsentWelcomePage() {
  return (
    <>
      <ClearReviewReturn />
      <PageSection className="pt-8">
        <PageTitle size="welcome" title={c.greeting} lead={c.subtitle} />
        <Paragraphs items={c.paragraphs} className="mt-10 gap-4 text-[1.0625rem]" />
        <p className="mt-12 text-[1.375rem]">{c.callout}</p>
      </PageSection>
      <div className="mt-auto flex justify-end px-7.5 pt-12">
        <ButtonLink href={c.start.href} size="nav" arrow="right">
          {c.start.label}
        </ButtonLink>
      </div>
    </>
  );
}
