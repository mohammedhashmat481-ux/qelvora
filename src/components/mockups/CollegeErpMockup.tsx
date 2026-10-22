import React from "react";

export function CollegeErpMockup() {
  return (
    <div className="w-full rounded-panel overflow-hidden border border-white/10 shadow-2xl text-xs font-sans select-none">
      {/* Window bar */}
      <div className="bg-[#141416] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E3C46A]" />
          <span className="w-3 h-3 rounded-full bg-white/20" />
          <span className="w-3 h-3 rounded-full bg-white/10" />
          <span className="text-[11px] text-zinc-400 ml-2 font-medium">Qelvora College ERP — Autonomous & University Engine</span>
        </div>
        <span className="badge-gold text-[10px]">CBCS & NEP Compliant</span>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#141416] border-b border-white/[0.06]">
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Department & Semester</p>
          <p className="text-[12px] font-bold text-white mt-0.5 leading-tight">B.E. Computer Science (Sem VI)</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Hall Ticket Eligibility</p>
          <p className="text-[12px] font-bold text-emerald-400 mt-0.5">116 / 120 Approved (75%+ Attd)</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Govt. Scholarship Ledger</p>
          <p className="text-[12px] font-bold text-[#E3C46A] mt-0.5">SSP / NSP ₹18.2L Adjusted</p>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-[#18181B] p-3.5">
        <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[12px] font-semibold text-white">Continuous Internal Evaluation (CIE) & Attendance Gate</span>
            <span className="text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded">Course: CS802 (Cloud Architectures)</span>
          </div>
          <button className="flex items-center gap-1 text-[10px] text-zinc-200 bg-white/10 border border-white/15 font-medium px-3 py-1.5 rounded-full hover:border-[#C49A2C]/50">
            Export University CSV
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">University USN</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Student Name</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 text-center">CIE-1 (25)</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 text-center">CIE-2 (25)</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 text-center">Attendance</th>
              <th className="py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 text-right">Exam Gate Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/[0.04]">
              <td className="py-2.5 px-2 font-mono text-zinc-500 text-[10px]">1QEL23CS014</td>
              <td className="py-2.5 px-2 font-semibold text-white text-[11px]">Divya Venkatesh</td>
              <td className="py-2.5 px-2 text-center font-mono text-zinc-300 text-[11px]">23.5</td>
              <td className="py-2.5 px-2 text-center font-mono text-zinc-300 text-[11px]">24.0</td>
              <td className="py-2.5 px-2 text-center font-mono text-emerald-400 text-[11px] font-semibold">92.5%</td>
              <td className="py-2.5 px-2 text-right"><span className="badge-green text-[10px]">✓ Eligible</span></td>
            </tr>
            <tr className="border-b border-white/[0.04]">
              <td className="py-2.5 px-2 font-mono text-zinc-500 text-[10px]">1QEL23CS042</td>
              <td className="py-2.5 px-2 font-semibold text-white text-[11px]">Farhan Akhtar</td>
              <td className="py-2.5 px-2 text-center font-mono text-zinc-300 text-[11px]">21.0</td>
              <td className="py-2.5 px-2 text-center font-mono text-zinc-300 text-[11px]">22.5</td>
              <td className="py-2.5 px-2 text-center font-mono text-emerald-400 text-[11px] font-semibold">81.0%</td>
              <td className="py-2.5 px-2 text-right"><span className="badge-green text-[10px]">✓ Eligible</span></td>
            </tr>
            <tr>
              <td className="py-2.5 px-2 font-mono text-zinc-500 text-[10px]">1QEL23CS089</td>
              <td className="py-2.5 px-2 font-semibold text-white text-[11px]">Girish Gowda</td>
              <td className="py-2.5 px-2 text-center font-mono text-zinc-300 text-[11px]">17.0</td>
              <td className="py-2.5 px-2 text-center font-mono text-zinc-300 text-[11px]">18.0</td>
              <td className="py-2.5 px-2 text-center font-mono text-red-400 text-[11px] font-semibold">68.4%</td>
              <td className="py-2.5 px-2 text-right"><span className="badge-red text-[10px]">⚠ Shortage / Condonation</span></td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/[0.06] text-[10px] text-zinc-500">
          <span>Placement drive shortlist active: 44 students eligible for Tier-1 interviews</span>
          <span className="font-mono">Audited & Signed</span>
        </div>
      </div>
    </div>
  );
}
