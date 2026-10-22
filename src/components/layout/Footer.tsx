import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0F] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/[0.07]">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              We build software for schools, colleges, and businesses in India — CRM, ERP, websites, and mobile apps from scratch.
            </p>
            <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-600/20 transition-all text-xs font-medium">
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Our Software</p>
            <ul className="space-y-2.5">
              <li><Link href="/products/crm" className="text-sm text-zinc-400 hover:text-white transition-colors">CRM System</Link></li>
              <li><Link href="/products/school-erp" className="text-sm text-zinc-400 hover:text-white transition-colors">School ERP</Link></li>
              <li><Link href="/products/college-erp" className="text-sm text-zinc-400 hover:text-white transition-colors">College ERP</Link></li>
              <li><Link href="/services" className="text-sm text-zinc-400 hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Contact Us</p>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <a href={siteConfig.phones.primary.tel}
                className="flex items-center gap-2 hover:text-gold-light transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                {siteConfig.phones.primary.formatted}
              </a>
              <a href={siteConfig.phones.secondary.tel}
                className="flex items-center gap-2 hover:text-gold-light transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                {siteConfig.phones.secondary.formatted}
              </a>
              <a href={`mailto:${siteConfig.emails.primary}`}
                className="flex items-center gap-2 hover:text-gold-light transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                {siteConfig.emails.primary}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">Thanisandra, Bengaluru - 560077, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {year} Qelvora Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
            <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="hover:text-gold-light inline-flex items-center gap-1 transition-colors">
              Open in Maps <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
