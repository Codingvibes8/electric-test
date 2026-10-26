export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
