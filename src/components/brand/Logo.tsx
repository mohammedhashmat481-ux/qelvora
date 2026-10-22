import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const iconSizes = { sm: "w-7 h-7", md: "w-9 h-9", lg: "w-11 h-11" };
  const textSizes = {
    sm: "text-sm tracking-[0.15em]",
    md: "text-base tracking-[0.18em]",
    lg: "text-xl tracking-[0.2em]",
  };
  const subSizes = {
    sm: "text-[8px] tracking-[0.22em]",
    md: "text-[9px] tracking-[0.28em]",
    lg: "text-[11px] tracking-[0.32em]",
  };

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold", className)}
      aria-label="Qelvora Technologies — Home"
    >
      {/* Q Mark SVG */}
      <svg viewBox="194 244 268 238" fill="none" className={cn(iconSizes[size], "shrink-0")} aria-hidden="true">
        <ellipse cx="325" cy="364" rx="122" ry="106" stroke="#C49A2C" strokeWidth="14" fill="none" />
        <ellipse cx="343" cy="356" rx="106" ry="98" transform="rotate(-12 343 356)" stroke="#C49A2C" strokeWidth="14" fill="none" />
        <line x1="315" y1="362" x2="452" y2="474" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
      </svg>

      <div className="flex flex-col leading-none gap-1">
        <span className={cn("font-semibold text-white uppercase", textSizes[size])}>QELVORA</span>
        <span className={cn("uppercase font-medium text-gold-light", subSizes[size])}>TECHNOLOGIES</span>
      </div>
    </Link>
  );
}
