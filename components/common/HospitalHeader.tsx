import Image from "next/image";
import { hospital } from "@/content/shared";

// The `group-data-[scrolled=true]/chrome:` classes switch to a compact header
// once <StickyChrome> marks the page as scrolled.
export function HospitalHeader() {
  return (
    <header className="flex items-end gap-4 border-b border-line px-7.5 py-7.5 transition-[padding] duration-200 group-data-[scrolled=true]/chrome:py-2.5">
      <Image
        src={hospital.logoSrc}
        alt={hospital.logoAlt}
        width={56}
        height={56}
        preload
        className="size-14 shrink-0 transition-[width,height] duration-200 group-data-[scrolled=true]/chrome:size-9"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="text-[18px] leading-tight font-semibold transition-[font-size] duration-200 group-data-[scrolled=true]/chrome:text-[16px]">
          {hospital.name}
        </p>
        <p className="text-[14px] leading-tight group-data-[scrolled=true]/chrome:hidden">
          {hospital.department}
        </p>
      </div>
      <p className="shrink-0 text-[14px] leading-tight">
        {hospital.caseNumberLabel} {hospital.caseNumber}
      </p>
    </header>
  );
}
