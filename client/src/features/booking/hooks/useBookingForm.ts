import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import { validateBookingForm } from "@/features/booking/bookingValidation";
import { buildBookingMessage } from "@/features/booking/bookingMessage";
import { getOfficialWhatsAppNumber } from "@/features/booking/bookingContact";
import { copyToClipboardFallback } from "@/features/booking/bookingClipboard";
import { getPackageBySlug } from "@/features/packages/packagesData";
import { getRouteBySlug } from "@/features/routes/routesData";
import type { 
  BookingFormValues, 
  BookingFieldErrors, 
  BookingStatus,
  AdditionalNeed,
  DateFlexibility,
  GroupType,
  MeetingPoint
} from "@/features/booking/bookingTypes";
import type { ChangeEvent } from "react";

export function useBookingForm() {
  const [searchParams] = useSearchParams();
  
  // States
  const [values, setValues] = useState<BookingFormValues>({
    customerName: "",
    customerWhatsapp: "",
    organizationName: "",
    packageChoice: "",
    plannedDate: "",
    dateUndecided: false,
    dateFlexibility: "",
    participantCount: "",
    groupType: "",
    routeChoice: "",
    meetingPoint: "",
    additionalNeeds: [],
    safetyNeeds: "",
    additionalNotes: "",
    privacyConsent: false,
  });
  
  const [errors, setErrors] = useState<BookingFieldErrors>({});
  const [status, setStatus] = useState<BookingStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fallbackText, setFallbackText] = useState("");
  
  // Context notices
  const [packageNotice, setPackageNotice] = useState<"package-not-found" | "package-not-eligible" | null>(null);
  const [routeNotice, setRouteNotice] = useState<"route-not-found" | "route-special" | null>(null);
  
  // Refs for auto-focusing errors
  const fieldRefs = {
    customerName: useRef<HTMLInputElement>(null),
    customerWhatsapp: useRef<HTMLInputElement>(null),
    packageChoice: useRef<HTMLSelectElement>(null),
    plannedDate: useRef<HTMLInputElement>(null),
    participantCount: useRef<HTMLInputElement>(null),
    groupType: useRef<HTMLSelectElement>(null),
    privacyConsent: useRef<HTMLInputElement>(null),
  };
  
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Initialize from query params ONCE on mount
  useEffect(() => {
    const packageQuery = searchParams.get("package");
    const routeQuery = searchParams.get("route");
    
    let initialPackage = "";
    let initialRoute = "";
    let initialPackageNotice: typeof packageNotice = null;
    let initialRouteNotice: typeof routeNotice = null;

    if (packageQuery) {
      const pkg = getPackageBySlug(packageQuery);
      if (!pkg) {
        initialPackageNotice = "package-not-found";
      } else if (pkg.availabilityStatus !== "available-by-confirmation" || pkg.publicationStatus === "unpublished") {
        initialPackageNotice = "package-not-eligible";
      } else {
        initialPackage = pkg.slug;
      }
    }

    if (routeQuery) {
      const route = getRouteBySlug(routeQuery);
      if (!route) {
        initialRouteNotice = "route-not-found";
      } else {
        initialRoute = route.slug;
        if (route.availabilityStatus === "special-consultation") {
          initialRouteNotice = "route-special";
        }
      }
    }

    setValues(prev => ({
      ...prev,
      packageChoice: initialPackage,
      routeChoice: initialRoute
    }));
    
    setPackageNotice(initialPackageNotice);
    setRouteNotice(initialRouteNotice);
  }, [searchParams]);

  // Handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Reset status when form changes
    setStatus("idle");
    setFallbackText("");
    
    let newValues = { ...values };

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "additionalNeeds") {
        const val = value as AdditionalNeed;
        newValues.additionalNeeds = checked 
          ? [...newValues.additionalNeeds, val]
          : newValues.additionalNeeds.filter(n => n !== val);
      } else if (name === "dateUndecided") {
        newValues.dateUndecided = checked;
        if (checked) {
          newValues.plannedDate = "";
        }
      } else if (name === "privacyConsent") {
        newValues.privacyConsent = checked;
      }
    } else {
      switch (name) {
        case "customerName":
        case "customerWhatsapp":
        case "organizationName":
        case "packageChoice":
        case "plannedDate":
        case "participantCount":
        case "routeChoice":
        case "safetyNeeds":
        case "additionalNotes":
          newValues[name] = value;
          break;
        case "dateFlexibility":
          newValues.dateFlexibility = value as DateFlexibility;
          break;
        case "groupType":
          newValues.groupType = value as GroupType;
          break;
        case "meetingPoint":
          newValues.meetingPoint = value as MeetingPoint;
          break;
      }
    }

    setValues(newValues);
    
    // Clear notices after valid selection
    if (name === "packageChoice" && newValues.packageChoice !== "") {
      setPackageNotice(null);
    }
    
    if (name === "routeChoice") {
      if (newValues.routeChoice) {
        const route = getRouteBySlug(newValues.routeChoice);
        if (route && route.availabilityStatus === "special-consultation") {
          setRouteNotice("route-special");
        } else {
          setRouteNotice(null);
        }
      } else {
        setRouteNotice(null);
      }
    }
    
    // Clear error for this field by deleting the key
    const isDateUndecidedChecked = name === "dateUndecided" && type === "checkbox" && (e.target as HTMLInputElement).checked;
    if (errors[name as keyof BookingFormValues] || isDateUndecidedChecked) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name as keyof BookingFormValues];
        if (isDateUndecidedChecked) {
          delete next.plannedDate;
        }
        return next;
      });
    }
  };

  const focusFirstError = (newErrors: BookingFieldErrors) => {
    const errorKeys = Object.keys(newErrors) as (keyof BookingFieldErrors)[];
    // Order based on visual layout
    const fieldOrder: (keyof typeof fieldRefs)[] = [
      "customerName", 
      "customerWhatsapp", 
      "packageChoice", 
      "plannedDate", 
      "participantCount", 
      "groupType", 
      "privacyConsent"
    ];
    
    for (const field of fieldOrder) {
      if (errorKeys.includes(field)) {
        fieldRefs[field].current?.focus();
        break;
      }
    }
    
    if (errorSummaryRef.current) {
      errorSummaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const validateAndBuildMessage = (): string | null => {
    const newErrors = validateBookingForm(values);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      focusFirstError(newErrors);
      return null;
    }
    
    setErrors({});
    return buildBookingMessage(values);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setFallbackText("");
    setIsSubmitting(true);
    
    const message = validateAndBuildMessage();
    if (!message) {
      setIsSubmitting(false);
      return;
    }
    
    const waNumber = getOfficialWhatsAppNumber();
    
    if (waNumber) {
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
      
      const newTab = window.open(waUrl, "_blank");
      if (newTab) {
        setStatus("success-whatsapp");
      } else {
        setStatus("error-whatsapp-blocked");
        setFallbackText(message);
      }
    } else {
      // WA number not available, fallback to copy
      const success = await copyToClipboardFallback(message);
      if (success) {
        setStatus("success-copy");
      } else {
        setStatus("error-copy");
        setFallbackText(message);
      }
    }
    
    setIsSubmitting(false);
  };
  
  const handleCopySummary = async () => {
    setStatus("idle");
    setFallbackText("");

    const message = validateAndBuildMessage();
    if (!message) return;

    const success = await copyToClipboardFallback(message);
    if (success) {
      setStatus("success-copy");
    } else {
      setStatus("error-copy");
      setFallbackText(message);
    }
  };
  
  const hasErrors = Object.values(errors).some(Boolean);
  const isWaAvailable = !!getOfficialWhatsAppNumber();

  return {
    values,
    errors,
    status,
    isSubmitting,
    fallbackText,
    packageNotice,
    routeNotice,
    fieldRefs,
    errorSummaryRef,
    hasErrors,
    isWaAvailable,
    handleChange,
    handleSubmit,
    handleCopySummary,
  };
}
