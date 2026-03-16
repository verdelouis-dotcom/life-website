// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CanonicalRedirect from "@/components/canonical-redirect";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";

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
        {children}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </body>
    </html>
  );
}
