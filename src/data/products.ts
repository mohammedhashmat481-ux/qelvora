export interface ProductModule {
  name: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  summary: string;
  targetAudience: string[];
  problemsSolved: string[];
  keyHighlights: string[];
  modules: ProductModule[];
  faqs: ProductFaq[];
}

export const productsData: ProductItem[] = [
  {
    id: "crm",
    slug: "crm",
    name: "Qelvora CRM",
    shortName: "CRM System",
    badge: "Sales & Client Management",
    tagline: "Track every lead, quotation, and client interaction without spreadsheet chaos.",
    summary:
      "A fast, clutter-free customer relationship and sales pipeline platform tailored for Indian businesses, service firms, clinics, and startups with native WhatsApp and call logging.",
    targetAudience: [
      "Small and medium enterprises managing 10 to 500+ client accounts",
      "B2B service providers, agencies, and consultancies needing structured quotation pipelines",
      "Educational institutions managing admission enquiries and follow-ups",
      "Healthcare clinics and wellness centres tracking patient consultations",
      "Retail suppliers and distributors coordinating client orders and payment terms",
    ],
    problemsSolved: [
      "Lost inquiries and unassigned leads slipping through staff chat apps and personal phones",
      "Zero visibility into sales pipeline value, follow-up dates, and quote turnaround times",
      "Scattered customer records across Excel files, sticky notes, and email threads",
      "Delayed quotation generation without standardized line items or GST computation",
      "No audit trail of customer communication history when sales representatives change",
    ],
    keyHighlights: [
      "Instant WhatsApp message templates & click-to-chat triggers",
      "Drag-and-drop lead stage kanban with rupee pipeline valuations",
      "GST-compliant quotation and proforma PDF generator",
      "Daily team activity digests and overdue follow-up alerts",
    ],
    modules: [
      {
        name: "Lead Capture & Allocation",
        description:
          "Consolidate website inquiries, phone calls, and manual entries into a single inbox with automatic round-robin or geography-based team routing.",
      },
      {
        name: "Pipeline & Stage Tracking",
        description:
          "Visual deal stages from initial contact and discovery to quotation sent, negotiation, and deal won or lost.",
      },
      {
        name: "Task & Follow-up Scheduling",
        description:
          "Automated reminders for callbacks, meetings, and quote follow-ups with calendar syncing and status notes.",
      },
      {
        name: "Quotation & Proposal Generator",
        description:
          "Generate professional, GST-calculated quotations with custom payment milestones and download branded PDFs in seconds.",
      },
      {
        name: "WhatsApp & Call Logging",
        description:
          "Log conversation outcomes, save customer interaction timestamps, and launch WhatsApp conversations directly from client profiles.",
      },
      {
        name: "Reports & Performance Dashboards",
        description:
          "Real-time visibility into conversion ratios, rep performance, revenue forecasts, and top lead acquisition channels.",
      },
    ],
    faqs: [
      {
        question: "Can Qelvora CRM connect directly to our existing website forms and WhatsApp Business number?",
        answer:
          "Yes. We configure webhooks to pull inquiries from your existing landing pages or portals and integrate direct WhatsApp click-to-chat links and API notifications.",
      },
      {
        question: "Is the CRM hosted on our own cloud server or a shared system?",
        answer:
          "We offer both options. You can deploy it on your private AWS/DigitalOcean server for total data sovereignty, or choose our fully managed hosted setup with automated daily backups.",
      },
      {
        question: "Does the system support Indian GST calculations on quotations?",
        answer:
          "Yes. The quotation module handles intra-state (CGST + SGST) and inter-state (IGST) calculations, HSN/SAC codes, and customized payment terms.",
      },
      {
        question: "Can we restrict what individual sales representatives can view?",
        answer:
          "Yes. Role-based permissions allow managers to view all deals while sales executives only see leads assigned specifically to them.",
      },
    ],
  },
  {
    id: "school-erp",
    slug: "school-erp",
    name: "Qelvora School ERP",
    shortName: "School ERP",
    badge: "K-12 Campus Operations",
    tagline: "Unify admissions, fee collection, attendance, and parent communication in one secure system.",
    summary:
      "A complete school management system built specifically for Indian schools, State Board, CBSE, and ICSE institutions, addressing multi-head fee structures, biometric attendance, and bilingual parent alerts.",
  targetAudience: [
    "Independent primary, middle, and senior secondary schools (State Board, CBSE, ICSE)",
    "School trusts and groups running multiple branch campuses",
    "School administrators looking to replace manual fee registers and receipt books",
    "Principals seeking accurate daily attendance and report card automation",
  ],
  problemsSolved: [
    "Long fee counter queues during term beginnings and manual reconciliation errors",
    "Paper-based attendance taking hours to tally for monthly government reports",
    "Chaotic report card compilation across term exams, grading scales, and remarks",
    "Parents calling school offices repeatedly for homework, holidays, and fee balances",
    "Staff leave and monthly salary calculation taking days at month-end",
  ],
  keyHighlights: [
    "Zero-confusion fee ledger with instant print receipts and SMS receipt links",
    "Automated CBSE and State Board compliant grade cards & marksheets",
    "Daily biometric & RFID student attendance with automatic parent absent alerts",
    "Transport GPS route tracking and bus stop notifications",
  ],
  modules: [
    {
      name: "Admissions & Inquiries",
      description:
        "Digital student inquiry forms, entrance test scheduling, application screening, document verification, and seat allocation.",
    },
    {
      name: "Student Records & Roll Lists",
      description:
        "Centralized student master profiles with Aadhaar, blood group, guardian details, previous school transfer certificates (TC), and category records.",
    },
    {
      name: "Attendance & Parent SMS/WhatsApp Alerts",
      description:
        "Period-wise or daily morning roll-call with biometric or app-based logging and automatic WhatsApp/SMS notifications for absent students.",
    },
    {
      name: "Timetable & Teacher Substitution",
      description:
        "Conflict-free timetable generation across classes and labs with one-click teacher leave substitution management.",
    },
    {
      name: "Fee Collection & Multi-Head Receipts",
      description:
        "Custom fee structures (tuition, transport, lab, uniform), concession management, fine rules, multi-term installments, and automated PDF receipts.",
    },
    {
      name: "Examinations & Report Cards",
      description:
        "Exam scheduling, hall ticket generation, marks entry portals for subject teachers, and instant CBSE/State Board format report card generation.",
    },
    {
      name: "Parent Portal & Communication",
      description:
        "Mobile-friendly interface for parents to review daily attendance, homework diaries, exam dates, fee due notices, and circulars.",
    },
    {
      name: "Transport & Bus Routes",
      description:
        "Vehicle fleet management, driver details, stop-wise route allocation, and optional GPS integration.",
    },
    {
      name: "Library Management",
      description:
        "Barcode cataloguing of books, student borrowing limits, return date reminders, and overdue fine collection.",
    },
    {
      name: "Staff Roster & Payroll",
      description:
        "Teaching and non-teaching employee profiles, attendance logs, leave balances, PF/ESI deductions, and monthly payslip generation.",
    },
  ],
  faqs: [
    {
      question: "Can the fee structure accommodate sibling discounts, scholarships, and installment payments?",
      answer:
        "Yes. You can define flexible installment dates, category concessions, scholarship waivers, and sibling discount rules with full audit tracking.",
    },
    {
      question: "Does the system support CBSE and State Board grading patterns?",
      answer:
        "Yes. The examination module supports customizable grading schemes, periodic assessment weights, co-scholastic grading, and bilingual remarks.",
    },
    {
      question: "How are teachers trained to use the software?",
      answer:
        "Our Bengaluru team conducts hands-on on-campus and remote training sessions for administrative staff, fee counter clerks, and teachers prior to full deployment.",
    },
    {
      question: "Can data from our old software or Excel sheets be imported?",
      answer:
        "Yes. We handle the complete migration of student databases, fee histories, and staff lists during onboarding without data loss.",
    },
  ],
  },
  {
    id: "college-erp",
    slug: "college-erp",
    name: "Qelvora College & University ERP",
    shortName: "College ERP",
    badge: "Higher Education & Campus Ops",
    tagline: "Manage complex academic credits, departments, exams, fees, and campus placements smoothly.",
    summary:
      "A comprehensive campus management platform engineered for degree colleges, autonomous institutions, and polytechnics handling semester credit systems, internal assessments, and university compliance.",
    targetAudience: [
      "Engineering, Arts & Science, Commerce, and Management degree colleges",
      "Autonomous institutions requiring flexible credit and elective registration systems",
      "Medical, Pharmacy, Nursing, and Allied Health colleges with clinical rotation logs",
      "Polytechnic institutes and multi-institution educational trusts",
    ],
    problemsSolved: [
      "Managing elective course registrations and credit limits across semesters manually",
      "Delay in consolidating internal marks, attendance eligibility, and university submission files",
      "Tracking government scholarship disbursement records against student fee ledgers",
      "Placement cells managing student eligibility resumes and drive schedules through disorganized group chats",
      "Alumni databases going stale within one year of graduation",
    ],
    keyHighlights: [
      "Choice-Based Credit System (CBCS) & NEP curriculum mapping",
      "Internal assessment aggregation with university hall ticket eligibility gates",
      "End-to-end placement portal with eligible candidate filtering & recruiter logs",
      "Government scholarship (SSP/NSP) fee adjustment tracking",
    ],
    modules: [
      {
        name: "Admissions & Merit Lists",
        description:
          "Online application portal, cutoff-based merit rank generation, category quota validation, document verification, and roll number generation.",
      },
      {
        name: "Departments & Course Schemes",
        description:
          "Syllabus structures, core and open elective course mapping, credit value definitions, and faculty workload assignment across semesters.",
      },
      {
        name: "Student Attendance & Condonation",
        description:
          "Subject-wise biometric or digital roll calls, percentage calculations, condonation rule management, and detention lists.",
      },
      {
        name: "Internal Assessments & Marks Entry",
        description:
          "Continuous internal evaluation (CIE) entry, mid-term consolidation, best-of score calculations, and direct export to university portals.",
      },
      {
        name: "Examination & Result Processing",
        description:
          "Autonomous exam hall allocation, seating charts, dummy numbering, grading formulas, SGPA/CGPA computation, and marks card generation.",
      },
      {
        name: "Fee & Government Scholarship Tracking",
        description:
          "Quota-wise fee structures (management, merit, CET), hostel and lab fees, bank challan reconciliations, and SSP/NSP scholarship ledgers.",
      },
      {
        name: "Faculty & Academic Workload",
        description:
          "Faculty profiles, publication records, lecture scheduling, student feedback collection, and biometric payroll calculation.",
      },
      {
        name: "Campus Placements & Drives",
        description:
          "Company registration, student eligibility screening (backlog & CGPA filters), drive notifications, interview rounds, and offer letter tracking.",
      },
      {
        name: "Alumni Network & Records",
        description:
          "Graduation registries, alumni contact updates, transcript request management, and institutional donor tracking.",
      },
    ],
    faqs: [
      {
        question: "Does Qelvora College ERP comply with the National Education Policy (NEP) and Choice Based Credit System (CBCS)?",
        answer:
          "Yes. Our curriculum module is built from the ground up to support major/minor tracks, open electives, credit transfer points, and skill enhancement courses.",
      },
      {
        question: "Can the system generate university-format marks submission sheets?",
        answer:
          "Yes. We configure export templates matching your affiliating university's exact CSV/Excel specifications for semester internal marks and attendance condonation.",
      },
      {
        question: "Is there a module to handle hostel rooms and mess fee balances?",
        answer:
          "Yes. The system includes an optional hostel management module covering room allotment, mess billing, curfew logbooks, and deposit refunds.",
      },
      {
        question: "How secure is student academic data?",
        answer:
          "The system enforces strict role-based access controls, database-level encryption for sensitive documents, and complete audit logging on all marks edits.",
      },
    ],
  },
];
