import { Link } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function NotFoundPage() {
  return (
    <PagePlaceholder
      eyebrow="Error 404"
      title="Rute Tidak Ditemukan"
      description="Jalur yang Anda cari tampaknya tidak ada di dalam peta perjalanan kami."
    >
      <Link
        to={ROUTE_PATHS.home}
        className="inline-block px-6 py-3 rounded border border-wnb-white text-wnb-white hover:bg-wnb-white hover:text-wnb-black font-semibold uppercase tracking-wider transition-colors duration-200"
      >
        Kembali ke Beranda
      </Link>
    </PagePlaceholder>
  );
}
