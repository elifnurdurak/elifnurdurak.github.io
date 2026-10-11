"use client";

/**
 * Reveal.
 *
 * Purpose: fade-and-rise entrance for content as it scrolls into view. The animation itself is
 * pure CSS (`.reveal` in globals.css); this component only toggles a data attribute.
 *
 * Why it starts visible: the server renders content visible, so it also works without
 * JavaScript. After hydration we hide ONLY elements that start below the viewport and reveal them
 * when they scroll in, so nothing already on screen ever flashes.
 */
import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Optional delay in milliseconds, for staggering siblings. */
  delayMs?: number;
}

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const startsBelowFold = element.getBoundingClientRect().top > window.innerHeight;
    if (!startsBelowFold) return;

    element.dataset.state = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.state = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
