import React from "react";
import {
  CreditCard,
  UserPlus,
  CalendarCheck,
  GraduationCap,
  MessageCircle,
  Bus,
  Check,
} from "lucide-react";

export function SchoolErpMockup() {
  const features = [
    {
      icon: CreditCard,
      title: "Fee Collection & Receipts",
      desc: "Collect school fees, print instant receipts, track pending dues, and send automatic fee reminders to parents.",
      tag: "Instant receipts",
    },
    {
      icon: CalendarCheck,
      title: "Daily Attendance & Absent SMS",
      desc: "Take daily attendance in 1 minute. Parents immediately receive an automated alert if their child is absent.",
      tag: "Auto parent alert",
    },
    {
      icon: GraduationCap,
      title: "Report Cards & Marksheets",
      desc: "Enter test marks once. Automatically calculates grades and prints beautiful CBSE or State Board report cards.",
      tag: "1-click report cards",
    },
    {
      icon: MessageCircle,
      title: "Parent WhatsApp Notices",
      desc: "Send school circulars, homework, holiday notices, and emergency alerts straight to parents' phones.",
      tag: "Direct to parent",
    },
    {
      icon: UserPlus,
      title: "Admissions & Student Records",
      desc: "Manage new admission forms, student profiles, transfer certificates (TC), and parent contacts securely.",
      tag: "All records safe",
    },
    {
      icon: Bus,
      title: "Bus & Transport Tracking",
      desc: "Manage school bus routes, student pickup stops, driver contact details, and transport fees with ease.",
      tag: "Safe transit",
    },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#141416] shadow-2xl">
      {/* Header bar */}
      <div className="bg-[#18181B] border-b border-white/[0.08] px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C]" />
          <span className="text-xs font-medium text-white tracking-wide">
            Qelvora School ERP — Key Features
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
          <Check className="w-3 h-3" /> CBSE / State Board Ready
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

export const SchoolErpFeatures = SchoolErpMockup;
