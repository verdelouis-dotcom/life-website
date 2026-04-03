import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "LIFE — Real food. Real connection. Real life.",
  description: "Learn the habits behind the world's longest-lived cultures starting in your kitchen. Book the Fresh Pasta Cooking Class or take the free longevity assessment.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "LIFE — Real food. Real connection. Real life.",
    description: "Learn the habits behind the world's longest-lived cultures starting in your kitchen. Book the Fresh Pasta Cooking Class or take the free longevity assessment.",
    url: HOME_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "LIFE — Real food. Real connection. Real life.",
    description: "Learn the habits behind the world's longest-lived cultures starting in your kitchen. Book the Fresh Pasta Cooking Class or take the free longevity assessment.",
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
