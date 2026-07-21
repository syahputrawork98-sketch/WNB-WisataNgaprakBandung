import type { GalleryFilterKey, GalleryCategoryFilterItem } from "../galleryTypes";

export const GALLERY_CATEGORY_FILTERS: readonly GalleryCategoryFilterItem[] = [
  { key: "semua", label: "Semua" },
  { key: "petualangan-alam", label: "Petualangan & Alam" },
  { key: "kebersamaan-perayaan", label: "Kebersamaan & Perayaan" },
  { key: "camping-aktivitas", label: "Camping & Aktivitas" },
] as const;

type GalleryFilterProps = {
  activeFilter: GalleryFilterKey;
  onFilterChange: (filter: GalleryFilterKey) => void;
};

export function GalleryFilter({ activeFilter, onFilterChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {GALLERY_CATEGORY_FILTERS.map((filter) => {
        const isActive = activeFilter === filter.key;
        return (
          <button
            key={filter.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-wnb-accent focus-visible:ring-offset-2 focus-visible:ring-offset-wnb-black ${
              isActive
                ? "bg-wnb-accent text-wnb-black"
                : "bg-wnb-surface text-wnb-subtle hover:text-white hover:bg-wnb-border"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
