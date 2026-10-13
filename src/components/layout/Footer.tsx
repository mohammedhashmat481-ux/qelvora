import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { productsData } from "@/data/products";
import { servicesData } from "@/data/services";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle warm gold gradient baseline */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand and identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="dark" size="lg" />
            <p className="text-sm text-gold-light italic tracking-wide">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              We design and build bespoke software applications, CRM platforms, and School & College ERP systems from scratch for institutions and growing businesses.
            </p>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-500/60 transition-all text-xs font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat with us on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Core Products */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              Core Products
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="hover:text-gold-light transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  >
                    {prod.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#products"
                  className="text-xs text-neutral-400 hover:text-white pt-1 inline-block"
                >
                  Compare all products →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              Services
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              {servicesData.slice(0, 4).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.slug}`}
                    className="hover:text-gold-light transition-colors line-clamp-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs text-neutral-400 hover:text-white pt-1 inline-block"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              Contact & Location
            </p>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-neutral-400">
                  {siteConfig.address.street}, {siteConfig.address.locality},{" "}
                  {siteConfig.address.city} - {siteConfig.address.pincode},{" "}
                  {siteConfig.address.state}, {siteConfig.address.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-gold-light shrink-0" />
                <div className="flex flex-col gap-0.5 font-mono">
                  <a
                    href={siteConfig.phones.primary.tel}
                    className="hover:text-gold-light text-neutral-300"
                  >
                    {siteConfig.phones.primary.formatted}
                  </a>
                  <a
                    href={siteConfig.phones.secondary.tel}
                    className="hover:text-gold-light text-neutral-400"
                  >
                    {siteConfig.phones.secondary.formatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-3.5 h-3.5 text-gold-light shrink-0" />
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="hover:text-gold-light text-neutral-300"
                >
                  {siteConfig.emails.primary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Qelvora Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light inline-flex items-center gap-1 transition-colors"
            >
              <span>Bengaluru Map</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
