import React from "react";
import {
  BookOpen,
  ClipboardCheck,
  Award,
  Wallet,
  Briefcase,
  Users,
  Check,
} from "lucide-react";

export function CollegeErpMockup() {
  const features = [
    {
      icon: BookOpen,
      title: "Semester & Course Schemes",
      desc: "Manage academic departments, syllabus credits (NEP & CBCS), open electives, and class timetables.",
      tag: "NEP & CBCS ready",
    },
    {
      icon: ClipboardCheck,
      title: "Attendance & Hall Ticket Eligibility",
      desc: "Subject-wise attendance tracking with automatic 75% cutoff calculations for university exam hall tickets.",
      tag: "Auto eligibility",
    },
    {
      icon: Award,
      title: "Internal Marks & University Exports",
      desc: "Record internal test marks (CIE) and export marksheet files formatted for your affiliating university.",
      tag: "1-click export",
    },
    {
      icon: Wallet,
      title: "Fee & Govt Scholarship Ledgers",
      desc: "Manage student semester fee ledgers, quota fees (CET/Management), and adjust SSP/NSP scholarships.",
      tag: "SSP / NSP tracking",
    },
    {
      icon: Briefcase,
      title: "Campus Placements & Drives",
      desc: "Filter eligible students by CGPA or backlogs, announce recruiter drives, and track job offers easily.",
      tag: "Placement portal",
    },
    {
      icon: Users,
      title: "Faculty Workload & Alumni Network",
      desc: "Track teaching faculty workloads, student feedback ratings, and maintain a permanent alumni database.",
      tag: "Complete campus",
    },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#141416] shadow-2xl">
      {/* Header bar */}
      <div className="bg-[#18181B] border-b border-white/[0.08] px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C]" />
          <span className="text-xs font-medium text-white tracking-wide">
            Qelvora College ERP — Key Features
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
          <Check className="w-3 h-3" /> CBCS & NEP Compliant
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

export const CollegeErpFeatures = CollegeErpMockup;
