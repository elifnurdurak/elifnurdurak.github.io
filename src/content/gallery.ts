/**
 * Photo gallery data model.
 *
 * Purpose: typed catalogue of the owner's photos, grouped by category. To add a photo:
 *   1. Drop the optimized file into `public/images/<category-folder>/` (see docs/images.md).
 *   2. Add one entry to `galleryItems` below. `altText` is required for accessibility.
 */

export type GalleryCategory =
  "work" | "art-ceramics" | "speaking" | "psychology-community" | "portraits" | "other";

export interface GalleryItem {
  /** Unique, URL-safe identifier (kebab-case). */
  readonly id: string;
  /** Public path, for example "/images/speaking/devfest-2024.jpg". */
  readonly src: string;
  readonly category: GalleryCategory;
  /** Turkish description read by screen readers. Required. */
  readonly altText: string;
  /** Optional visible caption (Turkish). */
  readonly caption?: string;
  /** Optional date the photo was taken, "YYYY-MM" or "YYYY-MM-DD". */
  readonly takenAt?: string;
  /** Intrinsic pixel size; required so the layout does not jump while images load. */
  readonly width: number;
  readonly height: number;
}

/** Turkish labels for the category filter, in display order. */
export const galleryCategoryLabels: Readonly<Record<GalleryCategory, string>> = {
  work: "İş Hayatı",
  "art-ceramics": "Seramik & Sanat",
  speaking: "Konuşmalar",
  "psychology-community": "Psikoloji Topluluğu",
  portraits: "Portreler",
  other: "Diğer",
};

/** Photos shown on the site. Empty until the owner provides images. */
export const galleryItems: readonly GalleryItem[] = [];
