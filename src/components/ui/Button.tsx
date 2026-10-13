import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-dark" | "ghost" | "gold-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium font-sans rounded-full transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variantStyles = {
      // Primary gold button: gold line/fill accent with crisp dark text
      primary:
        "bg-gold text-black hover:bg-gold-light shadow-sm active:scale-[0.99] border border-transparent",
      // Secondary dark button with gold hairline border
      secondary:
        "bg-charcoal text-white border border-gold/30 hover:border-gold hover:bg-[#242424]",
      // Subtle gold outline for dark backgrounds
      outline:
        "bg-transparent text-white border border-white/20 hover:border-gold hover:text-gold-light",
      // Gold line outline for hero / dark sections
      "gold-outline":
        "bg-transparent text-gold-light border border-gold/60 hover:bg-gold/10 hover:border-gold",
      // Dark outline for light backgrounds
      "outline-dark":
        "bg-transparent text-qtext border border-black/20 hover:border-black hover:bg-black/5",
      // Ghost button
      ghost:
        "bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/5",
    };

    const sizeStyles = {
      sm: "min-h-[40px] px-4 py-1.5 text-xs tracking-wide",
      md: "min-h-[44px] px-6 py-2.5 text-sm tracking-wide", // WCAG min 44px
      lg: "min-h-[48px] px-7 py-3 text-base tracking-wide",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
