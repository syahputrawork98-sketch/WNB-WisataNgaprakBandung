import { useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, PackageOpen } from "lucide-react";
import { Link } from "react-router";
import { buildPackageDetailPath } from "@/routes/routePaths";
import type { GalleryItem } from "../galleryTypes";
import { GalleryMediaView } from "./GalleryMediaView";

type GalleryLightboxProps = {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Body scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation & Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Initial focus on close button
  useEffect(() => {
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, []);

  // Focus trap
  const handleTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;

    if (!dialogRef.current) return;
    const focusableElements = dialogRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!currentItem) return null;

  const totalItems = items.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalItems - 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-description"
      ref={dialogRef}
      onKeyDown={handleTab}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl h-full flex flex-col pointer-events-none">
        
        {/* Top bar */}
        <div className="flex justify-between items-center py-4 pointer-events-auto shrink-0">
          <div className="text-white text-sm font-medium">
            <span className="opacity-70">{currentIndex + 1} dari {totalItems}</span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup lightbox"
            className="p-2 bg-wnb-surface/20 text-white rounded-full hover:bg-wnb-accent hover:text-wnb-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wnb-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Media Container */}
        <div className="flex-1 min-h-0 relative flex items-center justify-center bg-black/50 rounded-xl overflow-hidden pointer-events-auto">
          <div className="absolute inset-0 p-2 sm:p-4 pb-20 sm:pb-4 flex flex-col justify-center">
             <GalleryMediaView item={currentItem} objectFit="contain" className="w-full h-full rounded" priority />
          </div>

          <div className="absolute top-4 left-4 bg-black/70 text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-sm select-none">
            {currentItem.sourceLabel}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            aria-label="Media sebelumnya"
            className={`absolute left-2 sm:left-6 p-2 rounded-full backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-wnb-accent ${
              isFirst
                ? "bg-black/20 text-white/20 cursor-not-allowed"
                : "bg-black/60 text-white hover:bg-wnb-accent hover:text-wnb-black cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-8 h-8" aria-hidden="true" />
          </button>
          
          <button
            type="button"
            onClick={onNext}
            disabled={isLast}
            aria-label="Media berikutnya"
            className={`absolute right-2 sm:right-6 p-2 rounded-full backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-wnb-accent ${
              isLast
                ? "bg-black/20 text-white/20 cursor-not-allowed"
                : "bg-black/60 text-white hover:bg-wnb-accent hover:text-wnb-black cursor-pointer"
            }`}
          >
            <ChevronRight className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>

        {/* Bottom bar / Info */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4 pointer-events-auto shrink-0 bg-wnb-black/80 p-4 rounded-xl border border-wnb-border/50">
          <div className="flex-1">
            <h2 id="lightbox-title" className="text-lg font-bold text-white mb-1">
              {currentItem.title}
            </h2>
            <p id="lightbox-description" className="text-sm text-wnb-subtle line-clamp-3 sm:line-clamp-none">
              {currentItem.caption}
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <Link
              to={buildPackageDetailPath(currentItem.packageSlug)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-wnb-accent text-wnb-black text-sm font-semibold rounded hover:bg-wnb-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
            >
              <PackageOpen className="w-4 h-4" aria-hidden="true" />
              <span>Lihat Detail Paket</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
