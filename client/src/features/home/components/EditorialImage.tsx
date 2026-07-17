import type { ImgHTMLAttributes } from "react";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  illustrationNotice?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "priority">;

export function EditorialImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  objectPosition = "center",
  priority = false,
  illustrationNotice = false,
  ...props
}: EditorialImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-wnb-lg border border-wnb-border bg-wnb-surface ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" } : {})}
        className={`w-full h-full object-cover transition-transform duration-300 ${imageClassName}`}
        style={{ objectPosition }}
        {...props}
      />
      {illustrationNotice && (
        <div className="absolute bottom-3 left-3 right-3 bg-wnb-black/80 backdrop-blur-sm border border-wnb-border px-2.5 py-1.5 rounded-wnb-sm text-[10px] sm:text-xs font-medium text-wnb-muted tracking-wide text-center">
          Foto ilustrasi — bukan dokumentasi armada WNB
        </div>
      )}
    </div>
  );
}
