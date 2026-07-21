import { Container } from "@/components/common/Container";
import { AlertCircle } from "lucide-react";
import { BookingNextSteps } from "@/features/booking/components/BookingNextSteps";
import { BookingSummary } from "@/features/booking/components/BookingSummary";
import { BookingContextNotice } from "@/features/booking/components/BookingContextNotice";
import { useBookingForm } from "@/features/booking/hooks/useBookingForm";
import { BookingCustomerSection } from "@/features/booking/components/BookingCustomerSection";
import { BookingTravelPlanSection } from "@/features/booking/components/BookingTravelPlanSection";
import { BookingPreferencesSection } from "@/features/booking/components/BookingPreferencesSection";
import { BookingConsentSection } from "@/features/booking/components/BookingConsentSection";
import { BookingActions } from "@/features/booking/components/BookingActions";

export function BookingPage() {
  const {
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
  } = useBookingForm();

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

                  <BookingCustomerSection 
                    values={values} 
                    errors={errors} 
                    onChange={handleChange} 
                    fieldRefs={fieldRefs} 
                  />

                  <BookingTravelPlanSection 
                    values={values} 
                    errors={errors} 
                    onChange={handleChange} 
                    fieldRefs={fieldRefs} 
                  />

                  <BookingPreferencesSection 
                    values={values} 
                    onChange={handleChange} 
                  />

                  <BookingConsentSection 
                    values={values} 
                    errors={errors} 
                    onChange={handleChange} 
                    fieldRefs={fieldRefs} 
                  />

                  <BookingActions 
                    status={status}
                    isSubmitting={isSubmitting}
                    fallbackText={fallbackText}
                    isWaAvailable={isWaAvailable}
                    onCopySummary={handleCopySummary}
                  />
                  
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
