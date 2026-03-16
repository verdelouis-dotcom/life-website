// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "LIFE | Longevity Initiative for Food & Education",
  description: "LIFE is a nonprofit teaching longevity habits through Mediterranean cooking, shared meals, and community education.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "LIFE | Longevity Initiative for Food & Education",
    description: "LIFE is a nonprofit teaching longevity habits through Mediterranean cooking, shared meals, and community education.",
    url: SITE_URL,
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 572,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIFE | Longevity Initiative for Food & Education",
    description: "LIFE is a nonprofit teaching longevity habits through Mediterranean cooking, shared meals, and community education.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/brand/favicon-32.png",
    shortcut: "/brand/favicon-16.png",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
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
