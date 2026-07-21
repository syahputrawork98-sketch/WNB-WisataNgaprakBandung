import { getBookingRouteOptions, MEETING_POINT_OPTIONS, ADDITIONAL_NEEDS_OPTIONS } from "@/features/booking/bookingData";
import type { BookingFormValues, BookingChangeHandler, AdditionalNeed } from "@/features/booking/bookingTypes";

type BookingPreferencesSectionProps = {
  values: Pick<BookingFormValues, "routeChoice" | "meetingPoint" | "additionalNeeds" | "safetyNeeds" | "additionalNotes">;
  onChange: BookingChangeHandler;
};

export function BookingPreferencesSection({ values, onChange }: BookingPreferencesSectionProps) {
  return (
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
              onChange={onChange}
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
              onChange={onChange}
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
                  onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
  );
}
