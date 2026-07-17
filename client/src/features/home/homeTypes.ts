import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type HomeEditorialMedia = {
  src: string;
  alt: string;
  objectPosition?: string;
  illustrationNotice?: boolean;
};

export type ExploreItem = {
  title: string;
  description: string;
  path: string;
  linkLabel: string;
  icon: ComponentType<LucideProps>;
  media: HomeEditorialMedia;
};

export type VehicleItem = {
  name: string;
  variant: "short" | "long";
  technicalLabel: "SWB" | "LWB";
  description: string;
  confirmedFacts: readonly string[];
};
