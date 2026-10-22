import React from "react";
import type { Metadata } from "next";
import { CollegeErpMockup } from "@/components/mockups/CollegeErpMockup";
import { ContactForm } from "@/components/forms/ContactForm";
import { productsData } from "@/data/products";
import { siteConfig } from "@/data/site";
import {
  CheckCircle2,
  ChevronDown,
  Users,
  Phone,
  MessageCircle,
} from "lucide-react";

const college = productsData.find((p) => p.id === "college-erp")!;

export const metadata: Metadata = {
  title: "Qelvora College ERP — Admissions, Marks, Placements & Campus Management",
  description:
    "College ERP for degree colleges, autonomous institutions, and polytechnics. Manage CBCS credits, internal marks, scholarships, placements, and alumni in one system.",
  alternates: { canonical: `${siteConfig.url}/products/college-erp` },
};

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-white/8 last:border-0 py-4">
      <summary className="flex items-center justify-between text-sm text-white hover:text-[#E3C46A] cursor-pointer list-none font-medium transition-colors gap-4">
        <span>{q}</span>
        <ChevronDown className="w-4 h-4 shrink-0 text-zinc-500 group-open:rotate-180 group-open:text-[#C49A2C] transition-transform duration-200" />
      </summary>
      <p className="pt-3 text-sm text-zinc-400 leading-relaxed">{a}</p>
    </details>
  );
}

export default function CollegeErpPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-4"
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
        <div className="max-w-6xl mx-auto relative space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E3C46A] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C]" />
                {college.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight tracking-tight">
                {college.name}
              </h1>
              <p className="text-lg text-[#E3C46A]">{college.tagline}</p>
              <p className="text-base text-zinc-400 leading-relaxed">{college.summary}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#request-demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-medium transition-colors"
                >
                  Request a demo
                </a>
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
            <div className="w-full overflow-hidden rounded-xl border border-white/8">
              <CollegeErpMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 py-16 sm:py-20 bg-[#18181B]">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white">Which colleges use this?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {college.targetAudience.map((t) => (
              <div key={t} className="flex items-start gap-2.5 p-4 rounded-xl bg-[#141416] border border-white/8">
                <Users className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300 leading-snug">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white">Problems this solves</h2>
          <div className="space-y-3">
            {college.problemsSolved.map((p) => (
              <div key={p} className="flex items-start gap-3 py-3 border-b border-white/8">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 shrink-0 mt-2" />
                <span className="text-sm text-zinc-400 leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-16 sm:py-20 bg-[#18181B]">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white">Key features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {college.keyHighlights.map((h) => (
              <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-[#141416] border border-white/8">
                <CheckCircle2 className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300 leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white">Modules included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {college.modules.map((mod) => (
              <div key={mod.name} className="p-5 rounded-xl bg-[#18181B] border border-white/8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[#C49A2C]" />
                  <h3 className="text-sm font-medium text-white">{mod.name}</h3>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 sm:py-20 bg-[#18181B]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light text-white">Frequently asked</h2>
          <div className="bg-[#141416] rounded-xl border border-white/8 px-5">
            {college.faqs.map((f) => (
              <FaqItem key={f.question} q={f.question} a={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section
        id="request-demo"
        className="px-4 py-16 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, #3A2F14 0%, #1a1a1c 50%, #111113 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              See Qelvora College ERP running your campus.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We&apos;ll walk through the admissions flow, internal marks, and
              placement module using a setup modelled after your
              institution&apos;s structure.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={siteConfig.phones.primary.tel}
                className="inline-flex items-center gap-2 text-sm text-white hover:text-[#E3C46A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C49A2C]" />
                {siteConfig.phones.primary.formatted}
              </a>
              <br />
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
            </div>
          </div>
          <ContactForm
            formTitle="Request a College ERP demo"
            initialProductInterest="Qelvora College ERP"
          />
        </div>
      </section>
    </>
  );
}
