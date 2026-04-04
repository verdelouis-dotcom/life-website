// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "LIFE | Longevity Initiative for Food & Education",
  description: "We use shared cooking experiences to improve health, strengthen relationships, and build better daily habits.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "LIFE | Longevity Initiative for Food & Education",
    description: "We use shared cooking experiences to improve health, strengthen relationships, and build better daily habits.",
    url: SITE_URL,
    siteName: "LIFE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "LIFE - Longevity starts at the table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIFE | Longevity Initiative for Food & Education",
    description: "We use shared cooking experiences to improve health, strengthen relationships, and build better daily habits.",
    images: ["/images/branding/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${instrumentSans.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
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
