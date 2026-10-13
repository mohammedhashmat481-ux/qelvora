"use client";

import React, { useState } from "react";
import { Input, Textarea, Select } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ContactFormProps {
  initialProductInterest?: string;
  formTitle?: string;
}

export function ContactForm({
  initialProductInterest = "",
  formTitle = "Tell us about your requirement",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organisationType: "School / K-12 Institution",
    productInterest: initialProductInterest,
    message: "",
    websiteHp: "", // honeypot
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const orgOptions = [
    { value: "School / K-12 Institution", label: "School / K-12 Institution" },
    { value: "College / University", label: "College / University" },
    { value: "Small or Medium Business", label: "Small or Medium Business (SMB)" },
    { value: "Startup", label: "Tech / Product Startup" },
    { value: "Clinic or Healthcare", label: "Clinic or Healthcare Facility" },
    { value: "Retail, Shop or Trade", label: "Retail, Shop or Trade Business" },
    { value: "Service Company", label: "Service or Consulting Company" },
    { value: "Other", label: "Other" },
  ];

  const productOptions = [
    { value: "", label: "General Project Inquiry" },
    { value: "Qelvora CRM", label: "Qelvora CRM" },
    { value: "Qelvora School ERP", label: "Qelvora School ERP" },
    { value: "Qelvora College ERP", label: "Qelvora College ERP" },
    { value: "Custom Software Development", label: "Custom Software Development" },
    { value: "Website or Web App", label: "Website or Web App" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Cloud & Automation", label: "Cloud & Automation" },
    { value: "IT Consulting & Support", label: "IT Consulting & Support" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    setGeneralError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.fieldErrors) {
          const formatted: Record<string, string> = {};
          for (const key in data.fieldErrors) {
            if (data.fieldErrors[key] && data.fieldErrors[key].length > 0) {
              formatted[key] = data.fieldErrors[key][0];
            }
          }
          setFieldErrors(formatted);
        }
        setGeneralError(data.error || "Failed to submit. Please try again.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setGeneralError(
        "A network connection error occurred. Please call or WhatsApp us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#18181A] border border-gold/40 rounded-panel p-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-light mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-white">Inquiry Received</h3>
          <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name}. We have received your inquiry. A senior member of our engineering team in Bengaluru will get in touch with you directly within one business day.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp now</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                organisationType: "School / K-12 Institution",
                productInterest: "",
                message: "",
                websiteHp: "",
              });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 text-white text-xs hover:bg-white/15 transition-colors"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#18181B] border border-white/10 rounded-panel p-6 sm:p-8 space-y-5 shadow-2xl relative"
      noValidate
    >
      <div className="border-b border-white/[0.08] pb-4">
        <h3 className="text-lg font-medium text-white">{formTitle}</h3>
        <p className="text-xs text-neutral-400 mt-1">
          Direct communication with our engineers. We never share your contact details.
        </p>
      </div>

      {generalError && (
        <div
          role="alert"
          className="p-3.5 rounded-md bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{generalError}</span>
        </div>
      )}

      {/* Honeypot field (hidden from screen and screen readers) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="websiteHp">Do not fill this field</label>
        <input
          type="text"
          id="websiteHp"
          name="websiteHp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.websiteHp}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          name="name"
          placeholder="e.g. Ramesh Kumar"
          required
          value={formData.name}
          onChange={handleChange}
          error={fieldErrors.name}
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="e.g. +91 98450 12345"
          required
          value={formData.phone}
          onChange={handleChange}
          error={fieldErrors.phone}
          hint="We will call or WhatsApp on this number"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="e.g. ramesh@institution.org"
          required
          value={formData.email}
          onChange={handleChange}
          error={fieldErrors.email}
        />

        <Select
          label="Organisation Type"
          name="organisationType"
          required
          options={orgOptions}
          value={formData.organisationType}
          onChange={handleChange}
          error={fieldErrors.organisationType}
        />
      </div>

      <Select
        label="Project or Product of Interest"
        name="productInterest"
        options={productOptions}
        value={formData.productInterest}
        onChange={handleChange}
      />

      <Textarea
        label="What do you need built or solved?"
        name="message"
        placeholder="Tell us briefly about your current process, number of students/users, or specific problems you need the software to handle..."
        required
        value={formData.message}
        onChange={handleChange}
        error={fieldErrors.message}
      />

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[160px]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </span>
          ) : (
            <span>Send message</span>
          )}
        </Button>

        <p className="text-[11px] text-neutral-400 text-center sm:text-right">
          Prefer talking immediately? Call{" "}
          <a
            href={siteConfig.phones.primary.tel}
            className="text-gold-light hover:underline font-mono"
          >
            {siteConfig.phones.primary.formatted}
          </a>
        </p>
      </div>
    </form>
  );
}
