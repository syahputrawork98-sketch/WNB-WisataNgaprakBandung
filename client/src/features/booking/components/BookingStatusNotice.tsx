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
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex gap-3 text-green-800 dark:text-green-200"
        aria-live="polite"
      >
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">WhatsApp telah dibuka</h4>
          <p className="text-sm opacity-90">Silakan periksa pesan dan tekan Kirim untuk meneruskan permintaan kepada WNB.</p>
        </div>
      </div>
    );
  }

  if (status === "error-whatsapp-blocked") {
    return (
      <div 
        className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex gap-3 text-orange-800 dark:text-orange-200"
        aria-live="polite"
      >
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">WhatsApp Tidak Dapat Dibuka</h4>
          <p className="text-sm opacity-90">Browser mungkin memblokir tab baru atau WhatsApp tidak tersedia pada perangkat ini. Coba kembali atau salin ringkasan permintaan.</p>
        </div>
      </div>
    );
  }

  if (status === "success-copy") {
    return (
      <div 
        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3 text-blue-800 dark:text-blue-200"
        aria-live="polite"
      >
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Ringkasan Disalin</h4>
          <p className="text-sm opacity-90">Ringkasan permintaan berhasil disalin ke clipboard.</p>
        </div>
      </div>
    );
  }

  if (status === "error-copy") {
    return (
      <div 
        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex gap-3 text-red-800 dark:text-red-200"
        aria-live="polite"
      >
        <Copy className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="w-full">
          <h4 className="font-semibold text-sm mb-1">Ringkasan belum dapat disalin</h4>
          <p className="text-sm opacity-90 mb-2">Pilih teks ringkasan di bawah dan salin secara manual.</p>
          {fallbackText && (
            <textarea 
              readOnly 
              className="w-full h-32 p-2 text-sm border border-red-200 dark:border-red-800 rounded bg-white dark:bg-gray-800"
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
