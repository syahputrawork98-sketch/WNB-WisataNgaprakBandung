import type {
  PackagePrice,
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
    id: "PK-01",
    slug: "corporate-adventure",
    name: "Corporate Adventure",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: { amount: 450000, unit: "per peserta", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1FHDa0Q1WooLLIWXvNlQzJxakoE_BLuZP",
      fallbackSrc: "/images/home/explore-package.webp",
      alt: "Ilustrasi kelompok perusahaan menikmati perjalanan bersama Land Rover klasik di alam Bandung",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-02",
    slug: "family-adventure-short-trip",
    name: "Family Adventure — Short Trip",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: { amount: 1500000, unit: "per unit", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=10mUGyrc8ifCTJJzrneaD0OoTd-34hCn0",
      fallbackSrc: "/images/home/hero-adventure.webp",
      alt: "Ilustrasi keluarga menikmati perjalanan singkat bersama Land Rover klasik",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-03",
    slug: "family-adventure-full-experience",
    name: "Family Adventure — Full Experience",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: { amount: 2200000, unit: "per unit", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1feY62AuvecJg4ESqodAaBHbzmQ0BvywS",
      fallbackSrc: "/images/home/explore-route.webp",
      alt: "Ilustrasi keluarga dalam perjalanan Land Rover klasik berdurasi lebih panjang",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-04",
    slug: "birthday-adventure",
    name: "Birthday Adventure",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: { amount: 1850000, unit: "per unit", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1v8sUzybgf7c4JubuDkeXfgBGGWtswsxr",
      fallbackSrc: "/images/home/manifesto-forest-road.webp",
      alt: "Ilustrasi suasana ulang tahun dalam perjalanan bersama Land Rover klasik",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-05",
    slug: "anniversary-adventure",
    name: "Anniversary Adventure",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: {
      amount: 1850000,
      unit: "per unit",
      displayMode: "exact",
    },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1WOJG-jdfSvsVMNted74UghM0ofIMME5N",
      fallbackSrc: "/images/home/explore-gallery.webp",
      alt: "Ilustrasi pasangan merayakan hari jadi dalam perjalanan Land Rover klasik",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-06",
    slug: "surprise-adventure",
    name: "Surprise Adventure",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: { amount: 1950000, unit: "per unit", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1XK4_bb2E7JO5uzEo6cbqSQ3E3MYllBBq",
      fallbackSrc: "/images/home/final-cta-road.webp",
      alt: "Ilustrasi momen kejutan dalam perjalanan bersama Land Rover klasik",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-07",
    slug: "adventure-camping",
    name: "Adventure Camping",
    publicationStatus: "published-updating",
    availabilityStatus: "available-by-confirmation",
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
    priceModel: { amount: 2500000, unit: "per unit", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1bc0-hkEuwOfcxTt4vroDtRRJXo48JgVX",
      fallbackSrc: "/images/home/explore-package.webp",
      alt: "Ilustrasi Land Rover klasik dan suasana camping di kawasan pegunungan",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
  },
  {
    id: "PK-08",
    slug: "open-trip-adventure",
    name: "Open Trip Adventure",
    publicationStatus: "published-updating",
    availabilityStatus: "schedule-required",
    category: "open-trip",
    categoryLabel: "Open Trip",
    variant: "Jadwal Terjadwal & Kuota",
    shortDescription:
      "Perjalanan gabungan dengan peserta lain pada jadwal dan susunan rute yang ditentukan WNB.",
    longDescription:
      "Pilihan perjalanan gabungan bagi individu, pasangan, atau kelompok kecil. Keberangkatan hanya dibuka ketika jadwal dan kuota telah ditetapkan serta diumumkan oleh WNB.",
    audience: ["Individu", "Pasangan", "Kelompok kecil"],
    duration: "4–5 jam",
    capacity: "Minimal 4 peserta dan maksimal 6 pelanggan per unit",
    vehicle: "Land Rover Classic Long",
    priceModel: { amount: 350000, unit: "per peserta", displayMode: "exact" },
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
    media: {
      src: "https://drive.google.com/uc?export=view&id=1BLYerjJQMOK9mgM-Hs-yrjUWHhvOgxtZ",
      fallbackSrc: "/images/home/hero-adventure.webp",
      alt: "Ilustrasi peserta open trip berbagi perjalanan bersama Land Rover klasik",
      illustrationNotice: true,
    },
    relatedPackageSlugs: [],
    routeSlugs: [],
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

export function getFormattedPriceText(priceModel: PackagePrice): string | null {
  if (priceModel.displayMode === "hidden") return null;
  if (priceModel.displayMode === "custom" && priceModel.customText) return priceModel.customText;
  
  if (priceModel.amount === undefined || priceModel.unit === undefined) return null;
  
  const formattedAmount = formatRupiah(priceModel.amount);
  
  if (priceModel.displayMode === "starting-from") {
    return `Mulai dari ${formattedAmount} ${priceModel.unit}`;
  }
  
  return `${formattedAmount} ${priceModel.unit}`;
}

export function getPackageBySlug(slug?: string): TravelPackage | undefined {
  if (!slug) return undefined;
  const pkg = REGULAR_PACKAGES.find((pkg) => pkg.slug === slug);
  if (pkg && pkg.publicationStatus === "unpublished") {
    return undefined;
  }
  return pkg;
}

export function getPackagesByCategory(
  category: PackageCategory
): TravelPackage[] {
  const visiblePackages = REGULAR_PACKAGES.filter(
    (pkg) => pkg.publicationStatus !== "unpublished" && pkg.availabilityStatus === "available-by-confirmation"
  );
  
  if (category === "semua") {
    return visiblePackages;
  }
  return visiblePackages.filter((pkg) => pkg.category === category);
}

export function getRelatedPackages(
  currentSlug: string,
  count: number = 3
): TravelPackage[] {
  const currentPkg = getPackageBySlug(currentSlug);
  if (!currentPkg || !currentPkg.relatedPackageSlugs || currentPkg.relatedPackageSlugs.length === 0) {
    return [];
  }
  
  const related = REGULAR_PACKAGES.filter(
    (pkg) => currentPkg.relatedPackageSlugs!.includes(pkg.slug) && pkg.publicationStatus !== "unpublished" && pkg.availabilityStatus === "available-by-confirmation"
  );
  
  return related.slice(0, count);
}

export function buildPackageBookingPath(slug: string): string {
  return `/booking?package=${encodeURIComponent(slug)}`;
}
