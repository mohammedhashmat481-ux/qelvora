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
    <div className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 bg-white border-b border-zinc-200/80">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,154,44,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#E3C46A]/40 text-xs text-[#8C6B18] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C]" />
            What we do
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-zinc-950 leading-tight tracking-tight max-w-3xl">
            Software built for your business,{" "}
            <span className="text-[#8C6B18] font-normal">not a generic template.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
            We build custom software, websites, mobile apps, and cloud systems
            from scratch. Everything is made specifically for you — no
            copy-paste solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shadow-sm"
            >
              Discuss your project
            </Link>
            <a
              href={siteConfig.phones.primary.tel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-50 text-sm font-medium transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#8C6B18]" />
              {siteConfig.phones.primary.formatted}
            </a>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="px-4 py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto space-y-20">
          {servicesData.map((srv, index) => {
            const Icon = iconMap[srv.icon] || Code2;
            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="scroll-mt-28 space-y-8 pb-20 border-b border-zinc-200 last:border-b-0"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F4ECE1] border border-[#E3C46A]/40 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#8C6B18]" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs text-zinc-400 font-mono font-semibold">
                      0{index + 1}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">
                      {srv.title}
                    </h2>
                    <p className="text-[#8C6B18] text-sm font-medium">{srv.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                      {srv.detailedDescription}
                    </p>

                    {/* Process steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {srv.process.map((step) => (
                        <div
                          key={step.step}
                          className="p-5 rounded-2xl bg-[#F8F8FA] border border-zinc-200/90 space-y-2 shadow-sm"
                        >
                          <span className="text-xs text-[#8C6B18] font-mono font-bold">
                            {step.step}
                          </span>
                          <h4 className="text-zinc-950 text-sm font-semibold">
                            {step.title}
                          </h4>
                          <p className="text-zinc-600 text-xs leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities sidebar */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-[#F8F8FA] border border-zinc-200/90 space-y-4 shadow-sm">
                      <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                        What&apos;s included
                      </h3>
                      <ul className="space-y-2.5">
                        {srv.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#8C6B18] shrink-0 mt-0.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-[#C49A2C]/40 text-[#8C6B18] hover:bg-[#F4ECE1] text-sm font-semibold transition-colors group shadow-sm bg-white"
                    >
                      <span>Enquire about this</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="p-6 rounded-2xl bg-[#F8F8FA] border border-zinc-200/90 shadow-sm">
                  <p className="text-xs text-[#8C6B18] font-bold mb-4 uppercase tracking-wider">
                    Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {srv.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
      <section className="px-4 py-20 sm:py-28 bg-[#F8F8FA] border-t border-zinc-200/80">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">
            Not sure which service you need?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Just call or message us. We will ask a few questions, understand your
            situation, and tell you honestly what makes sense for your budget and
            timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shadow-sm"
            >
              Write to us
            </Link>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
