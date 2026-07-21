import type { RouteRegionFilterItem, RouteRegion } from "../routesTypes";

type RouteFilterProps = {
  filters: readonly RouteRegionFilterItem[];
  activeFilter: RouteRegion | "semua";
  onFilterChange: (filterKey: RouteRegion | "semua") => void;
};

export function RouteFilter({ filters, activeFilter, onFilterChange }: RouteFilterProps) {
  return (
    <div 
      className="flex flex-wrap items-center gap-3 w-full"
      role="group"
      aria-label="Filter Rute"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.key;
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onFilterChange(filter.key)}
            aria-pressed={isActive}
            className={`
              px-4 py-2 rounded-wnb-md text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus
              ${
                isActive
                  ? "bg-wnb-accent text-wnb-black shadow-wnb-glow border border-wnb-accent"
                  : "bg-wnb-surface text-wnb-subtle hover:text-wnb-white hover:border-wnb-muted border border-wnb-border"
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
