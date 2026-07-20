import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Users, Map, CarFront, Camera } from "lucide-react";

const EXPERIENCE_PILLARS = [
  {
    title: "Petualangan Berkarakter",
    description: "Land Rover klasik, alam, jalur, dan suasana hangat menjadi identitas pengalaman WNB.",
    icon: Users,
  },
  {
    title: "Dipersiapkan secara Bertanggung Jawab",
    description: "Perjalanan dipertimbangkan berdasarkan kesiapan operasional dan kondisi yang dihadapi.",
    icon: Map,
  },
  {
    title: "Disesuaikan dengan Peserta",
    description: "Tingkat petualangan mempertimbangkan pengalaman, kebutuhan, dan karakter peserta.",
    icon: CarFront,
  },
  {
    title: "Dirancang Menjadi Cerita",
    description: "Adrenalin, kebersamaan, dan perjalanan dirangkai menjadi pengalaman yang berkesan.",
    icon: Camera,
  },
];

export function ExperienceSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="experience-section-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="experience-section-title"
          eyebrow="Janji Pengalaman"
          title="Standar Pengalaman WNB"
          description="Petualangan Land Rover klasik yang dipersiapkan secara bertanggung jawab, disesuaikan dengan peserta, dan dirancang menjadi cerita yang berkesan."
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCE_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <article key={pillar.title} className="flex flex-col gap-4 p-6 border border-wnb-border bg-wnb-surface rounded-wnb-lg hover:border-wnb-border-strong transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center border border-wnb-border rounded-wnb-md bg-wnb-black text-wnb-white">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-wnb-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-wnb-muted leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
