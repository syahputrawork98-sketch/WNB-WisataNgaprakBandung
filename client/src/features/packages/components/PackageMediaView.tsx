import { useState, useEffect } from "react";
import type { PackageMedia } from "../packagesTypes";

type PackageMediaProps = {
  media: PackageMedia;
  className?: string;
  priority?: boolean;
};

export function PackageMediaView({ media, className = "", priority = false }: PackageMediaProps) {
  const [imgSrc, setImgSrc] = useState(media.src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setImgSrc(media.src);
    setErrorCount(0);
  }, [media.src]);

  const handleError = () => {
    if (errorCount === 0) {
      setImgSrc(media.fallbackSrc);
      setErrorCount(1);
    } else if (errorCount === 1) {
      // Placeholder akhir jika primary dan fallback gagal
      setImgSrc("/images/placeholder.svg");
      setErrorCount(2);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imgSrc}
        alt={media.alt}
        onError={handleError}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      {media.illustrationNotice && (
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm select-none">
          Gambar Ilustrasi
        </div>
      )}
    </div>
  );
}
