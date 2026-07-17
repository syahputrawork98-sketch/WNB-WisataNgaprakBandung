import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="Tentang Kami"
      title="Profil WNB"
      description="Profil, cerita, armada Land Rover klasik, dan informasi operasional WNB akan ditampilkan setelah konten resminya dikonfirmasi."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Halaman ini nantinya akan memuat sejarah singkat berdirinya WNB, standar keamanan operasional untuk aktivitas off-road, kualifikasi driver terlatih, serta rincian varian armada klasik Land Rover Short dan Long.
      </p>
    </PagePlaceholder>
  );
}
