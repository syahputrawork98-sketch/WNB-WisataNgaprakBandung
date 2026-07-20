import { ROUTE_PATHS } from "@/routes/routePaths";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { EditorialImage } from "./EditorialImage";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[78vh] flex items-center py-20 border-b border-wnb-border overflow-hidden bg-wnb-black"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <EditorialImage
          src="/images/home/hero-adventure.webp"
          alt="Foto ilustrasi Land Rover klasik melintasi jalur berlumpur"
          className="w-full h-full rounded-none border-none"
          imageClassName="w-full h-full object-cover"
          priority={true}
          illustrationNotice={true}
        />
        {/* Dark overlay with left-to-right gradient on desktop, bottom-to-top on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-wnb-black via-wnb-black/80 to-transparent z-10" />
      </div>

      {/* Content */}
      <Container className="relative z-20 w-full">
        <div className="flex flex-col gap-6 max-w-2xl text-left bg-wnb-black/40 md:bg-transparent p-6 md:p-0 rounded-wnb-lg backdrop-blur-sm md:backdrop-blur-none border border-wnb-border/30 md:border-none">
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-muted uppercase">
              Land Rover Classic Adventure — Bandung
            </span>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-wide text-wnb-white leading-tight"
            >
              Lebih dari perjalanan. Ini cerita.
            </h1>
          </div>
          <p className="text-base sm:text-lg text-wnb-muted leading-relaxed">
            WNB mengajak Anda menjelajahi sisi berbeda alam Bandung bersama Land Rover klasik, melalui pengalaman yang dapat disesuaikan dengan karakter perjalanan Anda.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <LinkButton to={ROUTE_PATHS.packages} variant="primary" size="md">
              Jelajahi Pengalaman
            </LinkButton>
            <LinkButton to={ROUTE_PATHS.routes} variant="secondary" size="md">
              Kenali Rute
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
