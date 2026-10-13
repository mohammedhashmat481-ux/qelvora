import React from "react";
import { Check, Clock, FileText, Send, User, Users } from "lucide-react";

export function SchoolErpMockup() {
  return (
    <div className="w-full bg-[#18181B] border border-white/10 rounded-panel overflow-hidden shadow-2xl text-xs text-neutral-300 font-sans select-none">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121214] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C49A2C]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="text-[11px] font-medium text-neutral-400 ml-2 tracking-wide">
            Qelvora School ERP — Academic Session 2026-27
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gold-light bg-gold/15 px-2 py-0.5 rounded border border-gold/30 font-medium">
            CBSE / State Board Ready
          </span>
        </div>
      </div>

      {/* Campus status metrics */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] bg-[#141416] border-b border-white/[0.06]">
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Today&apos;s Attendance
          </span>
          <span className="text-sm font-semibold text-emerald-400 tracking-tight mt-0.5 block">
            97.4% (1,248 / 1,281)
          </span>
        </div>
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Term 2 Fees Collected
          </span>
          <span className="text-sm font-semibold text-white tracking-tight mt-0.5 block">
            ₹34,80,500
          </span>
        </div>
        <div className="p-3">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
            Absent SMS Dispatched
          </span>
          <span className="text-sm font-semibold text-gold-light tracking-tight mt-0.5 block">
            33 delivered at 09:15 AM
          </span>
        </div>
      </div>

      {/* Classroom view */}
      <div className="p-4 bg-[#18181B] space-y-3">
        <div className="flex items-center justify-between pb-1 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-[12px]">
              Class 9-A — Morning Attendance & Fee Status
            </span>
            <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded">
              38 Enrolled
            </span>
          </div>
          <button className="text-[10px] text-black bg-gold font-medium px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-gold-light transition-colors">
            <Send className="w-2.5 h-2.5" /> Send WhatsApp Circular
          </button>
        </div>

        {/* Roster table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-neutral-400 text-[10px] uppercase tracking-wider">
                <th className="py-2 px-2">Roll</th>
                <th className="py-2 px-2">Student Name</th>
                <th className="py-2 px-2">Parent / Contact</th>
                <th className="py-2 px-2 text-center">Status</th>
                <th className="py-2 px-2 text-right">Term-2 Dues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-2 font-mono text-neutral-400">9A-01</td>
                <td className="py-2.5 px-2 font-medium text-white">
                  Aarav Sharma
                </td>
                <td className="py-2.5 px-2 text-neutral-400">
                  R. K. Sharma (+91 98450...)
                </td>
                <td className="py-2.5 px-2 text-center">
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                    <Check className="w-2.5 h-2.5" /> Present
                  </span>
                </td>
                <td className="py-2.5 px-2 text-right font-mono text-emerald-400 font-medium">
                  Cleared (Receipt #4102)
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02]">
                <td className="py-2.5 px-2 font-mono text-neutral-400">9A-02</td>
                <td className="py-2.5 px-2 font-medium text-white">
                  Bhoomika Hegde
                </td>
                <td className="py-2.5 px-2 text-neutral-400">
                  S. Hegde (+91 97412...)
                </td>
                <td className="py-2.5 px-2 text-center">
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                    <Check className="w-2.5 h-2.5" /> Present
                  </span>
                </td>
                <td className="py-2.5 px-2 text-right font-mono text-gold-light font-medium">
                  Due: ₹3,500 (Bus Fee)
                </td>
              </tr>

              <tr className="hover:bg-white/[0.02] bg-rose-500/[0.03]">
                <td className="py-2.5 px-2 font-mono text-neutral-400">9A-03</td>
                <td className="py-2.5 px-2 font-medium text-white">
                  Chetan Prasad
                </td>
                <td className="py-2.5 px-2 text-neutral-400">
                  M. Prasad (+91 99001...)
                </td>
                <td className="py-2.5 px-2 text-center">
                  <span className="inline-flex items-center gap-1 text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-medium">
                    Absent (SMS Sent)
                  </span>
                </td>
                <td className="py-2.5 px-2 text-right font-mono text-emerald-400 font-medium">
                  Cleared
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action bar bottom */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-400">
          <span className="flex items-center gap-1">
            <FileText className="w-3 h-3 text-gold-light" />
            Automatic monthly report card generation scheduled for 28th
          </span>
          <span className="font-mono text-neutral-400">Database sync: Live</span>
        </div>
      </div>
    </div>
  );
}
