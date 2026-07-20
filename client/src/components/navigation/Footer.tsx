import { Link } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { Container } from "../common/Container";
import { NAVIGATION_ITEMS } from "./navigationItems";
import { BrandLogo } from "../brand/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-wnb-border bg-wnb-surface py-12">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-4 items-start">
          <BrandLogo className="h-7 sm:h-8 w-auto" />
          <p className="text-sm text-wnb-muted leading-relaxed">
            Petualangan Land Rover klasik untuk menjelajahi sisi berbeda Bandung.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-wnb-white">
            Navigasi
          </h2>
          <nav aria-label="Navigasi footer" className="flex flex-col gap-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-wnb-muted hover:text-wnb-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA & Info Column */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-wnb-white">
            Reservasi
          </h2>
          <div className="flex flex-col items-start gap-4">
            <Link
              to={ROUTE_PATHS.booking}
              className="text-sm text-wnb-white underline underline-offset-4 hover:text-wnb-muted transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus"
            >
              Rencanakan Perjalanan
            </Link>
            <p className="text-xs text-wnb-subtle italic max-w-xs">
              Diskusikan karakter peserta dan pengalaman yang ingin direncanakan bersama WNB.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
