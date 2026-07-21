import { Link } from "react-router";
import { Clock, MapPin, Info } from "lucide-react";
import type { TravelRoute } from "../routesTypes";
import { buildRouteDetailPath } from "@/routes/routePaths";
import { RouteMediaView } from "./RouteMediaView";

type RouteCardProps = {
  route: TravelRoute;
};

export function RouteCard({ route }: RouteCardProps) {
  const isSpecialRoute = route.availabilityStatus === "special-consultation";

  return (
    <Link
      to={buildRouteDetailPath(route.slug)}
      className="group flex flex-col h-full bg-wnb-surface border border-wnb-border rounded-wnb-lg overflow-hidden transition-all duration-300 hover:border-wnb-focus hover:shadow-wnb-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus"
    >
      <div className="h-48 sm:h-56 overflow-hidden shrink-0">
        <RouteMediaView
          media={route.media}
          routeId={route.id}
          regionLabel={route.regionLabel}
          className="w-full h-full"
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-wnb-accent bg-wnb-black px-2.5 py-1 rounded border border-wnb-border">
              {route.area}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-wnb-white group-hover:text-wnb-muted transition-colors duration-200">
            {route.name}
          </h3>
          
          <span className="text-xs font-medium text-wnb-white bg-wnb-surface border border-wnb-border rounded px-2.5 py-1 w-fit">
            {route.experienceLabel}
          </span>

          <p className="text-sm text-wnb-muted leading-relaxed line-clamp-3 mt-1">
            {route.shortDescription}
          </p>

          <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-wnb-border/50 text-xs text-wnb-muted">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-wnb-subtle shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-wnb-white font-medium">
                  {isSpecialRoute ? "Konsultasi Khusus" : route.duration.dry}
                </span>
                {!isSpecialRoute && (
                  <span className="text-[10px] text-wnb-subtle mt-0.5">
                    *Estimasi indikatif
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-wnb-subtle shrink-0 mt-0.5" aria-hidden="true" />
              <span className="line-clamp-1">{route.meetingPoint}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-wnb-border flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-wnb-subtle">
             <Info className="w-3.5 h-3.5" aria-hidden="true" />
             <span>Tersedia via konfirmasi</span>
          </div>
          <div className="text-xs font-semibold text-wnb-accent border border-wnb-accent px-4 py-2 rounded transition-colors group-hover:bg-wnb-accent group-hover:text-wnb-black whitespace-nowrap">
            Lihat Detail
          </div>
        </div>
      </div>
    </Link>
  );
}
