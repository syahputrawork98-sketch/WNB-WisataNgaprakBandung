export const ROUTE_PATHS = {
  home: "/",
  about: "/tentang-kami",
  aboutLegacy: "/about",
  packages: "/paket",
  packageDetail: "/paket/:slug",
  routes: "/rute",
  routeDetail: "/rute/:slug",
  gallery: "/galeri",
  galleryLegacy: "/gallery",
  booking: "/booking",
  notFound: "*",
} as const;

export const buildPackageDetailPath = (slug: string): string =>
  `/paket/${encodeURIComponent(slug)}`;

export const buildRouteDetailPath = (slug: string): string =>
  `/rute/${encodeURIComponent(slug)}`;

export type BookingPathParams = {
  packageSlug?: string;
  routeSlug?: string;
};

export function buildBookingPath(params: BookingPathParams = {}): string {
  const searchParams = new URLSearchParams();

  if (params.packageSlug) {
    searchParams.set("package", params.packageSlug);
  }

  if (params.routeSlug) {
    searchParams.set("route", params.routeSlug);
  }

  const query = searchParams.toString();
  return query ? `${ROUTE_PATHS.booking}?${query}` : ROUTE_PATHS.booking;
}
