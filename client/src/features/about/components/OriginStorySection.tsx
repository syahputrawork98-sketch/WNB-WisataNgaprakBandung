import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EditorialImage } from "@/features/home/components/EditorialImage";

export function OriginStorySection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="origin-heading">
      <Container className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-1 w-full flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-wnb-subtle tracking-widest uppercase">
            <span>01</span>
            <span className="w-6 h-px bg-wnb-border" />
            <span>Kisah Awal</span>
          </div>

          <SectionHeading
            id="origin-heading"
            title="Dari Hobi yang Terus Bergerak"
            headingLevel="h2"
          />

          <div className="flex flex-col gap-4 text-sm sm:text-base text-wnb-muted leading-relaxed">
            <p>
              WNB berawal dari hobi terhadap Land Rover klasik, off-road, dan eksplorasi alam. Hobi tersebut tumbuh melalui perjalanan panjang dan kebersamaan komunitas.
            </p>
            <p>
              Sejak 2019, kegiatan itu mulai dikenal sebagai pengalaman yang dapat dibagikan kepada lebih banyak orang. WNB bukan lahir dari gagasan kendaraan wisata biasa, melainkan dari pengalaman nyata menggunakan Land Rover klasik untuk benar-benar menjelajah.
            </p>
          </div>
        </div>

        <div className="w-full md:w-5/12 aspect-[4/5] relative">
          <EditorialImage
            src="/images/home/explore-gallery.webp"
            alt="Jalan tanah melintasi pemandangan alam pegunungan dan pepohonan"
            className="w-full h-full object-cover rounded-wnb-lg"
            illustrationNotice={false}
          />
        </div>
      </Container>
    </section>
  );
}
