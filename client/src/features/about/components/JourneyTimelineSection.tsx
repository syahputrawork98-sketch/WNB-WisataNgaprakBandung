import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TIMELINE_EVENTS } from "../aboutContent";

export function JourneyTimelineSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="timeline-heading">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
          <SectionHeading
            id="timeline-heading"
            eyebrow="Perjalanan"
            title="Kisah dan Perjalanan WNB"
            align="center"
            headingLevel="h2"
          />
        </div>

        <div className="relative border-l border-wnb-border/50 ml-4 sm:ml-8 mt-8 space-y-12">
          {TIMELINE_EVENTS.map((event, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Dot */}
              <div className="absolute w-3 h-3 bg-wnb-accent rounded-full -left-[6.5px] top-1.5 ring-4 ring-wnb-black group-hover:scale-125 transition-transform duration-300" />
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-mono text-wnb-accent uppercase tracking-widest">{event.period}</span>
                <h3 className="text-xl font-bold font-display text-wnb-white">{event.title}</h3>
                <p className="text-sm sm:text-base text-wnb-muted leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
