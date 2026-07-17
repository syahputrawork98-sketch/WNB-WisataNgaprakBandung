import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EXPLORE_ITEMS } from "../homeContent";
import { ExploreCard } from "./ExploreCard";

export function ExploreSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="explore-section-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="explore-section-title"
          eyebrow="Mulai Menjelajah"
          title="Pilih informasi yang Anda butuhkan"
          description="Gunakan halaman Paket, Rute, dan Galeri untuk memahami pilihan perjalanan WNB."
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPLORE_ITEMS.map((item) => (
            <ExploreCard key={item.path} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
