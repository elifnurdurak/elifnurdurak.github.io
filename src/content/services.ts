/**
 * Areas of expertise shown in the "Services" section (reef zone).
 *
 * Purpose: cards derived from the owner's real work (employer branding, internal communication,
 * employee experience, speaking). TODO(content): the owner should review and rewrite these
 * descriptions in their own words before launch.
 */

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const services: readonly ServiceItem[] = [
  {
    id: "employer-branding",
    title: "İşveren Markası",
    description:
      "Bir kurumun çalışanlar ve adaylar gözündeki hikâyesini anlatan; kariyer sayfaları, sosyal medya ve etkinliklerle görünür kılan çalışmalar.",
  },
  {
    id: "internal-communication",
    title: "İç İletişim",
    description:
      "Çalışanların kurumda olup bitenden haberdar olduğu, sesinin duyulduğu ve aidiyetin güçlendiği iletişim akışları.",
  },
  {
    id: "employee-experience",
    title: "Çalışan Deneyimi & Wellbeing",
    description:
      "Motivasyonu ve iyi oluşu artıran deneyimleri psikoloji bilgisiyle tasarlama ve iyileştirme.",
  },
  {
    id: "speaking-community",
    title: "Konuşmalar & Topluluk",
    description:
      "Endüstri ve örgüt psikolojisi, kariyer ve gençlerle gelişim üzerine söyleşiler ve topluluk çalışmaları.",
  },
];
