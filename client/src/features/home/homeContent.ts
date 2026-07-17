import { Compass, Map, Images } from "lucide-react";
import { ROUTE_PATHS } from "@/routes/routePaths";
import type { ExploreItem, VehicleItem } from "./homeTypes";

export const EXPLORE_ITEMS: readonly ExploreItem[] = [
  {
    title: "Paket Perjalanan",
    description:
      "Temukan pilihan perjalanan WNB setelah informasi paket resmi tersedia.",
    path: ROUTE_PATHS.packages,
    linkLabel: "Lihat Paket",
    icon: Compass,
  },
  {
    title: "Rute Petualangan",
    description:
      "Pelajari jalur perjalanan setelah nama and detail rute dikonfirmasi.",
    path: ROUTE_PATHS.routes,
    linkLabel: "Lihat Rute",
    icon: Map,
  },
  {
    title: "Galeri Perjalanan",
    description:
      "Lihat dokumentasi kegiatan setelah aset foto resmi WNB tersedia.",
    path: ROUTE_PATHS.gallery,
    linkLabel: "Buka Galeri",
    icon: Images,
  },
] as const;

export const VEHICLE_ITEMS: readonly VehicleItem[] = [
  {
    name: "Land Rover Short",
    variant: "short",
    technicalLabel: "SWB",
    description:
      "Varian Land Rover klasik dengan konfigurasi bodi lebih pendek.",
    confirmedFacts: [
      "Kendaraan off-road klasik",
      "Varian Short / Short Wheelbase",
      "Bodi berbahan besi atau logam",
    ],
  },
  {
    name: "Land Rover Long",
    variant: "long",
    technicalLabel: "LWB",
    description:
      "Varian Land Rover klasik dengan konfigurasi bodi lebih panjang.",
    confirmedFacts: [
      "Kendaraan off-road klasik",
      "Varian Long / Long Wheelbase",
      "Bodi berbahan besi atau logam",
    ],
  },
] as const;
