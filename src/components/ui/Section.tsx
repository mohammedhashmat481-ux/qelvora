import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "ivory" | "dark" | "charcoal" | "shade";
  spacing?: "sm" | "md" | "lg" | "hero";
  hasTopBorder?: boolean;
}

export function Section({
  className,
  variant = "light",
  spacing = "lg",
  hasTopBorder = false,
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    // Clean light mode background
    light: "bg-white text-qtext",
    // Warm soft ivory
    ivory: "bg-soft-ivory text-qtext",
    // Pure dark
    dark: "bg-black text-white",
    // Elevated dark charcoal
    charcoal: "bg-charcoal text-white",
    // Signature gold shade gradient: #3A2F14 into #121212
    shade: "bg-gradient-to-r from-warm-dark via-[#211B0E] to-black text-white",
  };

  const spacingStyles = {
    sm: "py-10 sm:py-14",
    md: "py-14 sm:py-20",
    lg: "py-20 sm:py-28",
    hero: "pt-28 pb-20 sm:pt-36 sm:pb-28",
  };

  return (
    <section
      className={cn(
        variantStyles[variant],
        spacingStyles[spacing],
        hasTopBorder && "border-t border-gold/15",
        "relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
