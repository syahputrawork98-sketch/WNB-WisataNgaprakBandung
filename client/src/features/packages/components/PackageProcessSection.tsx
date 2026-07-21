import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";

export function PackageProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Pilih Pengalaman",
      description:
        "Tentukan karakter perjalanan awal yang paling mendekati keinginan Anda, baik dari durasi, rute, maupun teman seperjalanan.",
    },
    {
      number: "02",
      title: "Sampaikan Kebutuhan",
      description:
        "Sampaikan ide kustomisasi Anda, seperti tanggal, titik kumpul, hingga tambahan kegiatan seperti piknik atau dokumentasi.",
    },
    {
      number: "03",
      title: "WNB Memeriksa dan Mengonfirmasi",
      description:
        "Kami menyusun rincian penawaran, menyesuaikan armada Land Rover, serta memastikan ketersediaan jalur pada jadwal Anda.",
    },
  ];

  return (
    <section 
      aria-labelledby="package-process-heading"
      className="my-16 p-8 sm:p-12 bg-wnb-surface border border-wnb-border rounded-wnb-lg text-center flex flex-col items-center gap-8"
    >
      <div className="flex flex-col gap-2 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-wnb-accent">
          Alur Merencanakan Perjalanan
        </span>
        <h2
          id="package-process-heading"
          className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-wnb-white"
        >
          Proses Memilih & Merencanakan Paket
        </h2>
        <p className="text-sm text-wnb-muted leading-relaxed">
          WNB mengutamakan kustomisasi pengalaman. Kami merancang perjalanan off-road yang menyesuaikan dengan ritme dan harapan spesifik rombongan Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        {steps.map((step) => (
          <div
            key={step.number}
            className="p-6 bg-wnb-black border border-wnb-border rounded-wnb-md flex flex-col gap-3"
          >
            <span className="text-3xl font-extrabold font-display text-wnb-white">
              {step.number}
            </span>
            <h3 className="text-base font-bold uppercase tracking-wider text-wnb-white">
              {step.title}
            </h3>
            <p className="text-xs text-wnb-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-wnb-black/50 border border-wnb-border p-4 rounded-wnb-md text-sm text-wnb-muted text-left max-w-3xl w-full mx-auto">
        <strong>Catatan Ketersediaan & Harga:</strong> Harga akhir bergantung pada tingkat kustomisasi, jumlah kendaraan, rute akhir, dan opsi tambahan. Khusus paket Open Trip, ketersediaan mengikuti jadwal terpublikasi WNB. Pengiriman permintaan belum menjadi konfirmasi pemesanan.
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <LinkButton to={ROUTE_PATHS.booking} size="lg" variant="primary">
          Rencanakan Perjalanan
        </LinkButton>
      </div>
    </section>
  );
}
