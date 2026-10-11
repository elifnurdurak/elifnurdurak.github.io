/**
 * SiteFooter.
 *
 * Purpose: closing strip with the "Back to the surface" link. It is a plain in-page anchor, so the
 * smooth upward scroll comes from CSS (`scroll-behavior`) and works without JavaScript.
 */
import { profile } from "@/content/profile";
import { sectionCopy } from "@/content/sections";

export function SiteFooter() {
  const copy = sectionCopy.footer;

  return (
    <footer className="bg-water-abyss text-sand px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.fullName}. {copy.rights}
        </p>
        <a
          href="#top"
          className="border-glow/50 text-glow hover:bg-glow hover:text-water-abyss focus-visible:outline-glow rounded-full border px-5 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span aria-hidden="true">↑ </span>
          {copy.backToSurface}
        </a>
      </div>
    </footer>
  );
}
