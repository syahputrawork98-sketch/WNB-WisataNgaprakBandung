import { Container } from "@/components/common/Container";
import { MapPin } from "lucide-react";

export function OperationalBaseSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="base-heading">
      <Container className="flex flex-col gap-8 items-center text-center max-w-2xl mx-auto">
        <div className="w-12 h-12 flex items-center justify-center rounded-wnb-md bg-wnb-surface text-wnb-accent border border-wnb-border">
          <MapPin className="w-6 h-6" aria-hidden="true" />
        </div>
        
        <h2 id="base-heading" className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-wnb-white">
          Kantor Pusat Administrasi dan Garasi Unit Cadangan
        </h2>
        
        <div className="flex flex-col gap-4 text-sm sm:text-base text-wnb-muted">
          <p className="font-semibold text-wnb-white">
            Jl. Encep Katawirya No. 128F, Cimahi Utara, Kota Cimahi
          </p>
          <p>
            Alamat ini digunakan sebagai kantor pusat administrasi dan garasi unit cadangan WNB. Titik temu perjalanan bersifat fleksibel dan ditentukan berdasarkan kesepakatan pemesanan.
          </p>
        </div>
      </Container>
    </section>
  );
}
