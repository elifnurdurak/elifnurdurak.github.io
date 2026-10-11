/**
 * Tests for the gallery grid.
 *
 * Purpose: verify the empty state, category filtering and that every image has alt text.
 */
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { GalleryItem } from "@/content/gallery";
import { GalleryGrid } from "@/features/gallery/gallery-grid";

const sampleItems: readonly GalleryItem[] = [
  {
    id: "talk-one",
    src: "/images/speaking/talk-one.jpg",
    category: "speaking",
    altText: "Sahnede konuşma yapan kişi",
    width: 1200,
    height: 800,
  },
  {
    id: "ceramic-one",
    src: "/images/art-ceramics/ceramic-one.jpg",
    category: "art-ceramics",
    altText: "Boyanmış seramik tabak",
    width: 1200,
    height: 800,
  },
];

describe("GalleryGrid", () => {
  it("shows a friendly message when there are no photos", () => {
    render(<GalleryGrid items={[]} />);
    expect(screen.getByText(/Fotoğraflar çok yakında/)).toBeInTheDocument();
  });

  it("renders every photo with its alt text", () => {
    render(<GalleryGrid items={sampleItems} />);
    expect(screen.getByAltText("Sahnede konuşma yapan kişi")).toBeInTheDocument();
    expect(screen.getByAltText("Boyanmış seramik tabak")).toBeInTheDocument();
  });

  it("filters photos by category", () => {
    render(<GalleryGrid items={sampleItems} />);
    // Two categories contain photos, so we expect "all" plus those two tabs.
    fireEvent.click(screen.getByRole("button", { name: "Konuşmalar" }));

    expect(screen.getByAltText("Sahnede konuşma yapan kişi")).toBeInTheDocument();
    expect(screen.queryByAltText("Boyanmış seramik tabak")).not.toBeInTheDocument();
  });

  it("marks the active filter with aria-pressed", () => {
    render(<GalleryGrid items={sampleItems} />);
    const speakingTab = screen.getByRole("button", { name: "Konuşmalar" });
    expect(speakingTab).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(speakingTab);
    expect(speakingTab).toHaveAttribute("aria-pressed", "true");
  });
});
