/**
 * Next.js configuration.
 *
 * Purpose: produce a fully static site (HTML/CSS/JS in `out/`) that can be hosted
 * on GitHub Pages. No server runtime is required or used.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes the site to `out/`.
  output: "export",

  // Why: the default image loader needs a Node server, which static hosting lacks.
  // Images are pre-optimized by `scripts/optimize-images.mjs` before they are committed.
  images: { unoptimized: true },

  // Why: GitHub Pages serves `/about/index.html` reliably, while `/about.html` is fragile.
  trailingSlash: true,

  // Tailwind CSS v4 is compiled through its Turbopack loader (kept from the scaffold).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
