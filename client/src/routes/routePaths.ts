export const ROUTE_PATHS = {
  home: "/",
  about: "/tentang-kami",
  aboutLegacy: "/about",
  packages: "/paket",
  packageDetail: "/paket/:slug",
  routes: "/rute",
  routeDetail: "/rute/:slug",
  gallery: "/gallery",
  booking: "/booking",
  notFound: "*",
} as const;

export const buildPackageDetailPath = (slug: string): string =>
  `/paket/${encodeURIComponent(slug)}`;

export const buildRouteDetailPath = (slug: string): string =>
  `/rute/${encodeURIComponent(slug)}`;
