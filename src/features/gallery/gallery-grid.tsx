"use client";

/**
 * GalleryGrid.
 *
 * Purpose: the full photo gallery. Category tabs filter the grid; clicking a photo opens it in an
 * accessible lightbox built on the native <dialog> element (focus is trapped, Esc closes it, and
 * screen readers announce it as a modal).
 */
import { useRef, useState } from "react";
import { galleryCategoryLabels, type GalleryCategory, type GalleryItem } from "@/content/gallery";
import { sectionCopy } from "@/content/sections";

type CategoryFilter = GalleryCategory | "all";

interface GalleryGridProps {
  items: readonly GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const copy = sectionCopy.memories;
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Only offer tabs for categories that actually contain photos.
  const availableCategories = (Object.keys(galleryCategoryLabels) as GalleryCategory[]).filter(
    (category) => items.some((item) => item.category === category),
  );
  const visibleItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  function openLightbox(item: GalleryItem) {
    setSelected(item);
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Why the guard: some environments (for example jsdom in tests) lack showModal().
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    dialogRef.current?.close();
    setSelected(null);
  }

  if (items.length === 0) {
    return <p className="text-lg">{copy.emptyState}</p>;
  }

  return (
    <div>
      <div role="group" aria-label={copy.filterLabel} className="mb-8 flex flex-wrap gap-2">
        {(["all", ...availableCategories] as CategoryFilter[]).map((category) => {
          const isActive = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(category)}
              className={`focus-visible:outline-glow rounded-full border px-4 py-1.5 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isActive
                  ? "border-glow bg-glow text-water-abyss"
                  : "border-glow/40 bg-water-abyss/60 text-sand hover:border-glow"
              }`}
            >
              {category === "all" ? copy.allCategories : galleryCategoryLabels[category]}
            </button>
          );
        })}
      </div>

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visibleItems.map((item) => (
          <li key={item.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => openLightbox(item)}
              className="float-hover focus-visible:outline-glow block w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {/* Plain <img>: static export has no image optimizer. Width/height prevent layout shift. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.altText}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        aria-label={selected?.altText}
        className="bg-water-abyss text-sand m-auto max-h-[90svh] max-w-[min(95vw,64rem)] rounded-2xl p-3 backdrop:bg-black/80"
      >
        {selected ? (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selected.src}
              alt={selected.altText}
              className="max-h-[75svh] w-auto rounded-xl"
            />
            {selected.caption ? (
              <figcaption className="mt-3 px-1 text-sm">{selected.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}
        <button
          type="button"
          onClick={closeLightbox}
          className="border-glow/50 focus-visible:outline-glow mt-3 rounded-full border px-4 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {copy.closeLightbox}
        </button>
      </dialog>
    </div>
  );
}
