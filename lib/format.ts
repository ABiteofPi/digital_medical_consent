/** Replaces `{key}` placeholders in content strings, e.g. "Questions ({count})". */
export function fillTemplate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

const pad = (value: number) => String(value).padStart(2, "0");

/** 04.11.2023 */
export function formatDate(date: Date) {
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
}

/** 11:24 */
export function formatTime(date: Date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/** 04 November 2023 */
export function formatLongDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}
