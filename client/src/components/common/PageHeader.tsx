import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="bg-wnb-surface border-b border-wnb-border py-12 sm:py-16 md:py-20">
      <Container className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-3xl">
          {eyebrow && (
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-wnb-muted uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wide text-wnb-white">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-wnb-muted leading-relaxed mt-2 max-w-2xl">
            {description}
          </p>
        </div>
        {children && (
          <div className="flex flex-shrink-0 items-center">
            {children}
          </div>
        )}
      </Container>
    </div>
  );
}
