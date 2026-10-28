import type { ReactNode } from "react";

/** Horizontal page gutter used by all content below the toolbar. */
export function PageSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-7.5 ${className}`}>{children}</div>;
}

/** A run of body paragraphs from content. */
export function Paragraphs({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 text-base ${className}`}>
      {items.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

/** Page heading with an optional lead paragraph (string or list of paragraphs). */
export function PageTitle({
  title,
  lead,
  size = "section",
}: {
  title: string;
  lead?: string | string[];
  /** "welcome" is the larger greeting style used on start and summary pages. */
  size?: "section" | "welcome";
}) {
  const leads = lead === undefined ? [] : Array.isArray(lead) ? lead : [lead];
  return (
    <div className="mb-6">
      <h1
        className={
          size === "welcome"
            ? "text-[2.5rem] leading-tight"
            : "pl-2 text-[2.125rem] leading-tight"
        }
      >
        {title}
      </h1>
      {leads.map((paragraph) => (
        <p
          key={paragraph}
          className={size === "welcome" ? "mt-3 text-[1.375rem]" : "mt-3 text-[1.1875rem]"}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
