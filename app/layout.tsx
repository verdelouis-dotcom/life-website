// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CanonicalRedirect from "@/components/canonical-redirect";

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
  title: "Longevity Initiative for Food & Education",
  description:
    "Longevity Initiative for Food & Education (L.I.F.E.) delivers community-based health education through shared meals, fresh food preparation, and connection practices.",
  openGraph: {
    title: "Longevity Initiative for Food & Education",
    description:
      "Longevity Initiative for Food & Education (L.I.F.E.) delivers community-based health education through shared meals, fresh food preparation, and connection practices.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Initiative for Food & Education",
    description:
      "Longevity Initiative for Food & Education (L.I.F.E.) delivers community-based health education through shared meals, fresh food preparation, and connection practices.",
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
      </body>
    </html>
  );
}
