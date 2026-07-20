import { ShieldCheck, Target, HeartHandshake, Zap, CarFront, Users, Camera } from "lucide-react";

export const TIMELINE_EVENTS = [
  {
    period: "Sebelum 2019",
    title: "Berawal dari Hobi",
    description: "Kecintaan pada Land Rover klasik, off-road, alam, dan perjalanan komunitas menjadi fondasi awal.",
  },
  {
    period: "2019",
    title: "Mulai Dikenal sebagai WNB",
    description: "Pengalaman ngaprak mulai dibagikan kepada kelompok yang lebih luas.",
  },
  {
    period: "Masa Perlambatan",
    title: "Menjaga Semangat",
    description: "Aktivitas WNB melambat akibat pandemi dan kondisi ekonomi.",
  },
  {
    period: "2026",
    title: "Dikembangkan Kembali",
    description: "WNB ditata kembali sebagai layanan petualangan yang lebih terarah, bertanggung jawab, dan siap berkembang.",
  },
] as const;

export const BRAND_VALUES = [
  {
    title: "Tanggung Jawab",
    description: "Kesiapan dan kelayakan perjalanan lebih penting daripada memaksakan keberangkatan.",
    icon: ShieldCheck,
  },
  {
    title: "Keaslian",
    description: "Pengalaman dibangun dari karakter Land Rover klasik, alam, jalur, dan sejarah WNB yang nyata.",
    icon: Target,
  },
  {
    title: "Fleksibilitas Terarah",
    description: "Perjalanan dapat disesuaikan, tetapi tetap mengikuti kondisi dan keputusan operasional.",
    icon: Zap,
  },
  {
    title: "Kehangatan",
    description: "Komunikasi dan pelayanan harus ramah, jelas, tidak kaku, dan tidak meremehkan pemula.",
    icon: HeartHandshake,
  },
] as const;

export const BRAND_PROMISES = [
  {
    title: "Berkarakter",
    description: "Pengalaman mempunyai identitas kuat melalui Land Rover klasik, alam, jalur, suasana petualangan, dan pelayanan yang hangat.",
    icon: CarFront,
  },
  {
    title: "Dipersiapkan secara Bertanggung Jawab",
    description: "Perjalanan dipertimbangkan berdasarkan kendaraan, kru, cuaca, jalur, perlengkapan, perizinan, kebutuhan peserta, dan keputusan operasional.",
    icon: ShieldCheck,
  },
  {
    title: "Disesuaikan dengan Peserta",
    description: "Tingkat tantangan mempertimbangkan pengalaman, jumlah dan karakter peserta, tujuan kegiatan, kondisi rute, cuaca, kendaraan, serta keputusan tim lapangan.",
    icon: Users,
  },
  {
    title: "Dirancang Menjadi Pengalaman Berkesan",
    description: "Perjalanan menghadirkan petualangan, interaksi, kebersamaan, adrenalin, dan cerita; fasilitas dokumentasi hanya berlaku sesuai paket.",
    icon: Camera,
  },
] as const;
