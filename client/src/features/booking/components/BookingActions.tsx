import { Copy, ExternalLink } from "lucide-react";
import { BookingStatusNotice } from "@/features/booking/components/BookingStatusNotice";
import type { BookingStatus } from "@/features/booking/bookingTypes";

type BookingActionsProps = {
  status: BookingStatus;
  isSubmitting: boolean;
  fallbackText: string;
  isWaAvailable: boolean;
  onCopySummary: () => void;
};

export function BookingActions({
  status,
  isSubmitting,
  fallbackText,
  isWaAvailable,
  onCopySummary
}: BookingActionsProps) {
  return (
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
            onClick={onCopySummary}
            className="w-full sm:w-auto px-6 py-3.5 bg-wnb-surface border border-wnb-border hover:bg-wnb-surface-elevated text-wnb-text rounded-full font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Salin Saja
          </button>
        )}
      </div>
    </div>
  );
}
