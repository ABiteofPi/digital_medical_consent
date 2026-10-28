import { Panel } from "@/components/common/Panel";
import { RichText } from "@/components/common/RichText";

type Party = { lines: string[]; alias: string };

type LegalContent = {
  title: string;
  opening: string;
  party: Party;
  connector: string;
  subject: Party;
  confirmations: string[];
  consents: string[];
};

function PartyBlock({ party }: { party: Party }) {
  return (
    <p className="leading-relaxed">
      {party.lines.map((line) => (
        <span key={line} className="block">
          <RichText text={line} />
        </span>
      ))}
      <span className="block">
        <RichText text={party.alias} />
      </span>
    </p>
  );
}

function Clauses({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-3 pl-7 leading-relaxed">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

export function LegalConsentPanel({ content }: { content: LegalContent }) {
  return (
    <Panel title={<span className="text-[1.625rem]">{content.title}</span>}>
      <div className="flex flex-col gap-4 text-base">
        <p className="mb-3">{content.opening}</p>
        <PartyBlock party={content.party} />
        <p>{content.connector}</p>
        <PartyBlock party={content.subject} />
        <div className="mt-4 flex flex-col gap-6">
          <Clauses items={content.confirmations} />
          <Clauses items={content.consents} />
        </div>
      </div>
    </Panel>
  );
}
