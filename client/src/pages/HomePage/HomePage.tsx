import { HeroSection } from "@/features/home/components/HeroSection";
import { ManifestoSection } from "@/features/home/components/ManifestoSection";
import { ExploreSection } from "@/features/home/components/ExploreSection";
import { VehicleSection } from "@/features/home/components/VehicleSection";
import { ExperienceSection } from "@/features/home/components/ExperienceSection";
import { FinalCtaSection } from "@/features/home/components/FinalCtaSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ExploreSection />
      <VehicleSection />
      <ExperienceSection />
      <FinalCtaSection />
    </>
  );
}
