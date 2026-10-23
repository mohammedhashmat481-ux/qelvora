import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const heights = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2C] rounded-md transition-opacity hover:opacity-95",
        className
      )}
      aria-label="Qelvora Technologies — Home"
    >
      <Image
        src="/logo-cropped.png"
        alt="Qelvora Technologies"
        width={867}
        height={413}
        priority
        className={cn("w-auto object-contain mix-blend-screen", heights[size])}
      />
    </Link>
  );
}
