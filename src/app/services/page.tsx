import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  Code2,
  Globe,
  Smartphone,
  CloudCog,
  Headset,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services — Custom Software, Web, Mobile & Cloud | Qelvora Technologies",
  description:
    "Custom software development, website and web app development, mobile apps, cloud automation, and IT consulting from Bengaluru. Built from scratch, designed for your business.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Smartphone,
  CloudCog,
  Headset,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4"
        style={{
          background:
            "linear-gradient(135deg, #3A2F14 0%, #1a1a1c 45%, #111113 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,154,44,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E3C46A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C]" />
            What we do
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight max-w-3xl">
            Software built for your business,{" "}
            <span className="text-[#E3C46A]">not a generic template.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            We build custom software, websites, mobile apps, and cloud systems
            from scratch. Everything is made specifically for you — no
            copy-paste solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-medium transition-colors"
            >
              Discuss your project
            </Link>
            <a
              href={siteConfig.phones.primary.tel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/8 border border-white/12 text-white hover:bg-white/12 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E3C46A]" />
              {siteConfig.phones.primary.formatted}
            </a>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="px-4 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto space-y-20">
          {servicesData.map((srv, index) => {
            const Icon = iconMap[srv.icon] || Code2;
            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="scroll-mt-28 space-y-8 pb-20 border-b border-white/8 last:border-b-0"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#C49A2C]/12 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C49A2C]" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-500 font-mono">
                      0{index + 1}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-light text-white">
                      {srv.title}
                    </h2>
                    <p className="text-[#E3C46A] text-sm">{srv.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {srv.detailedDescription}
                    </p>

                    {/* Process steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {srv.process.map((step) => (
                        <div
                          key={step.step}
                          className="p-4 rounded-xl bg-[#18181B] border border-white/8 space-y-1.5"
                        >
                          <span className="text-xs text-[#C49A2C] font-mono font-semibold">
                            {step.step}
                          </span>
                          <h4 className="text-white text-sm font-medium">
                            {step.title}
                          </h4>
                          <p className="text-zinc-500 text-xs leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities sidebar */}
                  <div className="space-y-5">
                    <div className="p-5 rounded-xl bg-[#141416] border border-white/8 space-y-3">
                      <h3 className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                        What&apos;s included
                      </h3>
                      <ul className="space-y-2">
                        {srv.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C] shrink-0 mt-0.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-[#C49A2C]/30 text-[#E3C46A] text-sm hover:bg-[#C49A2C]/8 transition-colors group"
                    >
                      <span>Enquire about this</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="p-5 rounded-xl bg-[#18181B] border border-white/8">
                  <p className="text-xs text-[#E3C46A] font-medium mb-3 uppercase tracking-wider">
                    Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-4 py-20 sm:py-28"
        style={{
          background:
            "linear-gradient(135deg, #3A2F14 0%, #1a1a1c 50%, #111113 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Not sure which service you need?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Just call or message us. We will ask a few questions, understand your
            situation, and tell you honestly what makes sense for your budget and
            timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-medium transition-colors"
            >
              Write to us
            </Link>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
