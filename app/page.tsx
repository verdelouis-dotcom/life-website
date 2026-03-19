import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import SectionWhoWeAre from "@/components/home/section-who-we-are";
import SectionWhy from "@/components/home/section-why";
import SectionHowWeDoIt from "@/components/home/section-how-we-do-it";
import { SectionPillars } from "@/components/home/section-pillars";
import SectionLifeInAction from "@/components/home/section-life-in-action";
import SectionNextStep from "@/components/home/section-next-step";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "Longevity Initiative for Food & Education | Shared LIFE Workshop Movement",
  description:
    "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE workshop or host your own.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "Longevity Initiative for Food & Education | Shared LIFE Workshop Movement",
    description:
      "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE workshop or host your own.",
    url: HOME_URL,
  },
  twitter: {
    title: "Longevity Initiative for Food & Education | Shared LIFE Workshop Movement",
    description:
      "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE workshop or host your own.",
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <HomeHero />
        <SectionWhoWeAre />
        <SectionWhy />
        <SectionHowWeDoIt />
        <SectionPillars />
        <SectionLifeInAction />
        <SectionNextStep />
      </main>
      <SiteFooter />
    </>
  );
}
