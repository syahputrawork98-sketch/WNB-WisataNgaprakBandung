import { ClipboardList, MessageSquareCheck, CheckCircle2 } from "lucide-react";

export function BookingNextSteps() {
  return (
    <div className="bg-wnb-surface border border-wnb-border rounded-xl p-5 mb-8">
      <h3 className="font-semibold mb-3 text-wnb-text">Langkah Selanjutnya</h3>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wnb-surface-elevated flex items-center justify-center text-wnb-text">
            <ClipboardList className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-wnb-text mb-1">1. Sampaikan Kebutuhan Awal</h4>
            <p className="text-sm text-wnb-muted leading-relaxed">
              Anda menyampaikan informasi dasar rencana perjalanan beserta preferensi melalui formulir atau ringkasan ini.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wnb-surface-elevated flex items-center justify-center text-wnb-text">
            <MessageSquareCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-wnb-text mb-1">2. WNB Melakukan Pemeriksaan</h4>
            <p className="text-sm text-wnb-muted leading-relaxed">
              Tim WNB memeriksa ketersediaan jadwal, unit kendaraan, Rute, kru pendamping, serta kebutuhan tambahan Anda.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wnb-surface-elevated flex items-center justify-center text-wnb-text">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-wnb-text mb-1">3. Konfirmasi dari WNB</h4>
            <p className="text-sm text-wnb-muted leading-relaxed">
              Setelah diperiksa, WNB akan memberikan konfirmasi final dan mengarahkan Anda ke langkah berikutnya melalui jalur komunikasi resmi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
