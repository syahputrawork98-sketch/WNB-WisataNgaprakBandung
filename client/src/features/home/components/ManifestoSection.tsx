import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EditorialImage } from "./EditorialImage";

export function ManifestoSection() {
  return (
    <section
      className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border"
      aria-labelledby="manifesto-heading"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Mediaside - first on mobile, right side on desktop */}
        <div className="w-full lg:col-span-7 lg:order-2">
          <div className="relative group">
            {/* Fine border frame */}
            <div className="absolute -inset-2 border border-wnb-border rounded-wnb-lg -z-1 transition-colors duration-300 group-hover:border-wnb-border-strong" />
            <EditorialImage
              src="/images/home/manifesto-forest-road.webp"
              alt="Jalan tanah berkelok di tengah hutan hijau"
              className="w-full aspect-[16/10] object-cover rounded-wnb-lg"
              illustrationNotice={false}
            />
            <div className="mt-2 text-right">
              <span className="text-[10px] sm:text-xs text-wnb-subtle tracking-wider uppercase">
                Foto Ilustrasi Oleh Dave Karani / Pexels
              </span>
            </div>
          </div>
        </div>

        {/* Copyside - second on mobile, left side on desktop */}
        <div className="flex flex-col gap-6 max-w-2xl lg:col-span-5 lg:order-1">
          <div className="flex items-center gap-2 text-xs font-mono text-wnb-subtle tracking-widest uppercase">
            <span>01</span>
            <span className="w-6 h-px bg-wnb-border" />
            <span>Tentang Pengalaman</span>
          </div>

          <SectionHeading
            id="manifesto-heading"
            title="Petualangan dengan karakter klasik"
            description="WNB dibangun untuk menyajikan informasi perjalanan, pilihan rute, dokumentasi kegiatan, dan alur booking dalam satu aplikasi yang mudah digunakan."
            headingLevel="h2"
          />

          <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
            Kendaraan yang digunakan merupakan Land Rover klasik berbodi besi atau logam dengan varian Short dan Long. Detail armada dan operasional akan ditampilkan setelah dikonfirmasi.
          </p>
        </div>
      </Container>
    </section>
  );
}
