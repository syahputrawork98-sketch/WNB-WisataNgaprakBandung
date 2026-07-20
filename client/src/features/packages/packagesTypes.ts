export type PackageCategory =
  | "semua"
  | "keluarga"
  | "perayaan"
  | "perusahaan"
  | "camping"
  | "open-trip";

export type PriceUnit = "per unit" | "per peserta";

export type TravelPackage = {
  slug: string;
  name: string;
  category: Exclude<PackageCategory, "semua">;
  categoryLabel: string;
  variant: string;
  shortDescription: string;
  longDescription: string;
  audience: string[];
  duration: string;
  capacity: string;
  vehicle: string;
  price: number;
  priceUnit: PriceUnit;
  inclusions: string[];
  optionalActivities: string[];
  meetingPoint: string;
  specialTerms: string[];
  publicNotes: string[];
  image?: string;
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
