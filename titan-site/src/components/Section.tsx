import { type ReactNode } from "react";

type SectionVariant = "default" | "dim" | "navy" | "container";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-surface",
  dim: "bg-surface-dim",
  navy: "bg-navy text-white",
  container: "bg-container",
};

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-section px-5 md:px-8 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
