/**
 * Case studies and highlights ("deep stories", 500 m).
 *
 * Purpose: real highlights taken from the owner's LinkedIn "Featured" section. Descriptions stay
 * factual and short on purpose: no outcomes or numbers are invented.
 * TODO(content): the owner should add goals, role and results for each entry.
 */

export interface CaseStudy {
  /** URL-safe, English, kebab-case. Becomes `/case-studies/<slug>/`. */
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly body: readonly string[];
  readonly year: number;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "industrial-organizational-psychology-talk",
    title: "Endüstri ve Örgüt Psikolojisi Söyleşisi",
    summary: "Çalışma yaşamında Endüstri ve Örgüt Psikolojisini konuştuğumuz çevrimiçi söyleşi.",
    body: [
      "Çalışma yaşamında Endüstri ve Örgüt Psikolojisinin yerini ve katkısını katılımcılarla birlikte konuştuğumuz bir söyleşi gerçekleştirdim.",
      "Etkinlik çevrimiçi yapıldı ve genç profesyonellerin yoğun katılımıyla ilerledi.",
    ],
    year: 2025,
  },
  {
    slug: "devfest-24-gdg-izmir",
    title: "GDG İzmir DevFest'24",
    summary: "GDG İzmir tarafından düzenlenen DevFest'24 etkinliğinden bir paylaşım.",
    body: [
      "GDG İzmir'in düzenlediği DevFest'24 etkinliğinde yer aldım.",
      "Teknoloji topluluğuyla bir araya gelmek, işveren markası ve iç iletişim bakış açısını yeni kitlelerle paylaşma fırsatı sundu.",
    ],
    year: 2024,
  },
  {
    slug: "yetgen-leadership-program",
    title: "YetGen Liderlik Programı",
    summary: "Yetkin Gençler'de katılımcıdan ekip liderliğine uzanan yolculuk.",
    body: [
      "Yetkin Gençler (YetGen) programına önce katılımcı olarak dahil oldum, ardından ekip lideri olarak gençlerin gelişimine eşlik ettim.",
      "Bu süreçte liderlik sertifikası aldım ve ekip yönetimi konusundaki deneyimimi geliştirdim.",
    ],
    year: 2022,
  },
];

/** Numbers derived from the CV (as of October 2026). Update them when the CV changes. */
export const stats: readonly StatItem[] = [
  { value: "4+", label: "yıl Logo Yazılım'da" },
  { value: "5+", label: "yıl gönüllülük" },
  { value: "6", label: "lisans ve sertifika" },
];
