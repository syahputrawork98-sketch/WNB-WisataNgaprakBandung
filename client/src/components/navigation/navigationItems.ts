import { ROUTE_PATHS } from "@/routes/routePaths";

export type NavigationItem = {
  label: string;
  path: string;
  end?: boolean;
};

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    label: "Beranda",
    path: ROUTE_PATHS.home,
    end: true,
  },
  {
    label: "Tentang Kami",
    path: ROUTE_PATHS.about,
  },
  {
    label: "Paket",
    path: ROUTE_PATHS.packages,
  },
  {
    label: "Rute",
    path: ROUTE_PATHS.routes,
  },
  {
    label: "Galeri",
    path: ROUTE_PATHS.gallery,
  },
] as const;
