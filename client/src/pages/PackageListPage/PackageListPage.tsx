import { useState } from "react";
import { Container } from "@/components/common/Container";
import type { PackageCategory } from "@/features/packages/packagesTypes";
import {
  CATEGORY_FILTERS,
  getPackagesByCategory,
} from "@/features/packages/packagesData";
import { PackageFilter } from "@/features/packages/components/PackageFilter";
import { PackageCard } from "@/features/packages/components/PackageCard";
import { SpecialExperienceSection } from "@/features/packages/components/SpecialExperienceSection";
import { PackageProcessSection } from "@/features/packages/components/PackageProcessSection";

export function PackageListPage() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("semua");

  const filteredPackages = getPackagesByCategory(activeCategory);

  return (
    <main id="main-content" className="py-12 sm:py-16">
      <Container>
        {/* Page Hero */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-px bg-wnb-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-accent uppercase">
              Paket WNB
            </span>
            <span className="w-8 sm:w-12 h-px bg-wnb-accent" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-wnb-white leading-tight">
            Pilihan Petualangan Sesuai Karakter & Ritme Perjalanan
          </h1>

          <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
            Jelajahi keindahan alam dan trek lintasan Bandung menggunakan Land Rover klasik. Seluruh pilihan perjalanan disajikan secara transparan dan dapat disesuaikan dengan kebutuhan Anda, keluarga, maupun rombongan.
          </p>

          <p className="text-xs text-wnb-subtle italic bg-wnb-surface border border-wnb-border p-3 rounded-wnb-md mt-2">
            Harga akhir disesuaikan dengan kebutuhan perjalanan, jumlah peserta, pilihan aktivitas, rute, dan ketersediaan unit.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <PackageFilter
            categories={CATEGORY_FILTERS}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Regular Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-wnb-muted">
            Tidak ada paket pada kategori ini.
          </div>
        )}

        {/* Special Experience Teaser (Buka Jalur) */}
        <SpecialExperienceSection />

        {/* Process & Closing Section */}
        <PackageProcessSection />
      </Container>
    </main>
  );
}
