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
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 bg-[#080808] border-b border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />
            What we do
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F6F0] leading-tight tracking-tight max-w-3xl">
            Software built for your business,{" "}
            <span className="text-[#D4AF5A]">not a generic template.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F8F6F0] leading-relaxed max-w-2xl">
            We build custom software, websites, mobile apps, and cloud systems
            from scratch. Everything is made specifically for you — no
            copy-paste solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              Discuss your project
            </Link>
            <a
              href={siteConfig.phones.primary.tel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] border border-[#454545] text-[#F8F6F0] hover:border-[#D4AF5A] hover:text-[#D4AF5A] text-sm font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF5A]" />
              {siteConfig.phones.primary.formatted}
            </a>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="px-4 py-20 sm:py-28 bg-[#121212]">
        <div className="max-w-5xl mx-auto space-y-20">
          {servicesData.map((srv, index) => {
            const Icon = iconMap[srv.icon] || Code2;
            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="scroll-mt-28 space-y-8 pb-20 border-b border-[#303030] last:border-b-0"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#303030] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#D4AF5A]" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs text-[#858585] font-mono font-semibold">
                      0{index + 1}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">
                      {srv.title}
                    </h2>
                    <p className="text-[#D4AF5A] text-sm font-medium">{srv.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
                      {srv.detailedDescription}
                    </p>

                    {/* Process steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {srv.process.map((step) => (
                        <div
                          key={step.step}
                          className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 hover:bg-[#161616] space-y-2 transition-all duration-200"
                        >
                          <span className="text-xs text-[#D4AF5A] font-mono font-bold">
                            {step.step}
                          </span>
                          <h4 className="text-[#F8F6F0] text-sm font-semibold">
                            {step.title}
                          </h4>
                          <p className="text-[#B8B8B8] text-xs leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities sidebar */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#303030] space-y-4 shadow-sm">
                      <h3 className="text-xs text-[#858585] font-bold uppercase tracking-wider">
                        What&apos;s included
                      </h3>
                      <ul className="space-y-2.5">
                        {srv.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#F8F6F0] leading-relaxed font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      prefetch={true}
                      className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A] text-[#D4AF5A] text-sm font-semibold transition-colors duration-200 group shadow-md"
                    >
                      <span>Enquire about this</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#303030] shadow-sm">
                  <p className="text-xs text-[#D4AF5A] font-bold mb-4 uppercase tracking-wider">
                    Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {srv.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F8F6F0] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#328568] shrink-0 mt-0.5" />
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
      <section className="px-4 py-20 sm:py-28 bg-[#080808] border-t border-[#303030]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium mx-auto">
            Get Help
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#F8F6F0]">
            Not sure which service you need?
          </h2>
          <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
            Just call or message us. We will ask a few questions, understand your
            situation, and tell you honestly what makes sense for your budget and
            timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              Write to us
            </Link>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#328568] hover:bg-[#286f56] text-white text-sm font-semibold transition-colors duration-200 shadow-md"
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
