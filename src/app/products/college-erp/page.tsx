import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CollegeErpMockup } from "@/components/mockups/CollegeErpMockup";
import { ContactForm } from "@/components/forms/ContactForm";
import { productsData } from "@/data/products";
import { siteConfig } from "@/data/site";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertOctagon,
  Target,
  GraduationCap,
} from "lucide-react";

const collegeData = productsData.find((p) => p.id === "college-erp")!;

export const metadata: Metadata = {
  title: "Qelvora College ERP — CBCS Credits, Internal Marks & Placements",
  description:
    "End-to-end ERP platform for degree colleges and autonomous universities. Manage semester credits, university marks exports, government scholarship ledgers, and placement drives.",
  alternates: {
    canonical: `${siteConfig.url}/products/college-erp`,
  },
};

export default function CollegeErpPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: collegeData.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Product Hero */}
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="default">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-gold-light text-xs font-medium">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{collegeData.badge}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-fluid-display font-light text-white tracking-tight">
                {collegeData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gold-light">
                {collegeData.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 max-w-[65ch] leading-relaxed">
              {collegeData.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#demo-form" variant="primary" size="lg">
                Schedule institutional demo
              </Button>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp inquiry</span>
              </a>
            </div>
          </div>

          {/* Interactive UI Mockup */}
          <div className="mt-14 max-w-5xl mx-auto">
            <CollegeErpMockup />
          </div>
        </Container>
      </Section>

      {/* Who it is for & Problems solved */}
      <Section variant="light" spacing="lg">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who it is for */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-gold-text-on-light flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
                    Institutional Fit
                  </p>
                  <h2 className="text-xl sm:text-2xl font-medium text-qtext">
                    Who Qelvora College ERP is engineered for
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {collegeData.targetAudience.map((audience, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-qmuted">
                    <CheckCircle2 className="w-4 h-4 text-gold-text-on-light shrink-0 mt-0.5" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problems it solves */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-gold-text-on-light flex items-center justify-center">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
                    Administrative Obstacles
                  </p>
                  <h2 className="text-xl sm:text-2xl font-medium text-qtext">
                    The problems it eliminates
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {collegeData.problemsSolved.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-qmuted">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-text-on-light shrink-0 mt-2" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* College Modules List */}
      <Section variant="charcoal" spacing="lg" hasTopBorder>
        <Container size="default">
          <div className="text-left space-y-3 mb-12">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              Academic &amp; Administrative System
            </p>
            <Heading as="h2" size="h1" theme="dark">
              Higher education modules built for compliance
            </Heading>
            <p className="text-sm sm:text-base text-neutral-300 max-w-[65ch]">
              Engineered to support National Education Policy (NEP) multi-disciplinary frameworks and university affiliation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeData.modules.map((module, i) => (
              <div
                key={i}
                className="p-6 rounded-panel bg-black/40 border border-white/10 space-y-3 hover:border-gold/40 transition-colors"
              >
                <div className="text-xs font-mono text-gold-light">0{i + 1}</div>
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {module.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Accordion */}
      <Section variant="light" spacing="lg">
        <Container size="narrow">
          <div className="text-left space-y-3 mb-10">
            <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
              Dean &amp; Administrator FAQ
            </p>
            <Heading as="h2" size="h2" theme="light">
              Frequently asked questions about College ERP
            </Heading>
          </div>

          <Accordion items={collegeData.faqs} theme="light" />
        </Container>
      </Section>

      {/* Demo Form */}
      <Section id="demo-form" variant="shade" spacing="lg" className="border-t border-white/10">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
                Autonomous &amp; University Setup
              </span>
              <h2 className="text-3xl font-light text-white tracking-tight">
                Request a college software demonstration
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We can demonstrate credit rule configuration, internal assessment consolidation, and placement cell filtration using your exact department scheme.
              </p>

              <div className="p-4 rounded-panel bg-black/40 border border-white/10 space-y-2 text-xs text-neutral-300">
                <p className="font-semibold text-white">What we evaluate together:</p>
                <ul className="space-y-1.5 list-disc list-inside text-neutral-400">
                  <li>Your university or autonomous credit structure</li>
                  <li>SSP/NSP government scholarship adjustment flows</li>
                  <li>Placement portal resume requirements and company recruiter access</li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-xs text-neutral-400">Connect with our collegiate team:</p>
                <a
                  href={siteConfig.phones.primary.tel}
                  className="text-base font-mono font-medium text-gold-light hover:underline mt-1 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.phones.primary.formatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                initialProductInterest="Qelvora College ERP"
                formTitle="Request a College ERP Walkthrough"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
