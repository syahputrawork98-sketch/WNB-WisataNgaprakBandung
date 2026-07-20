import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BRAND_VALUES } from "../aboutContent";

export function BrandValuesSection() {
  return (
    <section className="bg-wnb-surface py-16 sm:py-24 border-b border-wnb-border" aria-labelledby="values-heading">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          id="values-heading"
          eyebrow="Cara Kami Bekerja"
          title="Nilai WNB"
          align="center"
          headingLevel="h2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto w-full">
          {BRAND_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="flex flex-col gap-4 p-6 bg-wnb-black border border-wnb-border/60 rounded-wnb-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-wnb-md bg-wnb-surface text-wnb-accent border border-wnb-border">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-wide text-wnb-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-wnb-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
