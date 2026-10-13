# Qelvora Technologies — Production Marketing Website

Official production marketing website for **Qelvora Technologies**, an Indian software company based in Thanisandra, Bengaluru.

Built with **Next.js 15 (App Router)**, **TypeScript (Strict)**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` or `v22+`
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Copy the example environment configuration:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your email delivery settings (see [Environment Variables](#environment-variables) below).

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 🎨 Brand Design Tokens & System

- **Palette**:
  - `black`: `#121212`
  - `charcoal`: `#1B1B1B`
  - `warm-dark`: `#3A2F14`
  - `gold`: `#C49A2C` (Buttons, lines, accents)
  - `gold-light`: `#E3C46A` (High-contrast gold on dark)
  - `gold-text-on-light`: `#7F5F0E` (Accessible text contrast on light backgrounds)
  - `soft-ivory`: `#F7F4EC`
  - `text`: `#17171A`
  - `muted`: `#5A5852`
- **Typography**: Poppins (300 Light for display/h1, 400 Regular, 500 Medium, 600 SemiBold). Fluid clamp scales.
- **Signature Gradient**: `linear-gradient(100deg, #3A2F14 0%, #121212 50%)` on Hero, About, and Contact.
- **Insignia**: Two overlapping elliptical loops + diagonal tail recreated in SVG and animated with stroke-dashoffset on initial load (with `prefers-reduced-motion` safety).

---

## 📁 Project Structure

```
d:/qelvora/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Poppins font, JSON-LD, SkipLink, Header, Footer
│   │   ├── page.tsx              # Home page with hero, products, hairline services, why us
│   │   ├── globals.css           # CSS variables, fluid typography, focus styles
│   │   ├── icon.tsx              # Dynamic 32x32 Qelvora favicon generator
│   │   ├── opengraph-image.tsx   # Dynamic 1200x630 social preview card generator
│   │   ├── robots.ts             # SEO robots rules
│   │   ├── sitemap.ts            # Canonical sitemap generator
│   │   ├── not-found.tsx         # Branded 404 recovery page
│   │   ├── privacy/page.tsx      # Privacy Policy template
│   │   ├── terms/page.tsx        # Terms of Service template
│   │   ├── products/
│   │   │   ├── crm/page.tsx          # Qelvora CRM product page
│   │   │   ├── school-erp/page.tsx   # Qelvora School ERP product page
│   │   │   └── college-erp/page.tsx  # Qelvora College ERP product page
│   │   ├── services/page.tsx     # 5 core IT services deep dive
│   │   ├── industries/page.tsx   # Solutions by sector
│   │   ├── about/page.tsx        # Authentic company story & Bengaluru address
│   │   ├── contact/page.tsx      # Contact page with 2-column layout & validation
│   │   └── api/
│   │       └── contact/route.ts  # Zod validation, rate limiter, honeypot, Nodemailer
│   ├── components/
│   │   ├── brand/
│   │   │   ├── Logo.tsx          # Exact Qelvora SVG insignia + wordmark
│   │   │   └── AnimatedQMark.tsx # Stroke-dashoffset hero animation
│   │   ├── forms/
│   │   │   └── ContactForm.tsx   # Accessible contact form with live state handling
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Sticky header + focus-trapped mobile drawer
│   │   │   ├── Footer.tsx        # Detailed footer with address & quick links
│   │   │   └── SkipLink.tsx      # Keyboard accessibility skip link
│   │   ├── mockups/
│   │   │   ├── CrmMockup.tsx         # Code-built sales pipeline & GST quote mockup
│   │   │   ├── SchoolErpMockup.tsx   # Code-built student attendance & fee collection
│   │   │   └── CollegeErpMockup.tsx  # Code-built CIE marks & semester credit roster
│   │   └── ui/
│   │       ├── Button.tsx        # 44px tap targets, pill style, accessible focus
│   │       ├── Container.tsx     # Responsive layout constraints
│   │       ├── Section.tsx       # Semantic sections with brand variants
│   │       ├── Heading.tsx       # Poppins font hierarchy
│   │       ├── Card.tsx          # Restrained panels with hairline borders
│   │       ├── Accordion.tsx     # Keyboard-accessible FAQ accordion
│   │       └── FormFields.tsx    # Accessible inputs, textareas, and selects
│   ├── data/
│   │   ├── site.ts               # Central company details, phones, address, links
│   │   ├── products.ts           # CRM, School ERP, and College ERP data & FAQs
│   │   ├── services.ts           # 5 IT services with process milestones
│   │   ├── industries.ts         # Industry pain points and solutions
│   │   └── case-studies.ts       # Marked TODO template for future client benchmarks
│   └── lib/
│       ├── schema.ts             # Zod validation schema
│       └── utils.ts              # Tailwind clsx/twMerge utility
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ How to Edit Website Content

All copy and business data is typed and decoupled from JSX:

1. **Company Phone, Email, Address, Maps Link**:
   Edit `src/data/site.ts`. Updating this file automatically updates the Header, Footer, Hero, Contact Page, About Page, and JSON-LD structured data.
2. **Product Features, Modules & FAQs**:
   Edit `src/data/products.ts`.
3. **IT Services & Delivery Process**:
   Edit `src/data/services.ts`.
4. **Target Sectors & Pain Points**:
   Edit `src/data/industries.ts`.
5. **Real Case Studies**:
   Update `src/data/case-studies.ts` when verified client metrics become available.

---

## 🔐 Environment Variables

| Variable | Description | Example |
| :--- | :--- | :--- |
| `SMTP_HOST` | Outgoing SMTP mail server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_SECURE` | SSL toggle (`true` for 465, `false` for 587) | `false` |
| `SMTP_USER` | Sending mail address | `qelvora.in@gmail.com` |
| `SMTP_PASS` | App password (e.g. Google App Password) | `abcd efgh ijkl mnop` |
| `CONTACT_EMAIL_TO` | Notification recipient | `qelvora.in@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain | `https://qelvora.in` |

