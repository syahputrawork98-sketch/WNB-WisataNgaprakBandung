import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function GalleryPage() {
  return (
    <PagePlaceholder
      eyebrow="Dokumentasi"
      title="Galeri Foto"
      description="Dokumentasi perjalanan akan ditampilkan setelah aset foto resmi WNB tersedia dan telah dikelompokkan."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Halaman ini nantinya akan memuat dokumentasi visual berupa foto-foto resolusi tinggi aktivitas off-road Land Rover, camping, gathering, dan keindahan panorama alam Bandung dengan fitur filter kategori.
      </p>
    </PagePlaceholder>
  );
}
