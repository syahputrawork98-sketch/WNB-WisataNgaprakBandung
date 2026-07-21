import { BookingFieldError } from "@/features/booking/components/BookingFieldError";
import { getBookingPackageOptions, DATE_FLEXIBILITY_OPTIONS, GROUP_TYPE_OPTIONS } from "@/features/booking/bookingData";
import type { BookingFormValues, BookingFieldErrors, BookingChangeHandler } from "@/features/booking/bookingTypes";
import type { RefObject } from "react";

type BookingTravelPlanSectionProps = {
  values: Pick<BookingFormValues, "packageChoice" | "plannedDate" | "dateUndecided" | "dateFlexibility" | "participantCount" | "groupType">;
  errors: Pick<BookingFieldErrors, "packageChoice" | "plannedDate" | "participantCount" | "groupType">;
  onChange: BookingChangeHandler;
  fieldRefs: {
    packageChoice: RefObject<HTMLSelectElement | null>;
    plannedDate: RefObject<HTMLInputElement | null>;
    participantCount: RefObject<HTMLInputElement | null>;
    groupType: RefObject<HTMLSelectElement | null>;
  };
};

export function BookingTravelPlanSection({ values, errors, onChange, fieldRefs }: BookingTravelPlanSectionProps) {
  return (
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
            onChange={onChange}
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
              onChange={onChange}
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
                onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
  );
}
