import { ROUTE_PATHS } from "@/routes/routePaths";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";

export function FinalCtaSection() {
  return (
    <section className="bg-wnb-surface-elevated py-16 sm:py-24 border-t border-b border-wnb-border" aria-labelledby="cta-section-title">
      <Container className="flex flex-col items-center text-center gap-6 max-w-4xl">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-muted uppercase">
          Rencanakan Perjalanan
        </span>
        <h2 id="cta-section-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-wide text-wnb-white leading-tight">
          Siapkan petualangan Anda bersama WNB
        </h2>
        <p className="text-sm sm:text-base text-wnb-muted leading-relaxed max-w-2xl">
          Buka halaman booking untuk menyiapkan informasi perjalanan. Pengiriman melalui WhatsApp Click-to-Chat akan diaktifkan setelah nomor resmi dikonfirmasi.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <LinkButton to={ROUTE_PATHS.booking} variant="primary" size="md">
            Buka Halaman Booking
          </LinkButton>
          <LinkButton to={ROUTE_PATHS.about} variant="secondary" size="md">
            Pelajari WNB
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
