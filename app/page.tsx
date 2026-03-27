import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "LIFE — Come Make Pasta With Us",
  description: "LIFE is a cooking gathering where families make real food together, eat at the table, and leave with habits worth keeping. Join for $10.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "LIFE — Come Make Pasta With Us",
    description: "LIFE is a cooking gathering where families make real food together, eat at the table, and leave with habits worth keeping. Join for $10.",
    url: HOME_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "LIFE — Come Make Pasta With Us",
    description: "LIFE is a cooking gathering where families make real food together, eat at the table, and leave with habits worth keeping. Join for $10.",
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
