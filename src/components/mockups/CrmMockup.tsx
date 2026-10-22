import React from "react";

export function CrmMockup() {
  return (
    <div className="w-full rounded-panel overflow-hidden border border-white/10 shadow-2xl text-xs font-sans select-none">
      {/* Window bar */}
      <div className="bg-[#141416] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E3C46A]" />
          <span className="w-3 h-3 rounded-full bg-white/20" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="text-[11px] text-zinc-400 ml-2 font-medium">Qelvora CRM — Pipeline Overview</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge-green text-[10px]">Active Sprint</span>
          <span className="text-[10px] text-zinc-400">Q3 FY26-27</span>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#141416] border-b border-white/[0.06]">
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Pipeline Value</p>
          <p className="text-sm font-bold text-white mt-0.5">₹18,40,000</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Qualified Leads</p>
          <p className="text-sm font-bold text-[#E3C46A] mt-0.5">34 Active</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Avg. Quote Turnaround</p>
          <p className="text-sm font-bold text-emerald-400 mt-0.5">18 mins</p>
        </div>
      </div>

      {/* Kanban columns */}
      <div className="bg-[#18181B] p-3.5 grid grid-cols-3 gap-2.5">
        {/* New Enquiries */}
        <div className="bg-[#141416] rounded-lg p-3 border border-white/[0.06]">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.06]">
            <span className="text-[11px] font-medium text-white">New Enquiries</span>
            <span className="text-[10px] font-mono bg-white/10 text-zinc-300 px-1.5 py-0.5 rounded">3</span>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 bg-[#1C1C20] rounded-md border border-white/[0.07]">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-semibold text-white">Aditi Logistics Pvt Ltd</span>
                <span className="text-[9px] text-[#E3C46A] font-mono">₹2.8L</span>
              </div>
              <p className="text-[10px] text-zinc-400 mt-0.5">Fleet dispatch & driver billing...</p>
              <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-white/[0.05]">
                <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                  <span>⬤</span> WhatsApp linked
                </span>
                <span className="text-[9px] text-zinc-500">Today, 11:20 AM</span>
              </div>
            </div>
            <div className="p-2.5 bg-[#1C1C20] rounded-md border border-white/[0.07]">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-semibold text-white">Kiran Dental Care</span>
                <span className="text-[9px] text-[#E3C46A] font-mono">₹85K</span>
              </div>
              <p className="text-[10px] text-zinc-400 mt-0.5">Patient appointment & SMS...</p>
              <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-white/[0.05]">
                <span className="text-[9px] text-zinc-400">Callback logged</span>
                <span className="text-[9px] text-zinc-500">Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Sent */}
        <div className="bg-[#141416] rounded-lg p-3 border border-white/[0.06]">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.06]">
            <span className="text-[11px] font-medium text-[#E3C46A]">Quote Sent (GST Ready)</span>
            <span className="text-[10px] font-mono bg-[#C49A2C]/20 text-[#E3C46A] px-1.5 py-0.5 rounded">2</span>
          </div>
          <div className="p-2.5 bg-[#1C1C20] rounded-md border border-[#C49A2C]/30">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-white">Vanguard Precision Tools</span>
              <span className="text-[9px] text-[#E3C46A] font-mono">₹4.2L</span>
            </div>
            <p className="text-[10px] text-zinc-400 mt-0.5">Custom inventory & vendor PO workflow</p>
            <div className="mt-1.5 pt-1.5 border-t border-white/[0.05] flex items-center justify-between">
              <span className="text-[9px] text-[#E3C46A] bg-[#C49A2C]/10 px-1.5 py-0.5 rounded font-mono">
                QT-2026-089 (18% GST)
              </span>
              <span className="text-[9px] text-zinc-500">Valid 7 days</span>
            </div>
          </div>
        </div>

        {/* Won / Kickoff */}
        <div className="bg-[#141416] rounded-lg p-3 border border-white/[0.06]">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.06]">
            <span className="text-[11px] font-medium text-emerald-400">Won / Kickoff</span>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">1</span>
          </div>
          <div className="p-2.5 bg-[#1C1C20] rounded-md border border-emerald-500/30">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-white">Nandi Hills Resorts</span>
              <span className="text-[9px] text-emerald-400 font-mono">₹3.5L</span>
            </div>
            <p className="text-[10px] text-zinc-400 mt-0.5">Direct booking engine & guest check-in</p>
            <div className="flex items-center gap-1 text-[9px] text-emerald-400 mt-1.5 pt-1.5 border-t border-white/[0.05]">
              <span>✓</span> Advance received (Sprint 1)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
