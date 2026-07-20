import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function AdventureForEveryoneSection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="adventure-heading">
      <Container className="flex flex-col gap-12 items-center text-center max-w-4xl mx-auto">
        <SectionHeading
          id="adventure-heading"
          eyebrow="Peserta Perjalanan"
          title="Mulai dari perjalanan pertama. Kembali untuk tantangan berikutnya."
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full mt-4">
          <div className="flex flex-col gap-4 p-6 border-l-2 border-wnb-accent bg-wnb-black/50">
            <h3 className="text-lg font-bold text-wnb-white uppercase tracking-wider">Bagi Pemula</h3>
            <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
              Baru pertama kali mencoba off-road? Mulai dari petualangan yang sesuai dengan kesiapanmu dan nikmati karakter Land Rover klasik di jalur alam Bandung. Tim kami akan membantu memilih pengalaman yang relevan.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 border-l-2 border-wnb-accent bg-wnb-black/50">
            <h3 className="text-lg font-bold text-wnb-white uppercase tracking-wider">Bagi yang Kembali</h3>
            <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
              Sudah pernah ngaprak bersama WNB? Kembali untuk mencoba rute, musim, durasi, dan tingkat tantangan yang berbeda. Tingkat tantangan dapat dibicarakan sesuai kebutuhan.
            </p>
          </div>
        </div>

        <p className="text-sm text-wnb-subtle italic text-center max-w-2xl mt-4">
          * Keputusan akhir atas pelaksanaan dan rute perjalanan selalu mengikuti kondisi serta kelayakan operasional pada saat itu.
        </p>
      </Container>
    </section>
  );
}
