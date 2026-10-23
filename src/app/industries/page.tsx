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
  schools: "#2563EB",
  colleges: "#7C3AED",
  "smb-startups": "#8C6B18",
  clinics: "#059669",
  "retail-services": "#D97706",
};

export default function IndustriesPage() {
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
            Who we work with
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-zinc-950 leading-tight tracking-tight max-w-3xl">
            Software built for{" "}
            <span className="text-[#8C6B18] font-normal">your type of business.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
            We work with schools, colleges, small businesses, clinics, and
            retail shops across India. Each industry has its own way of working
            — and we build software that fits exactly that.
          </p>
        </div>
      </section>

      {/* Quick nav pills */}
      <section className="px-4 py-4 bg-white/95 backdrop-blur border-b border-zinc-200 sticky top-16 z-10 shadow-xs">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {industriesData.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.slug}`}
              className="px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 text-xs font-medium hover:border-[#C49A2C] hover:text-[#8C6B18] hover:bg-white transition-colors"
            >
              {ind.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="px-4 py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto space-y-24">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.id] || Briefcase;
            const accent = accentColors[ind.id] || "#8C6B18";

            return (
              <div
                key={ind.id}
                id={ind.slug}
                className="scroll-mt-28 space-y-8 pb-20 border-b border-zinc-200 last:border-b-0"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      background: `${accent}12`,
                      borderColor: `${accent}30`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: accent }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">
                      {ind.title}
                    </h2>
                    <p className="text-sm font-medium" style={{ color: accent }}>
                      {ind.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {ind.description}
                </p>

                {/* Pain points + Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {/* Problems */}
                  <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/70 space-y-3.5 shadow-sm">
                    <h3 className="text-xs text-red-700 font-bold uppercase tracking-wider">
                      Common problems
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.painPoints.map((p, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-800 leading-relaxed font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="p-6 rounded-2xl bg-[#F8F8FA] border border-zinc-200/90 space-y-3.5 shadow-sm">
                    <h3 className="text-xs text-zinc-600 font-bold uppercase tracking-wider">
                      How we solve it
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-800 leading-relaxed font-normal">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: accent }}
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
                      className="px-3.5 py-1.5 rounded-full border text-xs font-medium"
                      style={{
                        borderColor: `${accent}35`,
                        color: accent,
                        background: `${accent}0d`,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold group hover:underline"
                    style={{ color: accent }}
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
      <section className="px-4 py-20 sm:py-28 bg-[#F8F8FA] border-t border-zinc-200/80">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">
            Don&apos;t see your industry?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            We have worked with a wide range of businesses. If you have a
            software problem, tell us about it and we will tell you honestly
            whether we can help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shadow-sm"
            >
              Contact us
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
