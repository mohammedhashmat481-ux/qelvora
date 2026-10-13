"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedQMarkProps {
  className?: string;
  theme?: "dark" | "light";
}

export function AnimatedQMark({
  className,
  theme = "dark",
}: AnimatedQMarkProps) {
  const shouldReduceMotion = useReducedMotion();
  const tailColor = theme === "dark" ? "#FFFFFF" : "#121212";

  // Transition settings
  const instantTransition = { duration: 0 };

  const loop1Transition = shouldReduceMotion
    ? instantTransition
    : {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.1,
      };

  const loop2Transition = shouldReduceMotion
    ? instantTransition
    : {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.45,
      };

  const tailTransition = shouldReduceMotion
    ? instantTransition
    : {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 1.25,
      };

  return (
    <div className={cn("relative flex items-center justify-center select-none", className)}>
      {/* Soft warm-gold ambient glow behind the mark */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(196,154,44,0.3) 0%, rgba(58,47,20,0.1) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="194 244 268 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 overflow-visible"
        role="img"
        aria-label="Qelvora Q-Mark insignia"
      >
        {/* Loop 1: Outer elliptical loop */}
        <motion.ellipse
          cx="325"
          cy="364"
          rx="122"
          ry="106"
          stroke="#C49A2C"
          strokeWidth="11"
          fill="none"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={loop1Transition}
        />

        {/* Loop 2: Overlapping rotated inner elliptical loop */}
        <motion.ellipse
          cx="343"
          cy="356"
          rx="106"
          ry="98"
          transform="rotate(-12 343 356)"
          stroke="#C49A2C"
          strokeWidth="11"
          fill="none"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={loop2Transition}
        />

        {/* Diagonal tail */}
        <motion.line
          x1="315"
          y1="362"
          x2="452"
          y2="474"
          stroke={tailColor}
          strokeWidth="11"
          strokeLinecap="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={tailTransition}
        />
      </svg>
    </div>
  );
}
