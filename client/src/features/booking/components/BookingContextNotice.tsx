import { AlertTriangle, Info } from "lucide-react";

type BookingContextNoticeProps = {
  type: "package-not-found" | "package-not-eligible" | "route-not-found" | "route-special";
};

export function BookingContextNotice({ type }: BookingContextNoticeProps) {
  if (type === "package-not-found") {
    return (
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex gap-3 text-orange-800 dark:text-orange-200">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Paket Tidak Tersedia</h4>
          <p className="text-sm opacity-90">Paket dari tautan yang Anda buka tidak dapat dipilih. Anda tetap dapat menggunakan formulir umum atau meminta rekomendasi.</p>
        </div>
      </div>
    );
  }

  if (type === "package-not-eligible") {
    return (
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex gap-3 text-orange-800 dark:text-orange-200">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Paket Tidak Mendukung Rencana Instan</h4>
          <p className="text-sm opacity-90">Paket dari tautan yang Anda buka tidak tersedia sebagai paket reguler instan. Silakan pilih paket lain atau minta rencana khusus.</p>
        </div>
      </div>
    );
  }

  if (type === "route-not-found") {
    return (
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 flex gap-3 text-orange-800 dark:text-orange-200">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Rute Tidak Ditemukan</h4>
          <p className="text-sm opacity-90">Rute dari tautan yang Anda buka tidak tersedia. Anda tetap dapat memilih Rute lain atau meminta rekomendasi.</p>
        </div>
      </div>
    );
  }

  if (type === "route-special") {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3 text-blue-800 dark:text-blue-200">
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-sm mb-1">Konsultasi Rute Khusus</h4>
          <p className="text-sm opacity-90">Anda memilih rute khusus. Ketersediaan rute ini bergantung pada hasil konsultasi lebih lanjut dengan tim WNB.</p>
        </div>
      </div>
    );
  }

  return null;
}
