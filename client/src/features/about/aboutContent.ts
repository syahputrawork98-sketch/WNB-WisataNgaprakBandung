import { ShieldCheck, Target, HeartHandshake, Zap, CarFront, Users, Camera } from "lucide-react";

export const TIMELINE_EVENTS = [
  {
    period: "Awal Perjalanan",
    title: "Berawal dari Hobi",
    description: "Kecintaan pada Land Rover klasik, off-road, alam, dan perjalanan komunitas menjadi fondasi awal.",
  },
  {
    period: "Sejak 2019",
    title: "Mulai Dikenal",
    description: "Pengalaman ngaprak mulai dibagikan kepada kelompok yang lebih luas.",
  },
  {
    period: "Masa Perlambatan",
    title: "Menjaga Semangat",
    description: "Aktivitas melambat, namun semangat kebersamaan dan perjalanan tetap bertahan.",
  },
  {
    period: "Kini",
    title: "Dikembangkan Kembali",
    description: "WNB ditata kembali sebagai layanan petualangan yang lebih terarah, bertanggung jawab, dan siap berkembang.",
  },
] as const;

export const EXPERIENCE_PRINCIPLES = [
  {
    title: "Bertanggung Jawab",
    description: "Kesiapan dan kelayakan perjalanan lebih penting daripada memaksakan pelaksanaan.",
    icon: ShieldCheck,
  },
  {
    title: "Autentik",
    description: "Pengalaman dibangun dari Land Rover klasik, alam, jalur, dan karakter WNB.",
    icon: Target,
  },
  {
    title: "Fleksibel Terarah",
    description: "Perjalanan dapat disesuaikan, tetapi tetap mempertimbangkan kondisi dan keputusan operasional.",
    icon: Zap,
  },
  {
    title: "Hangat dan Berkesan",
    description: "Komunikasi, pelayanan, kebersamaan, dan cerita perjalanan menjadi bagian pengalaman.",
    icon: HeartHandshake,
  },
] as const;

export const PARTICIPANT_GROUPS = [
  "Pemula",
  "Pasangan",
  "Keluarga",
  "Teman atau Kelompok Pertemanan",
  "Komunitas",
  "Perusahaan atau Organisasi",
] as const;
