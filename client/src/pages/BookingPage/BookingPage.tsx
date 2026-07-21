import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import { Container } from "@/components/common/Container";
import { Copy, AlertCircle, ExternalLink } from "lucide-react";
import { BookingNextSteps } from "@/features/booking/components/BookingNextSteps";
import { BookingSummary } from "@/features/booking/components/BookingSummary";
import { BookingContextNotice } from "@/features/booking/components/BookingContextNotice";
import { BookingFieldError } from "@/features/booking/components/BookingFieldError";
import { BookingStatusNotice } from "@/features/booking/components/BookingStatusNotice";
import { 
  getBookingPackageOptions, 
  getBookingRouteOptions, 
  DATE_FLEXIBILITY_OPTIONS, 
  GROUP_TYPE_OPTIONS, 
  MEETING_POINT_OPTIONS, 
  ADDITIONAL_NEEDS_OPTIONS 
} from "@/features/booking/bookingData";
import { validateBookingForm } from "@/features/booking/bookingValidation";
import { buildBookingMessage } from "@/features/booking/bookingMessage";
import { getOfficialWhatsAppNumber } from "@/features/booking/bookingContact";
import { copyToClipboardFallback } from "@/features/booking/bookingClipboard";
import type { 
  BookingFormValues, 
  BookingFieldErrors, 
  BookingStatus,
  AdditionalNeed
} from "@/features/booking/bookingTypes";
import { getPackageBySlug } from "@/features/packages/packagesData";
import { getRouteBySlug } from "@/features/routes/routesData";


