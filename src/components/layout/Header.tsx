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
        ? "bg-black/95 backdrop-blur border-b border-white/10 shadow-lg py-3"
        : "bg-black/90 backdrop-blur border-b border-white/5 py-4"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav with eager prefetching for instant page transitions */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300" aria-label="Main navigation">
          {navLinks.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.label}
                href={n.href}
                prefetch={true}
                className={cn(
                  "transition-colors hover:text-white font-medium",
                  isActive ? "text-[#E3C46A]" : "text-zinc-300"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phones.primary.tel}
            className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white px-3 py-2 rounded-full border border-white/15 hover:border-white/30 transition-all"
            aria-label={`Call us: ${siteConfig.phones.primary.formatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#E3C46A]" />
            <span className="font-mono">{siteConfig.phones.primary.formatted}</span>
          </a>
          <Link
            href="/contact"
            prefetch={true}
            className="px-5 py-2 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-xs font-semibold transition-colors shadow-sm"
          >
            Talk to us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2C]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-full bg-black/98 border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-md"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {navLinks.map((n) => {
              const isActive = pathname === n.href;
              return (
                <Link
                  key={n.label}
                  href={n.href}
                  prefetch={true}
                  className={cn(
                    "text-base font-medium py-1.5 transition-colors",
                    isActive ? "text-[#E3C46A]" : "text-zinc-300 hover:text-white"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={siteConfig.phones.primary.tel}
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-white/15 text-white text-sm"
            >
              <Phone className="w-4 h-4 text-[#E3C46A]" />
              {siteConfig.phones.primary.formatted}
            </a>
            <Link
              href="/contact"
              prefetch={true}
              className="text-center py-3 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
