import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { LinkButton } from "../common/LinkButton";
import { NAVIGATION_ITEMS } from "./navigationItems";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, location.search, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close menu when Escape key is pressed (only when open)
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close menu when viewport shifts to desktop to prevent body locking
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        onClose();
      }
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    // Initial check
    if (mediaQuery.matches) {
      onClose();
    }
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `block text-lg font-semibold uppercase tracking-wider py-3 px-4 rounded-wnb-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3 ${
      isActive ? "text-wnb-white bg-wnb-surface-elevated" : "text-wnb-muted hover:text-wnb-white hover:bg-wnb-surface/50"
    }`;

  return (
    <div
      id="mobile-navigation"
      className="md:hidden fixed inset-x-0 bottom-0 top-[73px] bg-wnb-black/98 border-t border-wnb-border z-45 flex flex-col justify-between py-8 px-6 overflow-y-auto"
    >
      <nav aria-label="Navigasi utama mobile" className="flex flex-col gap-2">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end ?? false}
            className={activeClass}
            onClick={onClose}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col gap-4 mt-8">
        <LinkButton
          to={ROUTE_PATHS.booking}
          size="lg"
          variant="primary"
          className="w-full text-center"
          onClick={onClose}
        >
          Booking Sekarang
        </LinkButton>
      </div>
    </div>
  );
}
