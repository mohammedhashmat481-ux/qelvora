import React from "react";

export function SchoolErpMockup() {
  return (
    <div className="w-full rounded-panel overflow-hidden border border-white/10 shadow-2xl text-xs font-sans select-none">
      {/* Window bar */}
      <div className="bg-[#141416] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E3C46A]" />
          <span className="w-3 h-3 rounded-full bg-white/20" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="text-[11px] text-zinc-400 ml-2 font-medium">Qelvora School ERP — Academic Session 2026-27</span>
        </div>
        <span className="badge-gold text-[10px]">CBSE / State Board Ready</span>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#141416] border-b border-white/[0.06]">
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Today&apos;s Attendance</p>
          <p className="text-sm font-bold text-emerald-400 mt-0.5">97.4% (1,248 / 1,281)</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Term 2 Fees Collected</p>
          <p className="text-sm font-bold text-white mt-0.5">₹34,80,500</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Absent SMS Dispatched</p>
          <p className="text-sm font-bold text-[#E3C46A] mt-0.5">33 delivered at 09:15 AM</p>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-[#18181B] p-3.5">
        <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-white">Class 9-A — Morning Attendance & Fee Status</span>
            <span className="text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded">38 Enrolled</span>
          </div>
          <button className="flex items-center gap-1 text-[10px] text-black bg-[#E3C46A] font-semibold px-3 py-1.5 rounded-full">
            Send WhatsApp Circular
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Roll</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Student Name</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Parent / Contact</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 text-center">Status</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 text-right">Term-2 Dues</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/[0.04]">
              <td className="py-2.5 px-2 font-mono text-zinc-500 text-[11px]">9A-01</td>
              <td className="py-2.5 px-2 font-semibold text-white text-[11px]">Aarav Sharma</td>
              <td className="py-2.5 px-2 text-zinc-400 text-[11px]">R. K. Sharma (+91 98450...)</td>
              <td className="py-2.5 px-2 text-center">
                <span className="badge-green text-[10px]">✓ Present</span>
              </td>
              <td className="py-2.5 px-2 text-right font-mono text-emerald-400 text-[11px] font-medium">Cleared (Receipt #4102)</td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="py-2.5 px-2 font-mono text-zinc-500 text-[11px]">9A-02</td>
              <td className="py-2.5 px-2 font-semibold text-white text-[11px]">Bhoomika Hegde</td>
              <td className="py-2.5 px-2 text-zinc-400 text-[11px]">S. Hegde (+91 97412...)</td>
              <td className="py-2.5 px-2 text-center">
                <span className="badge-green text-[10px]">✓ Present</span>
              </td>
              <td className="py-2.5 px-2 text-right font-mono text-[#E3C46A] text-[11px] font-medium">Due: ₹3,500 (Bus Fee)</td>
            </tr>
            <tr>
              <td className="py-2.5 px-2 font-mono text-zinc-500 text-[11px]">9A-03</td>
              <td className="py-2.5 px-2 font-semibold text-white text-[11px]">Chetan Prasad</td>
              <td className="py-2.5 px-2 text-zinc-400 text-[11px]">M. Prasad (+91 99001...)</td>
              <td className="py-2.5 px-2 text-center">
                <span className="badge-red text-[10px]">Absent (SMS Sent)</span>
              </td>
              <td className="py-2.5 px-2 text-right font-mono text-emerald-400 text-[11px] font-medium">Cleared</td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/[0.06] text-[10px] text-zinc-500">
          <span>Automatic monthly report card generation scheduled for 28th</span>
          <span className="font-mono">Database sync: Live</span>
        </div>
      </div>
    </div>
  );
}
