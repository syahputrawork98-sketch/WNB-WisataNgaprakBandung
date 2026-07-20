import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function NgaprakMeaningSection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="ngaprak-heading">
      <Container className="flex flex-col gap-12 lg:gap-16 items-center text-center max-w-3xl mx-auto">
        <SectionHeading
          id="ngaprak-heading"
          eyebrow="Filosofi WNB"
          title="Makna Ngaprak"
          align="center"
          headingLevel="h2"
        />

        <div className="flex flex-col gap-6 text-base sm:text-lg text-wnb-muted leading-relaxed">
          <p>
            Bagi kami, kata <strong className="text-wnb-white font-medium">Ngaprak</strong> berkaitan erat dengan aksi bergerak, menyusuri, menjelajah, dan menemukan tempat melalui jalur yang tidak selalu menjadi jalur wisata biasa.
          </p>
          <p>
            Kami percaya bahwa perjalanan bukan sekadar perpindahan untuk menuju suatu tempat. Proses menyusuri medan, interaksi yang tercipta, serta cerita di sepanjang jalan merupakan bagian dari pengalaman itu sendiri.
          </p>
        </div>
      </Container>
    </section>
  );
}
