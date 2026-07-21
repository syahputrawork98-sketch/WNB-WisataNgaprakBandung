import { useParams, Link } from "react-router";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS, buildBookingPath } from "@/routes/routePaths";
import { getRouteBySlug } from "@/features/routes/routesData";
import { RouteMediaView } from "@/features/routes/components/RouteMediaView";
import { SystemState } from "@/components/system/SystemState";
import { MapPin, Sun, CloudRain, ShieldAlert, ListChecks, CheckCircle2, CloudFog } from "lucide-react";

export function RouteDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const route = getRouteBySlug(slug);

  // 14.1 Kondisi Rute Tidak Ditemukan
  if (!route) {
    return (
      <SystemState
        eyebrow="404 — Rute Tidak Ditemukan"
        title="Rute Perjalanan Tidak Ditemukan"
        description="Rute yang Anda cari tidak tersedia atau tautan yang dibuka tidak sesuai. Silakan periksa daftar Rute WNB untuk melihat pilihan perjalanan lainnya."
        primaryAction={{
          label: "Kembali ke Daftar Rute",
          to: ROUTE_PATHS.routes,
          variant: "primary"
        }}
        secondaryAction={{
          label: "Lihat Paket",
          to: ROUTE_PATHS.packages,
          variant: "secondary"
        }}
      />
    );
  }

  const isSpecialRoute = route.availabilityStatus === "special-consultation";

  return (
    <div className="py-12 sm:py-16">
      <Container className="flex flex-col gap-10">
        
        {/* 14.2 Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-wnb-muted">
            <li>
              <Link to={ROUTE_PATHS.home} className="hover:text-wnb-white transition-colors duration-200 focus-visible:outline-wnb-focus">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true" className="text-wnb-subtle">/</li>
            <li>
              <Link to={ROUTE_PATHS.routes} className="hover:text-wnb-white transition-colors duration-200 focus-visible:outline-wnb-focus">
                Rute
              </Link>
            </li>
            <li aria-hidden="true" className="text-wnb-subtle">/</li>
            <li aria-current="page" className="text-wnb-white truncate max-w-[200px] sm:max-w-none">
              {route.name}
            </li>
          </ol>
        </nav>

        {/* 14.3 Hero dan Identitas Rute */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-wnb-accent bg-wnb-surface px-3 py-1 rounded border border-wnb-border">
              {route.id}
            </span>
            <span className="text-xs font-medium text-wnb-subtle">
              {route.regionLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-wnb-white leading-tight">
            {route.name}
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-1">
             <span className="text-sm text-wnb-white border border-wnb-border/80 bg-wnb-black px-3 py-1.5 rounded w-fit">
               {route.experienceLabel}
             </span>
             {isSpecialRoute ? (
               <span className="text-xs font-semibold uppercase tracking-widest text-wnb-black bg-wnb-accent px-3 py-1.5 rounded">
                 Rute Khusus — Perlu Konsultasi
               </span>
             ) : (
               <span className="text-xs font-semibold uppercase tracking-widest text-wnb-accent bg-wnb-surface border border-wnb-border px-3 py-1.5 rounded">
                 Tersedia melalui Konfirmasi
               </span>
             )}
          </div>

          <p className="text-base sm:text-lg text-wnb-muted leading-relaxed mt-2">
            {route.longDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-10">
            
            <div className="rounded-wnb-lg overflow-hidden border border-wnb-border h-64 sm:h-96">
              <RouteMediaView
                media={route.media}
                routeId={route.id}
                regionLabel={route.regionLabel}
                className="w-full h-full"
                priority={true}
              />
            </div>

            {/* 14.4 Informasi Ringkas Rute */}
            <section
              aria-labelledby="route-facts-heading"
              className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
            >
              <h2
                id="route-facts-heading"
                className="text-sm font-semibold uppercase tracking-widest text-wnb-white border-b border-wnb-border pb-3"
              >
                Ringkasan Area & Durasi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <MapPin className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">Area</span>
                    <span className="text-wnb-white font-medium text-sm">{route.area}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <Sun className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">Estimasi Kering</span>
                    <span className="text-wnb-white font-medium text-sm">{route.duration.dry}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <CloudRain className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">Estimasi Hujan</span>
                    <span className="text-wnb-white font-medium text-sm">{route.duration.rainy}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <CloudFog className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">Lingkungan Utama</span>
                    <span className="text-wnb-white font-medium text-sm">{route.landscape}</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-wnb-subtle mt-1 italic">
                *Estimasi dapat berubah mengikuti cuaca, kondisi jalur, peserta, dan keputusan tim WNB.
              </p>
            </section>

            {/* 14.5 Gambaran Pengalaman dan Daya Tarik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <section
                aria-labelledby="route-attractions-heading"
                className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
              >
                <h2
                  id="route-attractions-heading"
                  className="text-base font-bold font-display uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
                >
                  Daya Tarik Rute
                </h2>
                <ul className="flex flex-col gap-3 text-sm text-wnb-muted">
                  {route.attractions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section
                aria-labelledby="route-activities-heading"
                className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
              >
                <h2
                  id="route-activities-heading"
                  className="text-base font-bold font-display uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
                >
                  Aktivitas Terkait
                </h2>
                <ul className="flex flex-col gap-3 text-sm text-wnb-muted">
                  {route.activities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ListChecks className="w-4 h-4 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* 14.6 Karakter Lintasan Publik */}
            <section
              aria-labelledby="track-characteristics-heading"
              className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
            >
              <h2
                id="track-characteristics-heading"
                className="text-base font-bold font-display uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
              >
                Karakteristik Lintasan
              </h2>
              <div className="flex flex-wrap gap-2">
                {route.trackCharacteristics.map((char, idx) => (
                  <span key={idx} className="text-xs text-wnb-white bg-wnb-black border border-wnb-border px-3 py-1.5 rounded-wnb-md font-medium">
                    {char}
                  </span>
                ))}
              </div>
              <p className="text-xs text-wnb-subtle mt-2 p-3 bg-wnb-black rounded border border-wnb-border/50">
                <ShieldAlert className="inline-block w-3 h-3 mr-1.5 text-wnb-accent -mt-0.5" aria-hidden="true" />
                Karakter lintasan menggambarkan pengalaman umum dan bukan laporan kondisi real-time. Kondisi aktual diperiksa kembali sebelum perjalanan.
              </p>
            </section>

            {/* 14.7 Durasi, Cuaca, dan Kondisi Musim & 14.8 Titik Temu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section
                aria-labelledby="season-note-heading"
                className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
              >
                <h2
                  id="season-note-heading"
                  className="text-sm font-semibold uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
                >
                  Catatan Musim & Cuaca
                </h2>
                <div className="text-sm text-wnb-muted leading-relaxed flex flex-col gap-3">
                  <p>{route.seasonNote}</p>
                  <p className="text-xs italic text-wnb-subtle">{route.duration.note}</p>
                </div>
              </section>

              <section
                aria-labelledby="meeting-point-heading"
                className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
              >
                <h2
                  id="meeting-point-heading"
                  className="text-sm font-semibold uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
                >
                  Area & Akses
                </h2>
                <div className="flex flex-col gap-3 text-sm text-wnb-muted">
                  <div className="flex items-start gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-wnb-accent shrink-0 mt-1.5" aria-hidden="true" />
                     <span><strong>Titik Temu:</strong> {route.meetingPoint}</span>
                  </div>
                  <div className="flex items-start gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-wnb-accent shrink-0 mt-1.5" aria-hidden="true" />
                     <span><strong>Start:</strong> {route.startArea}</span>
                  </div>
                  <div className="flex items-start gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-wnb-accent shrink-0 mt-1.5" aria-hidden="true" />
                     <span><strong>Finish:</strong> {route.finishArea}</span>
                  </div>
                </div>
                <p className="text-[11px] text-wnb-subtle italic mt-2">
                  *Lokasi rinci diberikan setelah pemesanan dan susunan perjalanan dikonfirmasi.
                </p>
              </section>
            </div>

            {/* 14.10 Catatan Keselamatan Publik */}
            <section
              aria-labelledby="public-safety-heading"
              className="p-6 bg-wnb-black border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 border-b border-wnb-border pb-3">
                <ShieldAlert className="w-5 h-5 text-wnb-accent" aria-hidden="true" />
                <h2
                  id="public-safety-heading"
                  className="text-base font-bold font-display uppercase tracking-wider text-wnb-white"
                >
                  Keselamatan Perjalanan Publik
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-wnb-muted pl-1">
                {route.publicSafetyNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
                <li>Informasi publik bukan pengganti briefing perjalanan.</li>
              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-6">
            <div className="sticky top-28 p-6 bg-wnb-surface border-2 border-wnb-border-strong rounded-wnb-lg flex flex-col gap-6 shadow-wnb-card">
              
              {/* 14.9 Paket Terkait */}
              <div className="flex flex-col gap-3 border-b border-wnb-border pb-6 text-center">
                <h3 className="text-xl font-bold font-display uppercase tracking-wider text-wnb-white">
                  Pilih Paket untuk Rute Ini
                </h3>
                <p className="text-xs text-wnb-muted leading-relaxed">
                  Rute dapat digunakan dalam susunan Paket yang berbeda sesuai peserta, durasi, aktivitas, cuaca, dan kondisi lapangan. Tim WNB akan membantu memilih kombinasi yang paling sesuai.
                </p>
              </div>

              {/* 14.11 CTA Perencanaan */}
              <div className="flex flex-col gap-3">
                <LinkButton
                  to={buildBookingPath({ routeSlug: route.slug })}
                  size="lg"
                  variant="primary"
                  className="w-full text-center"
                >
                  Rencanakan Rute Ini
                </LinkButton>
                <LinkButton
                  to={ROUTE_PATHS.packages}
                  size="md"
                  variant="secondary"
                  className="w-full text-center"
                >
                  Lihat Daftar Paket
                </LinkButton>
                <LinkButton
                  to={ROUTE_PATHS.routes}
                  size="md"
                  variant="secondary"
                  className="w-full text-center bg-transparent border-transparent hover:bg-wnb-black mt-2 text-wnb-subtle hover:text-wnb-white"
                >
                  Kembali ke Daftar Rute
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
