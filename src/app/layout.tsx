import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Qelvora Technologies | Innovation Today, Advancing Tomorrow",
    template: "%s | Qelvora Technologies",
  },
  description: siteConfig.description,
  keywords: [
    "Qelvora Technologies",
    "School ERP Bengaluru",
    "College ERP Karnataka",
    "Custom CRM Software India",
    "Custom Software Development Bangalore",
    "Web App Development",
    "Mobile App Development",
    "Cloud Automation Thanisandra",
  ],
  authors: [{ name: "Qelvora Technologies" }],
  creator: "Qelvora Technologies",
  publisher: "Qelvora Technologies",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Qelvora Technologies | Innovation Today, Advancing Tomorrow",
    description: siteConfig.description,
    siteName: "Qelvora Technologies",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Qelvora Technologies - Custom Software, CRM & ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qelvora Technologies",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.svg`,
        description: siteConfig.description,
        email: siteConfig.emails.primary,
        telephone: [
          siteConfig.phones.primary.raw,
          siteConfig.phones.secondary.raw,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phones.primary.raw,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "13.0538",
          longitude: "77.6288",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:30",
          closes: "18:30",
        },
      },
    ],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white dark:bg-black text-qtext dark:text-neutral-100 selection:bg-gold/30 selection:text-white">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
