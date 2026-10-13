import React from "react";
import { Award, BookOpen, CheckCircle, Download, GraduationCap, ShieldAlert } from "lucide-react";

export function CollegeErpMockup() {
  return (
    <div className="w-full bg-[#18181B] border border-white/10 rounded-panel overflow-hidden shadow-2xl text-xs text-neutral-300 font-sans select-none">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121214] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C49A2C]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="text-[11px] font-medium text-neutral-400 ml-2 tracking-wide">
            Qelvora College ERP — Autonomous & University Engine
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gold-light bg-gold/15 px-2 py-0.5 rounded border border-gold/30 font-medium">
            CBCS & NEP Compliant
          </span>
        </div>
      </div>

      {/* Department summary */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#141416] border-b border-white/[0.06]">
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Department & Semester
          </span>
          <span className="text-sm font-semibold text-white tracking-tight mt-0.5 block">
            B.E. Computer Science (Sem VI)
          </span>
        </div>
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Hall Ticket Eligibility
          </span>
          <span className="text-sm font-semibold text-emerald-400 tracking-tight mt-0.5 block">
            116 / 120 Approved (75%+ Attd)
          </span>
        </div>
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Govt. Scholarship Ledger
          </span>
          <span className="text-sm font-semibold text-gold-light tracking-tight mt-0.5 block">
            SSP / NSP ₹18.2L Adjusted
          </span>
        </div>
      </div>

      {/* Internal marks table */}
      <div className="p-4 bg-[#18181B] space-y-3">
        <div className="flex items-center justify-between pb-1 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-[12px]">
              Continuous Internal Evaluation (CIE) & Attendance Gate
            </span>
            <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded">
              Course: CS602 (Cloud Architectures)
            </span>
          </div>
          <button className="text-[10px] text-white bg-white/10 border border-white/20 font-medium px-2.5 py-1 rounded-full flex items-center gap-1 hover:border-gold hover:text-gold-light transition-colors">
            <Download className="w-2.5 h-2.5" /> Export University CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-neutral-400 text-[10px] uppercase tracking-wider">
                <th className="py-2 px-2">University USN</th>
                <th className="py-2 px-2">Student Name</th>
                <th className="py-2 px-2 text-center">CIE-1 (25)</th>
                <th className="py-2 px-2 text-center">CIE-2 (25)</th>
                <th className="py-2 px-2 text-center">Attendance</th>
                <th className="py-2 px-2 text-right">Exam Gate Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2 px-2 font-mono text-neutral-400">1QEL23CS014</td>
                <td className="py-2 px-2 font-medium text-white">
                  Divya Venkatesh
                </td>
                <td className="py-2 px-2 text-center font-mono">23.5</td>
                <td className="py-2 px-2 text-center font-mono">24.0</td>
                <td className="py-2 px-2 text-center font-mono text-emerald-400">
                  92.5%
                </td>
                <td className="py-2 px-2 text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                    <CheckCircle className="w-2.5 h-2.5" /> Eligible
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="py-2 px-2 font-mono text-neutral-400">1QEL23CS042</td>
                <td className="py-2 px-2 font-medium text-white">
                  Farhan Akhtar
                </td>
                <td className="py-2 px-2 text-center font-mono">21.0</td>
                <td className="py-2 px-2 text-center font-mono">22.5</td>
                <td className="py-2 px-2 text-center font-mono text-emerald-400">
                  81.0%
                </td>
                <td className="py-2 px-2 text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                    <CheckCircle className="w-2.5 h-2.5" /> Eligible
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02] bg-rose-500/[0.02]">
                <td className="py-2 px-2 font-mono text-neutral-400">1QEL23CS089</td>
                <td className="py-2 px-2 font-medium text-white">
                  Girish Gowda
                </td>
                <td className="py-2 px-2 text-center font-mono">17.0</td>
                <td className="py-2 px-2 text-center font-mono">18.0</td>
                <td className="py-2 px-2 text-center font-mono text-rose-400 font-semibold">
                  68.4%
                </td>
                <td className="py-2 px-2 text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-medium">
                    <ShieldAlert className="w-2.5 h-2.5" /> Shortage / Condonation
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-400">
          <span className="flex items-center gap-1">
            <GraduationCap className="w-3 h-3 text-gold-light" /> Placement drive shortlist active: 44 students eligible for Tier-1 interviews
          </span>
          <span className="font-mono text-neutral-400">Audited & Signed</span>
        </div>
      </div>
    </div>
  );
}
