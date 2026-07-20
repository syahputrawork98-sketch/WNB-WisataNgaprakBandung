import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BRAND_PROMISES } from "../aboutContent";

export function BrandPromiseSection() {
  return (
    <section className="bg-wnb-black py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="promise-heading">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          id="promise-heading"
          eyebrow="Janji Pengalaman"
          title="Petualangan Land Rover klasik yang dipersiapkan untuk menjadi cerita."
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12 max-w-5xl mx-auto w-full">
          {BRAND_PROMISES.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <div 
                key={index}
                className="flex gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-wnb-md bg-wnb-surface text-wnb-white border border-wnb-border">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-widest text-wnb-white">
                    {promise.title}
                  </h3>
                  <p className="text-sm sm:text-base text-wnb-muted leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
