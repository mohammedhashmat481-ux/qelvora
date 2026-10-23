import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Qelvora Technologies | Get a Free Consultation",
  description:
    "Talk to us about your software project. We build CRM, School ERP, College ERP, websites, and mobile apps for businesses across India. Call, WhatsApp, or fill the form.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 bg-[#080808] border-b border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-5 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />
            Get in touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-[#F8F6F0] leading-tight tracking-tight max-w-2xl">
            Let&apos;s talk about{" "}
            <span className="text-[#D4AF5A]">what you need.</span>
          </h1>
          <p className="text-base text-[#B8B8B8] leading-relaxed max-w-xl">
            No sales pitch. Just a straightforward conversation about your
            project. Call, WhatsApp, or fill the form below.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-light text-[#F8F6F0]">Contact details</h2>

              {/* Call */}
              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#121212] border border-[#303030] flex items-center justify-center shrink-0 text-[#D4AF5A]">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[#858585] font-medium uppercase tracking-wider">Call us</p>
                  <a
                    href={siteConfig.phones.primary.tel}
                    className="block text-[#F8F6F0] text-sm font-mono font-medium hover:text-[#D4AF5A] transition-colors duration-200"
                  >
                    {siteConfig.phones.primary.formatted}
                  </a>
                  <a
                    href={siteConfig.phones.secondary.tel}
                    className="block text-[#858585] text-sm font-mono hover:text-[#D4AF5A] transition-colors duration-200"
                  >
                    {siteConfig.phones.secondary.formatted}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-[#1A1A1A] border border-[#303030] hover:border-[#328568] transition-colors duration-200 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#328568] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#328568] font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-sm text-[#F8F6F0] font-medium">Message us on WhatsApp</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#328568] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#121212] border border-[#303030] flex items-center justify-center shrink-0 text-[#D4AF5A]">
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[#858585] font-medium uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="text-[#F8F6F0] text-sm font-medium hover:text-[#D4AF5A] transition-colors duration-200 break-all"
                  >
                    {siteConfig.emails.primary}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-[#F8F6F0]">Our office</h3>
              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#1A1A1A] border border-[#303030] shadow-sm">
                <MapPin className="w-5 h-5 text-[#D4AF5A] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div className="space-y-2">
                  <p className="text-sm text-[#B8B8B8] leading-relaxed font-normal">
                    {siteConfig.address.full}
                  </p>
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF5A] hover:text-[#E8C76A] font-semibold hover:underline transition-colors duration-200"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-[#1A1A1A] border border-[#303030] shadow-sm">
              <Clock className="w-5 h-5 text-[#D4AF5A] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-xs text-[#858585] font-medium uppercase tracking-wider">Working hours</p>
                <p className="text-sm text-[#B8B8B8] font-medium">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm formTitle="Send us a message" />
          </div>
        </div>
      </section>
    </div>
  );
}
