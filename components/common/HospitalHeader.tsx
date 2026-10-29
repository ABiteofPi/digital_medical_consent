import Image from "next/image";
import { hospital } from "@/content/shared";

export function HospitalHeader() {
  return (
    <header className="flex items-end gap-4 border-b border-line px-7.5 py-7.5">
      <Image
        src={hospital.logoSrc}
        alt={hospital.logoAlt}
        width={56}
        height={56}
        preload
        className="size-14 shrink-0"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="text-[18px] font-semibold leading-tight">{hospital.name}</p>
        <p className="text-[14px] leading-tight">{hospital.department}</p>
      </div>
      <p className="shrink-0 text-[14px] leading-tight">
        {hospital.caseNumberLabel} {hospital.caseNumber}
      </p>
    </header>
  );
}
