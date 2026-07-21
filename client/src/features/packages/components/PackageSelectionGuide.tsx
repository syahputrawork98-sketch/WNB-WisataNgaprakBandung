import { Compass, Users, Clock, Map } from "lucide-react";

export function PackageSelectionGuide() {
  return (
    <section className="mt-16 bg-wnb-surface border border-wnb-border rounded-wnb-lg p-6 sm:p-8">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider text-wnb-white">
          Panduan Memilih Paket
        </h2>
        <p className="text-wnb-muted leading-relaxed max-w-3xl">
          Bingung memilih petualangan yang tepat? Berikut adalah panduan umum
          untuk mencocokkan kebutuhan Anda dengan paket WNB.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Peserta Perjalanan
          </h3>
          <p className="text-sm text-wnb-muted leading-relaxed">
            Pilih paket berdasarkan dengan siapa Anda bepergian. Kami memiliki paket yang ideal untuk keluarga, pasangan, hingga kelompok korporat.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Durasi Perjalanan
          </h3>
          <p className="text-sm text-wnb-muted leading-relaxed">
            Sesuaikan dengan waktu yang Anda miliki. Tersedia pilihan durasi singkat (3-4 jam), pengalaman penuh seharian, hingga menginap (camping).
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Tujuan Perjalanan
          </h3>
          <p className="text-sm text-wnb-muted leading-relaxed">
            Apakah Anda mencari liburan santai, perayaan momen spesial, acara team-building, atau sekadar eksplorasi alam lepas.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Map className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Format Perjalanan
          </h3>
          <p className="text-sm text-wnb-muted leading-relaxed">
            Tentukan apakah Anda lebih nyaman dengan perjalanan eksklusif khusus rombongan Anda (Private) atau bergabung dengan yang lain (Open Trip).
          </p>
        </div>
      </div>
    </section>
  );
}
