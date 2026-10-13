import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { industriesData } from "@/data/industries";
import { siteConfig } from "@/data/site";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  GraduationCap,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries & Sectors We Build Software For",
  description:
    "Tailored software systems for schools, colleges, small and medium businesses, startups, clinics, and retail firms across Bengaluru and India.",
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
};

const industryIcons: Record<string, React.ElementType> = {
  schools: GraduationCap,
  colleges: Building2,
  "smb-startups": Briefcase,
  clinics: Stethoscope,
  "retail-services": ShoppingBag,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Industries Hero */}
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="default">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-gold-light text-xs font-medium">
              <span>Domain Solutions &amp; Focus Sectors</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-fluid-display font-light text-white tracking-tight">
                Software built around your industry&apos;s daily reality
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-[65ch] leading-relaxed">
                A school needs multi-term fee ledgers and biometric SMS notifications; a distributor needs GST quotations and inventory thresholds. We design for real-world operating workflows.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss your sector requirement
              </Button>
              <Button
                href={siteConfig.phones.primary.tel}
                variant="gold-outline"
                size="lg"
              >
                Call {siteConfig.phones.primary.formatted}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Sections */}
      <Section variant="light" spacing="lg">
        <Container size="default">
          <div className="space-y-24">
            {industriesData.map((ind, index) => {
              const Icon = industryIcons[ind.id] || Layers;

              return (
                <div
                  key={ind.id}
                  id={ind.slug}
                  className="scroll-mt-28 space-y-8 pb-16 border-b border-black/[0.08] last:border-b-0"
                >
                  {/* Top row */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 text-gold-text-on-light flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-gold-text-on-light font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-light text-qtext">
                      {ind.title}
                    </h2>
                    <p className="text-sm sm:text-base font-medium text-gold-text-on-light">
                      {ind.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-qmuted leading-relaxed max-w-[70ch]">
                      {ind.description}
                    </p>
                  </div>

                  {/* Pain Points vs Solutions Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Common Friction Points */}
                    <div className="p-6 rounded-panel bg-[#FFFDF9] border border-amber-900/10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                        <AlertCircle className="w-4 h-4 text-amber-700" />
                        <span>Common Friction Points</span>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-qmuted">
                        {ind.painPoints.map((pain, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-amber-800 font-bold shrink-0 mt-0.5">•</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How Qelvora Solves It */}
                    <div className="p-6 rounded-panel bg-white border border-black/[0.08] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>How Our Software Solves It</span>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-qmuted">
                        {ind.solutions.map((sol, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-text-on-light shrink-0 mt-1" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Deliverables footer */}
                  <div className="p-4 rounded-lg bg-[#19191C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                    <div className="flex flex-wrap items-center gap-2 text-neutral-300">
                      <span className="text-gold-light font-medium uppercase tracking-wider text-[11px]">
                        Typical Deliverables:
                      </span>
                      {ind.exampleDeliverables.map((deliv, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-white/10 text-neutral-200"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="text-gold-light hover:underline font-medium inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Inquire for {ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section variant="shade" spacing="lg" className="border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
              Don&apos;t See Your Industry?
            </span>
            <Heading as="h2" size="h1" theme="dark" className="mx-auto">
              We build custom software for any specialized workflow
            </Heading>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
              If your business operations rely on spreadsheets, paper registers, or mismatched tools, we can model and build a dedicated system tailored directly to you.
            </p>

            <div className="pt-2 flex justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Discuss custom software
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
