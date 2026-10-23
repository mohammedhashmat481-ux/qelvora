import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand col */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Software company based in Thanisandra, Bengaluru. We build custom
              software, CRM, School ERP, and College ERP for institutions and
              businesses across India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs hover:bg-emerald-900/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <MapPin className="w-3 h-3 text-[#E3C46A]" />
                Directions
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Products
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/products/crm"
                  className="hover:text-white transition-colors"
                >
                  Qelvora CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/products/school-erp"
                  className="hover:text-white transition-colors"
                >
                  School ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/college-erp"
                  className="hover:text-white transition-colors"
                >
                  College ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Websites & Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact col */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact
            </p>
            <div className="space-y-2 text-xs">
              <p className="leading-relaxed text-zinc-400">
                {siteConfig.address.full}
              </p>
              <p>
                <a
                  href={siteConfig.phones.primary.tel}
                  className="text-white hover:text-[#E3C46A] font-mono transition-colors"
                >
                  {siteConfig.phones.primary.formatted}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="text-white hover:text-[#E3C46A] transition-colors"
                >
                  {siteConfig.emails.primary}
                </a>
              </p>
              <p className="text-zinc-500 pt-1">
                Mon – Sat, 9:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
