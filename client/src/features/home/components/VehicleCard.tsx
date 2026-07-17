import type { VehicleItem } from "../homeTypes";
import { HomeMediaPlaceholder } from "./HomeMediaPlaceholder";

type VehicleCardProps = {
  vehicle: VehicleItem;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const isShort = vehicle.variant === "short";

  return (
    <article className="border border-wnb-border bg-wnb-surface rounded-wnb-lg p-6 sm:p-8 flex flex-col gap-6 shadow-wnb-card transition-colors duration-200 hover:border-wnb-border-strong">
      {/* Aspect Ratio Landscape Image Placeholder */}
      <HomeMediaPlaceholder label={`Foto Land Rover ${isShort ? "Short" : "Long"} WNB akan ditambahkan`} aspect="landscape" />

      {/* Content wrapper */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold font-display uppercase tracking-wide text-wnb-white">
            {vehicle.name}
          </h3>
          <span className="inline-block px-2.5 py-1 text-xs font-bold font-mono tracking-wider uppercase bg-wnb-surface-elevated text-wnb-muted border border-wnb-border rounded-wnb-sm">
            {vehicle.technicalLabel}
          </span>
        </div>

        <p className="text-sm text-wnb-muted leading-relaxed">
          {vehicle.description}
        </p>

        {/* Fact list */}
        <div className="pt-4 border-t border-wnb-border/50">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-wnb-white mb-2">
            Spesifikasi Terkonfirmasi
          </h4>
          <ul className="flex flex-col gap-2">
            {vehicle.confirmedFacts.map((fact) => (
              <li
                key={fact}
                className="text-xs text-wnb-muted flex items-start gap-2"
              >
                <span className="text-wnb-subtle select-none">—</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
