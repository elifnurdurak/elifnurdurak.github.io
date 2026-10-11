/**
 * GalleryTeaser.
 *
 * Purpose: the "Memories" strip on the home page (twilight zone). Shows up to six photos and a link
 * to the full gallery. When no photos have been added yet it shows a friendly placeholder message.
 */
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { galleryItems } from "@/content/gallery";
import { sectionCopy } from "@/content/sections";

const TEASER_COUNT = 6;

export function GalleryTeaser() {
  const copy = sectionCopy.memories;
  const preview = galleryItems.slice(0, TEASER_COUNT);

  return (
    <div className="mt-24">
      <h3 className="font-serif text-3xl font-semibold">{copy.heading}</h3>
      <p className="mt-2 mb-8 text-lg">{copy.intro}</p>

      {preview.length === 0 ? (
        <p className="border-glow/25 bg-water-abyss/55 rounded-2xl border p-6 backdrop-blur-md">
          {copy.emptyState}
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {preview.map((item, index) => (
            <li key={item.id}>
              <Reveal delayMs={index * 80}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.altText}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  // `object-[50%_25%]`: the preview is cropped to a landscape box, so anchor the crop
                  // near the top where faces usually are instead of the exact centre.
                  className="float-hover aspect-[4/3] w-full rounded-2xl object-cover object-[50%_25%]"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/gallery/"
        className="hover:text-glow focus-visible:outline-glow mt-8 inline-block underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {copy.seeAll}
      </Link>
    </div>
  );
}
