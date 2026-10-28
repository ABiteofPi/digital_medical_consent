import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "nav" | "md" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:bg-black",
  secondary: "bg-sand text-ink hover:bg-sand-strong",
  outline: "border border-ink bg-white text-ink hover:bg-panel",
};

const sizes: Record<ButtonSize, string> = {
  nav: "min-h-[50px] gap-3 rounded-lg px-6 text-[1.375rem]",
  md: "min-h-11 gap-2 rounded-lg px-4 text-lg",
  sm: "min-h-10 gap-2 rounded-lg px-4 text-base",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return [
    "inline-flex items-center justify-center whitespace-nowrap transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    "disabled:cursor-not-allowed disabled:opacity-40",
    variants[variant],
    sizes[size],
  ].join(" ");
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: "left" | "right";
  children: ReactNode;
  className?: string;
};

function Content({ arrow, children }: Pick<CommonProps, "arrow" | "children">) {
  return (
    <>
      {arrow === "left" && <ArrowLeftIcon className="size-6 shrink-0" />}
      <span>{children}</span>
      {arrow === "right" && <ArrowRightIcon className="size-6 shrink-0" />}
    </>
  );
}

export function Button({
  variant,
  size,
  arrow,
  children,
  className = "",
  type = "button",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={`${buttonClasses(variant, size)} ${className}`} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </button>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  arrow,
  children,
  className = "",
  onClick,
}: CommonProps & { href: string; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={`${buttonClasses(variant, size)} ${className}`}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  );
}
