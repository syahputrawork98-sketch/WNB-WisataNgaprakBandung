import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";

const PLANNING_STEPS = [
  {
    number: "01",
    title: "Pilih Pengalaman",
    description: "Pengunjung mengenali Paket atau Rute yang paling mendekati kebutuhannya.",
  },
  {
    number: "02",
    title: "Sampaikan Kebutuhan",
    description: "Pengunjung menyampaikan jumlah peserta, rencana waktu, karakter kelompok, dan kebutuhan tambahan.",
  },
  {
    number: "03",
    title: "WNB Memeriksa dan Mengonfirmasi",
    description: "Tim WNB memeriksa kondisi, ketersediaan, dan penyesuaian sebelum memberikan konfirmasi.",
  },
];

export function PlanningStepsSection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="planning-steps-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="planning-steps-title"
          eyebrow="Cara Merencanakan Perjalanan"
          title="Alur Perencanaan WNB"
          description="Langkah mudah untuk memastikan petualangan Anda sesuai dengan kebutuhan dan kondisi."
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANNING_STEPS.map((step) => (
            <article key={step.number} className="flex flex-col gap-4 p-6 border border-wnb-border bg-wnb-black rounded-wnb-lg hover:border-wnb-border-strong transition-colors duration-300">
              <div className="text-3xl font-bold font-display text-wnb-muted">
                {step.number}
              </div>
              <h3 className="text-lg font-bold font-display uppercase tracking-wide text-wnb-white">
                {step.title}
              </h3>
              <p className="text-sm text-wnb-muted leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <LinkButton to={ROUTE_PATHS.booking} variant="primary" size="md">
            Rencanakan Perjalanan
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
