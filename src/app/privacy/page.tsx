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
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-medium">
            Template — requires legal review
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-white">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="prose-dark space-y-8 text-sm text-zinc-400 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-white text-base font-medium">1. Who we are</h2>
            <p>
              Qelvora Technologies (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a software company based in
              Thanisandra, Bengaluru, Karnataka, India. We operate the website{" "}
              <a href={siteConfig.url} className="text-[#E3C46A] hover:underline">
                {siteConfig.url}
              </a>{" "}
              and provide software products and IT services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white text-base font-medium">2. Information we collect</h2>
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
            <h2 className="text-white text-base font-medium">3. How we use your data</h2>
            <p>
              We use the information you provide only to respond to your inquiry, follow up
              on your project requirements, and communicate about our products and services.
              We do not sell your personal data to any third party.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white text-base font-medium">4. Data retention</h2>
            <p>
              We retain contact inquiries for a reasonable period to respond to and follow
              up on your request. You may contact us at any time to request deletion of
              your data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white text-base font-medium">5. Contact us</h2>
            <p>
              If you have questions about this privacy policy or your data, please contact
              us at{" "}
              <a href={`mailto:${siteConfig.emails.primary}`} className="text-[#E3C46A] hover:underline">
                {siteConfig.emails.primary}
              </a>
              .
            </p>
          </div>

          <div className="mt-10 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-amber-400">
            <strong>Note for Qelvora team:</strong> This is a template. Please have it reviewed
            by a qualified legal professional before making it public on the live website.
          </div>
        </div>
      </div>
    </section>
  );
}
