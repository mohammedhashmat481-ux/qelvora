import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { CASE_STUDIES } from "@/data/case-studies";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Qelvora Technologies | Software Studio in Thanisandra, Bengaluru",
  description:
    "Learn about Qelvora Technologies, an independent software company based in Bengaluru building custom software, CRM systems, and School & College ERP platforms.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const companyValues = [
    {
      title: "Direct developer engagement",
      description:
        "We believe clients should speak directly with the engineers designing and writing their software. No middle layers, no distorted requirements, and no misplaced expectations.",
      icon: Code2,
    },
    {
      title: "Software engineered from scratch",
      description:
        "We avoid flimsy template wrappers. Every database schema, business logic constraint, and user interface is built intentionally to mirror the client&apos;s real-world operations.",
      icon: Cpu,
    },
    {
      title: "Upfront clarity on scope and costs",
      description:
        "We do not bait clients with artificially low quotes only to charge for essential requirements later. We document full specifications, milestones, and costs prior to development.",
      icon: ShieldCheck,
    },
    {
      title: "Support that outlasts the launch",
      description:
        "Building software is only step one. We provide on-site staff training, assist with data migration, and offer dependable maintenance SLAs for ongoing stability.",
      icon: Compass,
    },
  ];

  return (
    <>
      {/* About Hero */}
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="default">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-gold-light text-xs font-medium">
              <span>About Qelvora Technologies</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-fluid-display font-light text-white tracking-tight">
                Innovation today, advancing tomorrow.
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-[65ch] leading-relaxed">
                We are an Indian software company based in Thanisandra, Bengaluru. We build new software applications and custom projects from scratch for clients, alongside providing dedicated IT services.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get in touch
              </Button>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/15 text-sm font-medium transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-light" />
                <span>Locate our Bengaluru office</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company Story & Engineering Focus */}
      <Section variant="light" spacing="lg">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
                  Our Background
                </p>
                <Heading as="h2" size="h1" theme="light">
                  A software studio rooted in practical execution
                </Heading>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-qmuted leading-relaxed">
                <p>
                  Qelvora Technologies was founded on a straightforward principle: businesses, schools, and colleges deserve software that fits the way they actually work, rather than forcing them to bend their daily operations to fit generic foreign SaaS templates.
                </p>
                <p>
                  Operating from North Bengaluru, we develop full-scale digital systems from scratch. Our core platforms include our proprietary <strong>Qelvora CRM</strong>, <strong>School ERP</strong>, and <strong>College &amp; University ERP</strong>. In addition, we take on custom business software development, client-facing web portals, mobile apps for Android and iOS, and cloud automations.
                </p>
                <p>
                  Our client base spans educational institutions (State Board, CBSE, ICSE schools, and degree colleges), small and medium commercial businesses, early-stage startups, healthcare clinics, and retail and service firms.
                </p>
              </div>
            </div>

            {/* Fact Sheet Box */}
            <div className="lg:col-span-5 bg-[#FAFAF7] border border-black/[0.08] rounded-panel p-6 sm:p-8 space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-qtext">
                Company Information
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <span className="text-qmuted block text-xs">Legal Name</span>
                  <span className="font-medium text-qtext">Qelvora Technologies</span>
                </div>

                <div>
                  <span className="text-qmuted block text-xs">Official Wordmark</span>
                  <span className="font-mono text-qtext font-medium">QELVORA TECHNOLOGIES</span>
                </div>

                <div>
                  <span className="text-qmuted block text-xs">Headquarters</span>
                  <span className="text-qtext font-medium">
                    Thanisandra, Bengaluru, Karnataka, India
                  </span>
                </div>

                <div>
                  <span className="text-qmuted block text-xs">Primary Solutions</span>
                  <span className="text-qtext">
                    CRM Platforms, School ERP, College ERP, Custom Business Software, Cloud Automation
                  </span>
                </div>

                <div>
                  <span className="text-qmuted block text-xs">Client Sectors</span>
                  <span className="text-qtext">
                    Schools, Colleges, SMBs, Startups, Clinics, Retail &amp; Service Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values & Standards */}
      <Section variant="charcoal" spacing="lg" hasTopBorder>
        <Container size="default">
          <div className="text-left space-y-3 mb-14">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              How We Work
            </p>
            <Heading as="h2" size="h1" theme="dark">
              Our engineering values
            </Heading>
            <p className="text-sm sm:text-base text-neutral-400 max-w-[65ch]">
              We adhere strictly to honesty in technical commitments, clean code, and predictable pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-panel bg-black/40 border border-white/10 space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-light flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Client Proof Block (Clearly marked placeholder as required) */}
      <Section variant="light" spacing="md">
        <Container size="default">
          <div className="p-6 rounded-panel bg-[#FFFDF5] border border-gold/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-text-on-light">
              <ShieldCheck className="w-4 h-4" />
              <span>Client Case Studies &amp; Benchmark Data</span>
            </div>
            <p className="text-xs sm:text-sm text-qmuted leading-relaxed">
              In accordance with our strict transparency policy, we do not fabricate client names, invent metrics, or publish unverified testimonials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {CASE_STUDIES.map((cs) => (
                <div
                  key={cs.id}
                  className="p-4 rounded-lg bg-white border border-black/[0.06] space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-qtext">{cs.title}</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-mono">
                      {cs.isVerified ? "Verified" : "TODO: Case Study Entry"}
                    </span>
                  </div>
                  <p className="text-qmuted">{cs.solution}</p>
                  <p className="text-[11px] text-neutral-400 italic font-mono">
                    {cs.challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Location & Bengaluru Office */}
      <Section variant="shade" spacing="lg" className="border-t border-white/10">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
                Our Office
              </span>
              <Heading as="h2" size="h1" theme="dark">
                Visit us in Thanisandra, Bengaluru
              </Heading>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-[60ch]">
                Whether you prefer an in-person meeting to review campus requirements or an online consultation, our engineers are readily available.
              </p>

              <div className="pt-2">
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-black text-sm font-medium transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-charcoal border border-white/10 rounded-panel p-6 space-y-4 text-xs text-neutral-300">
              <h3 className="font-semibold text-white text-sm">
                Registered Address &amp; Contact
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                  <span className="text-neutral-300 leading-relaxed">
                    {siteConfig.address.full}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-light shrink-0" />
                  <div className="flex flex-col">
                    <a
                      href={siteConfig.phones.primary.tel}
                      className="text-white hover:text-gold-light font-mono"
                    >
                      {siteConfig.phones.primary.formatted}
                    </a>
                    <a
                      href={siteConfig.phones.secondary.tel}
                      className="text-neutral-400 hover:text-gold-light font-mono"
                    >
                      {siteConfig.phones.secondary.formatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-light shrink-0" />
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="text-white hover:text-gold-light"
                  >
                    {siteConfig.emails.primary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
