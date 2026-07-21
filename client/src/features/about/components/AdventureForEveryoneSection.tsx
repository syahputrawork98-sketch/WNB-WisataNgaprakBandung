import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

import { PARTICIPANT_GROUPS } from "../aboutContent";

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

        <div className="flex flex-wrap justify-center gap-4 text-left w-full mt-4">
          {PARTICIPANT_GROUPS.map((group, index) => (
            <div key={index} className="px-6 py-3 border border-wnb-border rounded-wnb-full bg-wnb-black/50 text-wnb-white font-medium tracking-wide">
              {group}
            </div>
          ))}
        </div>

        <p className="text-sm text-wnb-subtle italic text-center max-w-2xl mt-8">
          * Tidak semua rute sesuai untuk semua peserta. Penyesuaian akhir mengikuti karakter kelompok, kondisi perjalanan, dan hasil pemeriksaan WNB.
        </p>
      </Container>
    </section>
  );
}
