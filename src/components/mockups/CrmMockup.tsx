import React from "react";
import {
  MessageSquare,
  FileText,
  Clock,
  TrendingUp,
  UserCheck,
  PhoneCall,
  Check,
} from "lucide-react";

export function CrmMockup() {
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp & Call Connect",
      desc: "Chat with clients directly on WhatsApp in 1 click without saving numbers. Log call notes easily.",
      tag: "WhatsApp ready",
    },
    {
      icon: UserCheck,
      title: "Lead & Inquiry Inbox",
      desc: "Collect enquiries from website, phone calls, and chats in one place. Never lose a paying client.",
      tag: "Never miss leads",
    },
    {
      icon: FileText,
      title: "1-Click GST Quotations",
      desc: "Create professional GST quotes & bills with CGST/SGST in 30 seconds. Download branded PDFs.",
      tag: "Instant PDF",
    },
    {
      icon: Clock,
      title: "Follow-Up Reminders",
      desc: "Automatic reminders for callbacks and meetings so your team follows up on time, every time.",
      tag: "Zero forgotten deals",
    },
    {
      icon: TrendingUp,
      title: "Simple Sales Pipeline",
      desc: "See every deal clearly: New Enquiry → Quote Sent → Won. Track team progress at a glance.",
      tag: "Clear visibility",
    },
    {
      icon: PhoneCall,
      title: "Client History in One Place",
      desc: "All past conversations, quotes, and notes for each customer stored safely in one profile.",
      tag: "All records saved",
    },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#141416] shadow-2xl">
      {/* Header bar */}
      <div className="bg-[#18181B] border-b border-white/[0.08] px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C]" />
          <span className="text-xs font-medium text-white tracking-wide">
            Qelvora CRM — Key Features
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
          <Check className="w-3 h-3" /> Built for Indian Businesses
        </span>
      </div>

      {/* Features grid */}
      <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="p-4 rounded-xl bg-[#18181B] border border-white/[0.06] hover:border-[#C49A2C]/30 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#C49A2C]/10 border border-[#C49A2C]/20 flex items-center justify-center text-[#E3C46A]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/5 font-medium">
                    {f.tag}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-white pt-1">{f.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const CrmFeatures = CrmMockup;
