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

/**
 * Photos shown on the site, in display order (the home page teaser shows the first six).
 * Files were prepared with `scripts/optimize-images.mjs`; width/height are the final pixel size.
 */
export const galleryItems: readonly GalleryItem[] = [
  {
    id: "office-event-cupcake",
    src: "/images/work/office-event-cupcake.jpg",
    category: "work",
    altText: "Ofis etkinliğinde bir elinde fotoğraf kartı, diğerinde kek tutan gülümseyen kişi",
    width: 1500,
    height: 2000,
  },
  {
    id: "elevator-laptop-lanyard",
    src: "/images/work/elevator-laptop-lanyard.jpg",
    category: "work",
    altText: "Asansör aynasında, elinde dizüstü bilgisayar ve yaka kartıyla çekilmiş fotoğraf",
    width: 1500,
    height: 2000,
  },
  {
    id: "painted-vase",
    src: "/images/art-ceramics/painted-vase.jpg",
    category: "art-ceramics",
    altText: "Elinde fırçayla, mavi meyve dallarıyla boyadığı pembe vazonun yanında poz veren kişi",
    width: 1500,
    height: 2000,
  },
  {
    id: "windy-bridge-run",
    src: "/images/other/windy-bridge-run.jpg",
    category: "other",
    altText: "Köprü üzerinde rüzgârda savrulan saçlarıyla gülümseyen, güneş gözlüklü kişi",
    width: 1700,
    height: 1500,
  },
  {
    id: "charity-run-hotel-mirror",
    src: "/images/other/charity-run-hotel-mirror.jpg",
    category: "other",
    altText: "Mor koşu tişörtüyle otel koridorundaki aynada çekilmiş boy fotoğrafı",
    width: 923,
    height: 1540,
  },
  {
    id: "iridescent-portrait",
    src: "/images/portraits/iridescent-portrait.jpg",
    category: "portraits",
    altText: "Siyah arka planda, ışıltılı ve yansımalı stilize bir portre",
    width: 923,
    height: 1384,
  },
];
