import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";

export function PackageProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Pilih Pengalaman",
      description:
        "Tentukan karakter perjalanan yang paling sesuai dengan ritme Anda, keluarga, rombongan perusahaan, atau momen perayaan.",
    },
    {
      number: "02",
      title: "Diskusikan Kebutuhan",
      description:
        "Sampaikan jumlah peserta, preferensi tanggal, titik kumpul, serta opsi aktivitas pendamping kepada tim WNB.",
    },
    {
      number: "03",
      title: "Penyesuaian & Keberangkatan",
      description:
        "Tim WNB menyusun ketersediaan unit Land Rover, rute lintasan yang sesuai, serta konfirmasi rincian perjalanan Anda.",
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
          Setiap paket WNB dirancang fleksibel agar dapat memberikan pengalaman terbaik sesuai karakter dan harapan perjalanan Anda.
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

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <LinkButton to={ROUTE_PATHS.booking} size="lg" variant="primary">
          Rencanakan Perjalanan
        </LinkButton>
      </div>
    </section>
  );
}
