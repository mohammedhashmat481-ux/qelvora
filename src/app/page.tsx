import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2,
  Building2, GraduationCap, Briefcase, Stethoscope, ShoppingBag,
  Users, ShieldCheck, MapPin, Headphones,
  MessageSquare, FileText, Clock, TrendingUp, UserCheck,
  CreditCard, CalendarCheck, Bus, BookOpen, Award, Wallet
} from "lucide-react";

export default function HomePage() {
  const crmFeatures = [
    { icon: MessageSquare, title: "WhatsApp & Call Connect", desc: "Chat with leads directly on WhatsApp in 1 click without saving numbers. Keeps full customer chat notes." },
    { icon: UserCheck, title: "Lead & Inquiry Inbox", desc: "Capture every inquiry from phone calls, your website, and messages. Never lose a paying client." },
    { icon: FileText, title: "1-Click GST Quotations", desc: "Generate clean GST quotes & bills with CGST/SGST in 30 seconds and download branded PDFs." },
    { icon: Clock, title: "Follow-Up Reminders", desc: "Automatic reminders for your sales team so quotes and callbacks are never forgotten." },
    { icon: TrendingUp, title: "Visual Sales Pipeline", desc: "See every deal clearly from New Enquiry → Quote Sent → Deal Closed in real time." },
    { icon: Phone, title: "Customer History", desc: "All past conversations, quotes, and notes for each customer stored safely in one profile." },
  ];

  const schoolFeatures = [
    { icon: CreditCard, title: "Fee Collection & Receipts", desc: "Collect school fees, print instant receipts, track pending dues, and send automatic fee reminders to parents." },
    { icon: CalendarCheck, title: "Daily Attendance & Absent SMS", desc: "Take daily attendance in 1 minute. Parents immediately receive an automated alert if their child is absent." },
    { icon: GraduationCap, title: "Report Cards & Marksheets", desc: "Enter test marks once. Automatically calculates grades and prints beautiful CBSE or State Board report cards." },
    { icon: MessageCircle, title: "Parent WhatsApp Notices", desc: "Send school circulars, homework, holiday notices, and emergency alerts straight to parents' phones." },
    { icon: Users, title: "Admissions & Student Records", desc: "Manage new admission forms, student profiles, transfer certificates (TC), and parent contacts securely." },
    { icon: Bus, title: "Bus & Transport Tracking", desc: "Manage school bus routes, student pickup stops, driver contact details, and transport fees with ease." },
  ];

  const collegeFeatures = [
    { icon: BookOpen, title: "Semester & Course Schemes", desc: "Manage academic departments, syllabus credits (NEP & CBCS), open electives, and class timetables." },
    { icon: CalendarCheck, title: "Attendance & Hall Ticket Eligibility", desc: "Subject-wise attendance tracking with automatic 75% cutoff calculations for university exam hall tickets." },
    { icon: Award, title: "Internal Marks & University Exports", desc: "Record internal test marks (CIE) and export marksheet files formatted for your affiliating university." },
    { icon: Wallet, title: "Fee & Govt Scholarship Ledgers", desc: "Manage student semester fee ledgers, quota fees (CET/Management), and adjust SSP/NSP scholarships." },
    { icon: Briefcase, title: "Campus Placements & Drives", desc: "Filter eligible students by CGPA or backlogs, announce recruiter drives, and track job offers easily." },
    { icon: Users, title: "Faculty Workload & Alumni Network", desc: "Track teaching faculty workloads, student feedback ratings, and maintain a permanent alumni database." },
  ];

  return (
    <div className="bg-white text-zinc-900">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 px-4 overflow-hidden bg-black text-white border-b border-white/10">
        {/* Background gold logo watermark on pure black background */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] lg:w-[960px] pointer-events-none select-none opacity-[0.15] z-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <Image
            src="/logo-emblem.png"
            alt=""
            width={358}
            height={373}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Soft warm-gold ambient glow on black */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C49A2C]/15 rounded-full blur-[140px] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E3C46A] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C] animate-pulse" />
              Bengaluru Software Studio
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
              Innovation today,{" "}
              <span className="text-[#E3C46A]">advancing tomorrow.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              We build software for schools, colleges, and businesses in India.
              CRM systems, School ERP, College ERP, websites, and mobile apps — all built from scratch, designed for the way you actually work.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" prefetch={true}
                className="px-8 py-3.5 rounded-full bg-[#C49A2C] hover:bg-[#E3C46A] text-black text-sm font-semibold transition-colors min-h-[48px] flex items-center shadow-lg">
                Talk to us
              </Link>
              <a href={siteConfig.phones.primary.tel}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white hover:border-[#C49A2C] hover:text-[#E3C46A] text-sm transition-all min-h-[48px] bg-white/5">
                <Phone className="w-4 h-4 text-[#C49A2C]" />
                Call {siteConfig.phones.primary.formatted}
              </a>
            </div>

            {/* Quick credibility points */}
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C]" /> Direct with developers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C]" /> Fixed price upfront
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2C]" /> Thanisandra, Bengaluru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section
        id="products"
        className="py-20 px-4 border-t border-zinc-200/80 relative overflow-hidden"
        style={{
          backgroundColor: "rgba(196, 154, 44, 0.01)", // 99% transparent matching brand gold
        }}
      >
        <div className="max-w-6xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C49A2C]/30 text-xs text-[#8C6B18] font-medium shadow-xs">
            Ready-to-Deploy Software
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">Our software products &amp; key features</h2>
          <p className="text-base text-zinc-600 max-w-2xl">
            Everything your team needs to run daily operations smoothly. Here is what is included in each platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* 1. CRM */}
          <div
            className="p-6 sm:p-8 rounded-2xl border border-[#C49A2C]/25 shadow-sm space-y-7 hover:border-[#C49A2C]/45 hover:shadow-md transition-all"
            style={{
              backgroundColor: "rgba(196, 154, 44, 0.01)", // 99% transparent matching gold
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200/60">
              <div className="space-y-2">
                <span className="badge-gold">Sales &amp; Client Management</span>
                <h3 className="text-2xl sm:text-3xl font-medium text-zinc-950">Qelvora CRM</h3>
                <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
                  Track every lead, send GST-ready quotations, and log WhatsApp follow-ups in one place. No more lost inquiries in personal chat apps.
                </p>
              </div>
              <Link href="/products/crm" prefetch={true}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shrink-0 shadow-sm">
                Explore CRM details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#8C6B18] font-medium mb-4">
                Features included in Qelvora CRM:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {crmFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="p-4 rounded-xl border border-zinc-200/90 space-y-2 bg-white/80 backdrop-blur-xs hover:border-[#C49A2C]/40 hover:shadow-xs transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C49A2C]/10 border border-[#C49A2C]/20 flex items-center justify-center text-[#8C6B18]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900">{f.title}</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. School ERP */}
          <div
            className="p-6 sm:p-8 rounded-2xl border border-[#C49A2C]/25 shadow-sm space-y-7 hover:border-[#C49A2C]/45 hover:shadow-md transition-all"
            style={{
              backgroundColor: "rgba(196, 154, 44, 0.01)", // 99% transparent matching gold
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200/60">
              <div className="space-y-2">
                <span className="badge-gold">K-12 School Management</span>
                <h3 className="text-2xl sm:text-3xl font-medium text-zinc-950">Qelvora School ERP</h3>
                <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
                  From fee collection to report cards — handle your entire school administration from one screen. Works for CBSE, ICSE, and State Board schools.
                </p>
              </div>
              <Link href="/products/school-erp" prefetch={true}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shrink-0 shadow-sm">
                Explore School ERP details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#8C6B18] font-medium mb-4">
                Features included in Qelvora School ERP:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {schoolFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="p-4 rounded-xl border border-zinc-200/90 space-y-2 bg-white/80 backdrop-blur-xs hover:border-[#C49A2C]/40 hover:shadow-xs transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C49A2C]/10 border border-[#C49A2C]/20 flex items-center justify-center text-[#8C6B18]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900">{f.title}</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. College ERP */}
          <div
            className="p-6 sm:p-8 rounded-2xl border border-[#C49A2C]/25 shadow-sm space-y-7 hover:border-[#C49A2C]/45 hover:shadow-md transition-all"
            style={{
              backgroundColor: "rgba(196, 154, 44, 0.01)", // 99% transparent matching gold
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200/60">
              <div className="space-y-2">
                <span className="badge-gold">Higher Education Management</span>
                <h3 className="text-2xl sm:text-3xl font-medium text-zinc-950">Qelvora College ERP</h3>
                <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
                  Built for degree colleges and autonomous institutions. Handle semester credits, internal marks, government scholarships, and placement drives — all CBCS and NEP ready.
                </p>
              </div>
              <Link href="/products/college-erp" prefetch={true}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors shrink-0 shadow-sm">
                Explore College ERP details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#8C6B18] font-medium mb-4">
                Features included in Qelvora College ERP:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {collegeFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="p-4 rounded-xl border border-zinc-200/90 space-y-2 bg-white/80 backdrop-blur-xs hover:border-[#C49A2C]/40 hover:shadow-xs transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C49A2C]/10 border border-[#C49A2C]/20 flex items-center justify-center text-[#8C6B18]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-900">{f.title}</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES (hairline rows) ── */}
      <section className="py-20 px-4 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">What we build</h2>
              <p className="text-base text-zinc-600">Any software your business needs, built from scratch for you.</p>
            </div>
            <Link href="/services" prefetch={true} className="text-sm text-[#8C6B18] hover:text-black flex items-center gap-1 shrink-0 font-medium">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="border-t border-zinc-200">
            {[
              { num: "01", title: "Custom software development", desc: "Internal tools, billing systems, ERP modules — anything built to match your exact process." },
              { num: "02", title: "Websites and web apps", desc: "Fast Next.js websites, client portals, and web platforms that load in under a second." },
              { num: "03", title: "Mobile app development", desc: "Android and iOS apps designed for fast offline use and budget mobile devices." },
              { num: "04", title: "Cloud and automation", desc: "Automate daily WhatsApp alerts, PDF receipts, database backups, and server scaling." },
              { num: "05", title: "IT consulting and support", desc: "Direct guidance from senior developers. Code audits, security fixes, and monthly maintenance." },
            ].map((s) => (
              <div key={s.num} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-zinc-200 hover:bg-zinc-50/80 px-2 transition-colors">
                <div className="flex items-start sm:items-center gap-5">
                  <span className="text-xs font-mono text-[#8C6B18] font-bold">{s.num}</span>
                  <div>
                    <h3 className="text-base font-medium text-zinc-950">{s.title}</h3>
                    <p className="text-xs text-zinc-600 mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <Link href="/services" prefetch={true} className="text-xs text-[#8C6B18] hover:text-black flex items-center gap-1 shrink-0 self-end sm:self-auto font-medium">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE BUILD FOR ── */}
      <section className="py-20 px-4 bg-[#F8F8FA] border-t border-zinc-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">Who we build for</h2>
            <p className="text-base text-zinc-600 max-w-xl">
              Software tailored to the unique operational reality of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: GraduationCap, label: "Schools", sub: "CBSE & State Board", desc: "Fee collection, report cards, daily attendance, parent SMS." },
              { icon: Building2, label: "Colleges", sub: "Degree & Autonomous", desc: "CBCS credits, internal marks, placements, scholarships." },
              { icon: Briefcase, label: "SMBs & Startups", sub: "Growth businesses", desc: "Custom CRM, quotation pipelines, customer portals." },
              { icon: Stethoscope, label: "Clinics", sub: "Healthcare", desc: "Patient appointments, medical records, digital prescriptions." },
              { icon: ShoppingBag, label: "Retail & Shops", sub: "Trade & Service", desc: "Billing, inventory tracking, service job cards, supplier orders." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-5 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-[#C49A2C]/10 flex items-center justify-center text-[#8C6B18]">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-950">{item.label}</h3>
                    <p className="text-[11px] text-[#8C6B18] font-mono font-medium">{item.sub}</p>
                    <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <Link href="/industries" prefetch={true} className="text-xs text-zinc-500 hover:text-black flex items-center gap-1 pt-1 font-medium">
                    See details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK (4 steps) ── */}
      <section className="py-20 px-4 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">How we work</h2>
            <p className="text-base text-zinc-600 max-w-xl">
              A transparent, four-step process with no hidden costs and direct engineer access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Listen", desc: "We sit down with you to understand how you currently work, what slows your team down, and what you actually need." },
              { step: "02", title: "Plan", desc: "We document the full scope, screens, milestones, and price before writing any code. No surprise bills later." },
              { step: "03", title: "Build", desc: "You review working software every two weeks. We build iteratively so what you see is what you get." },
              { step: "04", title: "Support", desc: "We train your staff, migrate your data, and provide continuous support after launch. We don't vanish." },
            ].map((step) => (
              <div key={step.step} className="p-6 rounded-xl bg-[#F8F8FA] border border-zinc-200 space-y-3">
                <span className="text-2xl font-light text-[#8C6B18] font-mono font-semibold">{step.step}</span>
                <h3 className="text-lg font-medium text-zinc-950">{step.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY QELVORA ── */}
      <section className="py-20 px-4 bg-[#F8F8FA] border-t border-zinc-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-950">Why Qelvora</h2>
            <p className="text-base text-zinc-600">Honest reasons clients choose to work with us.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Talk to the developer", desc: "You speak directly to the engineer writing your code. No account managers playing telephone." },
              { icon: ShieldCheck, title: "Clear scope & price", desc: "Full specifications and pricing confirmed upfront. No scope-creep surcharges." },
              { icon: MapPin, title: "Built for local needs", desc: "GST calculations, Indian fee structures, regional languages, and WhatsApp workflows natively built-in." },
              { icon: Headphones, title: "Support after launch", desc: "We train your staff, help transfer data, and provide ongoing SLAs. We stay with you." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C49A2C]/10 flex items-center justify-center text-[#8C6B18]">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-950">{item.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-4 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="badge-gold">Get in touch</span>
          <h2 className="text-4xl sm:text-5xl font-light text-zinc-950 tracking-tight">
            Have a project in mind?<br />Let&apos;s build it together.
          </h2>
          <p className="text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Whether you need a new CRM, School ERP, or custom software built from scratch, our engineers are ready to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact" prefetch={true}
              className="px-8 py-3.5 rounded-full bg-[#C49A2C] hover:bg-[#B38622] text-black text-sm font-semibold transition-colors min-h-[48px] flex items-center shadow-sm">
              Write to us
            </Link>
            <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors min-h-[48px] shadow-sm">
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
            <a href={siteConfig.phones.primary.tel}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-zinc-300 text-zinc-800 hover:border-[#C49A2C] hover:text-black text-sm transition-all min-h-[48px] bg-white">
              <Phone className="w-4 h-4 text-[#C49A2C]" />
              {siteConfig.phones.primary.formatted}
            </a>
          </div>

          <p className="text-xs text-zinc-500 pt-4">
            Office: {siteConfig.address.full}
          </p>
        </div>
      </section>
    </div>
  );
}
