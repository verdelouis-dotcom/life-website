import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import SectionWho from "@/components/home/section-who";
import SectionWhy from "@/components/home/section-why";
import SectionWhat from "@/components/home/section-what";
import SectionHow from "@/components/home/section-how";
import SectionSpread from "@/components/home/section-spread";
import SectionCycle from "@/components/home/section-cycle";
import SectionLooks from "@/components/home/section-looks";
import SectionImpact from "@/components/home/section-impact";
import SectionPillars from "@/components/home/section-pillars";
import SectionLeadership from "@/components/home/section-leadership";
import SectionBoard from "@/components/home/section-board";
import SectionFunding from "@/components/home/section-funding";

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
        <SectionCycle />
        <SectionLooks />
        <SectionImpact />
        <SectionPillars />
        <SectionLeadership />
        <SectionBoard />
        <SectionFunding />
      </main>
      <SiteFooter />
    </>
  );
}
