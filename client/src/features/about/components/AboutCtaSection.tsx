import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";

export function AboutCtaSection() {
  return (
    <section className="bg-wnb-surface py-20 sm:py-32 relative overflow-hidden" aria-labelledby="about-cta-heading">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-wnb-black to-wnb-surface opacity-50" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        <h2 
          id="about-cta-heading" 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display uppercase tracking-wide text-wnb-white leading-tight"
        >
          Mari merencanakan petualangan Anda bersama WNB.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <LinkButton to={ROUTE_PATHS.packages} variant="primary" size="md">
            Lihat Paket
          </LinkButton>
          <LinkButton to={ROUTE_PATHS.booking} variant="secondary" size="md">
            Rencanakan Perjalanan
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
