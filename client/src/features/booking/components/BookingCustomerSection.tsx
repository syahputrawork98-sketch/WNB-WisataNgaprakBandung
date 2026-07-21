import { BookingFieldError } from "@/features/booking/components/BookingFieldError";
import type { BookingFormValues, BookingFieldErrors, BookingChangeHandler } from "@/features/booking/bookingTypes";
import type { RefObject } from "react";

type BookingCustomerSectionProps = {
  values: Pick<BookingFormValues, "customerName" | "customerWhatsapp" | "organizationName">;
  errors: Pick<BookingFieldErrors, "customerName" | "customerWhatsapp">;
  onChange: BookingChangeHandler;
  fieldRefs: {
    customerName: RefObject<HTMLInputElement | null>;
    customerWhatsapp: RefObject<HTMLInputElement | null>;
  };
};

export function BookingCustomerSection({ values, errors, onChange, fieldRefs }: BookingCustomerSectionProps) {
  return (
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            className="w-full px-4 py-2.5 rounded-xl border border-wnb-border bg-wnb-surface focus:ring-2 focus:ring-wnb-accent focus:border-transparent outline-none transition-shadow text-wnb-text"
            placeholder="Nama perusahaan, komunitas, dll"
          />
        </div>
      </div>
    </section>
  );
}
