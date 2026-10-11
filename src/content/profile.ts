/**
 * Profile data.
 *
 * Purpose: factual career information used by the About, Experience and Credentials sections.
 * Source: the owner's LinkedIn PDF export (11 Oct 2026). Only the owner's own facts are used.
 * Dates use the ISO-like "YYYY-MM" form; `endDate: null` means "ongoing".
 * Text values are Turkish because they are shown to visitors.
 */

export interface ExperienceEntry {
  readonly id: string;
  readonly organization: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string | null;
  readonly location?: string;
  readonly summary?: string;
}

export interface EducationEntry {
  readonly institution: string;
  readonly degree: string;
  readonly startYear: number;
  readonly endYear: number;
}

export interface VolunteeringEntry {
  readonly organization: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string | null;
}

export const profile = {
  fullName: "Elif Nur Durak Korucuk",
  headline: "Employer Branding and Internal Communication Specialist",
  location: "İzmir, Türkiye",
  // TODO(content): the PDF truncates the "About" text; replace with the full version from the owner.
  about:
    "Psikoloji bölümü mezunu olan ve çalışan deneyimini iyileştirme konusunda tutkulu bir İşveren Markası ve İç İletişim Uzmanıyım. İş hayatında hem bireysel başarıları hem de takım başarılarını önemseyen bir yaklaşım benimsiyorum.",
  links: {
    linkedin: "https://www.linkedin.com/in/elifnurdurak/",
    github: "https://github.com/elifnurdurak",
  },
} as const;

export const experience: readonly ExperienceEntry[] = [
  {
    id: "logo-specialist",
    organization: "Logo Yazılım",
    role: "Employer Branding and Internal Communication Specialist",
    startDate: "2023-01",
    endDate: null,
    location: "İzmir, Türkiye · Uzaktan",
  },
  {
    id: "logo-assistant-specialist",
    organization: "Logo Yazılım",
    role: "Employer Branding and Internal Communication Assistant Specialist",
    startDate: "2022-09",
    endDate: "2023-01",
  },
  {
    id: "logo-intern",
    organization: "Logo Yazılım",
    role: "Employer Branding and Internal Communication Intern",
    startDate: "2022-08",
    endDate: "2022-09",
  },
  {
    id: "yetgen-team-leader",
    organization: "Yetkin Gençler (YetGen)",
    role: "Team Leader",
    startDate: "2022-09",
    endDate: "2023-01",
  },
  {
    id: "ege-iop-intern",
    organization: "Ege Üniversitesi Endüstri ve Örgüt Psikolojisi Çalışma Grubu",
    role: "Stajyer",
    startDate: "2021-11",
    endDate: "2022-11",
    location: "İzmir, Türkiye",
    summary: "Çalışma psikolojisi ile ilgili araştırma ve uygulama çalışmaları yürüttü.",
  },
  {
    id: "empativo-marketing-intern",
    organization: "Empativo",
    role: "Marketing Intern",
    startDate: "2022-05",
    endDate: "2022-07",
  },
  {
    id: "yetgen-participant",
    organization: "Yetkin Gençler (YetGen)",
    role: "Katılımcı",
    startDate: "2021-10",
    endDate: "2021-12",
    summary: "21. yüzyıl yetkinliklerini geliştirmeyi amaçlayan 3 aylık kapsamlı eğitim programı.",
  },
];

export const education: readonly EducationEntry[] = [
  {
    institution: "İzmir Katip Çelebi Üniversitesi",
    degree: "Psikoloji, Lisans",
    startYear: 2018,
    endYear: 2022,
  },
];

export const volunteering: readonly VolunteeringEntry[] = [
  {
    organization: "Toplum Gönüllüleri Vakfı (TOG)",
    role: "Gönüllü",
    startDate: "2020-12",
    endDate: null,
  },
  {
    organization: "Türk Psikologlar Derneği İzmir Şubesi",
    role: "Kadın ve Toplumsal Cinsiyet Çalışmaları Birimi Gönüllüsü",
    startDate: "2021-11",
    endDate: "2022-02",
  },
];
