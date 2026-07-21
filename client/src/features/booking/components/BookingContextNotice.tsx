import { AlertTriangle, Info } from "lucide-react";

type BookingContextNoticeProps = {
  type: "package-not-found" | "package-not-eligible" | "route-not-found" | "route-special";
};

export function BookingContextNotice({ type }: BookingContextNoticeProps) {
  if (type === "package-not-found") {
    return (
      <div className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-danger" />
        <div>
          <h4 className="font-semibold text-sm mb-1 text-wnb-danger">Paket Tidak Tersedia</h4>
          <p className="text-sm text-wnb-muted">Paket dari tautan yang Anda buka tidak dapat dipilih. Anda tetap dapat menggunakan formulir umum atau meminta rekomendasi.</p>
        </div>
      </div>
    );
  }

  if (type === "package-not-eligible") {
    return (
      <div className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-danger" />
        <div>
          <h4 className="font-semibold text-sm mb-1 text-wnb-danger">Paket Tidak Mendukung Rencana Instan</h4>
          <p className="text-sm text-wnb-muted">Paket dari tautan yang Anda buka tidak tersedia sebagai paket reguler instan. Silakan pilih paket lain atau minta rencana khusus.</p>
        </div>
      </div>
    );
  }

  if (type === "route-not-found") {
    return (
      <div className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-danger" />
        <div>
          <h4 className="font-semibold text-sm mb-1 text-wnb-danger">Rute Tidak Ditemukan</h4>
          <p className="text-sm text-wnb-muted">Rute dari tautan yang Anda buka tidak tersedia. Anda tetap dapat memilih Rute lain atau meminta rekomendasi.</p>
        </div>
      </div>
    );
  }

  if (type === "route-special") {
    return (
      <div className="bg-wnb-surface border border-wnb-border rounded-xl p-4 flex gap-3 text-wnb-text">
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-wnb-muted" />
        <div>
          <h4 className="font-semibold text-sm mb-1 text-wnb-text">Konsultasi Rute Khusus</h4>
          <p className="text-sm text-wnb-muted">Anda memilih rute khusus. Ketersediaan rute ini bergantung pada hasil konsultasi lebih lanjut dengan tim WNB.</p>
        </div>
      </div>
    );
  }

  return null;
}
