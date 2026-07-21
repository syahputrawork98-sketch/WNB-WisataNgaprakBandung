import { REGULAR_PACKAGES } from "@/features/packages/packagesData";
import { getAllRoutes } from "@/features/routes/routesData";
import type { AdditionalNeed, DateFlexibility, GroupType, MeetingPoint } from "./bookingTypes";

export type OptionItem<T = string> = {
  value: T;
  label: string;
};

export const DATE_FLEXIBILITY_OPTIONS: readonly OptionItem<DateFlexibility>[] = [
  { value: "", label: "Belum ditentukan" },
  { value: "fixed", label: "Tanggal harus sesuai pilihan" },
  { value: "one-to-three-days", label: "Fleksibel 1–3 hari" },
  { value: "one-week", label: "Fleksibel dalam satu minggu" },
];

export const GROUP_TYPE_OPTIONS: readonly OptionItem<GroupType>[] = [
  { value: "", label: "Pilih Jenis Kelompok" },
  { value: "family", label: "Keluarga" },
  { value: "couple", label: "Pasangan" },
  { value: "friends", label: "Kelompok Pertemanan" },
  { value: "corporate", label: "Perusahaan atau Instansi" },
  { value: "community", label: "Komunitas atau Organisasi" },
  { value: "individual", label: "Individu atau Open Trip" },
  { value: "other", label: "Lainnya" },
];

export const MEETING_POINT_OPTIONS: readonly OptionItem<MeetingPoint>[] = [
  { value: "", label: "Belum ditentukan" },
  { value: "hotel", label: "Hotel atau lokasi menginap" },
  { value: "lembang", label: "Area Lembang" },
  { value: "cikole", label: "Area Cikole" },
  { value: "sukawana", label: "Area Sukawana" },
  { value: "ciwidey", label: "Area Ciwidey atau Rancabali" },
  { value: "pangalengan", label: "Area Pangalengan" },
  { value: "bogor", label: "Area Bogor atau Sentul" },
  { value: "discussion", label: "Lokasi lain sesuai pembahasan" },
];

export const ADDITIONAL_NEEDS_OPTIONS: readonly OptionItem<AdditionalNeed>[] = [
  { value: "activity", label: "Aktivitas tambahan" },
  { value: "documentation", label: "Dokumentasi foto atau video" },
  { value: "consumption", label: "Konsumsi" },
  { value: "celebration", label: "Dekorasi atau perayaan" },
  { value: "camping", label: "Camping" },
  { value: "group-needs", label: "Kebutuhan rombongan" },
  { value: "vehicle-capacity", label: "Penyesuaian kendaraan atau kapasitas" },
  { value: "other", label: "Kebutuhan lainnya" },
];

export function getBookingPackageOptions(): OptionItem[] {
  // Hanya paket yang availabilityStatus "available-by-confirmation" dan publicationStatus bukan "unpublished"
  const availablePackages = REGULAR_PACKAGES.filter(
    (pkg) => pkg.availabilityStatus === "available-by-confirmation" && pkg.publicationStatus !== "unpublished"
  );

  const options: OptionItem[] = [
    { value: "", label: "Pilih Paket" },
    { value: "recommendation", label: "Belum tahu — minta rekomendasi" },
    { value: "custom", label: "Kebutuhan perjalanan khusus" },
    ...availablePackages.map((pkg) => ({
      value: pkg.slug,
      label: pkg.name,
    })),
  ];

  return options;
}

export function getBookingRouteOptions(): OptionItem[] {
  const routes = getAllRoutes();
  
  const options: OptionItem[] = [
    { value: "", label: "Belum memilih Rute" },
    { value: "recommendation", label: "Belum tahu — minta rekomendasi" },
    { value: "custom", label: "Rute khusus sesuai pembahasan" },
    ...routes.map((route) => {
      const isConsultation = route.availabilityStatus === "special-consultation";
      const suffix = isConsultation ? " (Konsultasi Khusus)" : "";
      return {
        value: route.slug,
        label: `${route.name}${suffix}`,
      };
    }),
  ];

  return options;
}
