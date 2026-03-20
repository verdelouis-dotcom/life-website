// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display, Instrument_Sans, Lora } from "next/font/google";
import "./globals.css";
import CanonicalRedirect from "@/components/canonical-redirect";

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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-landing-body",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-landing-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Longevity Initiative for Food & Education",
  description: "Rebuilding health and community one LIFE workshop at a time.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Longevity Initiative for Food & Education",
    description: "Rebuilding health and community one LIFE workshop at a time.",
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
    description: "Rebuilding health and community one LIFE workshop at a time.",
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
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${instrumentSans.variable} ${lora.variable} antialiased`}>
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
        {children}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </body>
    </html>
  );
}
