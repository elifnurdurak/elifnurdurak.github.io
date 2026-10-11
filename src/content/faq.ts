/**
 * Frequently asked questions (midnight zone).
 *
 * Purpose: short definitional answers about the owner's field. TODO(content): the owner should
 * review the wording so it matches their own view.
 */

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export const faqItems: readonly FaqItem[] = [
  {
    id: "what-is-employer-branding",
    question: "İşveren markası nedir?",
    answer:
      "Bir kurumun hem mevcut çalışanlar hem de potansiyel adaylar gözündeki itibarı ve 'burada çalışmak nasıl bir şey?' sorusuna verdiği yanıttır.",
  },
  {
    id: "what-is-internal-communication",
    question: "İç iletişim neden önemli?",
    answer:
      "Çalışanlar kurumda olup biteni bilir, sesini duyurabilirse aidiyet ve motivasyon artar. İç iletişim bu akışı tasarlar.",
  },
  {
    id: "why-psychology",
    question: "Psikoloji bilgisi bu alanda nasıl işe yarıyor?",
    answer:
      "İnsanların nasıl motive olduğunu, nasıl iletişim kurduğunu ve değişime nasıl tepki verdiğini anlamak, daha etkili deneyimler tasarlamayı sağlar.",
  },
  {
    id: "how-to-reach",
    question: "Seninle nasıl iletişime geçebilirim?",
    answer:
      "En hızlı yol LinkedIn üzerinden mesaj göndermektir. Sayfanın en altında bağlantıyı bulabilirsin.",
  },
];
