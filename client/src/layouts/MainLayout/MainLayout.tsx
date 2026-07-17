import { NavLink, Outlet } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";

export function MainLayout() {
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
      isActive ? "text-wnb-white border-b-2 border-wnb-white pb-1" : "text-wnb-muted hover:text-wnb-white"
    }`;

  return (
    <div className="flex flex-col min-h-screen bg-wnb-black text-wnb-white">
      {/* Header / Navigasi */}
      <header className="border-b border-wnb-border sticky top-0 bg-wnb-black/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <NavLink to={ROUTE_PATHS.home} className="text-xl font-bold uppercase tracking-widest text-wnb-white">
            WNB
          </NavLink>
          
          <nav className="flex flex-wrap items-center gap-6">
            <NavLink to={ROUTE_PATHS.home} end className={activeClass}>
              Home
            </NavLink>
            <NavLink to={ROUTE_PATHS.about} className={activeClass}>
              About
            </NavLink>
            <NavLink to={ROUTE_PATHS.packages} className={activeClass}>
              Paket
            </NavLink>
            <NavLink to={ROUTE_PATHS.routes} className={activeClass}>
              Rute
            </NavLink>
            <NavLink to={ROUTE_PATHS.gallery} className={activeClass}>
              Gallery
            </NavLink>
            <NavLink to={ROUTE_PATHS.booking} className={activeClass}>
              Booking
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-wnb-border bg-wnb-surface/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-wnb-muted uppercase tracking-wider">
            WNB — Fondasi frontend MVP
          </p>
        </div>
      </footer>
    </div>
  );
}
