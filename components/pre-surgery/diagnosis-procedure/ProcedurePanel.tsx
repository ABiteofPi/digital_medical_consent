import Image from "next/image";
import { ImageIcon } from "@/components/common/icons";
import { Panel } from "@/components/common/Panel";
import { MedicalTerm } from "./MedicalTerm";

type Media = { src: string | null; alt: string; placeholder: string[] };

export function ProcedurePanel({
  title,
  body,
  medicalTerm,
  medicalTermLabel,
  media,
}: {
  title: string;
  body: string;
  medicalTerm: string;
  medicalTermLabel: string;
  media: Media;
}) {
  return (
    <Panel title={title}>
      <p className="text-[1.0625rem] leading-relaxed">{body}</p>
      <MedicalTerm label={medicalTermLabel} term={medicalTerm} />
      <div className="relative mt-6 flex min-h-[224px] flex-col items-center justify-center gap-6 overflow-hidden rounded-sm bg-line px-6 py-8 text-center">
        {media.src ? (
          <Image src={media.src} alt={media.alt} fill className="object-cover" sizes="734px" />
        ) : (
          <>
            <ImageIcon className="text-[#a0a0a0]" />
            <p className="text-base text-muted">
              {media.placeholder.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </>
        )}
      </div>
    </Panel>
  );
}
