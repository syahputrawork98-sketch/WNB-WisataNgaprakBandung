import { REGULAR_PACKAGES } from "@/features/packages/packagesData";
import type { GalleryCategoryKey, GalleryItem } from "./galleryTypes";

type GalleryConfigItem = {
  packageSlug: string;
  category: GalleryCategoryKey;
  categoryLabel: string;
};

const GALLERY_PACKAGE_CONFIG: readonly GalleryConfigItem[] = [
  {
    packageSlug: "corporate-adventure",
    category: "kebersamaan-perayaan",
    categoryLabel: "Kebersamaan & Perayaan",
  },
  {
    packageSlug: "family-adventure-short-trip",
    category: "petualangan-alam",
    categoryLabel: "Petualangan & Alam",
  },
  {
    packageSlug: "family-adventure-full-experience",
    category: "petualangan-alam",
    categoryLabel: "Petualangan & Alam",
  },
  {
    packageSlug: "birthday-adventure",
    category: "kebersamaan-perayaan",
    categoryLabel: "Kebersamaan & Perayaan",
  },
  {
    packageSlug: "anniversary-adventure",
    category: "kebersamaan-perayaan",
    categoryLabel: "Kebersamaan & Perayaan",
  },
  {
    packageSlug: "surprise-adventure",
    category: "kebersamaan-perayaan",
    categoryLabel: "Kebersamaan & Perayaan",
  },
  {
    packageSlug: "adventure-camping",
    category: "camping-aktivitas",
    categoryLabel: "Camping & Aktivitas",
  },
  {
    packageSlug: "open-trip-adventure",
    category: "petualangan-alam",
    categoryLabel: "Petualangan & Alam",
  },
] as const;

export function getAllGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  let order = 1;

  for (const config of GALLERY_PACKAGE_CONFIG) {
    const pkg = REGULAR_PACKAGES.find((p) => p.slug === config.packageSlug);
    if (pkg) {
      items.push({
        id: `gallery-${pkg.id.toLowerCase()}`,
        order,
        packageId: pkg.id,
        packageSlug: pkg.slug,
        title: pkg.name,
        caption: pkg.shortDescription,
        category: config.category,
        categoryLabel: config.categoryLabel,
        sourceType: "illustration",
        sourceLabel: "Gambar Ilustrasi",
        media: pkg.media,
      });
      order++;
    }
  }

  return items;
}

export function getGalleryItemsByCategory(
  category: GalleryCategoryKey | "semua"
): GalleryItem[] {
  const allItems = getAllGalleryItems();
  if (category === "semua") return allItems;
  return allItems.filter((item) => item.category === category);
}

export function getGalleryItemIndex(itemId: string): number {
  const allItems = getAllGalleryItems();
  return allItems.findIndex((item) => item.id === itemId);
}
