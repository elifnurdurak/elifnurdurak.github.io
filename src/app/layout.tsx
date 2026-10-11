/**
 * Root layout.
 *
 * Purpose: wraps every page with the <html>/<body> shell, loads self-hosted fonts and
 * sets site-wide metadata. Fonts are downloaded at build time and served from our own
 * domain (no runtime request to Google).
 */
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { siteMetadata } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `lang="tr"`: the site copy is Turkish, which also matters for screen readers.
    <html lang="tr" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
