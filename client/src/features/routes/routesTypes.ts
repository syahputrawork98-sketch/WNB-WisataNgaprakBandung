export type RouteRegion =
  | "bandung-utara"
  | "bandung-selatan"
  | "rute-khusus";

export type RouteAvailabilityStatus =
  | "available-by-confirmation"
  | "special-consultation";

export type RouteDuration = {
  dry: string;
  rainy: string;
  note: string;
};

export type RouteMedia = {
  src?: string;
  fallbackSrc?: string;
  alt: string;
};

export type TravelRoute = {
  id: string;
  order: number;
  slug: string;
  name: string;

  region: RouteRegion;
  regionLabel: string;
  area: string;

  availabilityStatus: RouteAvailabilityStatus;
  experienceLabel: string;

  shortDescription: string;
  longDescription: string;

  duration: RouteDuration;
  landscape: string;

  trackCharacteristics: string[];
  attractions: string[];
  activities: string[];

  seasonNote: string;

  meetingPoint: string;
  startArea: string;
  finishArea: string;

  publicSafetyNotes: string[];

  media: RouteMedia;
};

export type RouteRegionFilterItem = {
  key: RouteRegion | "semua";
  label: string;
};
