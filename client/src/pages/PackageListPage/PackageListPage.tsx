import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function PackageListPage() {
  return (
    <PagePlaceholder
      eyebrow="Layanan"
      title="Daftar Paket Wisata"
      description="Daftar paket akan dibangun menggunakan typed local data setelah struktur data dan konten paket disepakati."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Pilihan paket petualangan yang disesuaikan dengan kapasitas peserta, rute lintasan, dan durasi petualangan akan disajikan dalam bentuk grid card interaktif pada fase selanjutnya.
      </p>
    </PagePlaceholder>
  );
}
