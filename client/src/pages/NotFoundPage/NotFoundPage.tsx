import { ROUTE_PATHS } from "@/routes/routePaths";
import { PagePlaceholder } from "@/components/common/PagePlaceholder";
import { LinkButton } from "@/components/common/LinkButton";

export function NotFoundPage() {
  return (
    <PagePlaceholder
      eyebrow="Error 404"
      title="Rute Tidak Ditemukan"
      description="Halaman yang Anda cari tidak tersedia atau telah berpindah."
    >
      <div className="mt-2 flex flex-col items-start gap-4">
        <p className="text-sm text-wnb-muted leading-relaxed">
          Silakan klik tombol di bawah untuk kembali ke jalur utama (halaman Beranda).
        </p>
        <LinkButton to={ROUTE_PATHS.home} size="md" variant="primary">
          Kembali ke Beranda
        </LinkButton>
      </div>
    </PagePlaceholder>
  );
}
