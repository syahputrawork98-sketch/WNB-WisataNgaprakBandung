import { useState, useEffect } from "react";
import type { GalleryItem } from "../galleryTypes";

type GalleryMediaViewProps = {
  item: GalleryItem;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
};

export function GalleryMediaView({
  item,
  className = "",
  priority = false,
  objectFit = "cover",
}: GalleryMediaViewProps) {
  const media = item.media;
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
      // Placeholder neutral if both fail
      setErrorCount(2);
    }
  };

  const objectFitClass = objectFit === "cover" ? "object-cover" : "object-contain";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {errorCount === 2 ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-wnb-surface text-wnb-subtle p-6 text-center border-none">
          <p className="text-sm font-medium">Visual WNB belum dapat dimuat</p>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={media.alt}
          onError={handleError}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className={`w-full h-full ${objectFitClass} transition-transform duration-500 hover:scale-105`}
        />
      )}
    </div>
  );
}
