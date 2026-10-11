/**
 * Working process shown in the "Process" section (twilight zone).
 *
 * Purpose: four steps rendered as bubbles that rise and connect. TODO(content): the owner
 * should confirm this reflects how they actually work.
 */

export interface ProcessStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    id: "listen",
    title: "Dinle",
    description: "Çalışanları, ekipleri ve ihtiyaçları anlamak için önce dinlerim.",
  },
  {
    id: "understand",
    title: "Anla",
    description: "Gördüklerimi psikoloji bilgisi ve verilerle yorumlayıp resmi netleştiririm.",
  },
  {
    id: "design",
    title: "Tasarla",
    description: "İhtiyaca uygun iletişim, deneyim ve etkinlik çözümlerini birlikte kurgularız.",
  },
  {
    id: "apply",
    title: "Uygula & Geliştir",
    description: "Hayata geçirir, geri bildirim alır ve süreci sürekli iyileştiririm.",
  },
];
