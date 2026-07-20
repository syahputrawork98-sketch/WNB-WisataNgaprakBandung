import { Compass, ShieldAlert, CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/common/LinkButton";
import { ROUTE_PATHS } from "@/routes/routePaths";
import { TRAIL_EXPLORATION } from "../packagesData";

export function SpecialExperienceSection() {
  return (
    <section 
      aria-labelledby="special-experience-heading"
      className="my-16 p-8 sm:p-10 bg-wnb-surface border-2 border-wnb-border-strong rounded-wnb-lg relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
        {/* Left Column: Title & Overview */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-wnb-accent shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-wnb-accent bg-wnb-black px-3 py-1 rounded border border-wnb-border">
              {TRAIL_EXPLORATION.label}
            </span>
          </div>

          <h2
            id="special-experience-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-display uppercase tracking-wider text-wnb-white"
          >
            {TRAIL_EXPLORATION.title}
          </h2>

          <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
            {TRAIL_EXPLORATION.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2 p-4 bg-wnb-black rounded-wnb-md border border-wnb-border">
            <div>
              <span className="text-xs font-semibold text-wnb-subtle uppercase tracking-wider block">
                Sasaran Peserta:
              </span>
              <span className="text-xs text-wnb-white font-medium">
                {TRAIL_EXPLORATION.audience.join(", ")}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-wnb-subtle uppercase tracking-wider block">
                Perkiraan Durasi:
              </span>
              <span className="text-xs text-wnb-white font-medium">
                {TRAIL_EXPLORATION.duration}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-wnb-subtle uppercase tracking-wider block">
                Kapasitas & Armasi:
              </span>
              <span className="text-xs text-wnb-white font-medium">
                {TRAIL_EXPLORATION.capacity} ({TRAIL_EXPLORATION.vehicle})
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-wnb-subtle uppercase tracking-wider block">
                Ketentuan Biaya:
              </span>
              <span className="text-xs text-wnb-white font-bold">
                {TRAIL_EXPLORATION.priceText}
              </span>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="flex items-start gap-3 p-4 bg-wnb-surface-elevated rounded-wnb-md border border-wnb-border text-xs text-wnb-muted">
            <ShieldAlert className="w-5 h-5 text-wnb-white shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong className="text-wnb-white">Standar Keselamatan: </strong>
              {TRAIL_EXPLORATION.safetyNotes}
            </p>
          </div>
        </div>

        {/* Right Column: Inclusions & CTA */}
        <div className="flex flex-col justify-between gap-6 lg:w-80 shrink-0 bg-wnb-black p-6 rounded-wnb-md border border-wnb-border">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-wnb-white">
              Perlengkapan & Fasilitas Inti:
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-wnb-muted">
              {TRAIL_EXPLORATION.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-wnb-white shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-wnb-border">
            <div className="flex flex-col">
              <span className="text-xs text-wnb-subtle uppercase tracking-wider">
                Estimasi Biaya
              </span>
              <span className="text-base font-bold text-wnb-white">
                {TRAIL_EXPLORATION.priceText}
              </span>
            </div>

            <LinkButton
              to={ROUTE_PATHS.booking}
              size="md"
              variant="primary"
              className="w-full text-center"
            >
              {TRAIL_EXPLORATION.ctaText}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
