import type { ReactNode } from "react";
import { Container } from "./Container";
import { PageHeader } from "./PageHeader";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  children,
}: PagePlaceholderProps) {
  return (
    <div className="flex flex-col min-h-[40vh]">
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      
      <Container as="section" className="py-12 flex-1">
        <div className="border border-wnb-border bg-wnb-surface rounded-wnb-lg p-8 shadow-wnb-card">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold font-display uppercase tracking-wider text-wnb-white border-b border-wnb-border pb-3">
              Informasi Fondasi MVP
            </h2>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
