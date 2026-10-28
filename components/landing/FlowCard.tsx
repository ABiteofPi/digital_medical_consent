import Link from "next/link";
import { ArrowRightIcon } from "@/components/common/icons";

export function FlowCard({
  href,
  step,
  title,
  description,
  cta,
}: {
  href: string;
  step: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[10px] bg-panel p-6 transition-colors hover:bg-sand"
    >
      <span className="text-sm font-semibold tracking-wider text-muted uppercase">{step}</span>
      <h2 className="mt-1 text-[1.625rem] font-semibold">{title}</h2>
      <p className="mt-2 flex-1 text-base">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-ink px-5 py-3 text-lg text-white">
        {cta}
        <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
