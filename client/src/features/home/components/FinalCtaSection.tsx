import { ROUTE_PATHS } from "@/routes/routePaths";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { EditorialImage } from "./EditorialImage";

export function FinalCtaSection() {
  return (
    <section
      className="relative py-24 sm:py-32 border-t border-b border-wnb-border overflow-hidden bg-wnb-surface-elevated"
      aria-labelledby="cta-section-title"
    >
      {/* Background Image with strong overlay */}
      <div className="absolute inset-0 z-0">
        <EditorialImage
          src="/images/home/final-cta-road.webp"
          alt=""
          className="w-full h-full rounded-none border-none"
          imageClassName="w-full h-full object-cover"
          illustrationNotice={false}
        />
        {/* Strong dark overlay to guarantee high contrast */}
        <div className="absolute inset-0 bg-wnb-black/85 backdrop-blur-[2px] z-10" />
      </div>

      <Container className="relative z-20 flex flex-col items-center text-center gap-6 max-w-4xl">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-muted uppercase">
          Rencanakan Perjalanan
        </span>
        <h2
          id="cta-section-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-wide text-wnb-white leading-tight"
        >
          Siapkan petualangan Anda bersama WNB
        </h2>
        <p className="text-sm sm:text-base text-wnb-muted leading-relaxed max-w-2xl">
          Detail perjalanan akan disesuaikan berdasarkan kebutuhan peserta, pilihan pengalaman, dan kondisi jalur perjalanan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <LinkButton to={ROUTE_PATHS.booking} variant="primary" size="md">
            Rencanakan Perjalanan
          </LinkButton>
          <LinkButton to={ROUTE_PATHS.about} variant="secondary" size="md">
            Kenali WNB
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
