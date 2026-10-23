import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { productsData } from "@/data/products";
import { siteConfig } from "@/data/site";
import {
  ChevronDown,
  Users,
  Phone,
  MessageCircle,
  CreditCard,
  CalendarCheck,
  GraduationCap,
  Bus,
  UserPlus,
} from "lucide-react";

const school = productsData.find((p) => p.id === "school-erp")!;

export const metadata: Metadata = {
  title: "Qelvora School ERP — Admissions, Fees, Attendance & Report Cards",
  description:
    "Complete school management system for CBSE, ICSE, and State Board schools. Manage fees, attendance, timetable, exams, and parent communication from one system.",
  alternates: { canonical: `${siteConfig.url}/products/school-erp` },
};

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[#303030] last:border-0 py-4.5">
      <summary className="flex items-center justify-between text-base text-[#F8F6F0] hover:text-[#D4AF5A] cursor-pointer list-none font-medium transition-colors duration-200 gap-4">
        <span>{q}</span>
        <ChevronDown className="w-4.5 h-4.5 shrink-0 text-[#858585] group-open:rotate-180 group-open:text-[#D4AF5A] transition-transform duration-200" />
      </summary>
      <p className="pt-3 text-sm text-[#B8B8B8] leading-relaxed font-normal">{a}</p>
    </details>
  );
}

export default function SchoolErpPage() {
  const schoolFeatures = [
    { icon: CreditCard, title: "Fee Collection & Receipts", desc: "Collect school fees, print instant receipts, track pending dues, and send automatic fee reminders to parents." },
    { icon: CalendarCheck, title: "Daily Attendance & Absent SMS", desc: "Take daily attendance in 1 minute. Parents immediately receive an automated alert if their child is absent." },
    { icon: GraduationCap, title: "Report Cards & Marksheets", desc: "Enter test marks once. Automatically calculates grades and prints beautiful CBSE or State Board report cards." },
    { icon: MessageCircle, title: "Parent WhatsApp Notices", desc: "Send school circulars, homework, holiday notices, and emergency alerts straight to parents' phones." },
    { icon: UserPlus, title: "Admissions & Student Records", desc: "Manage new admission forms, student profiles, transfer certificates (TC), and parent contacts securely." },
    { icon: Bus, title: "Bus & Transport Tracking", desc: "Manage school bus routes, student pickup stops, driver contact details, and transport fees with ease." },
  ];

  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 bg-[#080808] border-b border-[#303030]">
        <div className="max-w-4xl mx-auto relative space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />
            {school.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F6F0] leading-tight tracking-tight">
            {school.name}
          </h1>
          <p className="text-lg sm:text-xl text-[#D4AF5A] font-medium max-w-2xl mx-auto">{school.tagline}</p>
          <p className="text-base text-[#B8B8B8] leading-relaxed max-w-2xl mx-auto">{school.summary}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#request-demo"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              Request a demo
            </a>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#328568] hover:bg-[#286f56] text-white text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-4 py-16 sm:py-20 bg-[#121212] border-b border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">Features included in Qelvora School ERP</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {schoolFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 hover:bg-[#161616] space-y-3 transition-all duration-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#121212] border border-[#303030] flex items-center justify-center text-[#D4AF5A]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-[#F8F6F0]">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 py-16 sm:py-20 bg-[#080808]">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">Who uses this ERP?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {school.targetAudience.map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 p-5 rounded-2xl bg-[#121212] border border-[#303030] hover:border-[#D4AF5A]/60 transition-all duration-200 shadow-sm"
              >
                <Users className="w-5 h-5 text-[#D4AF5A] shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-sm text-[#F8F6F0] font-medium leading-snug">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="px-4 py-16 sm:py-20 bg-[#121212] border-y border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">Common problems this solves</h2>
          <div className="space-y-3">
            {school.problemsSolved.map((p) => (
              <div key={p} className="flex items-start gap-3.5 py-3.5 border-b border-[#303030] last:border-0">
                <span className="w-2 h-2 rounded-full bg-[#D9534F] shrink-0 mt-2" />
                <span className="text-sm text-[#F8F6F0] leading-relaxed font-normal">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-4 py-16 sm:py-20 bg-[#080808]">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">Modules inside the software</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {school.modules.map((mod) => (
              <div
                key={mod.name}
                className="p-6 rounded-2xl bg-[#121212] border border-[#303030] hover:border-[#D4AF5A]/60 hover:bg-[#161616] space-y-2 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF5A]" />
                  <h3 className="text-sm font-semibold text-[#F8F6F0]">{mod.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 sm:py-20 bg-[#121212] border-t border-[#303030]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F8F6F0]">Frequently asked questions</h2>
          <div className="rounded-2xl bg-[#1A1A1A] border border-[#303030] px-6 py-2 shadow-sm">
            {school.faqs.map((f) => (
              <FaqItem key={f.question} q={f.question} a={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section
        id="request-demo"
        className="px-4 py-16 sm:py-24 bg-[#080808] border-t border-[#303030]"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light text-[#F8F6F0] leading-tight">
              See Qelvora School ERP working with your school.
            </h2>
            <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
              Request a demo and we will walk you through fee collection, report
              cards, and parent notices using your school&apos;s actual requirements.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={siteConfig.phones.primary.tel}
                className="inline-flex items-center gap-2 text-sm text-[#F8F6F0] font-medium hover:text-[#D4AF5A] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-[#D4AF5A]" />
                {siteConfig.phones.primary.formatted}
              </a>
              <br />
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#328568] font-medium hover:underline transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
            </div>
          </div>
          <ContactForm
            formTitle="Request a School ERP demo"
            initialProductInterest="Qelvora School ERP"
          />
        </div>
      </section>
    </div>
  );
}
