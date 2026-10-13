import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { SchoolErpMockup } from "@/components/mockups/SchoolErpMockup";
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

const schoolData = productsData.find((p) => p.id === "school-erp")!;

export const metadata: Metadata = {
  title: "Qelvora School ERP — Admissions, Fees, Attendance & Report Cards",
  description:
    "Comprehensive School Management ERP engineered for Indian CBSE, ICSE, and State Board schools. Automate fee collection, student attendance, report cards, and parent SMS alerts.",
  alternates: {
    canonical: `${siteConfig.url}/products/school-erp`,
  },
};

export default function SchoolErpPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schoolData.faqs.map((f) => ({
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
              <span>{schoolData.badge}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-fluid-display font-light text-white tracking-tight">
                {schoolData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-light text-gold-light">
                {schoolData.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 max-w-[65ch] leading-relaxed">
              {schoolData.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#demo-form" variant="primary" size="lg">
                Request campus demo
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
            <SchoolErpMockup />
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
                    Institutions Served
                  </p>
                  <h2 className="text-xl sm:text-2xl font-medium text-qtext">
                    Who Qelvora School ERP is built for
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {schoolData.targetAudience.map((audience, i) => (
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
                    Campus Bottlenecks
                  </p>
                  <h2 className="text-xl sm:text-2xl font-medium text-qtext">
                    The problems it solves
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {schoolData.problemsSolved.map((prob, i) => (
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

      {/* Complete Module List */}
      <Section variant="charcoal" spacing="lg" hasTopBorder>
        <Container size="default">
          <div className="text-left space-y-3 mb-12">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              10 Integrated Modules
            </p>
            <Heading as="h2" size="h1" theme="dark">
              Complete school administration under one login
            </Heading>
            <p className="text-sm sm:text-base text-neutral-300 max-w-[65ch]">
              From morning student biometric roll-call to end-of-year CBSE report card compilation, all modules communicate natively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolData.modules.map((module, i) => (
              <div
                key={i}
                className="p-6 rounded-panel bg-black/40 border border-white/10 space-y-3 hover:border-gold/40 transition-colors"
              >
                <div className="text-xs font-mono text-gold-light">
                  {i < 9 ? `0${i + 1}` : i + 1}
                </div>
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
              Answers for School Leaders
            </p>
            <Heading as="h2" size="h2" theme="light">
              Frequently asked questions about School ERP
            </Heading>
          </div>

          <Accordion items={schoolData.faqs} theme="light" />
        </Container>
      </Section>

      {/* Demo Form */}
      <Section id="demo-form" variant="shade" spacing="lg" className="border-t border-white/10">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
                Campus Consultation
              </span>
              <h2 className="text-3xl font-light text-white tracking-tight">
                Schedule a school demo or campus visit
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We can demonstrate the fee collection counter, marks card templates, and parent WhatsApp notifications directly to your Principal and administrative trustees.
              </p>

              <div className="p-4 rounded-panel bg-black/40 border border-white/10 space-y-2 text-xs text-neutral-300">
                <p className="font-semibold text-white">What we provide before signing:</p>
                <ul className="space-y-1.5 list-disc list-inside text-neutral-400">
                  <li>Sample fee receipt formatted to your school trust template</li>
                  <li>Data migration review of your current student records</li>
                  <li>On-campus training schedule for administrative staff</li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-xs text-neutral-400">Call our education leads team:</p>
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
                initialProductInterest="Qelvora School ERP"
                formTitle="Request a School ERP Consultation"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
