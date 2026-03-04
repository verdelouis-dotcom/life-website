import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import IdeaImpact from "@/components/home/idea-impact";
import AudienceActions from "@/components/home/audience-actions";
import SixPillars from "@/components/home/six-pillars";
import WhySection from "@/components/home/why-section";
import HomeHighlights from "@/components/home/home-highlights";
import WhatWeDo from "@/components/home/what-we-do";
import HowItWorks from "@/components/home/how-it-works";
import StatsBand from "@/components/home/stats-band";
import GalleryTeaser from "@/components/home/gallery-teaser";
import SupportBand from "@/components/home/support-band";
import HomeEngagement from "@/components/home/home-engagement";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <HomeHero />
        <IdeaImpact />
        <AudienceActions />
        <SixPillars />
        <WhySection />
        <HomeHighlights />
        <WhatWeDo />
        <HowItWorks />
        <StatsBand />
        <GalleryTeaser />
        <SupportBand />
        <HomeEngagement />
      </main>
      <SiteFooter />
    </>
  );
}
