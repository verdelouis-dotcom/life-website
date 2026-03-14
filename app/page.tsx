import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import SectionWho from "@/components/home/section-who";
import SectionWhy from "@/components/home/section-why";
import SectionModel from "@/components/home/section-model";
import SectionPillars from "@/components/home/section-pillars";
import SectionAssessment from "@/components/home/section-assessment";
import SectionPilot from "@/components/home/section-pilot";
import SectionTables from "@/components/home/section-tables";
import SectionLeadership from "@/components/home/section-leadership";
import SectionBoard from "@/components/home/section-board";
import SectionFunding from "@/components/home/section-funding";
import SectionNewsletter from "@/components/home/section-newsletter";

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
