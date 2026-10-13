export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  exampleDeliverables: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "schools",
    slug: "schools",
    title: "Schools and K-12 Institutions",
    subtitle: "End manual receipt books, fragmented attendance, and parent communication headaches.",
    description:
      "State board, CBSE, and ICSE institutions face high administrative friction at the start of each academic term. We implement tailored school ERP platforms that give administrators complete control over fee collection, bus transport, grade cards, and staff attendance.",
    painPoints: [
      "Queues stretching around the fee counter during admission season",
      "Manual calculations of term marks, grading conversions, and report card printing",
      "Disjointed communication where circulars get lost in students' bags",
      "Tracking bus delays and route changes manually over phone calls",
    ],
    solutions: [
      "Custom multi-head fee management with instant receipts and bank reconciliation",
      "Automated marksheet compilation adhering to board-specific grading policies",
      "Direct parent alerts via WhatsApp and SMS for attendance and announcements",
      "Bus stop roster and transport route management",
    ],
    exampleDeliverables: [
      "School ERP campus deployment",
      "Teacher marks entry web app",
      "Parent communication portal",
      "Biometric student attendance integration",
    ],
  },
  {
    id: "colleges",
    slug: "colleges",
    title: "Colleges and Higher Education",
    subtitle: "Complex academic regulations, semester credits, and campus placement drives.",
    description:
      "Degree colleges, autonomous universities, and polytechnics require deep academic workflow management. We configure platforms that handle choice-based credit systems (CBCS), university internal marks exports, student scholarship ledgers, and placement cell logistics.",
    painPoints: [
      "Tracking elective choices and semester credit loads across hundreds of students",
      "Delays compiling continuous internal evaluation (CIE) for university portal submissions",
      "Reconciling government scholarship schemes against fee dues",
      "Organizing placement drives across multiple departments and recruiters via messaging groups",
    ],
    solutions: [
      "Semester credit and elective course registration portal",
      "One-click university marks format generation with condonation rules",
      "SSP/NSP scholarship tracking ledger integrated with student fee receipts",
      "Placement cell portal with backlog filtering, job postings, and drive status",
    ],
    exampleDeliverables: [
      "Comprehensive College ERP system",
      "Autonomous exam and grading engine",
      "Campus placement management portal",
      "Alumni directory & transcript request portal",
    ],
  },
  {
    id: "smb-startups",
    slug: "businesses-and-startups",
    title: "Small & Medium Businesses and Startups",
    subtitle: "Replace spreadsheet tangles with scalable internal systems built for growth.",
    description:
      "Fast-growing Indian businesses frequently hit a ceiling when spreadsheets, WhatsApp chats, and disconnected tools start causing billing errors and dropped customer leads. We engineer custom operational software, CRM platforms, and customer portals tailored to your exact business model.",
    painPoints: [
      "High volume of inbound leads slipping through personal WhatsApp messages",
      "Quotes taking days to assemble without standard item master files or GST calculation",
      "No real-time insight into project milestones, client deliverables, or profit margins",
      "Off-the-shelf SaaS software charging prohibitive monthly per-user dollar subscriptions",
    ],
    solutions: [
      "Tailored CRM pipeline with automated follow-ups and click-to-chat triggers",
      "Custom billing and quotation generator with Indian GST computation",
      "Centralized operations dashboards displaying team workloads and cash flow",
      "Custom internal workflow software owned completely by your business",
    ],
    exampleDeliverables: [
      "Bespoke sales and quotation CRM",
      "Operations & dispatch workflow portal",
      "High-speed corporate Next.js website",
      "Automated client onboarding workflow",
    ],
  },
  {
    id: "clinics",
    slug: "clinics",
    title: "Clinics and Healthcare Practices",
    subtitle: "Simple, reliable patient appointments, consultation history, and billing.",
    description:
      "Independent medical practices, polyclinics, and wellness centres need focused software that front-desk staff can operate without intense technical training. We design straightforward patient scheduling, digital consultation histories, and prescription generation tools.",
    painPoints: [
      "Patient appointment double-bookings and crowded waiting rooms",
      "Paper patient files getting misplaced or damaged over time",
      "Manual prescription slips that patients struggle to read or pharmacies misunderstand",
      "Lack of automated reminder messages leading to high patient no-show rates",
    ],
    solutions: [
      "Clean appointment calendar with doctor availability slots",
      "Secure digital patient consultation notes and medical attachment storage",
      "Standardized digital prescription builder with medicine master databases",
      "Automatic WhatsApp and SMS appointment reminders sent to patients",
    ],
    exampleDeliverables: [
      "Clinic appointment & patient management system",
      "Digital prescription generator",
      "Doctor consultation schedule app",
      "WhatsApp appointment reminder automation",
    ],
  },
  {
    id: "retail-services",
    slug: "retail-and-services",
    title: "Retail, Shops, and Service Companies",
    subtitle: "Order tracking, service job cards, inventory alerts, and customer billing.",
    description:
      "Retail suppliers, service centres, repair shops, and commercial service agencies require real-time visibility into inventory levels, customer job cards, and pending customer payments. We build fast, touch-friendly interfaces designed for quick counter operation.",
    painPoints: [
      "Service job sheets getting lost or delayed between counter staff and technicians",
      "Running out of critical stock unexpectedly due to manual stock taking",
      "Outstanding client receivables tracked on rough paper slips",
      "Customers calling repeatedly to inquire about the repair status of their items",
    ],
    solutions: [
      "Digital job card ticketing with status updates sent directly to customers",
      "Low-stock threshold alerts and purchase order management",
      "Customer ledger balance tracking with payment link generation",
      "Barcode-ready billing and thermal receipt printer integration",
    ],
    exampleDeliverables: [
      "Service centre job card management portal",
      "B2B order and quotation tool",
      "Inventory monitoring and supplier management system",
      "Customer status tracking portal",
    ],
  },
];
