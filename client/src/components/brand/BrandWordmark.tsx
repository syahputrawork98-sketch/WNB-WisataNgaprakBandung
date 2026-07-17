import { Link } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";

export function BrandWordmark() {
  // Wordmark teks sementara sampai aset logo resmi tersedia.
  return (
    <Link
      to={ROUTE_PATHS.home}
      className="flex flex-col items-start gap-0.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3"
      aria-label="WNB — kembali ke Beranda"
    >
      <span className="text-2xl font-bold font-display uppercase tracking-widest text-wnb-white transition-colors duration-200 group-hover:text-wnb-muted">
        WNB
      </span>
      <span className="hidden md:inline text-[9px] font-semibold tracking-[0.2em] uppercase text-wnb-muted">
        Wisata Ngaprak Bandung
      </span>
    </Link>
  );
}
