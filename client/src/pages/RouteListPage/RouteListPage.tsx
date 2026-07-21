import { useState } from "react";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { CloudRain, Compass, Info, Map } from "lucide-react";
import { ROUTE_REGION_FILTERS, getRoutesByRegion } from "@/features/routes/routesData";
import type { RouteRegion } from "@/features/routes/routesTypes";
import { RouteFilter } from "@/features/routes/components/RouteFilter";
import { RouteCard } from "@/features/routes/components/RouteCard";

export function RouteListPage() {
  const [activeFilter, setActiveFilter] = useState<RouteRegion | "semua">("semua");

  const displayedRoutes = getRoutesByRegion(activeFilter);

  return (
    <div id="main-content" className="py-12 sm:py-16">
      <Container className="flex flex-col gap-16">
        
        {/* 12.1 Hero Daftar Rute */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-wnb-accent">
            Rute WNB
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-wnb-white leading-tight">
            Jelajahi Rute Petualangan WNB
          </h1>
          <p className="text-base sm:text-lg text-wnb-muted leading-relaxed">
            Setiap Rute memiliki suasana, karakter lintasan, dan ritme perjalanan yang berbeda. Pilihan akhir selalu disesuaikan dengan peserta, Paket, cuaca, kondisi jalur, serta hasil konfirmasi WNB.
          </p>
          <div className="flex items-center gap-2 mt-2 p-3 bg-wnb-surface border border-wnb-border/60 rounded-wnb-md text-xs text-wnb-subtle max-w-fit">
            <Info className="w-4 h-4 text-wnb-accent shrink-0" aria-hidden="true" />
            <span>Durasi yang ditampilkan merupakan estimasi indikatif dan dapat berubah mengikuti kondisi perjalanan.</span>
          </div>
        </div>

        {/* 12.2 Cara Memahami Rute */}
        <section aria-labelledby="understanding-routes-heading">
          <h2 id="understanding-routes-heading" className="sr-only">Cara Memahami Rute</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-3">
              <Map className="w-6 h-6 text-wnb-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Wilayah</h3>
              <p className="text-xs text-wnb-muted leading-relaxed">Bandung Utara, Bandung Selatan, atau Rute Khusus.</p>
            </div>
            <div className="p-5 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-3">
              <CloudRain className="w-6 h-6 text-wnb-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Durasi Indikatif</h3>
              <p className="text-xs text-wnb-muted leading-relaxed">Durasi dapat berubah mengikuti cuaca dan kondisi lintasan.</p>
            </div>
            <div className="p-5 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-3">
              <Compass className="w-6 h-6 text-wnb-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Karakter Pengalaman</h3>
              <p className="text-xs text-wnb-muted leading-relaxed">Label publik membantu pengunjung memahami suasana Rute tanpa membuka data teknis internal.</p>
            </div>
            <div className="p-5 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-3">
              <Info className="w-6 h-6 text-wnb-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Konfirmasi WNB</h3>
              <p className="text-xs text-wnb-muted leading-relaxed">Rute final ditentukan setelah kebutuhan perjalanan dan kondisi lapangan dikonfirmasi.</p>
            </div>
          </div>
        </section>

        {/* 12.3 & 12.4 Filter dan Grid Kartu Rute */}
        <section aria-labelledby="routes-list-heading" className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 id="routes-list-heading" className="sr-only">Daftar Pilihan Rute</h2>
            <RouteFilter 
              filters={ROUTE_REGION_FILTERS} 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>

          {displayedRoutes.length === 0 && (
            <div className="p-12 text-center border border-wnb-border rounded-wnb-lg bg-wnb-surface">
              <p className="text-wnb-muted">Tidak ada rute yang ditemukan untuk wilayah ini.</p>
            </div>
          )}
        </section>

        {/* 12.5 Kondisi Musim */}
        <section aria-labelledby="weather-notice-heading" className="p-6 bg-wnb-black border border-wnb-border rounded-wnb-lg flex flex-col sm:flex-row gap-6 items-start">
          <CloudRain className="w-8 h-8 text-wnb-accent shrink-0 mt-1" aria-hidden="true" />
          <div className="flex flex-col gap-3">
            <h2 id="weather-notice-heading" className="text-base font-bold font-display uppercase tracking-wider text-wnb-white">
              Pengaruh Cuaca & Kondisi Musim
            </h2>
            <p className="text-sm text-wnb-muted leading-relaxed max-w-4xl">
              Hujan dapat membuat jalur lebih licin, berlumpur, berkabut, atau membutuhkan waktu perjalanan lebih panjang. WNB melakukan pemeriksaan sebelum keberangkatan dan dapat menyesuaikan, mengalihkan, menunda, atau membatalkan penggunaan Rute apabila kondisi tidak memungkinkan.
            </p>
          </div>
        </section>

        {/* 12.6 Hubungan Rute dan Paket */}
        <section aria-labelledby="route-package-relation-heading" className="py-10 border-t border-b border-wnb-border flex flex-col gap-6 text-center max-w-3xl mx-auto items-center">
          <h2 id="route-package-relation-heading" className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-wnb-white">
            Merangkai Rute ke dalam Perjalanan
          </h2>
          <p className="text-base text-wnb-muted leading-relaxed">
            Pilihan Rute merupakan bagian dari perencanaan Paket WNB. Rute akhir disesuaikan dengan jenis perjalanan, jumlah peserta, durasi, aktivitas, cuaca, dan kondisi jalur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
             <LinkButton to={ROUTE_PATHS.packages} variant="secondary" size="md">
               Lihat Daftar Paket
             </LinkButton>
             <LinkButton to={ROUTE_PATHS.booking} variant="primary" size="md">
               Rencanakan Perjalanan
             </LinkButton>
          </div>
        </section>

        {/* 12.7 Cara Merencanakan Perjalanan */}
        <section aria-labelledby="planning-steps-heading" className="flex flex-col gap-8">
          <h2 id="planning-steps-heading" className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-wnb-white text-center">
            Cara Menentukan Rute Anda
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-wnb-surface border border-wnb-border text-wnb-accent font-display font-bold text-lg">
                1
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Pilih Suasana</h3>
              <p className="text-sm text-wnb-muted leading-relaxed">Pilih suasana atau karakter Rute yang menarik bagi Anda.</p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-wnb-surface border border-wnb-border text-wnb-accent font-display font-bold text-lg">
                2
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Tentukan Kebutuhan</h3>
              <p className="text-sm text-wnb-muted leading-relaxed">Tentukan peserta, kebutuhan, Paket, dan tanggal perjalanan.</p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-wnb-surface border border-wnb-border text-wnb-accent font-display font-bold text-lg">
                3
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">Konfirmasi WNB</h3>
              <p className="text-sm text-wnb-muted leading-relaxed">Konfirmasikan Rute akhir bersama tim operasional WNB.</p>
            </div>
          </div>
        </section>

        {/* 12.8 CTA Penutup */}
        <section aria-labelledby="final-cta-heading" className="p-8 sm:p-12 bg-wnb-surface-elevated border-2 border-wnb-border-strong rounded-wnb-lg flex flex-col gap-6 text-center items-center">
          <h2 id="final-cta-heading" className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-wnb-white">
            Rute Mana yang Ingin Anda Jelajahi?
          </h2>
          <p className="text-base text-wnb-muted leading-relaxed max-w-2xl">
            Ceritakan kebutuhan perjalanan Anda. Tim WNB akan membantu menyesuaikan Paket, Rute, kendaraan, dan susunan pengalaman.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 w-full sm:w-auto">
             <LinkButton to={ROUTE_PATHS.booking} variant="primary" size="lg" className="w-full sm:w-auto text-center">
               Rencanakan Perjalanan
             </LinkButton>
             <LinkButton to={ROUTE_PATHS.packages} variant="secondary" size="lg" className="w-full sm:w-auto text-center">
               Lihat Paket WNB
             </LinkButton>
          </div>
        </section>

      </Container>
    </div>
  );
}
