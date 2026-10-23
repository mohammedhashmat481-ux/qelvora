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
      prefetch={true}
      className={cn(
        "inline-flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2C] rounded-md transition-opacity hover:opacity-95",
        className
      )}
      aria-label="Qelvora Technology — Home"
    >
      <Image
        src="/logo.png"
        alt="Qelvora Technology"
        width={891}
        height={373}
        priority
        className={cn("w-auto object-contain", heights[size])}
      />
    </Link>
  );
}
