export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToId(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const statusLabel: Record<string, string> = {
  live: "Live",
  production: "In production",
  "in-progress": "In progress",
};