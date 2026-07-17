type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  headingLevel: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const descAlignClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-muted uppercase">
          {eyebrow}
        </span>
      )}
      <Tag className="text-2xl sm:text-3xl font-bold font-display tracking-wide uppercase text-wnb-white">
        {title}
      </Tag>
      {description && (
        <p className={`text-sm sm:text-base text-wnb-subtle leading-relaxed max-w-2xl mt-1 ${descAlignClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}