export function BookingPage() {
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
    let initialPackageNotice = null;
    let initialRouteNotice = null;

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
    
    setPackageNotice(initialPackageNotice as any);
    setRouteNotice(initialRouteNotice as any);
  }, [searchParams]);

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      } else {
        (newValues as any)[name] = checked;
        if (name === "dateUndecided" && checked) {
          newValues.plannedDate = "";
        }
      }
    } else {
      (newValues as any)[name] = value;
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

  return (
    <>
      <div className="min-h-screen pb-20 pt-28 lg:pt-36">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="mb-10 lg:mb-12">
              <p className="text-sm font-bold tracking-widest text-wnb-accent uppercase mb-2">Permintaan Perjalanan</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-wnb-text mb-4">
                Rencanakan Perjalanan WNB
              </h1>
              <p className="text-wnb-muted text-lg leading-relaxed max-w-2xl">
                Sampaikan kebutuhan perjalanan Anda. Tim WNB akan memeriksa ketersediaan Paket, kendaraan, Rute, jadwal, dan kebutuhan lainnya sebelum memberikan konfirmasi. Formulir ini <strong className="font-semibold text-wnb-text">bukan</strong> konfirmasi otomatis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
              {/* Form Column */}
              <div>
                <form onSubmit={handleSubmit} noValidate className="space-y-10">
                  
                  {/* Context Notices */}
                  {(packageNotice || routeNotice) && (
                    <div className="space-y-3">
                      {packageNotice && <BookingContextNotice type={packageNotice} />}
                      {routeNotice && <BookingContextNotice type={routeNotice} />}
                    </div>
                  )}

                  {/* Error Summary */}
                  {hasErrors && (
                    <div 
                      ref={errorSummaryRef}
                      className="bg-wnb-surface border border-wnb-border-strong rounded-xl p-4 text-wnb-text"
                      role="alert"
                      aria-live="assertive"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-danger" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1 text-wnb-danger">Periksa Kembali Formulir</h4>
                          <p className="text-sm text-wnb-muted">Beberapa informasi wajib belum dilengkapi dengan benar.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section: Data Pemesan */}
                  <section className="space-y-5">
                    <h2 className="text-xl font-bold text-wnb-text border-b border-wnb-border pb-2">1. Data Pemesan</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="customerName" className="block text-sm font-medium text-wnb-muted mb-1.5">Nama Lengkap <span className="text-wnb-danger">*</span></label>
                        <input
                          ref={fieldRefs.customerName}
                          type="text"
                          id="customerName"
                          name="customerName"
                          autoComplete="name"
                          value={values.customerName}
                          onChange={handleChange}
                          aria-invalid={!!errors.customerName}
                          aria-describedby={errors.customerName ? "customerName-error" : undefined}
                          className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          placeholder="Nama Anda atau perwakilan"
                        />
                        <BookingFieldError id="customerName-error" error={errors.customerName} />
                      </div>

                      <div>
                        <label htmlFor="customerWhatsapp" className="block text-sm font-medium text-wnb-muted mb-1.5">Nomor WhatsApp <span className="text-wnb-danger">*</span></label>
                        <input
                          ref={fieldRefs.customerWhatsapp}
                          type="tel"
                          id="customerWhatsapp"
                          name="customerWhatsapp"
                          autoComplete="tel"
                          value={values.customerWhatsapp}
                          onChange={handleChange}
                          aria-invalid={!!errors.customerWhatsapp}
                          aria-describedby={errors.customerWhatsapp ? "customerWhatsapp-error" : undefined}
                          className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          placeholder="08xxxxxxxxxx"
                        />
                        <BookingFieldError id="customerWhatsapp-error" error={errors.customerWhatsapp} />
                      </div>

                      <div>
                        <label htmlFor="organizationName" className="block text-sm font-medium text-wnb-muted mb-1.5">Instansi atau Organisasi (Opsional)</label>
                        <input
                          type="text"
                          id="organizationName"
                          name="organizationName"
                          autoComplete="organization"
                          value={values.organizationName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          placeholder="Nama perusahaan, komunitas, dll"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Section: Rencana Perjalanan */}
                  <section className="space-y-5">
                    <h2 className="text-xl font-bold text-wnb-text border-b border-wnb-border pb-2">2. Rencana Perjalanan</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="packageChoice" className="block text-sm font-medium text-wnb-muted mb-1.5">Paket Wisata <span className="text-wnb-danger">*</span></label>
                        <select
                          ref={fieldRefs.packageChoice}
                          id="packageChoice"
                          name="packageChoice"
                          value={values.packageChoice}
                          onChange={handleChange}
                          aria-invalid={!!errors.packageChoice}
                          aria-describedby={errors.packageChoice ? "packageChoice-error" : undefined}
                          className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                        >
                          {getBookingPackageOptions().map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <BookingFieldError id="packageChoice-error" error={errors.packageChoice} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="plannedDate" className="block text-sm font-medium text-wnb-muted mb-1.5">Tanggal Rencana <span className="text-wnb-danger">*</span></label>
                          <input
                            ref={fieldRefs.plannedDate}
                            type="date"
                            id="plannedDate"
                            name="plannedDate"
                            value={values.plannedDate}
                            onChange={handleChange}
                            disabled={values.dateUndecided}
                            aria-invalid={!!errors.plannedDate}
                            aria-describedby={errors.plannedDate ? "plannedDate-error" : undefined}
                            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow disabled:opacity-50 disabled:cursor-not-allowed text-wnb-text"
                          />
                          <div className="mt-2 flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="dateUndecided"
                              name="dateUndecided"
                              checked={values.dateUndecided}
                              onChange={handleChange}
                              className="w-4 h-4 rounded border-wnb-border text-wnb-accent focus:ring-wnb-accent"
                            />
                            <label htmlFor="dateUndecided" className="text-sm text-wnb-muted">Tanggal belum ditentukan</label>
                          </div>
                          <BookingFieldError id="plannedDate-error" error={errors.plannedDate} />
                        </div>

                        <div>
                          <label htmlFor="dateFlexibility" className="block text-sm font-medium text-wnb-muted mb-1.5">Fleksibilitas Tanggal</label>
                          <select
                            id="dateFlexibility"
                            name="dateFlexibility"
                            value={values.dateFlexibility}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          >
                            {DATE_FLEXIBILITY_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="participantCount" className="block text-sm font-medium text-wnb-muted mb-1.5">Jumlah Peserta <span className="text-wnb-danger">*</span></label>
                          <input
                            ref={fieldRefs.participantCount}
                            type="number"
                            id="participantCount"
                            name="participantCount"
                            min="1"
                            value={values.participantCount}
                            onChange={handleChange}
                            aria-invalid={!!errors.participantCount}
                            aria-describedby={errors.participantCount ? "participantCount-error participantCount-helper" : "participantCount-helper"}
                            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          />
                          <p id="participantCount-helper" className="text-xs text-wnb-subtle mt-1">Kapasitas unit akan diperiksa oleh WNB.</p>
                          <BookingFieldError id="participantCount-error" error={errors.participantCount} />
                        </div>

                        <div>
                          <label htmlFor="groupType" className="block text-sm font-medium text-wnb-muted mb-1.5">Jenis Kelompok <span className="text-wnb-danger">*</span></label>
                          <select
                            ref={fieldRefs.groupType}
                            id="groupType"
                            name="groupType"
                            value={values.groupType}
                            onChange={handleChange}
                            aria-invalid={!!errors.groupType}
                            aria-describedby={errors.groupType ? "groupType-error" : undefined}
                            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          >
                            {GROUP_TYPE_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                          <BookingFieldError id="groupType-error" error={errors.groupType} />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section: Preferensi Opsional */}
                  <section className="space-y-5">
                    <h2 className="text-xl font-bold text-wnb-text border-b border-wnb-border pb-2">3. Preferensi & Kebutuhan Tambahan</h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="routeChoice" className="block text-sm font-medium text-wnb-muted mb-1.5">Preferensi Rute (Opsional)</label>
                          <select
                            id="routeChoice"
                            name="routeChoice"
                            value={values.routeChoice}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          >
                            {getBookingRouteOptions().map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="meetingPoint" className="block text-sm font-medium text-wnb-muted mb-1.5">Preferensi Titik Temu (Opsional)</label>
                          <select
                            id="meetingPoint"
                            name="meetingPoint"
                            value={values.meetingPoint}
                            onChange={handleChange}
                            aria-describedby="meetingPoint-helper"
                            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
                          >
                            {MEETING_POINT_OPTIONS.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                          <p id="meetingPoint-helper" className="text-xs text-wnb-subtle mt-1">Titik temu final ditentukan setelah Paket dan Rute diperiksa.</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-wnb-muted mb-2">Kebutuhan Tambahan (Opsional)</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {ADDITIONAL_NEEDS_OPTIONS.map((opt) => (
                            <div key={opt.value} className="flex items-start gap-2.5">
                              <input
                                type="checkbox"
                                id={`need-${opt.value}`}
                                name="additionalNeeds"
                                value={opt.value}
                                checked={values.additionalNeeds.includes(opt.value as AdditionalNeed)}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 rounded border-wnb-border text-wnb-accent focus:ring-wnb-accent"
                              />
                              <label htmlFor={`need-${opt.value}`} className="text-sm text-wnb-muted cursor-pointer">
                                {opt.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="safetyNeeds" className="block text-sm font-medium text-wnb-muted mb-1.5">Kebutuhan Kenyamanan / Keselamatan Khusus</label>
                        <textarea
                          id="safetyNeeds"
                          name="safetyNeeds"
                          value={values.safetyNeeds}
                          onChange={handleChange}
                          rows={3}
                          maxLength={500}
                          aria-describedby="safetyNeeds-helper"
                          className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow resize-y text-wnb-text"
                          placeholder="Adakah anggota rombongan dengan kebutuhan fisik khusus, balita, atau lansia?"
                        />
                        <div className="flex justify-between items-center mt-1 text-xs text-wnb-subtle">
                          <p id="safetyNeeds-helper">Jelaskan secara umum. Jangan memasukkan diagnosis medis rinci.</p>
                          <span>{values.safetyNeeds.length}/500</span>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-wnb-muted mb-1.5">Catatan Tambahan</label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          value={values.additionalNotes}
                          onChange={handleChange}
                          rows={3}
                          maxLength={1000}
                          className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow resize-y text-wnb-text"
                          placeholder="Catatan atau pertanyaan lain untuk tim WNB..."
                        />
                        <div className="flex justify-end mt-1 text-xs text-wnb-subtle">
                          <span>{values.additionalNotes.length}/1000</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section: Persetujuan */}
                  <section className="bg-wnb-surface-elevated p-5 rounded-xl border border-wnb-border">
                    <div className="flex items-start gap-3">
                      <input
                        ref={fieldRefs.privacyConsent}
                        type="checkbox"
                        id="privacyConsent"
                        name="privacyConsent"
                        checked={values.privacyConsent}
                        onChange={handleChange}
                        aria-invalid={!!errors.privacyConsent}
                        aria-describedby={errors.privacyConsent ? "privacyConsent-error privacyConsent-desc" : "privacyConsent-desc"}
                        className="mt-1 w-5 h-5 rounded border-wnb-border text-wnb-accent focus:ring-wnb-accent"
                      />
                      <div>
                        <label htmlFor="privacyConsent" className="text-sm font-medium text-wnb-text cursor-pointer block mb-1">
                          Saya menyetujui penggunaan data formulir ini <span className="text-wnb-danger">*</span>
                        </label>
                        <p id="privacyConsent-desc" className="text-xs text-wnb-muted leading-relaxed">
                          Data pada formulir ini hanya diproses di browser untuk membentuk ringkasan atau pesan WhatsApp. Website tidak menyimpan data ini. Permintaan baru diteruskan setelah Anda membuka WhatsApp dan menekan tombol Kirim. Permintaan ini belum menjadi konfirmasi booking dan bukan persetujuan publikasi dokumentasi.
                        </p>
                        <BookingFieldError id="privacyConsent-error" error={errors.privacyConsent} />
                      </div>
                    </div>
                  </section>

                  {/* Submit Actions */}
                  <div className="flex flex-col gap-4">
                    <BookingStatusNotice status={status} fallbackText={fallbackText} />
                    
                    {!isWaAvailable && status === "idle" && (
                      <div className="bg-wnb-surface border border-wnb-border rounded-xl p-4 text-wnb-text text-sm">
                        <h4 className="font-semibold mb-1">Kanal Pemesanan Sedang Dilengkapi</h4>
                        <p className="text-wnb-muted">Nomor WhatsApp resmi WNB belum dikonfigurasi. Anda tetap dapat menyalin ringkasan permintaan untuk disimpan atau disampaikan melalui kanal resmi setelah tersedia.</p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                      {isWaAvailable ? (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Lanjutkan ke WhatsApp
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3.5 bg-wnb-accent hover:bg-wnb-accent-dark text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <Copy className="w-5 h-5" />
                          Salin Ringkasan
                        </button>
                      )}
                      
                      {isWaAvailable && (
                        <button
                          type="button"
                          onClick={handleCopySummary}
                          className="w-full sm:w-auto px-6 py-3.5 bg-wnb-surface border border-wnb-border hover:bg-wnb-surface-elevated text-wnb-text rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          <Copy className="w-4 h-4" />
                          Salin Saja
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              {/* Sidebar Column (Summary + Next Steps) */}
              <div className="space-y-8">
                <div className="sticky top-28 space-y-8">
                  <BookingSummary values={values} />
                  <BookingNextSteps />
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
