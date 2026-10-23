import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Qelvora Technologies",
  description: "Privacy policy for Qelvora Technologies website and software products.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

// TODO: Have this reviewed by a legal professional before publishing.
export default function PrivacyPage() {
  return (
    <div className="bg-[#080808] text-[#F8F6F0] min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#303030] text-xs text-[#D4AF5A] font-medium">
              Template — requires legal review
            </div>
            <h1 className="text-3xl sm:text-4xl font-light text-[#F8F6F0]">Privacy Policy</h1>
            <p className="text-[#858585] text-sm">
              Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#B8B8B8] leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">1. Who we are</h2>
              <p>
                Qelvora Technologies (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a software company based in
                Thanisandra, Bengaluru, Karnataka, India. We operate the website{" "}
                <a href={siteConfig.url} className="text-[#D4AF5A] hover:underline">
                  {siteConfig.url}
                </a>{" "}
                and provide software products and IT services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">2. Information we collect</h2>
              <p>
                When you submit the contact form on our website, we collect your name, phone
                number, email address, organisation type, and message. We use this information
                solely to respond to your inquiry.
              </p>
              <p>
                We do not use cookies for advertising. We may use basic analytics to understand
                how visitors use the website.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">3. How we use your data</h2>
              <p>
                We use the information you provide only to respond to your inquiry, follow up
                on your project requirements, and communicate about our products and services.
                We do not sell your personal data to any third party.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">4. Data retention</h2>
              <p>
                We retain contact inquiries for a reasonable period to respond to and follow
                up on your request. You may contact us at any time to request deletion of
                your data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#F8F6F0] text-base font-medium">5. Contact us</h2>
              <p>
                If you have questions about this privacy policy or your data, please contact
                us at{" "}
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
