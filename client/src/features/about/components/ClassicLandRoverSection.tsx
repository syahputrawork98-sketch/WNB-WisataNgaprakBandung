import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ClassicLandRoverSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="landrover-heading">
      <Container className="flex flex-col md:flex-row-reverse gap-12 lg:gap-24 items-center">
        <div className="flex-1 w-full flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-wnb-subtle tracking-widest uppercase">
            <span>Inti Sensasi</span>
          </div>

          <SectionHeading
            id="landrover-heading"
            title="Karakter Klasik yang Menemani"
            headingLevel="h2"
          />

          <div className="flex flex-col gap-4 text-sm sm:text-base text-wnb-muted leading-relaxed">
            <p>
              Land Rover klasik merupakan inti dari setiap pengalaman WNB. Kendaraan ini bukan sekadar pajangan atau alat transportasi biasa.
            </p>
            <p>
              Bentuk, karakter mesin, kemampuan menjelajah, dan sensasi perjalanannya membantu membentuk identitas petualangan WNB. 
            </p>
            <blockquote className="border-l-2 border-wnb-accent pl-4 italic mt-2 text-wnb-white">
              "Land Rover klasik, jalur yang berbeda, dan petualangan yang menjadi cerita."
            </blockquote>
          </div>
        </div>

        <div className="w-full md:w-5/12 aspect-square bg-wnb-surface border border-wnb-border/50 rounded-wnb-lg p-2 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-wnb-black opacity-50 flex items-center justify-center">
                <span className="text-wnb-muted/50 text-xs font-mono">Placeholder Visual Kendaraan</span>
            </div>
        </div>
      </Container>
    </section>
  );
}
