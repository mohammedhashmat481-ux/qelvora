import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  Code2,
  Globe,
  Smartphone,
  CloudCog,
  Headset,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services & Custom Software Development | Bengaluru",
  description:
    "Tailored custom software development, Next.js web applications, mobile apps, cloud automation, and direct IT consulting from senior engineers in Bengaluru.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Smartphone,
  CloudCog,
  Headset,
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="default">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-gold-light text-xs font-medium">
              <span>Full-Stack Engineering &amp; IT Services</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-fluid-display font-light text-white tracking-tight">
                Software engineered from scratch for your operations
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-[65ch] leading-relaxed">
                We build new applications, internal workflow tools, client portals, and cloud automations tailored to your exact team hierarchies and compliance needs.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Discuss your project
              </Button>
              <Button
                href={siteConfig.phones.primary.tel}
                variant="gold-outline"
                size="lg"
                className="gap-2"
              >
                <Phone className="w-4 h-4 text-gold-light" />
                <span>Call {siteConfig.phones.primary.formatted}</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Deep-Dive Breakdown */}
      <Section variant="light" spacing="lg">
        <Container size="default">
          <div className="space-y-24">
            {servicesData.map((srv, index) => {
              const IconComponent = iconMap[srv.icon] || Code2;

              return (
                <div
                  key={srv.id}
                  id={srv.slug}
                  className="scroll-mt-28 space-y-10 pb-16 border-b border-black/[0.08] last:border-b-0"
                >
                  {/* Service Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 text-gold-text-on-light flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-gold-text-on-light font-semibold">
                          0{index + 1}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-light text-qtext">
                        {srv.title}
                      </h2>
                      <p className="text-sm sm:text-base font-medium text-gold-text-on-light">
                        {srv.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-qmuted leading-relaxed max-w-[70ch]">
                        {srv.detailedDescription}
                      </p>
                    </div>

                    <div className="lg:col-span-4 bg-[#F8F7F4] border border-black/[0.07] rounded-panel p-6 space-y-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-qtext">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-2 text-xs text-qmuted">
                        {srv.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-text-on-light shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-black/[0.06]">
                        <Button
                          href="/contact"
                          variant="outline-dark"
                          size="sm"
                          className="w-full text-xs"
                        >
                          Inquire about this service
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* 4-Step Process for this service */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-qmuted">
                      Delivery Process &amp; Milestones
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {srv.process.map((step) => (
                        <div
                          key={step.step}
                          className="p-5 rounded-panel border border-black/[0.08] bg-white space-y-2"
                        >
                          <span className="text-xs font-mono text-gold-text-on-light font-bold">
                            {step.step}
                          </span>
                          <h4 className="text-sm font-medium text-qtext">
                            {step.title}
                          </h4>
                          <p className="text-xs text-qmuted leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="p-5 rounded-panel bg-[#1B1B1E] text-white border border-white/10 space-y-3">
                    <p className="text-xs uppercase tracking-wider text-gold-light font-medium">
                      Guaranteed Deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-neutral-300">
                      {srv.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-light shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Consulting Call to Action */}
      <Section variant="shade" spacing="lg" className="border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
              Start a Conversation
            </span>
            <Heading as="h2" size="h1" theme="dark" className="mx-auto">
              Need a clear technical recommendation before spending?
            </Heading>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
              We do not try to sell you bloated solutions you don&apos;t need. Schedule an architecture review or call us directly to talk through your requirements with an engineer.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Schedule an engineering call
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
        </Container>
      </Section>
    </>
  );
}
