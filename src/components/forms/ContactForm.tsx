"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ContactFormProps {
  initialProductInterest?: string;
  formTitle?: string;
}

const orgOptions = [
  "School / K-12 Institution",
  "College / University",
  "Small or Medium Business",
  "Startup",
  "Clinic or Healthcare",
  "Retail, Shop or Trade",
  "Service Company",
  "Other",
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

const fieldClass =
  "w-full bg-[#1A1A1A] border border-[#303030] rounded-lg px-4 py-2.5 text-sm text-[#F8F6F0] placeholder:text-[#858585] focus:outline-none focus:border-[#D4AF5A] focus:ring-1 focus:ring-[#D4AF5A] transition-colors duration-200";
const labelClass = "block text-xs text-[#F8F6F0] mb-1.5 font-medium";
const errorClass = "text-xs text-[#D9534F] mt-1";

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
    websiteHp: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
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
          const fmt: Record<string, string> = {};
          for (const key in data.fieldErrors) {
            if (data.fieldErrors[key]?.length > 0) fmt[key] = data.fieldErrors[key][0];
          }
          setFieldErrors(fmt);
        }
        setGeneralError(data.error || "Failed to submit. Please try again.");
        return;
      }
      setIsSuccess(true);
    } catch {
      setGeneralError("A network error occurred. Please call or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#121212] border border-[#328568]/40 rounded-2xl p-8 text-center space-y-5 shadow-lg">
        <div className="w-12 h-12 rounded-full bg-[#328568]/20 border border-[#328568]/40 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-[#328568]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-[#F8F6F0]">Message received!</h3>
          <p className="text-sm text-[#B8B8B8] max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name}. We will get back to you within one business day.
            You can also reach us right now on WhatsApp.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#328568] hover:bg-[#286f56] text-white text-sm font-semibold transition-colors duration-200 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({ name: "", phone: "", email: "", organisationType: "School / K-12 Institution", productInterest: "", message: "", websiteHp: "" });
            }}
            className="px-5 py-2.5 rounded-full bg-[#1A1A1A] border border-[#454545] text-[#F8F6F0] hover:border-[#D4AF5A] hover:text-[#D4AF5A] text-sm transition-colors duration-200"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#121212] border border-[#303030] rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg"
      noValidate
    >
      <div className="border-b border-[#303030] pb-4">
        <h3 className="text-xl font-light text-[#F8F6F0]">{formTitle}</h3>
        <p className="text-xs text-[#B8B8B8] mt-1">
          We reply within one business day. Your details are never shared.
        </p>
      </div>

      {generalError && (
        <div role="alert" className="p-3.5 rounded-lg bg-[#D9534F]/10 border border-[#D9534F]/30 text-[#D9534F] text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#D9534F] shrink-0 mt-0.5" />
          {generalError}
        </div>
      )}

      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="websiteHp">Do not fill</label>
        <input type="text" id="websiteHp" name="websiteHp" tabIndex={-1} autoComplete="off" value={formData.websiteHp} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Your name *</label>
          <input id="name" name="name" type="text" placeholder="e.g. Ramesh Kumar" required value={formData.name} onChange={handleChange} className={fieldClass} aria-describedby={fieldErrors.name ? "name-err" : undefined} />
          {fieldErrors.name && <p id="name-err" className={errorClass}>{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone number *</label>
          <input id="phone" name="phone" type="tel" placeholder="+91 98450 12345" required value={formData.phone} onChange={handleChange} className={fieldClass} aria-describedby={fieldErrors.phone ? "phone-err" : undefined} />
          {fieldErrors.phone && <p id="phone-err" className={errorClass}>{fieldErrors.phone}</p>}
          <p className="text-xs text-[#858585] mt-1">We&apos;ll call or WhatsApp this number</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Email address *</label>
          <input id="email" name="email" type="email" placeholder="you@organisation.com" required value={formData.email} onChange={handleChange} className={fieldClass} aria-describedby={fieldErrors.email ? "email-err" : undefined} />
          {fieldErrors.email && <p id="email-err" className={errorClass}>{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="organisationType" className={labelClass}>Organisation type *</label>
          <select id="organisationType" name="organisationType" required value={formData.organisationType} onChange={handleChange} className={`${fieldClass} [&>option]:bg-[#1A1A1A] [&>option]:text-[#F8F6F0]`}>
            {orgOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="productInterest" className={labelClass}>What are you interested in?</label>
        <select id="productInterest" name="productInterest" value={formData.productInterest} onChange={handleChange} className={`${fieldClass} [&>option]:bg-[#1A1A1A] [&>option]:text-[#F8F6F0]`}>
          {productOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us what you need *</label>
        <textarea id="message" name="message" rows={5} placeholder="Describe your problem, number of users, specific features, or anything that helps us understand what you need..." required value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} aria-describedby={fieldErrors.message ? "msg-err" : undefined} />
        {fieldErrors.message && <p id="msg-err" className={errorClass}>{fieldErrors.message}</p>}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#D4AF5A] hover:bg-[#E8C76A] text-[#080808] text-sm font-semibold transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed min-w-[140px] shadow-md"
        >
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
          ) : (
            "Send message"
          )}
        </button>
        <p className="text-xs text-[#B8B8B8] text-center sm:text-right">
          Or call us:{" "}
          <a href={siteConfig.phones.primary.tel} className="text-[#D4AF5A] hover:text-[#E8C76A] font-medium hover:underline font-mono">
            {siteConfig.phones.primary.formatted}
          </a>
        </p>
      </div>
    </form>
  );
}
