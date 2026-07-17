type HomeMediaPlaceholderProps = {
  label?: string;
  aspect?: "hero" | "landscape";
  className?: string;
};

export function HomeMediaPlaceholder({
  label = "Aset foto resmi WNB akan ditambahkan",
  aspect = "landscape",
  className = "",
}: HomeMediaPlaceholderProps) {
  const aspectClass = aspect === "hero" ? "min-h-[300px] sm:min-h-[400px] w-full" : "aspect-[16/10] w-full";

  return (
    <div
      role="img"
      aria-label={label}
      className={`wnb-media-pattern border border-wnb-border rounded-wnb-lg flex items-center justify-center p-6 text-center ${aspectClass} ${className}`}
    >
      <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-wnb-muted">
        {label}
      </span>
    </div>
  );
}
