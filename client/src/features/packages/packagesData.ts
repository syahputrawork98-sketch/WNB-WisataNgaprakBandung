import type {
  TravelPackage,
  SpecialExperience,
  CategoryFilterItem,
  PackageCategory,
} from "./packagesTypes";

export const CATEGORY_FILTERS: readonly CategoryFilterItem[] = [
  { key: "semua", label: "Semua" },
  { key: "keluarga", label: "Keluarga" },
  { key: "perayaan", label: "Perayaan" },
  { key: "perusahaan", label: "Perusahaan" },
  { key: "camping", label: "Camping" },
  { key: "open-trip", label: "Open Trip" },
] as const;

export const REGULAR_PACKAGES: readonly TravelPackage[] = [
  {
    slug: "corporate-adventure",
    name: "Corporate Adventure",
    category: "perusahaan",
    categoryLabel: "Perusahaan & Komunitas",
    variant: "Perjalanan yang Disesuaikan Rombongan",
    shortDescription:
      "Paket off-road untuk perusahaan, instansi, organisasi, atau komunitas dengan susunan kegiatan yang dapat disesuaikan.",
    longDescription:
      "Paket off-road khusus yang dirancang untuk mempererat kebersamaan tim perusahaan, instansi, organisasi, maupun komunitas. Seluruh elemen perjalanan mulai dari jumlah kendaraan Land Rover, tingkat tantangan rute, hingga kegiatan pendamping dapat disesuaikan dengan tujuan acara dan jumlah rombongan.",
    audience: ["Perusahaan", "Instansi", "Organisasi", "Komunitas"],
    duration: "8–10 jam",
    capacity: "Mulai 10 peserta; jumlah unit menyesuaikan rombongan",
    vehicle: "Land Rover Classic Short atau Long sesuai jumlah peserta",
    price: 450000,
    priceUnit: "per peserta",
    inclusions: [
      "Kendaraan Land Rover Classic",
      "Driver & Helper",
      "BBM & operasional armada",
      "Tiket masuk kawasan wisata",
      "Makan siang",
      "Snack",
      "Air mineral",
    ],
    optionalActivities: [
      "Paintball Simulation",
      "Dokumentasi Premium (Foto/Video/Drone)",
      "Sajian Sunda Komunal",
    ],
    meetingPoint: "Fleksibel berdasarkan kesepakatan pemesanan (Bandung / Lembang / Cikole)",
    specialTerms: [
      "Pemesanan disarankan minimal 14 hari sebelum tanggal perjalanan",
      "Jumlah peserta dan susunan acara final dikonfirmasi sebelum pelaksanaan",
    ],
    publicNotes: [
      "Rute, jumlah unit, pilihan aktivitas, dan harga akhir disesuaikan dengan kebutuhan rombongan",
      "Penggunaan drone untuk dokumentasi menyesuaikan aturan kawasan dan faktor cuaca",
    ],
    image: "/images/home/explore-package.webp",
  },
  {
    slug: "family-adventure-short-trip",
    name: "Family Adventure — Short Trip",
    category: "keluarga",
    categoryLabel: "Keluarga & Pemula",
    variant: "Short Trip",
    shortDescription:
      "Perjalanan off-road singkat untuk keluarga, pemula, pasangan, atau kelompok kecil yang ingin mengenal pengalaman WNB dengan ritme lebih ringan.",
    longDescription:
      "Pilihan ideal bagi keluarga, pasangan, maupun pemula yang ingin merasakan sensasi menaiki Land Rover klasik menyusuri alam Bandung dalam durasi yang lebih ringkas. Didesain dengan ritme yang lebih ringan dan terarah tanpa mengurangi kesan petualangan.",
    audience: ["Keluarga", "Pemula", "Pasangan", "Kelompok kecil"],
    duration: "3–4 jam",
    capacity: "Maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    price: 1500000,
    priceUnit: "per unit",
    inclusions: [
      "Kendaraan Land Rover Classic Long",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket kawasan wisata",
      "Snack",
      "Air mineral",
    ],
    optionalActivities: ["Kunjungan Destinasi Alam & Sejarah"],
    meetingPoint: "Fleksibel di area Cikole atau Lembang berdasarkan kesepakatan",
    specialTerms: [
      "Kapasitas akhir dan kesesuaian perjalanan untuk anak dikonfirmasi saat perencanaan",
      "Peserta disarankan menggunakan pakaian santai yang nyaman untuk aktivitas outdoor",
    ],
    publicNotes: [
      "Rute ringan dipilih berdasarkan kondisi lapangan dan kebutuhan peserta",
    ],
    image: "/images/home/hero-adventure.webp",
  },
  {
    slug: "family-adventure-full-experience",
    name: "Family Adventure — Full Experience",
    category: "keluarga",
    categoryLabel: "Keluarga & Petualangan",
    variant: "Full Experience",
    shortDescription:
      "Pengalaman off-road berdurasi lebih panjang dengan jalur lebih menantang, suasana alam Bandung, dan fasilitas makan.",
    longDescription:
      "Petualangan alam penuh untuk keluarga dan pencinta petualangan yang ingin menjelajahi jalur off-road yang kaya akan pemandangan pinus dan lintasan berbatu khas Bandung. Dilengkapi dengan sajian makan siang untuk melengkapi momen kebersamaan.",
    audience: ["Keluarga", "Pencinta Petualangan", "Kelompok Pertemanan"],
    duration: "5–7 jam (menyesuaikan cuaca dan kondisi jalur)",
    capacity: "Maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    price: 2200000,
    priceUnit: "per unit",
    inclusions: [
      "Kendaraan Land Rover Classic Long",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket kawasan wisata",
      "Makan siang khas Sunda",
      "Snack",
      "Air mineral",
    ],
    optionalActivities: [
      "Kunjungan Destinasi Alam & Sejarah",
      "Dokumentasi Foto/Video Opsional",
    ],
    meetingPoint: "Fleksibel di Sukawana, Cikole, Lembang, atau lokasi kesepakatan",
    specialTerms: [
      "Peserta dalam kondisi sehat dan bersedia mengikuti petunjuk arahan keselamatan kru",
      "Membawa pakaian hangat cadangan dan jas hujan ringan",
    ],
    publicNotes: [
      "Durasi perjalanan mengikuti perkembangan cuaca dan kondisi lintasan pada hari keberangkatan",
      "Rute dan aktivitas disesuaikan dengan kebutuhan serta kondisi lapangan",
    ],
    image: "/images/home/explore-route.webp",
  },
  {
    slug: "birthday-adventure",
    name: "Birthday Adventure",
    category: "perayaan",
    categoryLabel: "Perayaan",
    variant: "Birthday Adventure",
    shortDescription:
      "Perayaan ulang tahun yang memadukan pengalaman off-road dengan penataan momen sederhana dan berkesan.",
    longDescription:
      "Konsep merayakan ulang tahun yang berbeda di tengah rimba pinus dan lintasan Land Rover. Tim WNB membantu menyusun penataan momen sederhana agar kejutan ulang tahun terasa lebih tangguh, unik, dan tak terlupakan.",
    audience: ["Pasangan", "Keluarga", "Anak & Dewasa", "Kelompok kecil"],
    duration: "4–5 jam",
    capacity: "Maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    price: 1850000,
    priceUnit: "per unit",
    inclusions: [
      "Kendaraan Land Rover Classic Long",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket kawasan wisata",
      "Snack khusus perayaan",
      "Air mineral",
      "Dokumentasi dasar",
    ],
    optionalActivities: [
      "Dekorasi Tematik Perayaan",
      "Dokumentasi Premium (Foto/Video)",
    ],
    meetingPoint: "Fleksibel di area Cikole atau Lembang berdasarkan kesepakatan",
    specialTerms: [
      "Tema dekorasi dan kebutuhan kue perayaan dikonfirmasi paling lambat H-3",
      "Skema waktu kejutan dikoordinasikan secara terarah bersama pemesan",
    ],
    publicNotes: [
      "Penambahan dekorasi khusus atau paket dokumentasi premium dapat memengaruhi harga akhir",
      "Lokasi seremonial momen ulang tahun disesuaikan dengan kondisi jalur alam",
    ],
    image: "/images/home/manifesto-forest-road.webp",
  },
  {
    slug: "anniversary-adventure",
    name: "Anniversary Adventure",
    category: "perayaan",
    categoryLabel: "Perayaan",
    variant: "Anniversary Adventure",
    shortDescription:
      "Pengalaman off-road untuk merayakan hari jadi pasangan dengan suasana piknik dan dekorasi sederhana.",
    longDescription:
      "Perjalanan romantis nan menantang untuk merayakan hari jadi pernikahan atau hubungan bersama pasangan. Mengombinasikan sensasi berkendara Land Rover klasik dengan jeda piknik hangat di spot alam terbuka.",
    audience: ["Pasangan", "Keluarga"],
    duration: "4–5 jam",
    capacity: "2 sampai maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    price: 1850000,
    priceUnit: "per unit",
    inclusions: [
      "Kendaraan Land Rover Classic Long",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket kawasan wisata",
      "Piknik sederhana khas WNB",
      "Air mineral",
    ],
    optionalActivities: [
      "Sentuhan Dekorasi Manis",
      "Dokumentasi Foto/Video Opsional",
    ],
    meetingPoint: "Fleksibel di area Cikole atau Lembang berdasarkan kesepakatan",
    specialTerms: [
      "Konsep perayaan dan kebutuhan piknik dikonfirmasi paling lambat H-3",
    ],
    publicNotes: [
      "Menu dan perlengkapan piknik dapat disesuaikan dengan preferensi pasangan",
      "Lokasi penghentian piknik mengikuti faktor cuaca dan ketersediaan lahan nyaman",
    ],
    image: "/images/home/explore-gallery.webp",
  },
  {
    slug: "surprise-adventure",
    name: "Surprise Adventure",
    category: "perayaan",
    categoryLabel: "Perayaan",
    variant: "Surprise Adventure",
    shortDescription:
      "Paket kejutan yang menggabungkan perjalanan off-road, koordinasi rahasia, dan momen perayaan yang disusun bersama tim WNB.",
    longDescription:
      "Paket khusus untuk Anda yang ingin memberikan kejutan istimewa kepada orang terdekat. Tim WNB akan berkoordinasi secara rahasia untuk mengatur skenario perjalanan hingga momen puncak kejutan terjadi di lokasi perayaan.",
    audience: ["Pasangan", "Keluarga", "Kelompok kecil"],
    duration: "5–6 jam",
    capacity: "Maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    price: 1950000,
    priceUnit: "per unit",
    inclusions: [
      "Kendaraan Land Rover Classic Long",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket kawasan wisata",
      "Snack khusus",
      "Air mineral",
      "Dokumentasi dasar",
    ],
    optionalActivities: [
      "Dekorasi Kejutan Kustom",
      "Dokumentasi Premium (Foto/Video)",
    ],
    meetingPoint: "Fleksibel berdasarkan skenario kejutan dan kesepakatan",
    specialTerms: [
      "Skenario kejutan dan kebutuhan teknis dikonfirmasi paling lambat H-2",
      "Koordinasi kontak penanggung jawab dijaga penuh tanpa mengganggu target kejutan",
    ],
    publicNotes: [
      "Titik penjemputan awal dapat disesuaikan agar alur kejutan berjalan alami",
      "Rincian elemen kejutan disusun fleksibel mengikuti karakter peserta",
    ],
    image: "/images/home/final-cta-road.webp",
  },
  {
    slug: "adventure-camping",
    name: "Adventure Camping",
    category: "camping",
    categoryLabel: "Camping",
    variant: "Off-road & Camping",
    shortDescription:
      "Kombinasi perjalanan off-road dan bermalam di kawasan pegunungan dengan perlengkapan camping.",
    longDescription:
      "Perpaduan utuh antara kebebasan menjejaki rute off-road Land Rover dengan suasana syahdu bermalam di tengah hutan pegunungan Bandung. Dilengkapi sarana kemah dan makan untuk pengalaman menginap alam yang otentik.",
    audience: ["Keluarga", "Komunitas", "Perusahaan", "Kelompok pertemanan"],
    duration: "2 Hari 1 Malam",
    capacity: "2 sampai maksimal 4 pelanggan per unit (demi kenyamanan muatan logistik)",
    vehicle: "Land Rover Classic Long dengan rak atap",
    price: 2500000,
    priceUnit: "per unit",
    inclusions: [
      "Kendaraan Land Rover Classic Long",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket camping ground",
      "Tenda, matras, & sleeping bag",
      "Makan 3 kali",
      "Air mineral",
    ],
    optionalActivities: [
      "Api unggun sesuai aturan lokasi",
      "Dokumentasi Foto/Video Opsional",
    ],
    meetingPoint: "Fleksibel di Sukawana, Cikole, atau lokasi kesepakatan",
    specialTerms: [
      "Peserta wajib membawa pakaian hangat, alas kaki sesuai, obat pribadi, dan perlengkapan pribadi",
      "Kepatuhan terhadap instruksi kebersihan dan api unggun kawasan wajib ditaati",
    ],
    publicNotes: [
      "Lokasi camping ground, prakiraan cuaca, serta kapasitas logistik dikonfirmasi pada tiap tanggal",
      "Penambahan unit kendaraan dapat dilakukan untuk kelompok lebih dari 4 orang",
    ],
    image: "/images/home/explore-package.webp",
  },
  {
    slug: "open-trip-adventure",
    name: "Open Trip Adventure",
    category: "open-trip",
    categoryLabel: "Open Trip",
    variant: "Jadwal Terjadwal & Kuota",
    shortDescription:
      "Perjalanan gabungan dengan peserta lain pada jadwal dan susunan rute yang ditentukan WNB.",
    longDescription:
      "Pilihan ekonomis dan seru bagi individu maupun pasangan yang ingin menikmati perjalanan off-road Land Rover sekaligus berkenalan dengan kawan baru. Keberangkatan dilaksanakan sesuai jadwal berkala WNB.",
    audience: ["Individu", "Pasangan", "Kelompok kecil"],
    duration: "4–5 jam",
    capacity: "Minimal 4 peserta dan maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    price: 350000,
    priceUnit: "per peserta",
    inclusions: [
      "Berbagi kendaraan Land Rover Classic",
      "Driver & Helper",
      "BBM & operasional",
      "Tiket kawasan wisata",
      "Snack",
      "Air mineral",
    ],
    optionalActivities: ["Aktivitas Pendamping Terjadwal"],
    meetingPoint: "Ditentukan pada pengumuman setiap keberangkatan (Lembang / Cikole)",
    specialTerms: [
      "Keberangkatan mengikuti pemenuhan kuota minimal 4 peserta per unit",
      "Jadwal dan rute tidak dapat diubah secara privat oleh individu",
    ],
    publicNotes: [
      "Rute, aktivitas pendamping, dan titik kumpul tepat ditetapkan pada setiap pengumuman jadwal",
      "Keberangkatan mengikuti pemenuhan kuota dan jadwal WNB",
    ],
    image: "/images/home/hero-adventure.webp",
  },
] as const;

