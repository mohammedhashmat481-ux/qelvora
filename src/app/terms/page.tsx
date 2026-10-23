import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service | Qelvora Technologies",
  description: "Terms of service for Qelvora Technologies software products and website.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

// TODO: Have this reviewed by a legal professional before publishing.
export default function TermsPage() {
  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
              Template — requires legal review
            </div>
            <h1 className="text-3xl sm:text-4xl font-light text-[#F8F6F0]">Terms of Service</h1>
            <p className="text-[#858585] text-sm">
              Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#B8B8B8] leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">1. Agreement to terms</h2>
              <p>
                By accessing or using the Qelvora Technologies website at{" "}
                <a href={siteConfig.url} className="text-[#D4AF5A] hover:underline">
                  {siteConfig.url}
                </a>
                , you agree to be bound by these Terms of Service.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">2. Use of our website</h2>
              <p>
                You may use this website to learn about our services and contact us with
                inquiries. You may not use this website for any unlawful purpose, to impersonate
                us, or to submit false or misleading information.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">3. Intellectual property</h2>
              <p>
                All content on this website — including text, brand elements, and graphics — is
                the property of Qelvora Technologies. You may not reproduce or redistribute any
                content without our written permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">4. Limitation of liability</h2>
              <p>
                Qelvora Technologies provides this website on an &quot;as is&quot; basis. We make no
                warranty regarding availability, accuracy, or completeness of content on this
                site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">5. Governing law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising from use
                of this website will be subject to the jurisdiction of courts in Bengaluru,
                Karnataka.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">6. Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href={`mailto:${siteConfig.emails.primary}`} className="text-[#D4AF5A] hover:underline">
                  {siteConfig.emails.primary}
                </a>
                .
              </p>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-[#121212] border border-[#303030] text-xs text-[#B8B8B8] leading-relaxed">
              <strong className="text-[#F8F6F0]">Note for Qelvora team:</strong> This is a template. Please have it reviewed
              by a qualified legal professional before making it public on the live website.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
