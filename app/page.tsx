import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import SectionWho from "@/components/home/section-who";
import SectionWhy from "@/components/home/section-why";
import SectionModel from "@/components/home/section-model";
import SectionPillars from "@/components/home/section-pillars";
import SectionAssessment from "@/components/home/section-assessment";
import SectionPilot from "@/components/home/section-pilot";
import SectionProof from "@/components/home/section-proof";
import SectionVisualProof from "@/components/home/section-visual-proof";
import SectionTables from "@/components/home/section-tables";
import SectionLeadership from "@/components/home/section-leadership";
import SectionBoard from "@/components/home/section-board";
import SectionFunding from "@/components/home/section-funding";
import SectionNewsletter from "@/components/home/section-newsletter";

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
        <SectionWho />
        <SectionWhy />
        <SectionModel />
        <SectionPillars />
        <SectionAssessment />
        <SectionPilot />
        <SectionProof />
        <SectionVisualProof />
        <SectionTables />
        <SectionLeadership />
        <SectionBoard />
        <SectionFunding />
        <SectionNewsletter />
      </main>
      <SiteFooter />
    </>
  );
}
