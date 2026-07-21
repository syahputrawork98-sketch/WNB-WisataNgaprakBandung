import { AboutHeroSection } from "@/features/about/components/AboutHeroSection";
import { JourneyTimelineSection } from "@/features/about/components/JourneyTimelineSection";
import { NgaprakMeaningSection } from "@/features/about/components/NgaprakMeaningSection";
import { ClassicLandRoverSection } from "@/features/about/components/ClassicLandRoverSection";
import { BrandValuesSection } from "@/features/about/components/BrandValuesSection";
import { AdventureForEveryoneSection } from "@/features/about/components/AdventureForEveryoneSection";
import { OperationalBaseSection } from "@/features/about/components/OperationalBaseSection";
import { AboutCtaSection } from "@/features/about/components/AboutCtaSection";

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <JourneyTimelineSection />
      <NgaprakMeaningSection />
      <ClassicLandRoverSection />
      <BrandValuesSection />
      <AdventureForEveryoneSection />
      <OperationalBaseSection />
      <AboutCtaSection />
    </>
  );
}
