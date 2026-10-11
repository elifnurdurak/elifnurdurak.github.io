/**
 * Blog posts.
 *
 * Purpose: article data for `/blog` and `/blog/<slug>/`. Each paragraph is one array item, so
 * no Markdown or MDX dependency is needed.
 * TODO(content): this introductory post is a starter derived from the owner's profile text;
 * replace it with the owner's own writing.
 */

export interface BlogPost {
  /** URL-safe, English, kebab-case. */
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  /** ISO date, "YYYY-MM-DD". */
  readonly publishedAt: string;
  readonly paragraphs: readonly string[];
}

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "diving-below-the-surface",
    title: "Yüzeyin altına birlikte inelim",
    excerpt:
      "Psikoloji ve insan kaynakları kesişiminde neden çalışma hayatının derinliklerine bakıyorum?",
    publishedAt: "2026-10-11",
    paragraphs: [
      "Psikoloji eğitimi bana, görünenin altında her zaman başka bir hikâye olduğunu öğretti. Çalışma hayatında da durum farklı değil: bir ekibin motivasyonu, bir çalışanın aidiyeti ya da bir kurumun itibarı yüzeyde gördüğümüzden çok daha fazlasına dayanıyor.",
      "İşveren markası ve iç iletişim alanında çalışırken hem bireysel başarıları hem de takım başarılarını önemseyen bir yaklaşım benimsiyorum. Çünkü sağlam bir kurum kültürü, tıpkı bir mercan resifi gibi yavaş ve sağlam büyür.",
      "Bu sitede, o derinliğe birlikte inmeyi deneyeceğiz.",
    ],
  },
];
