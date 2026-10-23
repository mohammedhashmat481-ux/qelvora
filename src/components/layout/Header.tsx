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
      scrolled ? "bg-[#111113]/95 backdrop-blur border-b border-white/[0.07] py-3" : "bg-transparent py-4"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400" aria-label="Main navigation">
          {navLinks.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link key={n.href} href={n.href}
                className={cn(
                  "hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm",
                  isActive && "text-white font-medium"
                )}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={siteConfig.phones.primary.tel}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-zinc-300 text-xs hover:border-gold/50 hover:text-gold-light transition-all min-h-[40px]">
            <Phone className="w-3.5 h-3.5 text-gold" />
            Call 99161 02542
          </a>
          <Link href="/contact"
            className="px-5 py-2 rounded-full bg-gold hover:bg-gold-light text-black text-xs font-semibold transition-colors min-h-[40px] flex items-center">
            Talk to us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button type="button" onClick={() => setIsOpen(true)}
          className="md:hidden p-2.5 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Open menu" aria-expanded={isOpen}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />}
      <div
        role="dialog" aria-modal="true" aria-label="Mobile menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#18181B] border-l border-white/[0.08] p-6 flex flex-col justify-between md:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <Logo size="sm" />
            <button ref={closeBtnRef} type="button" onClick={() => setIsOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setIsOpen(false)}
                className="text-base text-zinc-300 hover:text-white py-3 border-b border-white/[0.04] transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-white/[0.08]">
          <a href={siteConfig.phones.primary.tel}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/10 text-zinc-300 text-sm hover:border-gold/50 hover:text-gold-light transition-all">
            <Phone className="w-4 h-4 text-gold" />
            {siteConfig.phones.primary.formatted}
          </a>
          <Link href="/contact" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-full bg-gold hover:bg-gold-light text-black text-sm font-semibold transition-colors">
            Talk to us
          </Link>
        </div>
      </div>
    </header>
  );
}
