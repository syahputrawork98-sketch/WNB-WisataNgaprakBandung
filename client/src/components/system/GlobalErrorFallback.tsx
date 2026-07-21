import { SystemState } from "./SystemState";

export function GlobalErrorFallback() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-wnb-black">
      <SystemState
        eyebrow="Sistem WNB"
        title="Terjadi Kendala"
        description="Website mengalami kendala saat menampilkan halaman. Silakan muat ulang halaman atau kembali ke Beranda."
        primaryAction={{
          label: "Muat Ulang Halaman",
          onClick: handleReload,
          variant: "primary"
        }}
        secondaryAction={{
          label: "Kembali ke Beranda",
          to: "/",
          variant: "secondary"
        }}
      />
    </div>
  );
}
