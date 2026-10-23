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
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 bg-black border-b border-white/10">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,154,44,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto space-y-5 relative">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-[#E3C46A] font-medium"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          >
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
      <section className="px-4 py-16 sm:py-24 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-light text-white">Contact details</h2>

              {/* Call */}
              <div
                className="flex items-start gap-3.5 p-5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#C49A2C]/15 border border-[#C49A2C]/25 flex items-center justify-center shrink-0 text-[#E3C46A]">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Call us</p>
                  <a
                    href={siteConfig.phones.primary.tel}
                    className="block text-white text-sm font-mono font-medium hover:text-[#E3C46A] transition-colors"
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
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 text-white shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-sm text-white font-medium">Message us on WhatsApp</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email */}
              <div
                className="flex items-start gap-3.5 p-5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#C49A2C]/15 border border-[#C49A2C]/25 flex items-center justify-center shrink-0 text-[#E3C46A]">
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="text-white text-sm font-medium hover:text-[#E3C46A] transition-colors break-all"
                  >
                    {siteConfig.emails.primary}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-white">Our office</h3>
              <div
                className="flex items-start gap-3.5 p-5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
              >
                <MapPin className="w-5 h-5 text-[#E3C46A] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div className="space-y-2">
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {siteConfig.address.full}
                  </p>
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E3C46A] font-semibold hover:underline"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="flex items-center gap-3.5 p-5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
            >
              <Clock className="w-5 h-5 text-[#E3C46A] shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Working hours</p>
                <p className="text-sm text-zinc-300 font-medium">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
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
