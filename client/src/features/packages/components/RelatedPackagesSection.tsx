import type { TravelPackage } from "../packagesTypes";
import { PackageCard } from "./PackageCard";

type RelatedPackagesSectionProps = {
  packages: TravelPackage[];
};

export function RelatedPackagesSection({ packages }: RelatedPackagesSectionProps) {
  if (packages.length === 0) return null;

  return (
    <section 
      aria-labelledby="related-packages-heading"
      className="my-16 flex flex-col gap-8 pt-12 border-t border-wnb-border"
    >
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-wnb-accent">
          Rekomendasi Lain
        </span>
        <h2
          id="related-packages-heading"
          className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-wnb-white"
        >
          Pilihan Paket Terkait
        </h2>
        <p className="text-sm text-wnb-muted">
          Jelajahi opsi perjalanan lainnya yang mungkin sesuai dengan ritme dan harapan Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
