import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Qelvora Technologies | Thanisandra, Bengaluru",
  description:
    "Directly contact Qelvora Technologies developers in Bengaluru. Request a demo for CRM, School ERP, or College ERP, or discuss custom software requirements.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="default">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-gold-light text-xs font-medium">
              <span>Direct Engineering Communication</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-fluid-display font-light text-white tracking-tight">
                Talk to us about your software requirement
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-[65ch] leading-relaxed">
                Whether you are evaluating a School ERP, need a streamlined CRM, or want custom software built from scratch, our Bengaluru engineering team is ready to help.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Two-Column Contact Section */}
      <Section variant="light" spacing="lg">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Authentic Details, Phone, Map, WhatsApp */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-medium text-gold-text-on-light uppercase tracking-wider">
                  Direct Inquiries
                </p>
                <Heading as="h2" size="h2" theme="light">
                  How you can reach our team
                </Heading>
                <p className="text-sm text-qmuted leading-relaxed">
                  We respond directly to inquiries during standard business hours (Monday through Saturday, 9:30 AM to 6:30 PM IST).
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Telephone */}
                <div className="p-5 rounded-panel bg-[#FAFAF7] border border-black/[0.08] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-qtext">
                    <Phone className="w-4 h-4 text-gold-text-on-light" />
                    <span>Phone Numbers (Tap to Call)</span>
                  </div>
                  <div className="space-y-2">
                    <a
                      href={siteConfig.phones.primary.tel}
                      className="flex items-center justify-between p-2.5 rounded bg-white border border-black/[0.06] hover:border-gold/50 transition-colors group"
                    >
                      <div>
                        <span className="block text-xs font-mono font-medium text-qtext group-hover:text-gold-text-on-light">
                          {siteConfig.phones.primary.formatted}
                        </span>
                        <span className="text-[10px] text-qmuted">Primary Office Line</span>
                      </div>
                      <span className="text-xs text-gold-text-on-light font-medium">Call →</span>
                    </a>

                    <a
                      href={siteConfig.phones.secondary.tel}
                      className="flex items-center justify-between p-2.5 rounded bg-white border border-black/[0.06] hover:border-gold/50 transition-colors group"
                    >
                      <div>
                        <span className="block text-xs font-mono font-medium text-qtext group-hover:text-gold-text-on-light">
                          {siteConfig.phones.secondary.formatted}
                        </span>
                        <span className="text-[10px] text-qmuted">Secondary Support</span>
                      </div>
                      <span className="text-xs text-gold-text-on-light font-medium">Call →</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="p-5 rounded-panel bg-emerald-50 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-950">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp Chat</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Message our team directly with a screenshot, specification sheet, or brief query.
                  </p>
                  <a
                    href={siteConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Start WhatsApp Conversation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Address */}
                <div className="p-5 rounded-panel bg-[#FAFAF7] border border-black/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-qtext">
                    <Mail className="w-4 h-4 text-gold-text-on-light" />
                    <span>Official Email</span>
                  </div>
                  <a
                    href={`mailto:${siteConfig.emails.primary}`}
                    className="text-sm font-medium text-qtext hover:text-gold-text-on-light transition-colors block"
                  >
                    {siteConfig.emails.primary}
                  </a>
                  <p className="text-xs text-qmuted">
                    Send RFPs, requirement documents, and institutional proposals.
                  </p>
                </div>

                {/* Physical Office Address */}
                <div className="p-5 rounded-panel bg-[#FAFAF7] border border-black/[0.08] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-qtext">
                    <MapPin className="w-4 h-4 text-gold-text-on-light" />
                    <span>Office Location</span>
                  </div>
                  <address className="not-italic text-xs text-qmuted leading-relaxed">
                    {siteConfig.address.full}
                  </address>
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-text-on-light font-medium hover:underline pt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Server-Validated Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                formTitle="Send your project or software inquiry"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
