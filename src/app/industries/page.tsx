import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { siteConfig } from "@/data/site";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Stethoscope,
  ShoppingBag,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Schools, Colleges, Businesses, Clinics | Qelvora",
  description:
    "Qelvora Technologies builds software for schools, colleges, small businesses, clinics, and retail shops across India. See how we solve problems specific to your sector.",
  alternates: { canonical: `${siteConfig.url}/industries` },
};

const iconMap: Record<string, React.ElementType> = {
  schools: GraduationCap,
  colleges: BookOpen,
  "smb-startups": Briefcase,
  clinics: Stethoscope,
  "retail-services": ShoppingBag,
};

const accentColors: Record<string, string> = {
  schools: "#D4AF5A",
  colleges: "#D4AF5A",
  "smb-startups": "#D4AF5A",
  clinics: "#328568",
  "retail-services": "#E8C76A",
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 bg-[#080808] border-b border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />
            Who we work with
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F6F0] leading-tight tracking-tight max-w-3xl">
            Software built for{" "}
            <span className="text-[#D4AF5A]">your type of business.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F8F6F0] leading-relaxed max-w-2xl">
            We work with schools, colleges, small businesses, clinics, and
            retail shops across India. Each industry has its own way of working
            — and we build software that fits exactly that.
          </p>
        </div>
      </section>

      {/* Quick nav pills */}
      <section className="px-4 py-4 bg-[#080808]/95 backdrop-blur border-b border-[#303030] sticky top-16 z-10">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {industriesData.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.slug}`}
              className="px-4 py-1.5 rounded-full border border-[#303030] bg-[#121212] text-[#B8B8B8] text-xs font-medium hover:border-[#D4AF5A] hover:text-[#D4AF5A] transition-colors duration-200"
            >
              {ind.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="px-4 py-20 sm:py-28 bg-[#121212]">
        <div className="max-w-5xl mx-auto space-y-24">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.id] || Briefcase;
            const accent = accentColors[ind.id] || "#D4AF5A";

            return (
              <div
                key={ind.id}
                id={ind.slug}
                className="scroll-mt-28 space-y-8 pb-20 border-b border-[#303030] last:border-b-0"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      background: "#1A1A1A",
                      borderColor: "#303030",
                    }}
                  >
                    <Icon
                      className="w-6 h-6 text-[#D4AF5A]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">
                      {ind.title}
                    </h2>
                    <p className="text-sm font-medium" style={{ color: accent }}>
                      {ind.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed max-w-3xl">
                  {ind.description}
                </p>

                {/* Pain points + Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {/* Problems */}
                  <div
                    className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#D9534F]/30 space-y-3.5 shadow-sm"
                  >
                    <h3 className="text-xs text-[#D9534F] font-bold uppercase tracking-wider">
                      Common problems
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.painPoints.map((p, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#F8F6F0] leading-relaxed font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9534F] shrink-0 mt-2" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div
                    className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 space-y-3.5 shadow-sm transition-all duration-200"
                  >
                    <h3 className="text-xs text-[#858585] font-bold uppercase tracking-wider">
                      How we solve it
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#F8F6F0] leading-relaxed font-normal">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5 text-[#328568]"
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deliverables row */}
                <div className="flex flex-wrap gap-2">
                  {ind.exampleDeliverables.map((d, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full border border-[#303030] bg-[#1A1A1A] text-xs font-medium text-[#F8F6F0]"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF5A] hover:text-[#E8C76A] group transition-colors duration-200"
                  >
                    Talk to us about {ind.title.split(" ")[0].toLowerCase()} software
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
            Custom Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#F8F6F0]">
            Don&apos;t see your industry?
          </h2>
          <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
            We have worked with a wide range of businesses. If you have a
            software problem, tell us about it and we will tell you honestly
            whether we can help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              Contact us
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
