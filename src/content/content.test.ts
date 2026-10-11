/**
 * Content integrity tests.
 *
 * Purpose: catch content mistakes (duplicate or invalid slugs, malformed dates, missing alt text)
 * before they reach a build or a visitor. Static export needs unique, URL-safe slugs.
 */
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/case-studies";
import { galleryItems } from "@/content/gallery";
import { blogPosts } from "@/content/posts";
import { experience, volunteering } from "@/content/profile";
import { formatMonthYear } from "@/lib/format-date";

const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe("slugs", () => {
  it("are unique, lowercase English kebab-case", () => {
    for (const slugs of [caseStudies.map((s) => s.slug), blogPosts.map((p) => p.slug)]) {
      expect(new Set(slugs).size).toBe(slugs.length);
      slugs.forEach((slug) => expect(slug).toMatch(KEBAB_CASE));
    }
  });
});

describe("profile dates", () => {
  it("are valid YYYY-MM values", () => {
    const dates = [...experience, ...volunteering].flatMap((entry) =>
      [entry.startDate, entry.endDate].filter((value): value is string => value !== null),
    );
    dates.forEach((date) => expect(() => formatMonthYear(date)).not.toThrow());
  });

  it("never end before they start", () => {
    for (const entry of [...experience, ...volunteering]) {
      if (entry.endDate) expect(entry.endDate >= entry.startDate).toBe(true);
    }
  });
});

describe("gallery items", () => {
  it("have unique ids, alt text and dimensions", () => {
    expect(new Set(galleryItems.map((item) => item.id)).size).toBe(galleryItems.length);
    for (const item of galleryItems) {
      expect(item.altText.trim().length).toBeGreaterThan(0);
      expect(item.width).toBeGreaterThan(0);
      expect(item.height).toBeGreaterThan(0);
      expect(item.src).toMatch(/^\/images\/[a-z-]+\/[a-z0-9-]+\.(jpg|jpeg|webp|png)$/);
    }
  });
});
