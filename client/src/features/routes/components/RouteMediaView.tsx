import { useState, useEffect } from "react";
import { Mountain } from "lucide-react";
import type { RouteMedia } from "../routesTypes";

type RouteMediaViewProps = {
  media: RouteMedia;
  routeId: string;
  regionLabel: string;
  className?: string;
  priority?: boolean;
};

export function RouteMediaView({ 
  media, 
  routeId, 
  regionLabel, 
  className = "", 
  priority = false 
}: RouteMediaViewProps) {
  const [imgSrc, setImgSrc] = useState(media.src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setImgSrc(media.src);
    setErrorCount(0);
  }, [media.src]);

  const handleError = () => {
    if (errorCount === 0) {
      if (media.fallbackSrc) {
        setImgSrc(media.fallbackSrc);
        setErrorCount(1);
      } else {
        setErrorCount(2);
      }
    } else if (errorCount === 1) {
      setErrorCount(2);
    }
  };

  const showFallback = !imgSrc || errorCount === 2;

  if (showFallback) {
    return (
      <div className={`relative flex h-full min-h-48 items-end overflow-hidden bg-wnb-surface border-b border-wnb-border ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Mountain className="w-24 h-24 text-wnb-white" aria-hidden="true" />
        </div>
        <div className="relative z-10 w-full p-4 flex items-center justify-between bg-gradient-to-t from-wnb-black/90 to-transparent">
          <span className="text-sm font-bold font-display uppercase tracking-wider text-wnb-white">
            {routeId}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-wnb-subtle bg-wnb-black/60 px-2 py-1 rounded backdrop-blur-sm border border-wnb-border/50">
            {regionLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imgSrc}
        alt={media.alt}
        onError={handleError}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
