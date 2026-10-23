import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { productsData } from "@/data/products";
import { siteConfig } from "@/data/site";
import {
  CheckCircle2,
  ChevronDown,
  Users,
  Phone,
  MessageCircle,
  MessageSquare,
  FileText,
  Clock,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const crm = productsData.find((p) => p.id === "crm")!;

export const metadata: Metadata = {
  title: "Qelvora CRM — Sales Pipeline & Client Management for Indian Businesses",
  description:
    "Track leads, send GST quotations, and log WhatsApp calls in one place. CRM built for Indian SMBs, clinics, and service companies.",
  alternates: { canonical: `${siteConfig.url}/products/crm` },
};

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-zinc-200 last:border-0 py-4.5">
      <summary className="flex items-center justify-between text-base text-zinc-900 hover:text-[#8C6B18] cursor-pointer list-none font-semibold transition-colors gap-4">
        <span>{q}</span>
        <ChevronDown className="w-4.5 h-4.5 shrink-0 text-zinc-400 group-open:rotate-180 group-open:text-[#8C6B18] transition-transform duration-200" />
      </summary>
      <p className="pt-3 text-sm text-zinc-600 leading-relaxed font-normal">{a}</p>
    </details>
  );
}

export default function CrmPage() {
  const crmFeatures = [
    { icon: MessageSquare, title: "WhatsApp & Call Connect", desc: "Chat with leads directly on WhatsApp in 1 click without saving numbers. All call notes stay logged." },
    { icon: UserCheck, title: "Lead & Inquiry Inbox", desc: "Capture every inquiry from phone calls, website forms, and messages so no deals are missed." },
    { icon: FileText, title: "1-Click GST Quotations", desc: "Create professional GST quotes & bills with CGST/SGST in 30 seconds and download branded PDFs." },
    { icon: Clock, title: "Follow-Up Reminders", desc: "Automatic reminders for callbacks and meetings so sales staff never forget a lead." },
    { icon: TrendingUp, title: "Visual Sales Pipeline", desc: "See every deal clearly from New Enquiry → Quote Sent → Deal Closed in real time." },
    { icon: Phone, title: "Customer History", desc: "All past conversations, quotes, and notes for each customer stored safely in one permanent profile." },
  ];

  return (
    <div className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 bg-white border-b border-zinc-200/80">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,154,44,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#E3C46A]/40 text-xs text-[#8C6B18] font-semibold mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C]" />
            {crm.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-zinc-950 leading-tight tracking-tight">
            {crm.name}
          </h1>
          <p className="text-lg sm:text-xl text-[#8C6B18] font-medium max-w-2xl mx-auto">{crm.tagline}</p>
          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">{crm.summary}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#request-demo"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shadow-sm"
            >
              Request a demo
            </a>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Key features grid */}
      <section className="px-4 py-16 sm:py-20 bg-[#F8F8FA] border-b border-zinc-200/80">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#8C6B18] font-bold">Core Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">Features included in Qelvora CRM</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {crmFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm space-y-3 hover:border-[#C49A2C]/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#F4ECE1] border border-[#E3C46A]/40 flex items-center justify-center text-[#8C6B18]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-950">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">Who uses this CRM?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {crm.targetAudience.map((t) => (
              <div key={t} className="flex items-start gap-3 p-5 rounded-2xl bg-[#F8F8FA] border border-zinc-200/90 shadow-sm">
                <Users className="w-5 h-5 text-[#8C6B18] shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-sm text-zinc-800 font-medium leading-snug">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="px-4 py-16 sm:py-20 bg-[#F8F8FA] border-y border-zinc-200/80">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">Common problems this solves</h2>
          <div className="space-y-3">
            {crm.problemsSolved.map((p) => (
              <div key={p} className="flex items-start gap-3.5 py-3.5 border-b border-zinc-200 last:border-0">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                <span className="text-sm text-zinc-700 leading-relaxed font-normal">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-4 py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">Modules inside the software</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {crm.modules.map((mod) => (
              <div key={mod.name} className="p-6 rounded-2xl bg-[#F8F8FA] border border-zinc-200/90 space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C49A2C]" />
                  <h3 className="text-sm font-semibold text-zinc-950">{mod.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 sm:py-20 bg-[#F8F8FA] border-t border-zinc-200/80">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-950">Frequently asked questions</h2>
          <div className="bg-white rounded-2xl border border-zinc-200/90 px-6 py-2 shadow-sm">
            {crm.faqs.map((f) => (
              <FaqItem key={f.question} q={f.question} a={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section
        id="request-demo"
        className="px-4 py-16 sm:py-24 bg-white border-t border-zinc-200/80"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-950 leading-tight">
              See Qelvora CRM working with your business.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Request a demo and we will show you exactly how the CRM handles
              your leads, follow-ups, and quotations — no generic slides.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={siteConfig.phones.primary.tel}
                className="inline-flex items-center gap-2 text-sm text-zinc-900 font-semibold hover:text-[#8C6B18] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8C6B18]" />
                {siteConfig.phones.primary.formatted}
              </a>
              <br />
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
            </div>
          </div>
          <ContactForm
            formTitle="Request a CRM demo"
            initialProductInterest="Qelvora CRM"
          />
        </div>
      </section>
    </div>
  );
}
