"use client";

import React, { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  theme?: "dark" | "light";
}

export function Accordion({ items, className, theme = "dark" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "divide-y",
        isDark ? "divide-white/10" : "divide-black/10",
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={index} className="py-4">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "w-full text-left py-2 flex items-center justify-between gap-4 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm",
                  isDark
                    ? "text-white hover:text-gold-light"
                    : "text-qtext hover:text-gold-text-on-light"
                )}
              >
                <span className="text-base sm:text-lg font-normal leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 shrink-0 transition-transform duration-200",
                    isDark ? "text-gold-light" : "text-gold-text-on-light",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                "pt-2 pb-3 text-sm sm:text-base leading-relaxed max-w-[70ch]",
                isDark ? "text-neutral-300" : "text-qmuted"
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
