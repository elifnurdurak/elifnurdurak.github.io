/**
 * Tests for Turkish date formatting.
 */
import { describe, expect, it } from "vitest";
import { formatDateRange, formatMonthYear } from "@/lib/format-date";

describe("formatMonthYear", () => {
  it("formats months with Turkish abbreviations", () => {
    expect(formatMonthYear("2023-01")).toBe("Oca 2023");
    expect(formatMonthYear("2022-08")).toBe("Ağu 2022");
    expect(formatMonthYear("2021-12")).toBe("Ara 2021");
  });

  it("rejects malformed values", () => {
    expect(() => formatMonthYear("2023")).toThrow();
    expect(() => formatMonthYear("2023-13")).toThrow();
  });
});

describe("formatDateRange", () => {
  it("joins start and end", () => {
    expect(formatDateRange("2022-09", "2023-01", "Devam ediyor")).toBe("Eyl 2022 – Oca 2023");
  });

  it("uses the ongoing label when there is no end date", () => {
    expect(formatDateRange("2023-01", null, "Devam ediyor")).toBe("Oca 2023 – Devam ediyor");
  });
});
