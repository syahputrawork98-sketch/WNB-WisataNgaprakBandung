import type { ReactNode } from "react";
import { Button } from "@/components/common/Button";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  headingLevel?: "h2" | "h3";
};

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className = "",
  headingLevel = "h3"
}: EmptyStateProps) {
  const Heading = headingLevel;

  return (
    <div className={`flex flex-col items-center justify-center text-center py-16 px-4 ${className}`}>
      {icon && (
        <div className="mb-6 text-wnb-accent opacity-80" aria-hidden="true">
          {icon}
        </div>
      )}
      
      <Heading className="mb-4 text-xl font-semibold tracking-tight text-wnb-white sm:text-2xl">
        {title}
      </Heading>
      
      <p className="mb-8 text-base text-wnb-muted max-w-md">
        {description}
      </p>
      
      {actionLabel && onAction && (
        <Button
          type="button"
          onClick={onAction}
          variant="secondary"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
