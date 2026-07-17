import type { ReactNode } from "react";

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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="border border-wnb-border bg-wnb-surface rounded-lg p-8 shadow-lg">
        <span className="text-sm font-semibold tracking-wider uppercase text-wnb-muted">
          {eyebrow}
        </span>
        <h1 className="text-3xl font-bold mt-2 mb-4 uppercase text-wnb-white">
          {title}
        </h1>
        <p className="text-wnb-muted leading-relaxed mb-6">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
