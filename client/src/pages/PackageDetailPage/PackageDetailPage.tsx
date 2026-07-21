import { useParams, Link } from "react-router";
import {
  Clock,
  Users,
  Car,
  MapPin,
  CheckCircle2,
  HelpCircle,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";
import {
  getPackageBySlug,
  getFormattedPriceText,
  getRelatedPackages,
  buildPackageBookingPath,
} from "@/features/packages/packagesData";
import { RelatedPackagesSection } from "@/features/packages/components/RelatedPackagesSection";
import { PackageMediaView } from "@/features/packages/components/PackageMediaView";
import { SystemState } from "@/components/system/SystemState";

export function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return (
      <div className="py-20">
        <SystemState
          eyebrow="404 — Paket Tidak Ditemukan"
          title="Paket Wisata Tidak Ditemukan"
          description="Paket yang Anda cari tidak tersedia atau tautan yang dibuka tidak sesuai. Silakan pilih Paket lain atau sampaikan kebutuhan perjalanan Anda kepada WNB."
          primaryAction={{
            label: "Kembali ke Daftar Paket",
            to: ROUTE_PATHS.packages,
            variant: "primary"
          }}
          secondaryAction={{
            label: "Rencanakan Perjalanan",
            to: ROUTE_PATHS.booking,
            variant: "secondary"
          }}
        />
      </div>
    );
  }

  const relatedPackages = getRelatedPackages(pkg.slug, 3);
  const formattedPrice = getFormattedPriceText(pkg.priceModel);
  const isScheduleRequired = pkg.availabilityStatus === "schedule-required";

  return (
    <div className="py-12 sm:py-16">
      <Container className="flex flex-col gap-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-wnb-muted">
            <li>
              <Link to={ROUTE_PATHS.home} className="hover:text-wnb-white transition-colors duration-200 focus-visible:outline-wnb-focus">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true" className="text-wnb-subtle">/</li>
            <li>
              <Link to={ROUTE_PATHS.packages} className="hover:text-wnb-white transition-colors duration-200 focus-visible:outline-wnb-focus">
                Paket
              </Link>
            </li>
            <li aria-hidden="true" className="text-wnb-subtle">/</li>
            <li aria-current="page" className="text-wnb-white truncate max-w-[200px] sm:max-w-none">
              {pkg.name}
            </li>
          </ol>
        </nav>

        {/* Header Title Section */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-wnb-accent bg-wnb-surface px-3 py-1 rounded border border-wnb-border">
              {pkg.categoryLabel}
            </span>
            <span className="text-xs font-medium text-wnb-subtle">
              Varian: {pkg.variant}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-wnb-white leading-tight">
            {pkg.name}
          </h1>

          <p className="text-base sm:text-lg text-wnb-muted leading-relaxed">
            {pkg.longDescription}
          </p>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Left Content Column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Editorial Image Header */}
            {pkg.media && (
              <div className="rounded-wnb-lg overflow-hidden border border-wnb-border h-64 sm:h-96">
                <PackageMediaView
                  media={pkg.media}
                  className="w-full h-full"
                  priority={true}
                />
              </div>
            )}

            {/* Facts Summary Box */}
            <section
              aria-labelledby="package-facts-heading"
              className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
            >
              <h2
                id="package-facts-heading"
                className="text-sm font-semibold uppercase tracking-widest text-wnb-white border-b border-wnb-border pb-3"
              >
                Ringkasan Perjalanan
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <Clock className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">
                      Estimasi Durasi
                    </span>
                    <span className="text-wnb-white font-medium text-sm">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <Users className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">
                      Kapasitas Peserta
                    </span>
                    <span className="text-wnb-white font-medium text-sm">
                      {pkg.capacity}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <Car className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">
                      Kendaraan
                    </span>
                    <span className="text-wnb-white font-medium text-sm">
                      {pkg.vehicle}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-wnb-black rounded-wnb-md border border-wnb-border/60">
                  <MapPin className="w-5 h-5 text-wnb-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-wnb-subtle block uppercase tracking-wider text-[10px]">
                      Titik Temu Fleksibel
                    </span>
                    <span className="text-wnb-white font-medium text-sm">
                      {pkg.meetingPoint}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Inclusions Section */}
            <section
              aria-labelledby="package-inclusions-heading"
              className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-4"
            >
              <h2
                id="package-inclusions-heading"
                className="text-base font-bold font-display uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
              >
                Fasilitas & Layanan Termasuk
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-wnb-muted">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-wnb-white shrink-0 mt-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Audience & Optional Activities Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Audience */}
              <section
                aria-labelledby="package-audience-heading"
                className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-3"
              >
                <h2
                  id="package-audience-heading"
                  className="text-sm font-semibold uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-2"
                >
                  Sangat Cocok Untuk:
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {pkg.audience.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-wnb-white bg-wnb-black px-3 py-1.5 rounded-wnb-md border border-wnb-border font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Optional Activities */}
              {pkg.optionalActivities && pkg.optionalActivities.length > 0 && (
                <section
                  aria-labelledby="package-activities-heading"
                  className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-3"
                >
                  <h2
                    id="package-activities-heading"
                    className="text-sm font-semibold uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-2"
                  >
                    Pilihan Aktivitas Tambahan:
                  </h2>
                  <p className="text-[10px] text-wnb-subtle italic -mt-1">
                    *Aktivitas ini bersifat opsional dan tidak otomatis termasuk dalam harga dasar.
                  </p>
                  <ul className="flex flex-col gap-2 text-xs text-wnb-muted pt-1">
                    {pkg.optionalActivities.map((act, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-wnb-accent shrink-0" aria-hidden="true" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Terms & Public Notes Section */}
            <section
              aria-labelledby="package-terms-heading"
              className="p-6 bg-wnb-surface border border-wnb-border rounded-wnb-lg flex flex-col gap-6"
            >
              <h2
                id="package-terms-heading"
                className="text-base font-bold font-display uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3"
              >
                Ketentuan & Catatan Perjalanan
              </h2>

              <div className="flex flex-col gap-4 text-xs text-wnb-muted">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-wnb-white uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-wnb-subtle" aria-hidden="true" />
                    Ketentuan Khusus:
                  </span>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {pkg.specialTerms.map((term, idx) => (
                      <li key={idx}>{term}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 pt-3 border-t border-wnb-border/50">
                  <span className="font-semibold text-wnb-white uppercase tracking-wider flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-wnb-subtle" aria-hidden="true" />
                    Catatan Publik:
                  </span>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {pkg.publicNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar / Booking Action Column */}
          <div className="flex flex-col gap-6">
            <div className="sticky top-28 p-6 bg-wnb-surface border-2 border-wnb-border-strong rounded-wnb-lg flex flex-col gap-6 shadow-wnb-card">
              <div className="flex flex-col gap-1 border-b border-wnb-border pb-4">
                <span className="text-xs text-wnb-subtle uppercase tracking-wider">
                  Harga Publik
                </span>
                <span className="text-2xl font-extrabold text-wnb-white font-display">
                  {formattedPrice || "Tersedia sesuai permintaan"}
                </span>
                <span className="text-[11px] text-wnb-subtle mt-1 leading-normal">
                  *Harga menyesuaikan ketersediaan unit, rute, dan kebutuhan tambahan.
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {isScheduleRequired ? (
                  <button
                    className="w-full text-center px-4 py-3 rounded text-sm font-semibold bg-wnb-surface border border-wnb-border text-wnb-subtle cursor-not-allowed opacity-70"
                    disabled
                  >
                    Jadwal Belum Tersedia
                  </button>
                ) : (
                  <LinkButton
                    to={buildPackageBookingPath(pkg.slug)}
                    size="lg"
                    variant="primary"
                    className="w-full text-center"
                  >
                    Rencanakan Paket Ini
                  </LinkButton>
                )}

                <LinkButton
                  to={ROUTE_PATHS.packages}
                  size="md"
                  variant="secondary"
                  className="w-full text-center"
                >
                  Lihat Paket Lain
                </LinkButton>
              </div>

              <div className="p-4 bg-wnb-black rounded-wnb-md border border-wnb-border flex flex-col gap-2 text-xs text-wnb-muted">
                <span className="font-semibold text-wnb-white">
                  Konsultasi Perjalanan:
                </span>
                <p className="leading-relaxed">
                  Diskusikan karakter peserta, preferensi jadwal, serta penyesuaian rute bersama tim WNB melalui alur perencanaan perjalanan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages Section */}
        {relatedPackages.length > 0 && (
          <RelatedPackagesSection packages={relatedPackages} />
        )}
      </Container>
    </div>
  );
}
