export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  icon: string;
  capabilities: string[];
  deliverables: string[];
  process: ServiceProcessStep[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom software development",
    tagline: "Tailored business applications engineered specifically for your operating workflows.",
    shortDescription:
      "We build internal tools, ERP modules, billing engines, and management software from scratch to eliminate manual errors and replace slow spreadsheets.",
    detailedDescription:
      "Every business has processes that generic off-the-shelf software cannot handle without expensive workarounds. We design and construct bespoke web and desktop-accessible systems that mirror your exact team structure, approval hierarchies, and local compliance requirements.",
    icon: "Code2",
    capabilities: [
      "Custom business workflow portals",
      "Database schema architecture & data migration",
      "Role-based multi-user permission systems",
      "Third-party API integrations (Payment gateways, GST APIs, WhatsApp)",
      "Automated financial reconciliation & ledger engines",
    ],
    deliverables: [
      "Full source code ownership and technical architecture documentation",
      "Production-ready deployment on your server or managed cloud",
      "Role-specific user manuals and admin guides",
      "Initial 90-day post-launch warranty and bug-fix coverage",
    ],
    process: [
      {
        step: "01",
        title: "Requirement Discovery",
        description: "We sit down with your department heads to document daily bottlenecks, input fields, and output reports.",
      },
      {
        step: "02",
        title: "Architecture & Data Modeling",
        description: "We map data structures, user roles, and security boundaries before writing code.",
      },
      {
        step: "03",
        title: "Iterative Sprints & Milestone Demos",
        description: "You review working modules every two weeks to verify workflow accuracy and usability.",
      },
      {
        step: "04",
        title: "Staff Training & Cutover",
        description: "We conduct hands-on training for your personnel and assist through live data migration.",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Website and web app development",
    tagline: "High-performance web applications that convert visitors and run without downtime.",
    shortDescription:
      "Modern, fast websites and client-facing web portals engineered with Next.js, clean accessibility, and rapid loading across Indian mobile connections.",
    detailedDescription:
      "Your website is your first operational touchpoint. We craft clean, responsive web platforms engineered for lightning-fast loading even on erratic 4G mobile connections. From institutional websites with student verification portals to interactive SaaS tools, we write semantic, clean code with zero template bloat.",
    icon: "Globe",
    capabilities: [
      "Next.js and React web applications with sub-second page loads",
      "Search-optimized institutional and corporate portals",
      "Customer self-service dashboards and account portals",
      "Headless CMS setups for rapid in-house content updates",
      "Bilingual and multilingual UI support",
    ],
    deliverables: [
      "Lighthouse 95+ performance scores for mobile and desktop",
      "Clean semantic markup with automated schema.org structured data",
      "Integrated lead capture webhooks and CRM feeds",
      "Domain DNS setup, SSL certificates, and Vercel/Cloudflare deployment",
    ],
    process: [
      {
        step: "01",
        title: "Content & Information Architecture",
        description: "We define page wireframes, user navigation paths, and key calls-to-action.",
      },
      {
        step: "02",
        title: "Design System & UI Prototyping",
        description: "We create branded, accessible design components adhering strictly to your color tokens.",
      },
      {
        step: "03",
        title: "Frontend Engineering & Integration",
        description: "We code pixel-perfect, keyboard-navigable pages connected to your backend APIs.",
      },
      {
        step: "04",
        title: "Speed Audits & Production Release",
        description: "We test against Core Web Vitals across real devices before flipping the DNS switch.",
      },
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile app development",
    tagline: "Cross-platform Android and iOS applications built for reliability and offline support.",
    shortDescription:
      "Dedicated mobile apps for field staff, parents, students, and customers with push notifications, offline caching, and biometric login.",
    detailedDescription:
      "When your users are on the move, web browsers aren't enough. We engineer dependable cross-platform mobile apps using React Native and modern mobile architectures. We prioritize low data consumption, local offline storage, and instantaneous push notifications.",
    icon: "Smartphone",
    capabilities: [
      "Cross-platform iOS and Android apps with unified business logic",
      "Offline-first synchronization for areas with intermittent connectivity",
      "Firebase Cloud Messaging (FCM) push notifications",
      "Camera barcode scanning and photo uploads",
      "Fingerprint and Face Unlock biometric authentication",
    ],
    deliverables: [
      "Signed release APKs/bundles for Google Play Store and Apple App Store",
      "Backend notification service integration",
      "Store listing asset package and privacy compliance manifest",
      "Post-release crash monitoring and update pipeline setup",
    ],
    process: [
      {
        step: "01",
        title: "User Flow Mapping",
        description: "We map one-handed thumb interactions and critical screens to minimize taps.",
      },
      {
        step: "02",
        title: "Offline Storage Strategy",
        description: "We configure local SQLite/caching policies so the app never freezes without signal.",
      },
      {
        step: "03",
        title: "Device Testing & Battery Optimization",
        description: "We test on budget and premium Android phones to prevent background battery drain.",
      },
      {
        step: "04",
        title: "Play Store & App Store Publishing",
        description: "We navigate store review guidelines and ensure seamless publication.",
      },
    ],
  },
  {
    id: "cloud-automation",
    slug: "cloud-automation",
    title: "Cloud and automation",
    tagline: "Cut routine manual hours with intelligent data pipelines and resilient cloud hosting.",
    shortDescription:
      "Automate repetitive daily operations: scheduled WhatsApp alerts, automated PDF invoices, automated database backups, and cloud server scaling.",
    detailedDescription:
      "Manual data entry, emailing reports at 6 PM, and worrying whether backups happened yesterday shouldn't be part of your day. We configure reliable cloud infrastructure on AWS, Google Cloud, or DigitalOcean, paired with automated cron jobs and notification webhooks that run without intervention.",
    icon: "CloudCog",
    capabilities: [
      "Automated WhatsApp notification bots via official Business APIs",
      "Automated daily database backups with offsite encrypted cold storage",
      "Cron-based reconciliation jobs and end-of-day summary emails",
      "Cloud server setup, reverse proxies, and NGINX configuration",
      "Containerization using Docker for reproducible environments",
    ],
    deliverables: [
      "Fully configured cloud servers with automated security patching",
      "Uptime monitoring and SMS alerts for any service degradation",
      "Encrypted offsite backup schedule with verified restore runbooks",
      "Webhook log console for real-time transaction debugging",
    ],
    process: [
      {
        step: "01",
        title: "Repetitive Task Audit",
        description: "We identify which routine tasks consume the most human hours each week.",
      },
      {
        step: "02",
        title: "Trigger & Action Blueprint",
        description: "We define precise logic: what triggers the action, error fallbacks, and notification receipts.",
      },
      {
        step: "03",
        title: "Implementation & Staging Run",
        description: "We test the automation in a sandbox with dummy inputs to verify reliability.",
      },
      {
        step: "04",
        title: "Live Activation & Monitoring",
        description: "We deploy the automation with automatic failure alerts sent directly to our engineers.",
      },
    ],
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT consulting and support",
    tagline: "Direct technical guidance from experienced builders, not outsourced account reps.",
    shortDescription:
      "Architecture reviews, legacy system upgrades, data security audits, and dedicated monthly maintenance contracts for peace of mind.",
    detailedDescription:
      "Technology choices make or break operating margins. If your existing database is slowing down, or you are evaluating whether to buy off-the-shelf software versus building custom tools, we provide objective, pragmatic advice rooted in code reality. Following deployment, we provide dependable maintenance SLAs.",
    icon: "Headset",
    capabilities: [
      "Software architecture evaluation and tech debt remediation",
      "Security audits, vulnerability scanning, and SSL hardening",
      "Database query optimization and index restructuring",
      "Monthly SLA maintenance contracts with committed response times",
      "Vendor technology selection and feasibility reviews",
    ],
    deliverables: [
      "Written audit reports with clear high/medium/low priority recommendations",
      "Monthly maintenance logs and performance benchmark reports",
      "Emergency escalation channel directly to senior developers",
      "Preventative maintenance schedules and dependency updates",
    ],
    process: [
      {
        step: "01",
        title: "System & Code Inspection",
        description: "We inspect your database health, logs, server utilization, and code repositories.",
      },
      {
        step: "02",
        title: "Remediation Roadmap",
        description: "We prioritize critical fixes that immediately reduce crashes or security risks.",
      },
      {
        step: "03",
        title: "Implementation & Patching",
        description: "We execute fixes during scheduled off-peak maintenance windows.",
      },
      {
        step: "04",
        title: "SLA Support Agreement",
        description: "We monitor uptime 24/7 with dedicated on-call response for production incidents.",
      },
    ],
  },
];
