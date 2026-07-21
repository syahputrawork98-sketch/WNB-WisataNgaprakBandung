import { BookingFieldError } from "@/features/booking/components/BookingFieldError";
import type { BookingFormValues, BookingFieldErrors, BookingChangeHandler } from "@/features/booking/bookingTypes";
import type { RefObject } from "react";

type BookingConsentSectionProps = {
  values: Pick<BookingFormValues, "privacyConsent">;
  errors: Pick<BookingFieldErrors, "privacyConsent">;
  onChange: BookingChangeHandler;
  fieldRefs: {
    privacyConsent: RefObject<HTMLInputElement | null>;
  };
};

export function BookingConsentSection({ values, errors, onChange, fieldRefs }: BookingConsentSectionProps) {
  return (
    <section className="bg-wnb-surface-elevated p-5 rounded-xl border border-wnb-border">
      <div className="flex items-start gap-3">
        <input
          ref={fieldRefs.privacyConsent}
          type="checkbox"
          id="privacyConsent"
          name="privacyConsent"
          checked={values.privacyConsent}
          onChange={onChange}
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
  );
}
