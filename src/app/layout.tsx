/**
 * Root layout.
 *
 * Purpose: wraps every page with the <html>/<body> shell, loads self-hosted fonts and
 * sets site-wide metadata. Fonts are downloaded at build time and served from our own
 * domain (no runtime request to Google).
 */
import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { siteMetadata } from "@/content/site";
import "./globals.css";

// Why `latin-ext`: it contains the Turkish letters ğ, ş, ı, İ, ç, ö, ü.
// Why `weight: "400"`: Instrument Serif ships a single weight (no bold).
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

// Geist is a variable font, so every weight from 100 to 900 is available.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `lang="tr"`: the site copy is Turkish, which also matters for screen readers.
    <html lang="tr" className={`${instrumentSerif.variable} ${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
