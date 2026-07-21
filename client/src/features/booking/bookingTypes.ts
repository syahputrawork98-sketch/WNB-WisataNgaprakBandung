export type DateFlexibility =
  | ""
  | "fixed"
  | "one-to-three-days"
  | "one-week";

export type GroupType =
  | ""
  | "family"
  | "couple"
  | "friends"
  | "corporate"
  | "community"
  | "individual"
  | "other";

export type MeetingPoint =
  | ""
  | "undecided"
  | "hotel"
  | "lembang"
  | "cikole"
  | "sukawana"
  | "ciwidey"
  | "pangalengan"
  | "bogor"
  | "discussion";

export type AdditionalNeed =
  | "activity"
  | "documentation"
  | "consumption"
  | "celebration"
  | "camping"
  | "group-needs"
  | "vehicle-capacity"
  | "other";

export type BookingFormValues = {
  customerName: string;
  customerWhatsapp: string;
  organizationName: string;
  packageChoice: string;
  plannedDate: string;
  dateUndecided: boolean;
  dateFlexibility: DateFlexibility;
  participantCount: string;
  groupType: GroupType;
  routeChoice: string;
  meetingPoint: MeetingPoint;
  additionalNeeds: AdditionalNeed[];
  safetyNeeds: string;
  additionalNotes: string;
  privacyConsent: boolean;
};

export type BookingFieldErrors = Partial<Record<keyof BookingFormValues, string>>;

export type BookingStatus = 
  | "idle"
  | "success-whatsapp"
  | "error-whatsapp-blocked"
  | "success-copy"
  | "error-copy";