*Note: In development without SMTP credentials, inquiries are logged directly to the server terminal with full field values.*

---

## 🚢 Deploying to Vercel & Connecting `qelvora.in`

### Step 1: Push Repository to GitHub
```bash
git init
git add .
git commit -m "feat: complete Qelvora Technologies marketing website"
git branch -M main
git remote add origin https://github.com/your-username/qelvora-website.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Select your `qelvora-website` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Expand **Environment Variables** and add the keys from your `.env.local` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL_TO`, `NEXT_PUBLIC_SITE_URL`).
6. Click **Deploy**.

### Step 3: Connect Custom Domain `qelvora.in`
1. In your Vercel project dashboard, go to **Settings** → **Domains**.
2. Type `qelvora.in` and click **Add**.
3. Vercel will prompt you to add `www.qelvora.in` with automatic redirection.
4. Log into your domain registrar (e.g. GoDaddy, Namecheap, Hostinger) and update the DNS records:
   - **Type A**: `@` → `76.76.21.21`
   - **Type CNAME**: `www` → `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL certificate within a few minutes.

---

## 📋 Items Needing Client Input

The codebase is fully functional, type-safe, and production-ready. The following optional real assets can be dropped in when ready:

1. **Official Logo File**:
   If an official vector/SVG file is provided in the future, replace the component inside `src/components/brand/Logo.tsx` or place it in `public/logo.svg`.
2. **Email Provider Credentials**:
   Add your SMTP password or Google Workspace App Password to `.env.local` to dispatch lead emails to `qelvora.in@gmail.com`.
3. **Verified Client Case Studies & Testimonials**:
   Populate `src/data/case-studies.ts` with real client outcomes once formally cleared for publication.
4. **Real Product Screenshots (Optional)**:
   The site currently features code-built interactive HTML/CSS UI mockups with zero stock photography. If real software screenshots are taken, place them into `public/images/` and embed them into the product pages.
