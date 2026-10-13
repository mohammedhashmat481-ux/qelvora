import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "charcoal" | "light" | "ivory" | "hairline";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "charcoal",
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    dark: "bg-black border border-white/10 text-white",
    charcoal:
      "bg-charcoal border border-white/[0.08] text-white shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
    light:
      "bg-white border border-black/[0.08] text-qtext shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
    ivory: "bg-soft-ivory border border-gold/15 text-qtext",
    hairline:
      "bg-transparent border border-gold/20 text-current",
  };

  return (
    <div
      className={cn(
        "rounded-panel p-6 sm:p-8 transition-colors duration-200",
        variantStyles[variant],
        hoverEffect && "hover:border-gold/40 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
