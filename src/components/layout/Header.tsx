"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-white/95 backdrop-blur border-b border-black/[0.08] shadow-sm py-3"
        : "bg-white/90 backdrop-blur border-b border-black/[0.04] py-4"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-600" aria-label="Main navigation">
          {navLinks.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link key={n.href} href={n.href}
                className={cn(
                  "hover:text-black transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2C] rounded-sm",
                  isActive && "text-black font-semibold"
                )}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={siteConfig.phones.primary.tel}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-zinc-800 text-xs hover:border-[#C49A2C] hover:text-black transition-all min-h-[40px] bg-white">
            <Phone className="w-3.5 h-3.5 text-[#C49A2C]" />
            Call 99161 02542
          </a>
          <Link href="/contact"
            className="px-5 py-2 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-xs font-semibold transition-colors min-h-[40px] flex items-center shadow-sm">
            Talk to us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button type="button" onClick={() => setIsOpen(true)}
          className="md:hidden p-2.5 text-zinc-700 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2C] rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Open menu" aria-expanded={isOpen}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />}
      <div
        role="dialog" aria-modal="true" aria-label="Mobile menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-white border-l border-zinc-200 p-6 flex flex-col justify-between md:hidden transition-transform duration-300 shadow-xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <Logo size="sm" />
            <button ref={closeBtnRef} type="button" onClick={() => setIsOpen(false)}
              className="p-2 text-zinc-500 hover:text-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2C] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setIsOpen(false)}
                className="text-base text-zinc-700 hover:text-black py-3 border-b border-zinc-100 transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-zinc-100">
          <a href={siteConfig.phones.primary.tel}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-zinc-200 text-zinc-800 text-sm hover:border-[#C49A2C] transition-all">
            <Phone className="w-4 h-4 text-[#C49A2C]" />
            {siteConfig.phones.primary.formatted}
          </a>
          <Link href="/contact" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors">
            Talk to us
          </Link>
        </div>
      </div>
    </header>
  );
}
