import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "LIFE — Your daily habits are shortening your life. We can help.",
  description:
    "Rebuild the six daily habits behind the world’s longest-lived families. Take the free LIFE Age assessment, cook together, and start your movement for $10.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "LIFE — Your daily habits are shortening your life. We can help.",
    description: "Rebuild the six daily habits behind the world’s longest-lived families. Take the free LIFE Age assessment, cook together, and start your movement for $10.",
    url: HOME_URL,
  },
  twitter: {
    title: "LIFE — Your daily habits are shortening your life. We can help.",
    description: "Rebuild the six daily habits behind the world’s longest-lived families. Take the free LIFE Age assessment, cook together, and start your movement for $10.",
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
