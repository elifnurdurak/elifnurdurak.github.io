/**
 * SectionHeading.
 *
 * Purpose: consistent section title (serif, large) with an optional intro paragraph.
 * The text is large enough to meet the WCAG "large text" contrast threshold on every zone.
 */
import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  children: ReactNode;
  intro?: string;
}

export function SectionHeading({ id, children, intro }: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl">
      <h2 id={id} className="font-serif text-3xl font-semibold sm:text-5xl">
        {children}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed">{intro}</p> : null}
    </header>
  );
}
