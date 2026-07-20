import type { RefObject } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { BrandLogo } from "../brand/BrandLogo";
import { LinkButton } from "../common/LinkButton";
import { NAVIGATION_ITEMS } from "./navigationItems";

type NavbarProps = {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  mobileMenuButtonRef: RefObject<HTMLButtonElement | null>;
};

export function Navbar({
  isMobileMenuOpen,
  onMobileMenuToggle,
  mobileMenuButtonRef,
}: NavbarProps) {
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold uppercase tracking-wider transition-colors duration-200 border-b-2 pb-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3 ${
      isActive ? "border-wnb-white text-wnb-white" : "border-transparent text-wnb-muted hover:text-wnb-white"
    }`;

  return (
    <header className="border-b border-wnb-border sticky top-0 bg-wnb-black/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Official Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end ?? false}
              className={activeClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LinkButton to={ROUTE_PATHS.booking} size="sm" variant="primary">
              Rencanakan Perjalanan
            </LinkButton>
          </div>

          <button
            type="button"
            ref={mobileMenuButtonRef}
            onClick={onMobileMenuToggle}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-wnb-muted hover:text-wnb-white hover:bg-wnb-surface-elevated transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3"
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
