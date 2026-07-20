import { Clock, Users, Check } from "lucide-react";
import { LinkButton } from "@/components/common/LinkButton";
import { buildPackageDetailPath } from "@/routes/routePaths";
import type { TravelPackage } from "../packagesTypes";
import { getFormattedPriceText } from "../packagesData";

type PackageCardProps = {
  pkg: TravelPackage;
};

export function PackageCard({ pkg }: PackageCardProps) {
  const topInclusions = pkg.inclusions.slice(0, 3);

  return (
    <article className="bg-wnb-surface border border-wnb-border rounded-wnb-lg p-6 flex flex-col justify-between hover:border-wnb-border-strong transition-colors duration-200 group">
      <div className="flex flex-col gap-4">
        {/* Category & Variant Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-wnb-accent bg-wnb-black px-2.5 py-1 rounded border border-wnb-border">
            {pkg.categoryLabel}
          </span>
          <span className="text-[11px] text-wnb-subtle truncate max-w-[150px]">
            {pkg.variant}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-wnb-white group-hover:text-wnb-muted transition-colors duration-200">
          {pkg.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-wnb-muted leading-relaxed line-clamp-3">
          {pkg.shortDescription}
        </p>

        {/* Key Info: Duration & Capacity */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-wnb-muted py-2 border-y border-wnb-border/50">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-wnb-subtle shrink-0" aria-hidden="true" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-wnb-subtle shrink-0" aria-hidden="true" />
            <span className="truncate">{pkg.capacity}</span>
          </div>
        </div>

        {/* Inclusions Highlights */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-wnb-white">
            Termasuk:
          </span>
          <ul className="flex flex-col gap-1 text-xs text-wnb-muted">
            {topInclusions.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-wnb-white shrink-0" aria-hidden="true" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Price & CTA */}
      <div className="mt-6 pt-4 border-t border-wnb-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-wnb-subtle uppercase tracking-wider">
            Harga Publik
          </span>
          <span className="text-base font-bold text-wnb-white">
            {getFormattedPriceText(pkg)}
          </span>
        </div>

        <LinkButton
          to={buildPackageDetailPath(pkg.slug)}
          size="sm"
          variant="secondary"
          className="w-full sm:w-auto text-center"
        >
          Lihat Detail
        </LinkButton>
      </div>
    </article>
  );
}
