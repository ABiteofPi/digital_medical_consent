import { ClearReviewReturn } from "@/components/common/ClearReviewReturn";
import { FlowCard } from "@/components/landing/FlowCard";
import { landingContent } from "@/content/landing";

export default function Home() {
  const c = landingContent;
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[834px] flex-col bg-white px-7.5 py-16">
      <ClearReviewReturn />
      <h1 className="mt-2 text-[2.5rem] leading-tight">{c.title}</h1>
      <p className="mt-3 text-[1.375rem]">{c.lead}</p>

      <h2 className="mt-8 text-[1.5rem]">The solution has 3 steps</h2>
      <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-[1.0625rem]">
        {c.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="mt-10 grid grid-cols-2 gap-4">
        {c.flows.map((flow) => (
          <FlowCard key={flow.href} {...flow} />
        ))}
      </div>

      <p className="mt-auto pt-12 text-sm text-muted">{c.footnote}</p>
    </div>
  );
}
