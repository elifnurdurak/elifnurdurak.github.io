/**
 * Site-wide copy and metadata.
 *
 * Purpose: single place for text shown across the whole site. Code never hardcodes
 * user-facing strings; it reads them from `src/content/`. (Values are Turkish on purpose.)
 */

export const siteMetadata = {
  title: "Elif Nur Durak Korucuk | İşveren Markası & İç İletişim",
  description:
    "Psikoloji kökenli İşveren Markası ve İç İletişim uzmanı. Çalışan deneyimi, motivasyon ve wellbeing odağında portfolyo.",
} as const;

export const heroCopy = {
  eyebrow: "Yüzeyin altına birlikte inelim",
  heading: "Elif Nur Durak Korucuk",
  tagline: "İşveren Markası ve İç İletişim Uzmanı · Psikoloji",
  primaryCta: "Derinlere dal",
} as const;
