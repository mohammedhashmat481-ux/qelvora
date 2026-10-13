import React from "react";
import { CheckCircle2, MessageSquare, PhoneCall, TrendingUp, UserCheck } from "lucide-react";

export function CrmMockup() {
  return (
    <div className="w-full bg-[#18181B] border border-white/10 rounded-panel overflow-hidden shadow-2xl text-xs text-neutral-300 font-sans select-none">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121214] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E3C46A]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="text-[11px] font-medium text-neutral-400 ml-2 tracking-wide">
            Qelvora CRM — Pipeline Overview
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
            Active Sprint
          </span>
          <span className="text-[10px] text-neutral-400 font-medium">Q3 FY26-27</span>
        </div>
      </div>

      {/* Top summary stats */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#141416] border-b border-white/[0.06]">
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Pipeline Value
          </span>
          <span className="text-sm font-semibold text-white tracking-tight mt-0.5 block">
            ₹18,40,000
          </span>
        </div>
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Qualified Leads
          </span>
          <span className="text-sm font-semibold text-gold-light tracking-tight mt-0.5 block">
            34 Active
          </span>
        </div>
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Avg. Quote Turnaround
          </span>
          <span className="text-sm font-semibold text-emerald-400 tracking-tight mt-0.5 block">
            18 mins
          </span>
        </div>
      </div>

      {/* Kanban columns */}
      <div className="p-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-[#18181B]">
        {/* Column 1: New Enquiries */}
        <div className="bg-[#121214] rounded-lg p-2.5 border border-white/[0.05]">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2">
            <span className="text-[11px] font-medium text-neutral-300">
              New Enquiries
            </span>
            <span className="px-1.5 py-0.2 rounded bg-white/10 text-neutral-300 text-[10px] font-mono">
              3
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 bg-[#1C1C20] rounded border border-white/[0.07] hover:border-gold/40 transition-colors">
              <div className="flex items-start justify-between gap-1">
                <span className="font-medium text-white text-[11px]">
                  Aditi Logistics Pvt Ltd
                </span>
                <span className="text-[9px] text-gold-light font-mono font-medium">₹2.8L</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1 line-clamp-1">
                Fleet dispatch & driver billing module
              </p>
              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/[0.05] text-[10px]">
                <span className="flex items-center gap-1 text-emerald-400 text-[9px]">
                  <MessageSquare className="w-2.5 h-2.5" /> WhatsApp linked
                </span>
                <span className="text-neutral-400 text-[9px]">Today, 11:20 AM</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#1C1C20] rounded border border-white/[0.07]">
              <div className="flex items-start justify-between gap-1">
                <span className="font-medium text-white text-[11px]">
                  Kiran Dental Care
                </span>
                <span className="text-[9px] text-gold-light font-mono font-medium">₹85K</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1 line-clamp-1">
                Patient appointment & SMS reminder
              </p>
              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/[0.05] text-[10px]">
                <span className="flex items-center gap-1 text-neutral-400 text-[9px]">
                  <PhoneCall className="w-2.5 h-2.5" /> Callback logged
                </span>
                <span className="text-neutral-400 text-[9px]">Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Quotation Sent */}
        <div className="bg-[#121214] rounded-lg p-2.5 border border-white/[0.05]">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2">
            <span className="text-[11px] font-medium text-gold-light">
              Quote Sent (GST Ready)
            </span>
            <span className="px-1.5 py-0.2 rounded bg-gold/20 text-gold-light text-[10px] font-mono">
              2
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 bg-[#1C1C20] rounded border border-gold/30">
              <div className="flex items-start justify-between gap-1">
                <span className="font-medium text-white text-[11px]">
                  Vanguard Precision Tools
                </span>
                <span className="text-[9px] text-gold-light font-mono font-medium">₹4.2L</span>
              </div>
              <p className="text-[10px] text-neutral-400 mt-1">
                Custom inventory & vendor PO workflow
              </p>
              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/[0.05]">
                <span className="text-[9px] text-gold-light bg-gold/10 px-1 py-0.5 rounded font-mono">
                  QT-2026-089 (18% GST)
                </span>
                <span className="text-[9px] text-neutral-400">Valid 7 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Closed Won */}
        <div className="bg-[#121214] rounded-lg p-2.5 border border-white/[0.05]">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-2">
            <span className="text-[11px] font-medium text-emerald-400">
              Won / Kickoff
            </span>
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
              1
            </span>
          </div>

          <div className="p-2.5 bg-[#1C1C20] rounded border border-emerald-500/30">
            <div className="flex items-start justify-between gap-1">
              <span className="font-medium text-white text-[11px]">
                Nandi Hills Resorts
              </span>
              <span className="text-[9px] text-emerald-400 font-mono font-medium">₹3.5L</span>
            </div>
            <p className="text-[10px] text-neutral-400 mt-1">
              Direct booking engine & guest check-in
            </p>
            <div className="flex items-center gap-1 text-[9px] text-emerald-400 mt-2 pt-1.5 border-t border-white/[0.05]">
              <CheckCircle2 className="w-2.5 h-2.5" /> Advance received (Sprint 1)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
