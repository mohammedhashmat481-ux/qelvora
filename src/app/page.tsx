import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimatedQMark } from "@/components/brand/AnimatedQMark";
import { CrmMockup } from "@/components/mockups/CrmMockup";
import { SchoolErpMockup } from "@/components/mockups/SchoolErpMockup";
import { CollegeErpMockup } from "@/components/mockups/CollegeErpMockup";
import { siteConfig } from "@/data/site";
import { productsData } from "@/data/products";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  FileCode2,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

export default function HomePage() {
  const crmProduct = productsData.find((p) => p.id === "crm")!;
  const schoolProduct = productsData.find((p) => p.id === "school-erp")!;
  const collegeProduct = productsData.find((p) => p.id === "college-erp")!;

  const howWeWorkSteps = [
    {
      num: "01",
      title: "Listen",
      description:
        "We spend time on-site or in focused calls understanding your daily operations, paper registers, Excel workflows, and staff bottlenecks.",
    },
    {
      num: "02",
      title: "Plan",
      description:
        "We document clear system specifications, database entities, and fixed milestones. You know the exact deliverables and timeline before work begins.",
    },
    {
      num: "03",
      title: "Build",
      description:
        "Our engineers construct your software with clean code and tested security. You receive bi-weekly working demonstrations to test and refine early.",
    },
    {
      num: "04",
      title: "Support",
      description:
        "We assist with data migration, train your staff hands-on in your office, and provide continuous technical maintenance as your requirements grow.",
    },
  ];

  const whyQelvoraPoints = [
    {
      title: "Direct communication with the developers",
      description:
        "You talk directly with the engineers writing your code, eliminating the miscommunication and delays of layered agency account managers.",
      icon: Users2,
    },
    {
      title: "Clear scope and price before starting",
      description:
        "We provide transparent, line-item quotations with fixed delivery milestones. No hidden hosting surcharges or billing surprises halfway through.",
      icon: ShieldCheck,
    },
    {
      title: "Built for local Indian workflows",
      description:
        "We build from day one for Indian operational realities: multi-term school fees, GST computation (CGST/SGST/IGST), WhatsApp alerts, and local language needs.",
      icon: Compass,
    },
    {
      title: "Hands-on training and dependable support",
      description:
        "Software is useless if staff cannot use it comfortably. We train your clerks, teachers, and sales reps, and stay on-call for any operational hurdles.",
      icon: Headphones,
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Section
        variant="shade"
        spacing="hero"
        className="relative overflow-hidden border-b border-white/[0.08]"
      >
        {/* Subtle radial ambient background glow */}
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-gold-light text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span>Bengaluru Software Studio &amp; IT Services</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-fluid-display font-light text-white tracking-tight leading-[1.1]">
                  Innovation today,{" "}
                  <span className="font-normal text-gold-light block sm:inline">
                    advancing tomorrow.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-[62ch]">
                  We build custom business software, CRM platforms, and complete School &amp; College ERP systems from scratch — engineered for institutions and growing businesses with direct developer access.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Talk to us
                </Button>

                <Button
                  href={siteConfig.phones.primary.tel}
                  variant="gold-outline"
                  size="lg"
                  className="gap-2.5"
                >
                  <Phone className="w-4 h-4 text-gold-light" />
                  <span>Call {siteConfig.phones.primary.formatted}</span>
                </Button>
              </div>

              {/* Direct Proofs / Reassurance */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-light" />
                  <span>Direct engineer access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-light" />
                  <span>Fixed milestone pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-light" />
                  <span>Thanisandra, Bengaluru</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Signature Moment - Animated Q Mark */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative flex items-center justify-center p-4">
                <AnimatedQMark theme="dark" className="w-full h-full" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. PRODUCTS BAND */}
      <Section id="products" variant="light" spacing="lg">
        <Container size="wide">
          <div className="text-left space-y-3 mb-14">
            <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
              Core Products &amp; Platforms
            </p>
            <Heading as="h2" size="h1" theme="light">
              Purpose-built software platforms for education and business
            </Heading>
            <p className="text-sm sm:text-base text-qmuted max-w-[70ch]">
              Each system is engineered to solve specific operational headaches: long fee counter queues, missed student attendance notices, and scattered sales lead spreadsheets.
            </p>
          </div>

          <div className="space-y-20">
            {/* Product 1: CRM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-gold-text-on-light text-xs font-medium border border-amber-500/20">
                  {crmProduct.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-qtext">
                  {crmProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-qmuted leading-relaxed">
                  {crmProduct.summary}
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-qtext">
                  {crmProduct.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-text-on-light shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex items-center gap-4">
                  <Button
                    href="/products/crm"
                    variant="primary"
                    size="md"
                    className="gap-2"
                  >
                    <span>Explore CRM details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <CrmMockup />
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="hairline-divider-light" />

            {/* Product 2: School ERP */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <SchoolErpMockup />
              </div>

              <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-gold-text-on-light text-xs font-medium border border-amber-500/20">
                  {schoolProduct.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-qtext">
                  {schoolProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-qmuted leading-relaxed">
                  {schoolProduct.summary}
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-qtext">
                  {schoolProduct.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-text-on-light shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex items-center gap-4">
                  <Button
                    href="/products/school-erp"
                    variant="primary"
                    size="md"
                    className="gap-2"
                  >
                    <span>Explore School ERP</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="hairline-divider-light" />

            {/* Product 3: College ERP */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-gold-text-on-light text-xs font-medium border border-amber-500/20">
                  {collegeProduct.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-qtext">
                  {collegeProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-qmuted leading-relaxed">
                  {collegeProduct.summary}
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-qtext">
                  {collegeProduct.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-text-on-light shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex items-center gap-4">
                  <Button
                    href="/products/college-erp"
                    variant="primary"
                    size="md"
                    className="gap-2"
                  >
                    <span>Explore College ERP</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <CollegeErpMockup />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. SERVICES LIST (Hairline-divided rows) */}
      <Section variant="charcoal" spacing="lg" hasTopBorder>
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-medium text-gold-light uppercase tracking-wider mb-2">
                Custom IT Services
              </p>
              <Heading as="h2" size="h1" theme="dark">
                Software engineered from scratch for your business
              </Heading>
            </div>
            <Button href="/services" variant="gold-outline" size="sm" className="self-start md:self-end">
              View all services breakdown
            </Button>
          </div>

          {/* Hairline-divided rows */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline group hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-sm"
              >
                <div className="md:col-span-1 text-xs font-mono text-gold-light">
                  0{index + 1}
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-5 text-sm text-neutral-300 leading-relaxed">
                  {service.shortDescription}
                </div>

                <div className="md:col-span-2 flex md:justify-end">
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-xs text-gold-light hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>Read scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. WHO WE BUILD FOR */}
      <Section variant="light" spacing="lg">
        <Container size="wide">
          <div className="text-left space-y-3 mb-12">
            <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
              Target Sectors
            </p>
            <Heading as="h2" size="h1" theme="light">
              Who we build software for
            </Heading>
            <p className="text-sm sm:text-base text-qmuted max-w-[70ch]">
              We work with institutions and enterprises that have outgrown off-the-shelf software or need dedicated technical development without high agency overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-panel bg-[#FAFAF8] border border-black/[0.07] hover:border-gold/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-qtext">{ind.title}</h3>
                  <p className="text-xs text-gold-text-on-light font-medium">
                    {ind.subtitle}
                  </p>
                  <p className="text-sm text-qmuted leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-black/[0.06]">
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="text-xs font-medium text-qtext hover:text-gold-text-on-light inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>See solutions for this sector</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. HOW WE WORK (A real sequence: Listen, Plan, Build, Support) */}
      <Section variant="charcoal" spacing="lg" hasTopBorder>
        <Container size="default">
          <div className="text-left space-y-3 mb-14">
            <p className="text-xs font-medium text-gold-light uppercase tracking-wider">
              Our Process
            </p>
            <Heading as="h2" size="h1" theme="dark">
              How we work together
            </Heading>
            <p className="text-sm sm:text-base text-neutral-400 max-w-[65ch]">
              A disciplined four-step sequence designed to eliminate misunderstandings, deliver on time, and ensure long-term system stability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWorkSteps.map((step) => (
              <div
                key={step.num}
                className="bg-black/40 border border-white/10 rounded-panel p-6 space-y-4 relative"
              >
                <span className="text-3xl font-light font-mono text-gold-light">
                  {step.num}
                </span>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. WHY QELVORA (4 to 5 honest points) */}
      <Section variant="light" spacing="lg">
        <Container size="default">
          <div className="text-left space-y-3 mb-14">
            <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
              Engineering Principles
            </p>
            <Heading as="h2" size="h1" theme="light">
              Why clients choose Qelvora
            </Heading>
            <p className="text-sm sm:text-base text-qmuted max-w-[70ch]">
              We do not make hollow claims of being revolutionary. We build reliable software, explain the trade-offs plainly, and support our clients after launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyQelvoraPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-panel border border-black/[0.08] bg-white space-y-3 hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 text-gold-text-on-light flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-qtext">
                    {point.title}
                  </h3>
                  <p className="text-sm text-qmuted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 7. FINAL CALL TO ACTION & CONTACT BAND */}
      <Section variant="shade" spacing="lg" className="border-t border-white/[0.08]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
                Let&apos;s Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                Ready to review your software requirement with an engineer?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-[60ch]">
                Call us, visit our office in Thanisandra, Bengaluru, or send a brief description of what you need. We provide straightforward technical advice and fixed-scope proposals.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Talk to us
                </Button>
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-charcoal/80 border border-white/10 rounded-panel p-6 space-y-4 text-xs text-neutral-300">
              <p className="font-semibold text-white text-sm">
                Direct Contact Details
              </p>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                  <span className="text-neutral-300 leading-relaxed">
                    {siteConfig.address.full}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-light shrink-0" />
                  <span className="font-mono text-white">
                    {siteConfig.phones.primary.formatted} /{" "}
                    {siteConfig.phones.secondary.formatted}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold-light shrink-0" />
                  <span>Monday – Saturday: 9:30 AM to 6:30 PM IST</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <a
                  href={siteConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
