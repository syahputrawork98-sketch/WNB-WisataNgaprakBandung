import type { ReactNode } from "react";
import { Link } from "react-router";
import { getButtonClassName } from "./Button";
import type { ButtonVariant, ButtonSize } from "./Button";

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

export function LinkButton({
  to,
  children,
  variant = "primary",
  size = "md",
  className = "",
  "aria-label": ariaLabel,
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={getButtonClassName(variant, size, className)}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
