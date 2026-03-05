import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import SectionWho from "@/components/home/section-who";
import SectionWhy from "@/components/home/section-why";
import SectionWhat from "@/components/home/section-what";
import SectionHow from "@/components/home/section-how";
import SectionSpread from "@/components/home/section-spread";
import SectionImpact from "@/components/home/section-impact";
import SectionPillars from "@/components/home/section-pillars";
import SectionLooks from "@/components/home/section-looks";
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
        <SectionWhat />
        <SectionHow />
        <SectionSpread />
        <SectionImpact />
        <SectionPillars />
        <SectionLooks />
        <SectionLeadership />
        <SectionBoard />
        <SectionNewsletter />
        <SectionFunding />
      </main>
      <SiteFooter />
    </>
  );
}
