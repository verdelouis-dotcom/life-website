import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import SectionWhoWeAre from "@/components/home/section-who-we-are";
import SectionHowWeDoIt from "@/components/home/section-how-we-do-it";
import SectionWhy from "@/components/home/section-why";
import { SectionPillars } from "@/components/home/section-pillars";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "Longevity Initiative for Food & Education | Shared Table Movement",
  description:
    "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE table or host your own.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "Longevity Initiative for Food & Education | Shared Table Movement",
    description:
      "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE table or host your own.",
    url: HOME_URL,
  },
  twitter: {
    title: "Longevity Initiative for Food & Education | Shared Table Movement",
    description:
      "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE table or host your own.",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <HomeHero />
        <SectionWhoWeAre />
        <SectionHowWeDoIt />
        <SectionWhy />
        <SectionPillars />
      </main>
      <SiteFooter />
    </>
  );
}
