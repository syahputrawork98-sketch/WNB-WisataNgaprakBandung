import { useState, useCallback } from "react";
import { Outlet } from "react-router";
import { SkipLink } from "@/components/common/SkipLink";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { Footer } from "@/components/navigation/Footer";

export function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((previousState) => !previousState);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-wnb-black text-wnb-text">
      <SkipLink />
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
