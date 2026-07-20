import { Container } from "@/components/common/Container";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function AboutHeroSection() {
  return (
    <section
      className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-24 flex items-center justify-center border-b border-wnb-border"
      aria-labelledby="about-hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-wnb-black">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-wnb-surface to-wnb-black opacity-80" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-6">
        <div className="flex items-center justify-center mb-4">
          <BrandLogo isLink={false} className="h-28 sm:h-36 md:h-40 w-auto" />
        </div>

        <h1
          id="about-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-display uppercase tracking-wider text-wnb-white leading-tight"
        >
          Berawal dari Hobi,<br className="hidden sm:block" />
          Tumbuh Menjadi Petualangan.
        </h1>

        <p className="text-base sm:text-lg text-wnb-muted leading-relaxed max-w-3xl mt-4">
          WNB lahir dari kecintaan terhadap Land Rover klasik, off-road, alam, dan kebersamaan komunitas. Pengalaman tersebut kini dikembangkan agar lebih banyak orang dapat menjelajahi sisi berbeda Bandung melalui perjalanan yang berkarakter, terarah, dan berkesan.
        </p>
      </Container>
    </section>
  );
}
