/**
 * Section copy.
 *
 * Purpose: headings, eyebrows and call-to-action labels for every page section, so components
 * contain no hardcoded visitor-facing text. Values are Turkish on purpose.
 */

export const sectionCopy = {
  about: {
    heading: "Hakkımda",
    experienceHeading: "Yolculuğum",
    educationHeading: "Eğitim",
    icebergVisible: "Görünen davranış",
    icebergHidden: "Görünmeyen dinamikler: inançlar, duygular, ihtiyaçlar",
    ongoing: "Devam ediyor",
  },
  services: {
    heading: "Neler yapıyorum?",
    intro:
      "Mercan resifi gibi, güçlü bir kurum kültürü de yavaş ve sağlam büyür. Uzmanlık alanlarım:",
  },
  process: {
    heading: "Nasıl çalışıyorum?",
    intro: "Her çalışma yüzeyden dibe doğru dört adımda ilerler.",
    symbiosisCaption: "Simbiyoz: çalışan ve kurum birbirini besleyen bir uyum içinde büyür.",
  },
  memories: {
    heading: "Anılar",
    intro: "İş hayatından, sahneden ve atölyeden kareler.",
    emptyState: "Fotoğraflar çok yakında burada olacak.",
    seeAll: "Tüm fotoğraflar",
    filterLabel: "Fotoğraf kategorileri",
    allCategories: "Tümü",
    closeLightbox: "Kapat",
  },
  cases: {
    heading: "Derindeki hikâyeler",
    intro: "Öne çıkan çalışmalar ve etkinlikler.",
    readMore: "Detayları gör",
  },
  blog: {
    heading: "Yazılar",
    intro: "Çalışma hayatı ve insan üzerine notlar.",
    readMore: "Yazıyı oku",
    backToList: "Tüm yazılar",
  },
  faq: {
    heading: "Sık sorulan sorular",
  },
  contact: {
    eyebrow: "Dip",
    heading: "Derinlere inmeye hazır mısın?",
    body: "Bir iş birliği, bir söyleşi ya da bir fikir paylaşımı için bana yazabilirsin.",
    primaryCta: "LinkedIn'den yaz",
    secondaryCta: "GitHub profilim",
  },
  footer: {
    backToSurface: "Yüzeye dön",
    rights: "Tüm hakları saklıdır.",
  },
  common: {
    skipToContent: "İçeriğe geç",
    backToHome: "Ana sayfaya dön",
    depthGaugeLabel: "Dalış derinliği",
    meters: "m",
  },
} as const;
