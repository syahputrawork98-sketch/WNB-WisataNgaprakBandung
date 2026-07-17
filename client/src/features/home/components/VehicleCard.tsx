import type { VehicleItem } from "../homeTypes";

type VehicleCardProps = {
  vehicle: VehicleItem;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const isShort = vehicle.variant === "short";
  const numLabel = isShort ? "01" : "02";

  return (
    <article className="relative overflow-hidden border border-wnb-border bg-wnb-surface rounded-wnb-lg p-8 sm:p-10 flex flex-col gap-8 shadow-wnb-card transition-all duration-300 hover:border-wnb-border-strong group">
      {/* Huge Typographic Watermark Background */}
      <div
        className="absolute right-4 bottom-4 text-9xl sm:text-[10rem] font-bold font-mono text-wnb-border/10 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
        aria-hidden="true"
      >
        {vehicle.technicalLabel}
      </div>

      {/* Header section with Editorial Number & Badge */}
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-wnb-subtle tracking-widest">
            {numLabel}
          </span>
          <span className="inline-block px-3 py-1 text-xs font-bold font-mono tracking-wider uppercase bg-wnb-surface-elevated text-wnb-muted border border-wnb-border rounded-wnb-sm">
            {vehicle.technicalLabel}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wide text-wnb-white">
          {vehicle.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-wnb-muted leading-relaxed relative z-10 max-w-xl">
        {vehicle.description}
      </p>

      {/* Confirmed facts */}
      <div className="pt-6 border-t border-wnb-border/50 relative z-10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-wnb-white mb-4">
          Informasi Terkonfirmasi
        </h4>
        <ul className="flex flex-col gap-3">
          {vehicle.confirmedFacts.map((fact) => (
            <li
              key={fact}
              className="text-xs sm:text-sm text-wnb-muted flex items-start gap-2.5"
            >
              <span className="text-wnb-subtle select-none" aria-hidden="true">—</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
