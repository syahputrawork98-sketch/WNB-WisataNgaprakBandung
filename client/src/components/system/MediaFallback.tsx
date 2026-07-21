import type { ReactNode } from "react";

type MediaFallbackProps = {
  label: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  footer?: ReactNode;
};

export function MediaFallback({
  label,
  description,
  icon,
  className = "",
  footer
}: MediaFallbackProps) {
  return (
    <div className={`flex flex-col items-center justify-center w-full h-full p-6 text-center bg-wnb-surface-elevated text-wnb-muted ${className}`}>
      {icon && (
        <div className="mb-4 text-wnb-subtle" aria-hidden="true">
          {icon}
        </div>
      )}
      
      <span className="text-sm font-medium">
        {label}
      </span>
      
      {description && (
        <span className="mt-1 text-xs text-wnb-subtle">
          {description}
        </span>
      )}
      
      {footer && (
        <div className="mt-4">
          {footer}
        </div>
      )}
    </div>
  );
}
