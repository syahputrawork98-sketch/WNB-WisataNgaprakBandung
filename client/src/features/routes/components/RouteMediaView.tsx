import { useState, useEffect } from "react";
import { Mountain } from "lucide-react";
import type { RouteMedia } from "../routesTypes";
import { MediaFallback } from "@/components/system/MediaFallback";

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
      <MediaFallback
        label={routeId}
        description={regionLabel}
        icon={<Mountain className="w-16 h-16 opacity-50" aria-hidden="true" />}
        className={`border-b border-wnb-border min-h-48 ${className}`}
      />
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