export const TRAIL_EXPLORATION: SpecialExperience = {
  title: "Trail Exploration — Buka Jalur",
  label: "Pengalaman Khusus",
  description:
    "Perjalanan eksplorasi untuk mencoba atau membuka jalur dengan tingkat tantangan yang mengikuti hasil survei, kesiapan tim, dan kondisi medan.",
  audience: [
    "Komunitas",
    "Kelompok Berpengalaman",
    "Pelanggan dengan Permintaan Khusus",
  ],
  duration: "Sekitar 6–8 jam (menyesuaikan kondisi lapangan)",
  capacity: "Mulai 4 peserta; susunan unit ditentukan setelah diskusi",
  vehicle: "Land Rover Classic Short / Long sesuai karakter rute",
  inclusions: [
    "Kendaraan Land Rover Classic pendukung",
    "Driver & Helper",
    "BBM & operasional",
    "P3K",
    "Winch, snatch block, tali penarik, & perlengkapan recovery",
  ],
  priceText: "Disusun berdasarkan kebutuhan",
  ctaText: "Diskusikan Perjalanan",
  safetyNotes:
    "Hanya dilaksanakan setelah melalui tahapan survei lintasan, kesiapan cuaca, kondisi armada, kelengkapan kru recovery, perizinan wilayah, serta persetujuan prosedur keselamatan menyeluruh.",
};

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getFormattedPriceText(pkg: TravelPackage): string {
  return `Mulai dari ${formatRupiah(pkg.price)} ${pkg.priceUnit}`;
}

export function getPackageBySlug(slug?: string): TravelPackage | undefined {
  if (!slug) return undefined;
  return REGULAR_PACKAGES.find((pkg) => pkg.slug === slug);
}

export function getPackagesByCategory(
  category: PackageCategory
): TravelPackage[] {
  if (category === "semua") {
    return [...REGULAR_PACKAGES];
  }
  return REGULAR_PACKAGES.filter((pkg) => pkg.category === category);
}

export function getRelatedPackages(
  currentSlug: string,
  count: number = 3
): TravelPackage[] {
  const currentPkg = getPackageBySlug(currentSlug);
  const others = REGULAR_PACKAGES.filter((pkg) => pkg.slug !== currentSlug);

  if (!currentPkg) {
    return others.slice(0, count);
  }

  const sameCategory = others.filter(
    (pkg) => pkg.category === currentPkg.category
  );
  const differentCategory = others.filter(
    (pkg) => pkg.category !== currentPkg.category
  );

  const combined = [...sameCategory, ...differentCategory];
  return combined.slice(0, count);
}
