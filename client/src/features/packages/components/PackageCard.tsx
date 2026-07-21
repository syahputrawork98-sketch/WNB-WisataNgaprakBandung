import { Link } from "react-router";
import { Clock, Users } from "lucide-react";
import type { TravelPackage } from "../packagesTypes";
import {
  buildPackagePath,
  getFormattedPriceText,
} from "../packagesData";
import { PackageMediaView } from "./PackageMediaView";

type PackageCardProps = {
  pkg: TravelPackage;
};

export function PackageCard({ pkg }: PackageCardProps) {
  const formattedPrice = getFormattedPriceText(pkg.priceModel);

  return (
    <Link
      to={buildPackagePath(pkg.slug)}
      className="group flex flex-col h-full bg-wnb-surface border border-wnb-border rounded-wnb-lg overflow-hidden transition-all duration-300 hover:border-wnb-focus hover:shadow-wnb-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus"
    >
      {/* Media Thumbnail Header */}
      <div className="h-48 sm:h-56 overflow-hidden border-b border-wnb-border shrink-0">
        <PackageMediaView
          media={pkg.media}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
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

          {/* Target Audience Summary */}
          {pkg.audience && pkg.audience.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {pkg.audience.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wider text-wnb-subtle bg-wnb-black px-2 py-1 rounded border border-wnb-border/60"
                >
                  {item}
                </span>
              ))}
              {pkg.audience.length > 3 && (
                <span className="text-[10px] text-wnb-subtle px-1 py-1">
                  +{pkg.audience.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Key Info: Duration & Capacity */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-wnb-muted py-2 border-t border-wnb-border/50">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-wnb-subtle shrink-0" aria-hidden="true" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-wnb-subtle shrink-0" aria-hidden="true" />
              <span className="truncate">{pkg.capacity}</span>
            </div>
          </div>
        </div>

        {/* Footer / Price & CTA */}
        <div className="mt-6 pt-4 border-t border-wnb-border flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-wnb-subtle font-semibold">
              Harga Estimasi
            </span>
            <span className="text-lg font-bold text-wnb-white">
              {formattedPrice || "Hubungi Kami"}
            </span>
          </div>

          <div className="text-xs font-semibold text-wnb-accent border border-wnb-accent px-4 py-2 rounded transition-colors group-hover:bg-wnb-accent group-hover:text-wnb-black">
            Lihat Detail
          </div>
        </div>
      </div>
    </Link>
  );
}
