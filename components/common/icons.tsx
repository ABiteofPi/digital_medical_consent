import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7" />
    </svg>
  );
}

export function StopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.6 3.9 5.8 3.9 9.5s-1.3 6.9-3.9 9.5c-2.6-2.6-3.9-5.8-3.9-9.5S9.4 5.1 12 2.5z" />
    </svg>
  );
}

export function QuestionMarkIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.6} {...props}>
      <path d="M8.5 8a3.5 3.5 0 1 1 5.2 3.1c-1 .6-1.7 1.4-1.7 2.6v.8" />
      <circle cx="12" cy="19" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function MedicalCrossIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M9 3.5h6v5.5h5.5v6H15v5.5H9V15H3.5V9H9z" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5v.01" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <svg width={72} height={72} viewBox="0 0 72 72" aria-hidden {...props}>
      <rect width="72" height="72" rx="8" fill="currentColor" />
      <path d="M8 58l16-18 10 10 10-14 20 22z" fill="#d9d9d9" />
    </svg>
  );
}
