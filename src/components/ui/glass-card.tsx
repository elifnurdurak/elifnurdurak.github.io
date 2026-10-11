/**
 * GlassCard.
 *
 * Purpose: frosted-glass container (backdrop blur + light border) used for all card content.
 * `tone` picks the tint: "light" for bright upper zones, "dark" for the deep zones. The tints are
 * strong enough to keep text at WCAG AA contrast on top of any zone gradient.
 */
import type { ComponentPropsWithoutRef } from "react";

type GlassTone = "light" | "dark";

interface GlassCardProps extends ComponentPropsWithoutRef<"div"> {
  tone?: GlassTone;
  /** Adds the hover "float" effect. Use for cards that look interactive. */
  floatOnHover?: boolean;
}

const toneClasses: Record<GlassTone, string> = {
  light: "bg-white/45 text-water-deep border-white/60",
  dark: "bg-water-abyss/55 text-sand border-glow/25",
};

export function GlassCard({
  tone = "dark",
  floatOnHover = false,
  className = "",
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 backdrop-blur-md ${toneClasses[tone]} ${
        floatOnHover ? "float-hover" : ""
      } ${className}`}
      {...rest}
    />
  );
}
