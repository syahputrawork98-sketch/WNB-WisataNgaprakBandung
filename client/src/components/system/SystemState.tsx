import type { ReactNode } from "react";
import { LinkButton } from "@/components/common/LinkButton";
import { Button } from "@/components/common/Button";

type LinkAction = {
  label: string;
  to: string;
  onClick?: never;
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonAction = {
  label: string;
  onClick: () => void;
  to?: never;
  variant?: "primary" | "secondary" | "ghost";
};

type SystemStateAction = LinkAction | ButtonAction;

export type SystemStateProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  primaryAction: SystemStateAction;
  secondaryAction?: SystemStateAction;
  className?: string;
  children?: ReactNode; // Untuk link tambahan seperti Jelajahi Rute
};

function renderAction(action: SystemStateAction) {
  if ("to" in action && action.to !== undefined) {
    return (
      <LinkButton
        to={action.to}
        variant={action.variant || "primary"}
      >
        {action.label}
      </LinkButton>
    );
  }
  
  if ("onClick" in action && action.onClick !== undefined) {
    return (
      <Button
        onClick={action.onClick}
        variant={action.variant || "primary"}
      >
        {action.label}
      </Button>
    );
  }

  return null;
}

export function SystemState({
  eyebrow,
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  className = "",
  children
}: SystemStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4 py-20 ${className}`}>
      {icon && (
        <div className="mb-8 text-wnb-accent" aria-hidden="true">
          {icon}
        </div>
      )}
      
      {eyebrow && (
        <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-wnb-accent">
          {eyebrow}
        </span>
      )}
      
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-wnb-white sm:text-4xl">
        {title}
      </h1>
      
      <p className="mb-10 text-base leading-relaxed text-wnb-muted sm:text-lg max-w-lg">
        {description}
      </p>
      
      <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mb-8">
        {renderAction(primaryAction)}
        {secondaryAction && renderAction(secondaryAction)}
      </div>

      {children}
    </div>
  );
}
