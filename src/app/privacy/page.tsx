import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Qelvora Technologies",
  description: "Privacy policy template and data protection practices of Qelvora Technologies.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Section variant="shade" spacing="hero" className="border-b border-white/10">
        <Container size="narrow">
          <div className="space-y-4 text-left">
            <span className="text-xs uppercase tracking-wider text-gold-light font-medium">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300">
              Last updated: October 2026 • <em>(Standard Corporate Policy Template)</em>
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="lg">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none text-sm text-qmuted leading-relaxed space-y-6">
            <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Template Notice:</strong> This privacy policy template outlines the baseline data handling practices of Qelvora Technologies for website visitors and product inquiries. Individual enterprise software agreements, School ERP installations, and dedicated cloud deployments are governed by separate Master Services Agreements (MSAs) and Data Processing Addendums (DPAs).
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">1. Information We Collect</h2>
              <p>
                When you submit an inquiry form or request a demo on <code>qelvora.in</code>, we collect your name, phone number, email address, organisation type, and details of your software requirement. We do not use third-party behavioral advertising cookies or sell user information to data brokers.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">2. How We Use Inquired Data</h2>
              <p>
                Contact information submitted through our website is strictly utilized by our Bengaluru engineering and consulting personnel to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Respond to your requested software or service requirements;</li>
                <li>Conduct tailored demonstrations of CRM, School ERP, or College ERP systems;</li>
                <li>Provide accurate project estimates and technical architectural proposals.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">3. Client Data Sovereignty in ERP &amp; Custom Software</h2>
              <p>
                For our installed software products (School ERP, College ERP, CRM), clients retain 100% ownership and control over student records, academic marks, financial ledgers, and contact rosters. Data is hosted either on the client&apos;s designated private servers or dedicated cloud instances with encrypted backups.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium text-qtext">4. Inquiries &amp; Privacy Officer Contact</h2>
              <p>
                For any questions regarding our data practices or to request removal of your inquiry contact details, write to our official email:{" "}
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="text-gold-text-on-light font-medium underline"
                >
                  {siteConfig.emails.primary}
                </a>{" "}
                or visit our registered address at {siteConfig.address.full}.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
