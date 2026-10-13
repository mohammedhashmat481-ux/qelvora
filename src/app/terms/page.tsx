import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service | Qelvora Technologies",
  description: "Standard terms of service template for Qelvora Technologies website and software proposals.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="narrow">
          <div className="space-y-4 text-left">
            <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300">
              Last updated: October 2026 • <em>(Standard Terms Template)</em>
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="lg">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none text-sm text-qmuted leading-relaxed space-y-6">
            <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Template Notice:</strong> These terms govern the general use of <code>qelvora.in</code>. All commercial engagements, software licensing, ERP deployments, and custom development projects are executed under mutually signed Statements of Work (SOWs) specifying deliverables, payment milestones, and warranty scopes.
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">1. Scope of Website</h2>
              <p>
                The website <code>qelvora.in</code> is operated by Qelvora Technologies, Bengaluru. Materials, software descriptions, and product feature lists presented on this website are provided for informational and preliminary evaluation purposes.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">2. Intellectual Property</h2>
              <p>
                The &ldquo;Qelvora&rdquo; wordmark, Q-mark insignia, bespoke software UI mockups, and website source code are the intellectual property of Qelvora Technologies. Custom code developed under bespoke client contracts is transferred to the respective client according to the contractual terms of that engagement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">3. Quotations &amp; Proposals</h2>
              <p>
                Any preliminary pricing discussions, demo estimates, or proposals provided verbally or electronically are valid for 30 calendar days from the date of issue unless specified otherwise in writing.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">4. Governing Law &amp; Jurisdiction</h2>
              <p>
                These terms and any disputes relating to Qelvora Technologies shall be governed by and construed in accordance with the laws of the Republic of India, under the jurisdiction of the courts located in Bengaluru, Karnataka.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
