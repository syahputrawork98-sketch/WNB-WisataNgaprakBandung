import type { PackageMedia } from "@/features/packages/packagesTypes";

export type GalleryCategoryKey =
  | "petualangan-alam"
  | "kebersamaan-perayaan"
  | "camping-aktivitas";

export type GalleryFilterKey = GalleryCategoryKey | "semua";

export type GalleryCategoryFilterItem = {
  key: GalleryFilterKey;
  label: string;
};

export type GalleryItem = {
  id: string;
  order: number;
  packageId: string;
  packageSlug: string;
  title: string;
  caption: string;
  category: GalleryCategoryKey;
  categoryLabel: string;
  sourceType: "illustration";
  sourceLabel: "Gambar Ilustrasi";
  media: PackageMedia;
};
