import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Code2,
  ShieldCheck,
  Compass,
  Cpu,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Qelvora Technologies | Software Studio in Bengaluru",
  description:
    "Qelvora Technologies is an independent software company in Thanisandra, Bengaluru. We build custom software, CRM, School ERP, and College ERP for businesses and institutions across India.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    icon: Code2,
    title: "You talk to the developer",
    body: "No middlemen. No account managers who just relay messages. You work directly with the engineers building your software.",
  },
  {
    icon: ShieldCheck,
    title: "Clear price before we start",
    body: "We document the full scope, cost, and milestones before writing a single line of code. No hidden extras later.",
  },
  {
    icon: Cpu,
    title: "Built for Indian workflows",
    body: "GST invoices, regional language support, local fee structures, WhatsApp notifications — we build for how Indian businesses actually run.",
  },
  {
    icon: Compass,
    title: "Support after launch",
    body: "We train your staff, help migrate your data, and stay available after go-live. We don't disappear once the project is delivered.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 bg-[#080808] border-b border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A]" />
            About us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F8F6F0] leading-tight tracking-tight max-w-3xl">
            We build software for{" "}
            <span className="text-[#D4AF5A]">
              schools, businesses, and everyone in between.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#B8B8B8] leading-relaxed max-w-2xl">
            Qelvora Technologies is a software company based in Thanisandra,
            Bengaluru. We build new applications from scratch and provide IT
            services to clients across India.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              Get in touch
            </Link>
            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] border border-[#454545] text-[#F8F6F0] hover:border-[#D4AF5A] hover:text-[#D4AF5A] text-sm font-medium transition-colors duration-200"
            >
              <MapPin className="w-4 h-4 text-[#D4AF5A]" />
              Find our office
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="px-4 py-20 sm:py-28 bg-[#121212]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light text-[#F8F6F0] leading-tight">
              A software studio rooted in practical work
            </h2>
            <div className="space-y-4 text-[#B8B8B8] leading-relaxed text-sm sm:text-base">
              <p>
                Qelvora Technologies was built on a simple idea: schools,
                colleges, and businesses deserve software that actually fits the
                way they work — not the other way around.
              </p>
              <p>
                We focus on building custom software from scratch. That means
                CRM systems, School ERP, College ERP, websites, mobile apps,
                and business tools — all designed around what you need, not
                forced into a generic template.
              </p>
              <p>
                We are based in Bengaluru and work with clients across
                Karnataka and other states in India. Our team works directly
                with clients — no outsourcing, no relay.
              </p>
            </div>
          </div>

          {/* What we do list */}
          <div className="space-y-3 bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 rounded-2xl p-6 sm:p-8 transition-all duration-200">
            <p className="text-xs text-[#D4AF5A] font-medium uppercase tracking-widest mb-4">
              What we build
            </p>
            {[
              "CRM and sales management systems",
              "School ERP — admissions, fees, attendance, results",
              "College ERP — departments, marks, placements, alumni",
              "Custom business software and internal tools",
              "Websites and web applications",
              "Mobile apps for Android and iOS",
              "Cloud setup, automation, and IT consulting",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 py-3 border-b border-[#303030] last:border-b-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF5A] shrink-0" />
                <span className="text-sm text-[#F8F6F0]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:py-28 bg-[#080808] border-y border-[#303030]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
              Our Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F8F6F0]">
              How we work
            </h2>
            <p className="text-[#B8B8B8] text-sm sm:text-base max-w-xl">
              Four things we commit to on every project, large or small.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-[#121212] border border-[#303030] hover:border-[#D4AF5A]/60 hover:bg-[#161616] space-y-3 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#303030] flex items-center justify-center text-[#D4AF5A]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[#F8F6F0] font-medium text-base">{v.title}</h3>
                  <p className="text-[#B8B8B8] text-sm leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-4 py-20 sm:py-28 bg-[#121212]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light text-[#F8F6F0] leading-tight">
              Visit us in Bengaluru
            </h2>
            <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed max-w-md">
              We are happy to meet in person or over a video call. Talk to us
              about your project — no commitment needed for the first
              conversation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#328568] hover:bg-[#286f56] text-white text-sm font-semibold transition-colors duration-200 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] border border-[#454545] text-[#F8F6F0] hover:border-[#D4AF5A] hover:text-[#D4AF5A] text-sm font-medium transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-[#D4AF5A]" />
                Open in Google Maps
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Address card */}
          <div className="bg-[#1A1A1A] border border-[#303030] hover:border-[#D4AF5A]/60 rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg transition-all duration-200">
            <h3 className="text-[#F8F6F0] font-medium text-lg">Our office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-1" />
                <span className="text-[#B8B8B8] text-sm leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href={siteConfig.phones.primary.tel}
                    className="text-[#F8F6F0] text-sm hover:text-[#D4AF5A] font-mono font-medium transition-colors duration-200"
                  >
                    {siteConfig.phones.primary.formatted}
                  </a>
                  <a
                    href={siteConfig.phones.secondary.tel}
                    className="text-[#858585] text-sm hover:text-[#D4AF5A] font-mono transition-colors duration-200"
                  >
                    {siteConfig.phones.secondary.formatted}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF5A] shrink-0" />
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="text-[#F8F6F0] text-sm hover:text-[#D4AF5A] font-medium transition-colors duration-200"
                >
                  {siteConfig.emails.primary}
                </a>
              </div>
            </div>
            <div className="pt-3 border-t border-[#303030]">
              <p className="text-xs text-[#858585] font-medium">
                Mon – Sat &nbsp;·&nbsp; 9:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
