import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function RouteListPage() {
  return (
    <PagePlaceholder
      eyebrow="Eksplorasi"
      title="Daftar Rute Perjalanan"
      description="Daftar rute resmi akan ditambahkan setelah nama, lokasi, dan karakter setiap jalur dikonfirmasi."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Halaman ini akan menampilkan peta persebaran jalur perjalanan off-road, informasi tingkat kesulitan medan (Easy, Medium, Hard), serta estimasi waktu tempuh lintasan secara akurat.
      </p>
    </PagePlaceholder>
  );
}
