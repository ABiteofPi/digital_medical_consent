import { CloseIcon } from "./icons";

const base =
  "inline-flex min-h-11 items-center gap-3 rounded-md border border-ink px-5 text-base transition-colors";

/** Selectable pill used for priorities and suggested questions. */
export function ToggleChip({
  label,
  selected,
  onToggle,
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={`${base} ${selected ? "bg-chip text-white" : "bg-white text-ink hover:bg-panel"}`}
    >
      {label}
    </button>
  );
}

/** Filled pill with a remove button, used for drafted questions and concerns. */
export function RemovableChip({
  label,
  onRemove,
  removeLabel,
}: {
  label: string;
  onRemove: () => void;
  removeLabel: string;
}) {
  return (
    <span className={`${base} bg-chip pr-3 text-white`}>
      <span>{label}</span>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`${removeLabel}: ${label}`}
        className="rounded p-1 hover:bg-white/20"
      >
        <CloseIcon className="size-5" />
      </button>
    </span>
  );
}
