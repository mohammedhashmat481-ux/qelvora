import React from "react";
import Link from "next/link";
import { AnimatedQMark } from "@/components/brand/AnimatedQMark";
import { CrmMockup } from "@/components/mockups/CrmMockup";
import { SchoolErpMockup } from "@/components/mockups/SchoolErpMockup";
import { CollegeErpMockup } from "@/components/mockups/CollegeErpMockup";
import { siteConfig } from "@/data/site";
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2,
  Building2, GraduationCap, Briefcase, Stethoscope, ShoppingBag,
  Users, ShieldCheck, MapPin, Headphones
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C49A2C]/6 rounded-full blur-[120px] pointer-events-none" aria-hidden />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E3C46A] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C] animate-pulse" />
              Bengaluru Software Studio
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
              Innovation today,{" "}
              <span className="text-[#E3C46A]">advancing tomorrow.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              We build software for schools, colleges, and businesses in India.
              CRM systems, School ERP, College ERP, websites, and mobile apps — all built from scratch, designed for the way you actually work.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors min-h-[48px] flex items-center">
                Talk to us
              </Link>
              <a href={siteConfig.phones.primary.tel}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 text-zinc-300 hover:border-[#C49A2C]/50 hover:text-[#E3C46A] text-sm transition-all min-h-[48px]">
                <Phone className="w-4 h-4 text-[#C49A2C]" />
                Call {siteConfig.phones.primary.formatted}
              </a>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-5 text-xs text-zinc-500 pt-2 border-t border-white/[0.07]">
              {["Talk directly with engineers", "Fixed price before we start", "Built for Indian workflows"].map((point) => (
                <div key={point} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C]" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Animated Q mark */}
          <div className="flex justify-center lg:justify-end">
            <AnimatedQMark theme="dark" className="w-72 h-72 sm:w-80 sm:h-80" />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-5 mb-14">
          <h2 className="text-3xl sm:text-4xl font-light text-white">Our software products</h2>
          <p className="text-base text-zinc-400 max-w-2xl">
            Three ready-to-deploy platforms. Each is customised to your institution or business before go-live.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* CRM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="badge-gold">Sales & Client Management</span>
              <h3 className="text-2xl font-medium text-white">Qelvora CRM</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Track every lead, send GST-ready quotations, and log WhatsApp follow-ups — all in one place.
                No more lost inquiries in personal chat apps.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {["Drag-and-drop lead pipeline in ₹", "Generate GST quotes (CGST/SGST/IGST) in 1 click", "WhatsApp and call log per client", "Daily follow-up reminders for your team"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/products/crm"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors">
                See full details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7"><CrmMockup /></div>
          </div>

          <div className="gold-line" />

          {/* School ERP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1"><SchoolErpMockup /></div>
            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <span className="badge-gold">K-12 School Management</span>
              <h3 className="text-2xl font-medium text-white">Qelvora School ERP</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                From fee collection to report cards — handle your entire school administration from one screen.
                Works for CBSE, ICSE, and State Board schools.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {["Fee receipt printing in seconds", "Automatic parent SMS/WhatsApp for absent students", "CBSE and State Board report card generator", "Bus route and transport management"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/products/school-erp"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors">
                See full details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="gold-line" />

          {/* College ERP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="badge-gold">Higher Education Management</span>
              <h3 className="text-2xl font-medium text-white">Qelvora College ERP</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Built for degree colleges and autonomous institutions. Handle semester credits, internal marks, government scholarships, and placement drives — all CBCS and NEP ready.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {["CBCS credit and elective management", "Automatic university marks export file", "SSP/NSP government scholarship tracking", "Campus placement drive with eligibility filter"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/products/college-erp"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors">
                See full details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7"><CollegeErpMockup /></div>
          </div>
        </div>
      </section>

      {/* ── SERVICES (hairline rows) ── */}
      <section className="py-20 px-4 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-light text-white">What we build</h2>
              <p className="text-base text-zinc-400">Any software your business needs, built from scratch for you.</p>
            </div>
            <Link href="/services" className="text-sm text-[#C49A2C] hover:text-[#E3C46A] flex items-center gap-1 shrink-0">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border-t border-white/[0.08]">
            {[
              { num: "01", title: "Custom software development", desc: "Internal tools, billing systems, ERP modules — anything built to match your exact process." },
              { num: "02", title: "Website and web app development", desc: "Fast, mobile-friendly websites and client portals. Optimised for Indian internet speeds." },
              { num: "03", title: "Mobile app development", desc: "Android and iOS apps for your field staff, students, parents, or customers." },
              { num: "04", title: "Cloud and automation", desc: "Automate daily tasks — WhatsApp alerts, backup jobs, invoice emails — so your team can focus on real work." },
              { num: "05", title: "IT consulting and support", desc: "Direct advice from engineers, not a call centre. Monthly maintenance contracts available." },
            ].map((svc) => (
              <div key={svc.num}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-sm group">
                <div className="md:col-span-1 text-xs font-mono text-[#C49A2C]">{svc.num}</div>
                <div className="md:col-span-4">
                  <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-[#E3C46A] transition-colors">{svc.title}</h3>
                </div>
                <div className="md:col-span-6 text-sm text-zinc-400 leading-relaxed">{svc.desc}</div>
                <div className="md:col-span-1 flex md:justify-end">
                  <Link href={`/services`} className="text-xs text-[#C49A2C] hover:text-[#E3C46A] flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE BUILD FOR ── */}
      <section className="py-20 px-4 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-white">Who we build for</h2>
            <p className="text-base text-zinc-400">We work with organisations that have outgrown spreadsheets and WhatsApp groups.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, title: "Schools", desc: "State board, CBSE, ICSE schools — fee management, attendance, report cards, and parent alerts." },
              { icon: Building2, title: "Colleges and Universities", desc: "Degree colleges and autonomous institutes — semester marks, placements, scholarships." },
              { icon: Briefcase, title: "Small & Medium Businesses", desc: "Distributors, agencies, service companies — CRM, quotations, and operations tools." },
              { icon: Stethoscope, title: "Clinics and Healthcare", desc: "Patient records, appointments, prescriptions, and SMS reminders for doctors." },
              { icon: ShoppingBag, title: "Retail and Service Shops", desc: "Job cards, inventory alerts, billing, and customer due tracking for shops." },
              { icon: Briefcase, title: "Startups", desc: "Early-stage startups that need a clean internal system or a client-facing web portal." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="bg-[#18181B] border border-white/[0.07] rounded-panel p-6 space-y-3 hover:border-[#C49A2C]/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#C49A2C]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C49A2C]" />
                </div>
                <h3 className="text-base font-medium text-white">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 px-4 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-white">How we work</h2>
            <p className="text-base text-zinc-400 max-w-xl">A simple 4-step process. No surprises.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Listen", desc: "We spend time understanding your day-to-day work — what's slow, what causes mistakes, what staff find frustrating." },
              { n: "02", title: "Plan", desc: "We write down exactly what we will build, what it will cost, and when each part will be done. You approve before we start." },
              { n: "03", title: "Build", desc: "We build your software and show you working versions every two weeks so you can give feedback early." },
              { n: "04", title: "Support", desc: "We train your staff, move your existing data in, and stay available for fixes and improvements after launch." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-[#18181B] border border-white/[0.07] rounded-panel p-6 space-y-3">
                <span className="text-3xl font-light font-mono text-[#E3C46A]">{n}</span>
                <h3 className="text-base font-medium text-white">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY QELVORA ── */}
      <section className="py-20 px-4 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-white">Why clients choose us</h2>
            <p className="text-base text-zinc-400 max-w-xl">Honest points. No marketing fluff.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: Users, title: "You talk directly to the engineers", desc: "No account managers or call centres. The person who answers your call is also the person writing your code." },
              { icon: ShieldCheck, title: "Clear price before we start", desc: "We write a detailed scope document with exact costs and delivery dates. You only pay what was agreed, nothing extra." },
              { icon: MapPin, title: "Built for Indian operations", desc: "GST calculations, local fee structures, WhatsApp alerts, multilingual support — we build for how India actually works." },
              { icon: Headphones, title: "Training and support after launch", desc: "We come to your office, train your staff, and stay available after launch for questions and improvements." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="bg-[#18181B] border border-white/[0.07] rounded-panel p-6 space-y-3 hover:border-[#C49A2C]/25 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#C49A2C]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C49A2C]" />
                </div>
                <h3 className="text-base font-medium text-white">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <section className="py-20 px-4 border-t border-white/[0.07]" style={{ background: "linear-gradient(100deg, #1A150A 0%, #111113 60%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light text-white">Ready to talk?</h2>
            <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
              Call us, WhatsApp us, or fill the contact form. We will reply within one business day with honest advice about your requirement.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors min-h-[48px] flex items-center">
                Send a message
              </Link>
              <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-600/20 text-sm font-medium transition-all min-h-[48px]">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-[#18181B] border border-white/[0.07] rounded-panel p-6 space-y-4 text-sm text-zinc-400">
            <p className="text-white font-medium">Qelvora Technologies — Bengaluru</p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49A2C] shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C49A2C] shrink-0" />
                <span className="font-mono text-white">{siteConfig.phones.primary.formatted} / {siteConfig.phones.secondary.formatted}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.07]">
              <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="text-[#C49A2C] hover:text-[#E3C46A] text-xs font-medium flex items-center gap-1 transition-colors">
                Open in Google Maps <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
