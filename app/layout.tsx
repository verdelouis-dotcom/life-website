// src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/conversion.css";
import CanonicalRedirect from "@/components/canonical-redirect";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Longevity Initiative for Food & Education",
  alternateName: "LIFE",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: "LIFE is a nonprofit teaching longevity habits through Mediterranean cooking, shared meals, and community education.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general",
    email: "info@longevityinitiativeforfoodandeducation.com",
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Longevity Initiative for Food & Education",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const instrumentSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const lora = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Longevity Initiative for Food & Education",
  description: "Rebuilding health and community one LIFE gathering at a time.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Longevity Initiative for Food & Education",
    description: "Rebuilding health and community one LIFE gathering at a time.",
    url: SITE_URL,
    siteName: "Longevity Initiative for Food & Education",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Initiative for Food & Education",
    description: "Rebuilding health and community one LIFE gathering at a time.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${instrumentSans.variable}`}>
      <body className="antialiased">
        <CanonicalRedirect />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <SiteNav />
        <div className="flex min-h-screen flex-col" style={{ paddingTop: "var(--nav-height)" }}>
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </body>
    </html>
  );
}
