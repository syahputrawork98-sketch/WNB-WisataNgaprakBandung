import { useState } from "react";
import type { PackageMedia } from "../packagesTypes";

type PackageMediaProps = {
  media: PackageMedia;
  className?: string;
};

export function PackageMediaView({ media, className = "" }: PackageMediaProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      e.currentTarget.src = media.fallbackSrc;
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={hasError ? media.fallbackSrc : media.src}
        alt={media.alt}
        onError={handleError}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      {media.illustrationNotice && (
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm select-none">
          Gambar Ilustrasi
        </div>
      )}
    </div>
  );
}
