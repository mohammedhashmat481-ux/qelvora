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
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-[#080808]/98 backdrop-blur border-b border-[#303030] shadow-lg py-3"
        : "bg-[#080808]/90 backdrop-blur border-b border-[#303030]/60 py-4"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav with eager prefetching */}
        <nav className="hidden md:flex items-center gap-7 text-sm" aria-label="Main navigation">
          {navLinks.map((n) => {
            const isActive = pathname === n.href;
            return (
              <Link
                key={n.label}
                href={n.href}
                prefetch={true}
                className={cn(
                  "relative py-1 font-medium transition-colors duration-200",
                  isActive
                    ? "text-[#D4AF5A]"
                    : "text-[#F8F6F0] hover:text-[#D4AF5A]"
                )}
              >
                {n.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF5A] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phones.primary.tel}
            className="flex items-center gap-2 text-xs text-[#F8F6F0] hover:text-[#D4AF5A] px-3.5 py-2 rounded-full border border-[#303030] hover:border-[#D4AF5A] transition-colors duration-200"
            aria-label={`Call us: ${siteConfig.phones.primary.formatted}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span className="font-mono">{siteConfig.phones.primary.formatted}</span>
          </a>
          <Link
            href="/contact"
            prefetch={true}
            className="px-5 py-2 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-xs font-semibold transition-colors duration-200 shadow-sm"
          >
            Talk to us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-[#F8F6F0] hover:bg-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="w-5 h-5 text-[#F8F6F0]" /> : <Menu className="w-5 h-5 text-[#F8F6F0]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-full bg-[#080808] border-b border-[#303030] px-6 py-6 space-y-4 shadow-2xl backdrop-blur-md"
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
                    "text-base font-medium py-1.5 transition-colors duration-200 flex items-center justify-between",
                    isActive ? "text-[#D4AF5A]" : "text-[#F8F6F0] hover:text-[#D4AF5A]"
                  )}
                >
                  <span>{n.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[#303030] flex flex-col gap-3">
            <a
              href={siteConfig.phones.primary.tel}
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#303030] text-[#F8F6F0] hover:border-[#D4AF5A] hover:text-[#D4AF5A] text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF5A]" />
              {siteConfig.phones.primary.formatted}
            </a>
            <Link
              href="/contact"
              prefetch={true}
              className="text-center py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
