import { Link } from "react-router";
import type { ExploreItem } from "../homeTypes";
import { EditorialImage } from "./EditorialImage";

type ExploreCardProps = {
  item: ExploreItem;
};

export function ExploreCard({ item }: ExploreCardProps) {
  const IconComponent = item.icon;

  return (
    <Link
      to={item.path}
      className="group relative block overflow-hidden rounded-wnb-lg border border-wnb-border bg-wnb-black shadow-wnb-card min-h-[300px] h-[340px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3 hover:border-wnb-border-strong transition-colors duration-300"
    >
      {/* Background Image with Zoom on Hover */}
      <div className="absolute inset-0 z-0">
        <EditorialImage
          src={item.media.src}
          alt=""
          className="w-full h-full border-none rounded-none"
          imageClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
          illustrationNotice={item.media.illustrationNotice ?? false}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-wnb-black via-wnb-black/60 to-transparent z-10" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 gap-3">
        {/* Header: Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-wnb-surface/90 border border-wnb-border rounded-wnb-md flex items-center justify-center text-wnb-white shadow-md">
            <IconComponent className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold font-display uppercase tracking-wide text-wnb-white">
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-wnb-muted leading-relaxed">
          {item.description}
        </p>

        {/* Link / CTA simulation */}
        <div className="pt-2 border-t border-wnb-border/30 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-wnb-white transition-colors duration-200 group-hover:text-wnb-muted">
          <span>{item.linkLabel}</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
