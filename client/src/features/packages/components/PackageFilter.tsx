import type { PackageCategory, CategoryFilterItem } from "../packagesTypes";

type PackageFilterProps = {
  categories: readonly CategoryFilterItem[];
  activeCategory: PackageCategory;
  onSelectCategory: (category: PackageCategory) => void;
};

export function PackageFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: PackageFilterProps) {
  return (
    <nav
      aria-label="Filter kategori paket"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.key;
        return (
          <button
            key={cat.key}
            type="button"
            onClick={() => onSelectCategory(cat.key)}
            aria-pressed={isActive}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-wnb-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-2 ${
              isActive
                ? "bg-wnb-white text-wnb-black font-bold shadow-wnb-card"
                : "bg-wnb-surface text-wnb-muted hover:text-wnb-white hover:bg-wnb-surface-elevated border border-wnb-border"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
