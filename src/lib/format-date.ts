/**
 * Date formatting.
 *
 * Purpose: turn "YYYY-MM" strings from the content files into short Turkish month labels
 * (for example "2023-01" -> "Oca 2023") without depending on the runtime's locale data,
 * so server-rendered and browser output are always identical.
 */

const TURKISH_SHORT_MONTHS = [
  "Oca",
  "Şub",
  "Mar",
  "Nis",
  "May",
  "Haz",
  "Tem",
  "Ağu",
  "Eyl",
  "Eki",
  "Kas",
  "Ara",
] as const;

/** Formats "YYYY-MM" as "Mon YYYY". Throws on malformed input so content typos surface early. */
export function formatMonthYear(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) {
    throw new Error(`formatMonthYear: expected "YYYY-MM", received "${value}"`);
  }
  const month = Number(match[2]);
  if (month < 1 || month > 12) {
    throw new Error(`formatMonthYear: month out of range in "${value}"`);
  }
  return `${TURKISH_SHORT_MONTHS[month - 1]} ${match[1]}`;
}

/** Formats a date range. A `null` end date means the role is ongoing. */
export function formatDateRange(start: string, end: string | null, ongoingLabel: string): string {
  return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : ongoingLabel}`;
}
