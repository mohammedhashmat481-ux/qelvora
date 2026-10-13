"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ESC key and focus trapping when drawer opens
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navItems = [
    { label: "Products", href: "/#products" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/[0.08] shadow-md py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo theme="dark" size="md" />

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-normal text-neutral-300"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.href.startsWith("/#")
                ? pathname === "/"
                : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors duration-150 py-1 hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm",
                  isActive && !item.href.startsWith("/#")
                    ? "text-gold font-medium"
                    : "text-neutral-300"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href={siteConfig.phones.primary.tel}
            variant="secondary"
            size="sm"
            className="gap-2 text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-gold-light" />
            <span>Call 99161 02542</span>
          </Button>

          <Button href="/contact" variant="primary" size="sm" className="text-xs">
            Talk to us
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-200 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold min-h-[44px] min-w-[44px]"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-charcoal border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Logo theme="dark" size="sm" />
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-neutral-200 hover:text-gold-light py-2 border-b border-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 space-y-2">
            <p className="text-xs uppercase tracking-wider text-gold-light font-medium">
              Featured Software
            </p>
            <div className="flex flex-col space-y-1.5 pl-2 text-sm text-neutral-300">
              <Link
                href="/products/crm"
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-white"
              >
                Qelvora CRM
              </Link>
              <Link
                href="/products/school-erp"
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-white"
              >
                School ERP Platform
              </Link>
              <Link
                href="/products/college-erp"
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-white"
              >
                College & University ERP
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-6 border-t border-white/10">
          <Button
            href={siteConfig.phones.primary.tel}
            variant="secondary"
            size="md"
            className="w-full gap-2 text-xs"
          >
            <Phone className="w-4 h-4 text-gold-light" />
            Call {siteConfig.phones.primary.formatted}
          </Button>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full text-xs"
            onClick={() => setIsOpen(false)}
          >
            Talk to us
          </Button>
        </div>
      </div>
    </header>
  );
}
