import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display" | "h1" | "h2" | "h3" | "h4";
  subline?: string;
  theme?: "dark" | "light";
}

export function Heading({
  as: Component = "h2",
  size,
  subline,
  theme = "dark",
  className,
  children,
  ...props
}: HeadingProps) {
  // Light weight (font-light 300) for large headlines as specified
  const effectiveSize = size || (Component as HeadingProps["size"]) || "h2";

  const sizeStyles = {
    display:
      "text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12]",
    h1: "text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.16]",
    h2: "text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-[1.22]",
    h3: "text-xl sm:text-2xl font-medium tracking-normal leading-[1.3]",
    h4: "text-lg sm:text-xl font-medium leading-[1.35]",
  };

  const isDark = theme === "dark";

  return (
    <div className="space-y-3">
      {subline && (
        <p
          className={cn(
            "text-xs sm:text-sm font-medium tracking-wide",
            isDark ? "text-gold-light" : "text-gold-text-on-light"
          )}
        >
          {subline}
        </p>
      )}
      <Component
        className={cn(
          "font-sans max-w-[75ch]",
          sizeStyles[effectiveSize],
          isDark ? "text-white" : "text-qtext",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}
