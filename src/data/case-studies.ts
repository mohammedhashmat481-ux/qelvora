/**
 * CASE STUDIES & PROOF DATA
 *
 * NOTE: As per strict quality guidelines, we do not invent fake statistics,
 * fictitious client names, or fabricated testimonials.
 *
 * When client case studies and testimonials are verified, replace the sample
 * schema entries below with your real project records.
 */

export interface CaseStudyItem {
  id: string;
  clientSector: string;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  isVerified: boolean;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-school-demo",
    clientSector: "K-12 Education",
    location: "Bengaluru, Karnataka",
    title: "Fee Collection & Multi-Campus Student Records",
    challenge:
      "TODO: Insert client-verified challenge summary (e.g. manual fee reconciliation across 1,200 students taking 4 days each month).",
    solution:
      "Implemented Qelvora School ERP with customized fee heads, parent SMS alerts, and direct bank reconciliation.",
    outcomes: [
      "TODO: Replace with verified metric (e.g. 90% reduction in fee counter reconciliation time)",
      "Zero missed attendance alerts across term",
    ],
    isVerified: false,
  },
  {
    id: "cs-b2b-crm",
    clientSector: "Manufacturing & Distribution",
    location: "Karnataka, India",
    title: "GST Quotation Engine & WhatsApp Pipeline Tracking",
    challenge:
      "TODO: Insert client-verified challenge summary (e.g. quotation turnaround delays causing lost distribution contracts).",
    solution:
      "Deployed Qelvora CRM with role-based rep assignment, instant GST calculations, and WhatsApp follow-up triggers.",
    outcomes: [
      "TODO: Replace with verified metric (e.g. average quote generation reduced from 4 hours to 5 minutes)",
      "Complete visibility over active lead stages",
    ],
    isVerified: false,
  },
];
