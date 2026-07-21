export type PackageCategory =
  | "semua"
  | "keluarga"
  | "perayaan"
  | "perusahaan"
  | "camping"
  | "open-trip";

export type PriceUnit = "per unit" | "per peserta";

export type PackagePublicationStatus =
  | "published"
  | "published-updating"
  | "unpublished";

export type PackageAvailabilityStatus =
  | "available-by-confirmation"
  | "schedule-required"
  | "temporarily-unavailable";

export type PriceDisplayMode =
  | "exact"
  | "starting-from"
  | "custom"
  | "hidden";

export type PackagePrice = {
  amount?: number;
  unit?: PriceUnit;
  displayMode: PriceDisplayMode;
  customText?: string;
  note?: string;
};

export type PackageMedia = {
  src: string;
  fallbackSrc: string;
  alt: string;
  illustrationNotice: boolean;
};

export type TravelPackage = {
  id: string;
  slug: string;
  name: string;
  publicationStatus: PackagePublicationStatus;
  availabilityStatus: PackageAvailabilityStatus;
  category: Exclude<PackageCategory, "semua">;
  categoryLabel: string;
  variant: string;
  shortDescription: string;
  longDescription: string;
  audience: string[];
  duration: string;
  capacity: string;
  vehicle: string;
  priceModel: PackagePrice;
  inclusions: string[];
  exclusions?: string[];
  optionalActivities: string[];
  meetingPoint: string;
  specialTerms: string[];
  publicNotes: string[];
  media: PackageMedia;
  relatedPackageSlugs?: string[];
  routeSlugs?: string[];
};

export type SpecialExperience = {
  title: string;
  label: string;
  description: string;
  audience: string[];
  duration: string;
  capacity: string;
  vehicle: string;
  inclusions: string[];
  priceText: string;
  ctaText: string;
  safetyNotes: string;
};

export type CategoryFilterItem = {
  key: PackageCategory;
  label: string;
};
