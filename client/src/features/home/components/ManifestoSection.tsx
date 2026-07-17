import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { HomeMediaPlaceholder } from "./HomeMediaPlaceholder";

export function ManifestoSection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copyside */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <SectionHeading
            eyebrow="Tentang Pengalaman"
            title="Petualangan dengan karakter klasik"
            description="WNB dibangun untuk menyajikan informasi perjalanan, pilihan rute, dokumentasi kegiatan, dan alur booking dalam satu aplikasi yang mudah digunakan."
            headingLevel="h2"
          />
          <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
            Kendaraan yang digunakan merupakan Land Rover klasik berbodi besi atau logam dengan varian Short dan Long. Detail armada dan operasional akan ditampilkan setelah dikonfirmasi.
          </p>
        </div>

        {/* Mediaside */}
        <div className="w-full">
          <HomeMediaPlaceholder aspect="landscape" />
        </div>
      </Container>
    </section>
  );
}
