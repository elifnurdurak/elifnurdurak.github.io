/**
 * Parallax.
 *
 * Purpose: wraps decorative content so it drifts at its own speed while scrolling. The motion is a
 * native CSS scroll-driven animation (`.parallax` in globals.css); browsers without support, phones
 * and reduced-motion visitors simply see the layer standing still.
 *
 * `from` / `to` are vertical offsets in pixels at the moment the layer enters and leaves the screen.
 * A larger distance means it moves faster (feels closer); the sign sets the direction.
 */
import type { ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  from?: number;
  to?: number;
  className?: string;
}

export function Parallax({ children, from = 60, to = -60, className = "" }: ParallaxProps) {
  return (
    <div
      aria-hidden="true"
      className={`parallax parallax-decoration pointer-events-none ${className}`}
      style={
        {
          "--parallax-from": `${from}px`,
          "--parallax-to": `${to}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
