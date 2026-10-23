import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#303030] text-[#B8B8B8] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand col */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-[#A8A8A8] max-w-sm leading-relaxed">
              Software company based in Thanisandra, Bengaluru. We build custom
              software, CRM, School ERP, and College ERP for institutions and
              businesses across India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-[#B8B8B8] hover:text-[#D4AF5A] hover:border-[#D4AF5A] text-xs transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B8B8B8] group-hover:text-[#D4AF5A]" />
                WhatsApp
              </a>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#B8B8B8] hover:text-[#D4AF5A] hover:border-[#D4AF5A] transition-colors duration-200"
              >
                <MapPin className="w-3 h-3 text-[#D4AF5A]" />
                Directions
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-[#F8F6F0] uppercase tracking-wider">
              Products
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/products/crm"
                  prefetch={true}
                  className="text-[#B8B8B8] hover:text-[#D4AF5A] transition-colors duration-200"
                >
                  Qelvora CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/products/school-erp"
                  prefetch={true}
                  className="text-[#B8B8B8] hover:text-[#D4AF5A] transition-colors duration-200"
                >
                  School ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/college-erp"
                  prefetch={true}
                  className="text-[#B8B8B8] hover:text-[#D4AF5A] transition-colors duration-200"
                >
                  College ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  prefetch={true}
                  className="text-[#B8B8B8] hover:text-[#D4AF5A] transition-colors duration-200"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  prefetch={true}
                  className="text-[#B8B8B8] hover:text-[#D4AF5A] transition-colors duration-200"
                >
                  Websites & Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact col */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-[#F8F6F0] uppercase tracking-wider">
              Contact
            </p>
            <div className="space-y-2 text-xs">
              <p className="leading-relaxed text-[#A8A8A8]">
                {siteConfig.address.full}
              </p>
              <p>
                <a
                  href={siteConfig.phones.primary.tel}
                  className="text-[#F8F6F0] hover:text-[#D4AF5A] font-mono transition-colors duration-200"
                >
                  {siteConfig.phones.primary.formatted}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="text-[#F8F6F0] hover:text-[#D4AF5A] transition-colors duration-200"
                >
                  {siteConfig.emails.primary}
                </a>
              </p>
              <p className="text-[#858585] pt-1">
                Mon – Sat, 9:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#303030] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858585]">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              prefetch={true}
              className="text-[#858585] hover:text-[#D4AF5A] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              prefetch={true}
              className="text-[#858585] hover:text-[#D4AF5A] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
