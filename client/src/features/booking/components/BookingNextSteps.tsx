import { ClipboardList, MessageSquareCheck, CheckCircle2 } from "lucide-react";

export function BookingNextSteps() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-gray-100">Proses Berikutnya</h3>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <ClipboardList className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">1. Sampaikan Kebutuhan Awal</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Anda menyampaikan informasi dasar rencana perjalanan beserta preferensi melalui formulir atau ringkasan ini.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <MessageSquareCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">2. WNB Melakukan Pemeriksaan</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Tim WNB memeriksa ketersediaan jadwal, unit kendaraan, Rute, kru pendamping, serta kebutuhan tambahan Anda.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">3. Konfirmasi dari WNB</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Setelah diperiksa, WNB akan memberikan konfirmasi final dan mengarahkan Anda ke langkah berikutnya melalui jalur komunikasi resmi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
