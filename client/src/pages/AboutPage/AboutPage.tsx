import { AboutHeroSection } from "@/features/about/components/AboutHeroSection";
import { OriginStorySection } from "@/features/about/components/OriginStorySection";
import { JourneyTimelineSection } from "@/features/about/components/JourneyTimelineSection";
import { NgaprakMeaningSection } from "@/features/about/components/NgaprakMeaningSection";
import { ClassicLandRoverSection } from "@/features/about/components/ClassicLandRoverSection";
import { BrandValuesSection } from "@/features/about/components/BrandValuesSection";
import { BrandPromiseSection } from "@/features/about/components/BrandPromiseSection";
import { AdventureForEveryoneSection } from "@/features/about/components/AdventureForEveryoneSection";
import { OperationalBaseSection } from "@/features/about/components/OperationalBaseSection";
import { AboutCtaSection } from "@/features/about/components/AboutCtaSection";

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OriginStorySection />
      <JourneyTimelineSection />
      <NgaprakMeaningSection />
      <ClassicLandRoverSection />
      <BrandValuesSection />
      <BrandPromiseSection />
      <AdventureForEveryoneSection />
      <OperationalBaseSection />
      <AboutCtaSection />
    </>
  );
}
