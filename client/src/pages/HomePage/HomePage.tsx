import { HeroSection } from "@/features/home/components/HeroSection";
import { ManifestoSection } from "@/features/home/components/ManifestoSection";
import { ExploreSection } from "@/features/home/components/ExploreSection";
import { ExperienceSection } from "@/features/home/components/ExperienceSection";
import { PlanningStepsSection } from "@/features/home/components/PlanningStepsSection";
import { FinalCtaSection } from "@/features/home/components/FinalCtaSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ExploreSection />
      <ExperienceSection />
      <PlanningStepsSection />
      <FinalCtaSection />
    </>
  );
}
