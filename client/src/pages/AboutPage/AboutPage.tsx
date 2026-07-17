import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="Tentang Kami"
      title="Profil WNB"
      description="Profil, cerita, armada Land Rover klasik, dan informasi operasional WNB akan ditampilkan setelah konten resminya dikonfirmasi."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Halaman ini nantinya akan memuat sejarah singkat berdirinya WNB, informasi driver dan prosedur keamanan yang telah dikonfirmasi, serta rincian varian armada klasik Land Rover Short dan Long.
      </p>
    </PagePlaceholder>
  );
}
