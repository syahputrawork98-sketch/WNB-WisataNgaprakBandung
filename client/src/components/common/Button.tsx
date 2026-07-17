import type { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export function getButtonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = ""
): string {
  const base = "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-wnb-focus focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-wnb-white text-wnb-black border border-wnb-white hover:bg-wnb-white/90 hover:border-wnb-white/90",
    secondary: "bg-transparent text-wnb-white border border-wnb-border hover:bg-wnb-white hover:text-wnb-black hover:border-wnb-white",
    ghost: "bg-transparent text-wnb-muted hover:text-wnb-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-wnb-sm",
    md: "px-6 py-3 text-sm rounded-wnb-md",
    lg: "px-8 py-4 text-base rounded-wnb-lg",
  };

  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}
