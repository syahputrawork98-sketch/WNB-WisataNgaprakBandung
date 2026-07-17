import { Link } from "react-router";
import type { ExploreItem } from "../homeTypes";

type ExploreCardProps = {
  item: ExploreItem;
};

export function ExploreCard({ item }: ExploreCardProps) {
  const IconComponent = item.icon;

  return (
    <div className="border border-wnb-border bg-wnb-surface rounded-wnb-lg p-6 sm:p-8 flex flex-col gap-6 shadow-wnb-card transition-colors duration-200 hover:border-wnb-border-strong">
      {/* Icon Wrapper */}
      <div className="w-12 h-12 bg-wnb-surface-elevated border border-wnb-border rounded-wnb-md flex items-center justify-center">
        <IconComponent className="w-6 h-6 text-wnb-white" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col gap-2">
        <h3 className="text-lg font-bold font-display uppercase tracking-wide text-wnb-white">
          {item.title}
        </h3>
        <p className="text-sm text-wnb-muted leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Link Action */}
      <div className="pt-2 border-t border-wnb-border/50">
        <Link
          to={item.path}
          className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-wnb-white hover:text-wnb-muted underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3 transition-colors duration-200"
        >
          {item.linkLabel} <span className="ml-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
