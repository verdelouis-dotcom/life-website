import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "LIFE — We\'re living 20 years shorter than we should be.",
  description: "LIFE is a longevity movement built around the table. Join a cooking experience near you or enroll online for $10 to access the LIFE Guide and longevity assessment.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "LIFE — We\'re living 20 years shorter than we should be.",
    description: "LIFE is a longevity movement built around the table. Join a cooking experience near you or enroll online for $10 to access the LIFE Guide and longevity assessment.",
    url: HOME_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "LIFE — We\'re living 20 years shorter than we should be.",
    description: "LIFE is a longevity movement built around the table. Join a cooking experience near you or enroll online for $10 to access the LIFE Guide and longevity assessment.",
  },
};

export default function HomePage() {
  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="pt-[52px]">
        <HomePageClient />
      </main>
    </div>
  );
}
