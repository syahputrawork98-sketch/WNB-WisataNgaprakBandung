import { Link } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { Container } from "../common/Container";
import { NAVIGATION_ITEMS } from "./navigationItems";

export function Footer() {
  return (
    <footer className="border-t border-wnb-border bg-wnb-surface py-12">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold font-display uppercase tracking-widest text-wnb-white">
            WNB
          </span>
          <p className="text-sm text-wnb-muted leading-relaxed">
            Fondasi aplikasi wisata petualangan Land Rover klasik di Bandung.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-wnb-white">
            Navigasi
          </h4>
          <nav className="flex flex-col gap-2">
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
          <h4 className="text-xs font-semibold uppercase tracking-widest text-wnb-white">
            Reservasi
          </h4>
          <div className="flex flex-col items-start gap-4">
            <Link
              to={ROUTE_PATHS.booking}
              className="text-sm text-wnb-white underline underline-offset-4 hover:text-wnb-muted transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus"
            >
              Rencanakan Perjalanan
            </Link>
            <p className="text-xs text-wnb-subtle italic">
              Informasi kontak resmi akan ditambahkan setelah dikonfirmasi.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
