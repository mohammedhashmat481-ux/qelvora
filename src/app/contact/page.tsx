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
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, #3A2F14 0%, #1a1a1c 45%, #111113 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E3C46A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C]" />
            Get in touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight tracking-tight max-w-2xl">
            Let&apos;s talk about{" "}
            <span className="text-[#E3C46A]">what you need.</span>
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
            No sales pitch. Just a straightforward conversation about your
            project. Call, WhatsApp, or fill the form below.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick contact */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white">Contact details</h2>

              {/* Call */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#18181B] border border-white/8">
                <div className="w-9 h-9 rounded-lg bg-[#C49A2C]/12 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C49A2C]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 font-medium">Call us</p>
                  <a
                    href={siteConfig.phones.primary.tel}
                    className="block text-white text-sm font-mono hover:text-[#E3C46A] transition-colors"
                  >
                    {siteConfig.phones.primary.formatted}
                  </a>
                  <a
                    href={siteConfig.phones.secondary.tel}
                    className="block text-zinc-400 text-sm font-mono hover:text-[#E3C46A] transition-colors"
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
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-600/10 border border-emerald-500/20 hover:bg-emerald-600/15 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-600/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-emerald-400/80 font-medium">WhatsApp</p>
                  <p className="text-sm text-white">Message us on WhatsApp</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#18181B] border border-white/8">
                <div className="w-9 h-9 rounded-lg bg-[#C49A2C]/12 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C49A2C]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="text-white text-sm hover:text-[#E3C46A] transition-colors"
                  >
                    {siteConfig.emails.primary}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Our office</h3>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#18181B] border border-white/8">
                <MapPin className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E3C46A] hover:underline"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#18181B] border border-white/8">
              <Clock className="w-4 h-4 text-[#C49A2C] shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 font-medium">Working hours</p>
                <p className="text-sm text-zinc-300">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm formTitle="Send us a message" />
          </div>
        </div>
      </section>
    </>
  );
}
