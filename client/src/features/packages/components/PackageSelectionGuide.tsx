import { Compass, Users, Clock, ShieldCheck } from "lucide-react";

export function PackageSelectionGuide() {
  return (
    <section className="mt-16 bg-wnb-surface border border-wnb-border rounded-wnb-lg p-6 sm:p-8">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider text-wnb-white">
          Panduan Memilih Paket
        </h2>
        <p className="text-wnb-muted leading-relaxed max-w-3xl">
          Bingung memilih petualangan yang tepat? Berikut adalah panduan singkat
          untuk mencocokkan kebutuhan Anda dengan paket WNB.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Berdasarkan Peserta
          </h3>
          <ul className="text-sm text-wnb-muted flex flex-col gap-2 list-disc list-inside">
            <li><strong>Keluarga/Pemula:</strong> Short Trip, Full Experience</li>
            <li><strong>Pasangan:</strong> Anniversary, Surprise</li>
            <li><strong>Perusahaan:</strong> Corporate Adventure</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Berdasarkan Durasi
          </h3>
          <ul className="text-sm text-wnb-muted flex flex-col gap-2 list-disc list-inside">
            <li><strong>Ringkas (3-4 jam):</strong> Short Trip</li>
            <li><strong>Penuh (5-8 jam):</strong> Full Exp, Corporate</li>
            <li><strong>Menginap:</strong> Adventure Camping</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Tingkat Tantangan
          </h3>
          <ul className="text-sm text-wnb-muted flex flex-col gap-2 list-disc list-inside">
            <li><strong>Santai:</strong> Short Trip, Anniversary</li>
            <li><strong>Menengah:</strong> Full Exp, Corporate</li>
            <li><strong>Tinggi:</strong> Trail Exploration</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-wnb-black border border-wnb-border flex items-center justify-center text-wnb-accent">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-wnb-white uppercase tracking-wider text-sm">
            Saran WNB
          </h3>
          <p className="text-sm text-wnb-muted">
            Jika ini adalah pengalaman off-road pertama Anda bersama anak-anak, kami
            menyarankan <strong>Family Adventure — Short Trip</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
