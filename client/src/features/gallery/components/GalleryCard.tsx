import { Camera } from "lucide-react";
import type { GalleryItem } from "../galleryTypes";
import { GalleryMediaView } from "./GalleryMediaView";

type GalleryCardProps = {
  item: GalleryItem;
  onClick: (item: GalleryItem, trigger: HTMLButtonElement) => void;
};

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <div className="group relative flex flex-col bg-wnb-surface border border-wnb-border rounded-lg overflow-hidden transition-all duration-300 hover:border-wnb-accent/50 focus-within:ring-2 focus-within:ring-wnb-accent focus-within:ring-offset-2 focus-within:ring-offset-wnb-black">
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-wnb-black overflow-hidden">
        <GalleryMediaView item={item} className="w-full h-full" />
        
        {/* Label Ilustrasi */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-medium px-2 py-1 rounded backdrop-blur-sm shadow-sm select-none">
          {item.sourceLabel}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 gap-2">
        <div className="flex items-center gap-1.5 text-xs text-wnb-accent font-medium uppercase tracking-wider">
          <span>{item.categoryLabel}</span>
        </div>
        
        <h3 className="text-base font-semibold text-white line-clamp-1">
          {item.title}
        </h3>
        
        <p className="text-sm text-wnb-subtle line-clamp-2 mt-1 mb-4 flex-grow">
          {item.caption}
        </p>

        {/* Action Button */}
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={`Buka visual ${item.title}`}
          onClick={(event) => onClick(item, event.currentTarget)}
          className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-wnb-black border border-wnb-border text-sm font-medium text-white rounded transition-colors group-hover:bg-wnb-accent group-hover:text-wnb-black group-hover:border-wnb-accent focus:outline-none"
        >
          <Camera className="w-4 h-4" aria-hidden="true" />
          <span>Lihat Visual</span>
        </button>
      </div>
    </div>
  );
}
