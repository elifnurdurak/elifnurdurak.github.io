/**
 * Button.
 *
 * Purpose: link styled as a button. `primary` is the coral call to action, `ghost` is an outline
 * variant. External links automatically get `rel="noopener noreferrer"` so the opened page cannot
 * access this one.
 */
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Adds the bioluminescent pulse. Reserve it for the single most important action. */
  glow?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-coral text-water-abyss hover:bg-coral/90",
  ghost: "border border-current bg-transparent hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", glow = false }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-glow ${
    variantClasses[variant]
  } ${glow ? "glow-pulse" : ""}`;

  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
