import { useState, useMemo, useRef } from "react";
import { Info } from "lucide-react";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";

import { GalleryFilter } from "@/features/gallery/components/GalleryFilter";
import { GalleryCard } from "@/features/gallery/components/GalleryCard";
import { GalleryLightbox } from "@/features/gallery/components/GalleryLightbox";
import { getGalleryItemsByCategory } from "@/features/gallery/galleryData";
import { EmptyState } from "@/components/system/EmptyState";
import type { GalleryFilterKey, GalleryItem } from "@/features/gallery/galleryTypes";

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterKey>("semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxTriggerRef = useRef<HTMLButtonElement | null>(null);

  const displayedItems = useMemo(() => {
    return getGalleryItemsByCategory(activeFilter);
  }, [activeFilter]);

  const handleOpenLightbox = (item: GalleryItem, trigger: HTMLButtonElement) => {
    const idx = displayedItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      lightboxTriggerRef.current = trigger;
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    const trigger = lightboxTriggerRef.current;
    setLightboxIndex(null);
    if (trigger) {
      window.requestAnimationFrame(() => trigger.focus());
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < displayedItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <Container className="flex flex-col gap-12 sm:gap-16">
        
        {/* 1. Hero Galeri */}
        <section aria-labelledby="gallery-hero-heading" className="max-w-3xl">
          <div className="flex flex-col gap-2 mb-2 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-wnb-accent">
              Galeri WNB
            </span>
            <h1 id="gallery-hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-wnb-white">
              Gambaran Visual Pengalaman WNB
            </h1>
          </div>
          <p className="mt-6 text-base sm:text-lg text-wnb-subtle leading-relaxed">
            Jelajahi gambaran visual Paket, kebersamaan, petualangan,
            dan aktivitas WNB. Media awal pada halaman ini merupakan
            ilustrasi pengalaman yang membantu pengunjung memahami suasana
            perjalanan sebelum merencanakannya bersama tim WNB.
          </p>
        </section>

        {/* 2. Pemberitahuan Media Ilustrasi */}
        <section aria-label="Tentang media Galeri" className="bg-wnb-surface border border-wnb-border rounded-xl p-5 sm:p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="text-base font-semibold text-white mb-2">Tentang media Galeri</h2>
            <p className="text-sm text-wnb-subtle leading-relaxed">
              Galeri versi awal menampilkan gambar ilustrasi untuk menggambarkan
              karakter pengalaman WNB. Dokumentasi asli akan ditambahkan setelah
              melalui pemeriksaan dan persetujuan publikasi.
            </p>
          </div>
        </section>

        {/* 3 & 4. Filter & Grid */}
        <section aria-labelledby="gallery-grid-heading" className="flex flex-col gap-8">
          <h2 id="gallery-grid-heading" className="sr-only">Daftar Visual</h2>
          
          <GalleryFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {displayedItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onClick={handleOpenLightbox}
                />
              ))}
            </div>
          ) : (
            <div className="py-8">
              <EmptyState
                title="Visual Belum Tersedia"
                description="Media Galeri untuk kategori ini sedang dipersiapkan."
                actionLabel="Tampilkan Semua"
                onAction={() => setActiveFilter("semua")}
              />
            </div>
          )}
        </section>

        {/* 5. CTA Penutup */}
        <section aria-labelledby="gallery-cta-heading" className="bg-wnb-surface border border-wnb-border rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 mt-8">
          <h2 id="gallery-cta-heading" className="text-2xl sm:text-3xl font-bold text-white">
            Temukan Gambaran Perjalanan yang Sesuai
          </h2>
          <p className="text-wnb-subtle text-base sm:text-lg max-w-2xl">
            Setiap perjalanan WNB dapat disesuaikan dengan peserta, Paket,
            Rute, durasi, dan kebutuhan kegiatan. Lanjutkan ke halaman
            perencanaan untuk menyusun pengalaman bersama tim WNB.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <LinkButton
              to={ROUTE_PATHS.booking}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Rencanakan Perjalanan
            </LinkButton>
            <LinkButton
              to={ROUTE_PATHS.packages}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Lihat Paket WNB
            </LinkButton>
            <LinkButton
              to={ROUTE_PATHS.routes}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Jelajahi Rute
            </LinkButton>
          </div>
        </section>

      </Container>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={displayedItems}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
