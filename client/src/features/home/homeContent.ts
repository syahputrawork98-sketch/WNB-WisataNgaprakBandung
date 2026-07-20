import { Compass, Map, Images } from "lucide-react";
import { ROUTE_PATHS } from "@/routes/routePaths";
import type { ExploreItem, VehicleItem } from "./homeTypes";

export const EXPLORE_ITEMS: readonly ExploreItem[] = [
  {
    title: "Paket Perjalanan",
    description:
      "Pilihan bentuk pengalaman perjalanan yang disesuaikan dengan kebutuhan Anda.",
    path: ROUTE_PATHS.packages,
    linkLabel: "Lihat Paket",
    icon: Compass,
    media: {
      src: "/images/home/explore-package.webp",
      alt: "Foto ilustrasi kendaraan klasik dalam perjalanan di jalan pedesaan",
      illustrationNotice: true,
    },
  },
  {
    title: "Rute Petualangan",
    description:
      "Gambaran karakter jalur dan tingkat petualangan yang dapat Anda pilih.",
    path: ROUTE_PATHS.routes,
    linkLabel: "Lihat Rute",
    icon: Map,
    media: {
      src: "/images/home/explore-route.webp",
      alt: "Jalan tanah yang melintasi lanskap pegunungan",
      illustrationNotice: false,
    },
  },
  {
    title: "Galeri Perjalanan",
    description:
      "Ruang dokumentasi suasana, kebersamaan, dan cerita perjalanan WNB.",
    path: ROUTE_PATHS.gallery,
    linkLabel: "Buka Galeri",
    icon: Images,
    media: {
      src: "/images/home/explore-gallery.webp",
      alt: "Jalan hutan dengan pegunungan di kejauhan",
      illustrationNotice: false,
    },
  },
] as const;

export const VEHICLE_ITEMS: readonly VehicleItem[] = [
  {
    name: "Land Rover Short",
    variant: "short",
    technicalLabel: "SWB",
    description:
      "Varian Land Rover klasik dengan konfigurasi bodi lebih pendek, disesuaikan dengan kebutuhan perjalanan dan jumlah peserta.",
    confirmedFacts: [
      "Kendaraan off-road klasik",
      "Varian Short / Short Wheelbase",
      "Pemilihan unit menyesuaikan rute",
    ],
  },
  {
    name: "Land Rover Long",
    variant: "long",
    technicalLabel: "LWB",
    description:
      "Varian Land Rover klasik dengan konfigurasi bodi lebih panjang, disesuaikan dengan kebutuhan perjalanan dan jumlah peserta.",
    confirmedFacts: [
      "Kendaraan off-road klasik",
      "Varian Long / Long Wheelbase",
      "Pemilihan unit menyesuaikan rute",
    ],
  },
] as const;
