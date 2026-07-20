import { Link } from "react-router";
import { ROUTE_PATHS } from "@/routes/routePaths";

type BrandLogoProps = {
  className?: string;
  isLink?: boolean;
};

export function BrandLogo({ className = "h-8 sm:h-10 w-auto", isLink = true }: BrandLogoProps) {
  const imgContent = (
    <img
      src="/images/brand/wnb-logo.png"
      alt={isLink ? "" : "Logo Wisata Ngaprak Bandung"}
      className={`object-contain ${className}`}
    />
  );

  if (!isLink) {
    return imgContent;
  }

  return (
    <Link
      to={ROUTE_PATHS.home}
      className="flex items-center group focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3 shrink-0"
      aria-label="Wisata Ngaprak Bandung — kembali ke Beranda"
    >
      {imgContent}
    </Link>
  );
}
