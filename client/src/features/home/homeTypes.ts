import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type ExploreItem = {
  title: string;
  description: string;
  path: string;
  linkLabel: string;
  icon: ComponentType<LucideProps>;
};

export type VehicleItem = {
  name: string;
  variant: "short" | "long";
  technicalLabel: "SWB" | "LWB";
  description: string;
  confirmedFacts: readonly string[];
};
