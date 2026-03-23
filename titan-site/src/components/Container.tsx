import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className = "",
  narrow,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 md:px-8 ${
        narrow ? "max-w-[800px]" : "max-w-[1200px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
