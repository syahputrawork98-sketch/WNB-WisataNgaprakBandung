import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function BookingPage() {
  return (
    <PagePlaceholder
      eyebrow="Reservasi"
      title="Booking Perjalanan"
      description="Form booking dan WhatsApp Click-to-Chat akan dibangun setelah nomor resmi dan data paket dikonfirmasi."
    >
      <p className="text-sm text-wnb-muted leading-relaxed">
        Formulir isian nama pemesan, nomor kontak, tanggal rencana perjalanan, paket wisata yang dipilih, dan pengalihan ke WhatsApp Click-to-Chat akan diintegrasikan pada langkah berikutnya.
      </p>
    </PagePlaceholder>
  );
}
