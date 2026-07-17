import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function HomePage() {
  return (
    <PagePlaceholder
      eyebrow="Wisata Ngaprak Bandung"
      title="Lebih dari Perjalanan"
      description="Fondasi Beranda WNB telah siap. Hero, paket unggulan, rute pilihan, galeri, dan CTA akan dibangun pada tahap berikutnya."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Selamat datang di Wisata Ngaprak Bandung (WNB). Kami menawarkan petualangan outdoor menggunakan armada klasik Land Rover Short (SWB) dan Land Rover Long (LWB) menjelajahi pesona jalur Bandung Barat dan Selatan.
      </p>
    </PagePlaceholder>
  );
}
