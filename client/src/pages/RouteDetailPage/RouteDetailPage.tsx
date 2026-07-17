import { useParams } from "react-router";
import { PagePlaceholder } from "@/components/common/PagePlaceholder";

export function RouteDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <PagePlaceholder
      eyebrow="Eksplorasi"
      title="Detail Rute Perjalanan"
      description="Informasi detail mengenai kondisi medan, estimasi waktu tempuh, dan tingkat kesulitan rute akan disajikan di sini setelah data dikonfirmasi."
    >
      <div className="mt-4 p-6 border border-wnb-border rounded-wnb-md bg-wnb-black">
        <p className="text-sm text-wnb-muted">
          Slug rute yang sedang dibuka:{" "}
          <code className="text-wnb-white font-mono font-bold bg-wnb-surface px-2 py-1 rounded border border-wnb-border">
            {slug || "(Tidak ada slug)"}
          </code>
        </p>
      </div>
    </PagePlaceholder>
  );
}
