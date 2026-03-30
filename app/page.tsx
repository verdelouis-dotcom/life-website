import type { Metadata } from "next";
import { HomePageClient } from "@/components/home/HomePageClient";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "LIFE — What if you could live 20 years longer?",
  description: "LIFE is a longevity education movement. Attend a cooking experience in your city or enroll online for just $10. Access the LIFE Longevity University — Six Pillars Framework, daily habit tracker, and longevity assessment.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "LIFE — What if you could live 20 years longer?",
    description: "LIFE is a longevity education movement. Attend a cooking experience in your city or enroll online for just $10. Access the LIFE Longevity University — Six Pillars Framework, daily habit tracker, and longevity assessment.",
    url: HOME_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "LIFE — What if you could live 20 years longer?",
    description: "LIFE is a longevity education movement. Attend a cooking experience in your city or enroll online for just $10. Access the LIFE Longevity University — Six Pillars Framework, daily habit tracker, and longevity assessment.",
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
