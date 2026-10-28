import type { TextareaHTMLAttributes } from "react";

export function TextArea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={3}
      className={`w-full resize-none rounded-md border border-line bg-white px-5 py-3 text-base placeholder:text-muted/70 focus:border-ink focus:outline-none ${className}`}
      {...props}
    />
  );
}
