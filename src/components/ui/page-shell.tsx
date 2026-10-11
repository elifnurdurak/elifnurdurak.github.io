/**
 * PageShell.
 *
 * Purpose: shared frame for the secondary pages (blog, case studies, gallery). Dark deep-water
 * background, a link back to the home page and a main landmark for assistive technology.
 */
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/features/footer/site-footer";
import { sectionCopy } from "@/content/sections";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="focus:bg-coral focus:text-water-abyss sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:px-4 focus:py-2"
      >
        {sectionCopy.common.skipToContent}
      </a>
      <div id="top" className="bg-water-deep text-sand">
        <header className="mx-auto max-w-4xl px-6 pt-8">
          <Link
            href="/"
            className="text-glow focus-visible:outline-glow underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span aria-hidden="true">← </span>
            {sectionCopy.common.backToHome}
          </Link>
        </header>
        <main id="main" className="mx-auto min-h-[70svh] max-w-4xl px-6 py-16">
          {children}
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
