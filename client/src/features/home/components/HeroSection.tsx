import { ROUTE_PATHS } from "@/routes/routePaths";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { HomeMediaPlaceholder } from "./HomeMediaPlaceholder";

export function HeroSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-muted uppercase">
              Wisata Ngaprak Bandung
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-wide text-wnb-white leading-tight">
              Lebih dari perjalanan. Ini cerita.
            </h1>
          </div>
          <p className="text-base sm:text-lg text-wnb-muted leading-relaxed">
            WNB memperkenalkan pengalaman wisata petualangan menggunakan Land Rover klasik dengan varian Short dan Long di Bandung.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <LinkButton to={ROUTE_PATHS.packages} variant="primary" size="md">
              Jelajahi Paket
            </LinkButton>
            <LinkButton to={ROUTE_PATHS.routes} variant="secondary" size="md">
              Lihat Rute
            </LinkButton>
          </div>
        </div>

        {/* Media */}
        <div className="w-full">
          <HomeMediaPlaceholder aspect="hero" />
        </div>
      </Container>
    </section>
  );
}
