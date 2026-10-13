import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  theme?: "dark" | "light";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function QMarkIcon({
  className,
  theme = "dark",
  strokeWidth = 14,
}: {
  className?: string;
  theme?: "dark" | "light";
  strokeWidth?: number;
}) {
  const tailColor = theme === "dark" ? "#FFFFFF" : "#121212";

  return (
    <svg
      viewBox="194 244 268 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      {/* Loop 1: Gold ellipse */}
      <ellipse
        cx="325"
        cy="364"
        rx="122"
        ry="106"
        stroke="#C49A2C"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Loop 2: Overlapping rotated gold ellipse */}
      <ellipse
        cx="343"
        cy="356"
        rx="106"
        ry="98"
        transform="rotate(-12 343 356)"
        stroke="#C49A2C"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Straight diagonal tail */}
      <line
        x1="315"
        y1="362"
        x2="452"
        y2="474"
        stroke={tailColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  theme = "dark",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const iconSizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const wordmarkSizeClasses = {
    sm: "text-base tracking-[0.14em]",
    md: "text-lg tracking-[0.18em]",
    lg: "text-2xl tracking-[0.2em]",
  };

  const sublineSizeClasses = {
    sm: "text-[8px] tracking-[0.25em]",
    md: "text-[9px] tracking-[0.3em]",
    lg: "text-[11px] tracking-[0.35em]",
  };

  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 select-none transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm",
        className
      )}
      aria-label="Qelvora Technologies - Home"
    >
      <QMarkIcon
        theme={theme}
        className={cn(iconSizeClasses[size], "transition-transform group-hover:scale-105 duration-300")}
      />

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-medium font-sans uppercase",
              wordmarkSizeClasses[size],
              isDark ? "text-white" : "text-black"
            )}
          >
            QELVORA
          </span>
          <span
            className={cn(
              "uppercase font-medium mt-1",
              sublineSizeClasses[size],
              isDark ? "text-gold-light" : "text-gold-text-on-light"
            )}
          >
            TECHNOLOGIES
          </span>
        </div>
      )}
    </Link>
  );
}
