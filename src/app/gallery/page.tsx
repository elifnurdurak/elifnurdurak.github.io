/**
 * Gallery page (`/gallery/`).
 *
 * Purpose: all photos with category filters and a lightbox.
 */
import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { galleryItems } from "@/content/gallery";
import { sectionCopy } from "@/content/sections";
import { GalleryGrid } from "@/features/gallery/gallery-grid";

export const metadata: Metadata = { title: sectionCopy.memories.heading };

export default function GalleryPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
        {sectionCopy.memories.heading}
      </h1>
      <p className="mt-3 mb-10 text-lg">{sectionCopy.memories.intro}</p>
      <GalleryGrid items={galleryItems} />
    </PageShell>
  );
}
