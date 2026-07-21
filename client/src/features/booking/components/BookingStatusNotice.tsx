import { CheckCircle2, AlertTriangle, Copy } from "lucide-react";
import type { BookingStatus } from "../bookingTypes";

type BookingStatusNoticeProps = {
  status: BookingStatus;
  fallbackText?: string;
};

export function BookingStatusNotice({ status, fallbackText }: BookingStatusNoticeProps) {
  if (status === "idle") return null;

  if (status === "success-whatsapp") {
    return (
      <div 
        className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text"
        aria-live="polite"
      >
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#25D366]" />
        <div>
          <h4 className="font-semibold text-sm mb-1">WhatsApp Telah Dibuka</h4>
          <p className="text-sm text-wnb-muted">WhatsApp telah dibuka. Silakan periksa isi pesan dan tekan tombol Kirim untuk meneruskan permintaan kepada WNB.</p>
        </div>
      </div>
    );
  }

  if (status === "error-whatsapp-blocked") {
    return (
      <div 
        className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text"
        role="alert"
      >
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-danger" />
        <div>
          <h4 className="font-semibold text-sm mb-1 text-wnb-danger">WhatsApp Tidak Dapat Dibuka</h4>
          <p className="text-sm text-wnb-muted">Browser Anda memblokir jendela baru. Silakan gunakan tombol "Salin Saja" di bawah dan kirim manual ke nomor kami.</p>
        </div>
      </div>
    );
  }

  if (status === "success-copy") {
    return (
      <div 
        className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text"
        aria-live="polite"
      >
        <Copy className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-text" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Ringkasan Disalin</h4>
          <p className="text-sm text-wnb-muted">Ringkasan permintaan berhasil disalin ke clipboard. Simpan ringkasan ini atau tempelkan pada kanal resmi WNB ketika tersedia.</p>
        </div>
      </div>
    );
  }

  if (status === "error-copy") {
    return (
      <div 
        className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text"
        role="alert"
      >
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-danger" />
        <div>
          <h4 className="font-semibold text-sm mb-1 text-wnb-danger">Gagal Menyalin</h4>
          <p className="text-sm text-wnb-muted">Browser Anda tidak mengizinkan akses clipboard. Silakan salin teks ringkasan secara manual di bawah ini.</p>
          {fallbackText && (
            <textarea 
              readOnly 
              className="w-full h-32 p-2 mt-3 text-sm border border-wnb-border rounded bg-wnb-surface"
              value={fallbackText}
              aria-label="Teks ringkasan untuk disalin manual"
            />
          )}
        </div>
      </div>
    );
  }

  return null;
}
