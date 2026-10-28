import { MedicalCrossIcon } from "@/components/common/icons";

export function MedicalTerm({ label, term }: { label: string; term: string }) {
  return (
    <p className="mt-4 flex items-center gap-2 text-base">
      <MedicalCrossIcon className="size-5 text-muted" />
      <span className="text-muted">{label}</span>
      <span className="ml-2 tracking-wide">{term}</span>
    </p>
  );
}
