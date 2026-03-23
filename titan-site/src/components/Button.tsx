import Link from "next/link";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white" | "inverted";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  children: ReactNode;
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-navy text-white hover:opacity-90",
  secondary:
    "bg-transparent text-navy border border-navy/20 hover:bg-container-high",
  ghost:
    "bg-transparent text-navy border-b-2 border-navy px-0 py-1 tracking-[0.15em]",
  white: "bg-white text-navy hover:bg-surface",
  inverted:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-[11px]",
  md: "px-10 py-[1.125rem] text-xs",
  lg: "px-12 py-[1.375rem] text-xs",
};

export default function Button({
  variant = "primary",
  size = "md",
  full,
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-heading font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ease-out active:scale-[0.97] ${variantClasses[variant]} ${sizeClasses[size]} ${
    full ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
