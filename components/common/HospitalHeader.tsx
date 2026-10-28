import { hospital } from "@/content/shared";

export function HospitalHeader() {
  return (
    <header className="flex items-end gap-4 border-b border-line px-7.5 py-7.5">
      {/* Replace with the hospital logo (e.g. next/image) once available. */}
      <div role="img" aria-label={hospital.logoAlt} className="size-14 shrink-0 bg-line" />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="text-[18px] leading-tight">{hospital.name}</p>
        <p className="text-[14px] leading-tight">{hospital.department}</p>
      </div>
      <p className="shrink-0 text-[14px] leading-tight">
        {hospital.caseNumberLabel} {hospital.caseNumber}
      </p>
    </header>
  );
}
