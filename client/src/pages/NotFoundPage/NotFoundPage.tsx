import { ROUTE_PATHS } from "@/routes/routePaths";
import { SystemState } from "@/components/system/SystemState";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <SystemState
      eyebrow="Error 404"
      title="Halaman Tidak Ditemukan"
      description="Halaman yang Anda cari tidak tersedia, telah berpindah, atau alamat yang dibuka tidak sesuai. Anda dapat kembali ke Beranda atau melanjutkan menjelajahi Paket dan Rute WNB."
      primaryAction={{
        label: "Kembali ke Beranda",
        to: ROUTE_PATHS.home,
        variant: "primary"
      }}
      secondaryAction={{
        label: "Lihat Paket",
        to: ROUTE_PATHS.packages,
        variant: "secondary"
      }}
    >
      <div className="mt-6">
        <Link 
          to={ROUTE_PATHS.routes} 
          className="text-wnb-accent hover:text-wnb-white underline-offset-4 hover:underline transition-colors font-medium"
        >
          Jelajahi Rute
        </Link>
      </div>
    </SystemState>
  );
}
