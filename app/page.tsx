import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import QuickActions from "@/components/home/quick-actions";
import WhySection from "@/components/home/why-section";
import WhatWeDo from "@/components/home/what-we-do";
import HowItWorks from "@/components/home/how-it-works";
import SixPillars from "@/components/home/six-pillars";
import StatsBand from "@/components/home/stats-band";
import GalleryTeaser from "@/components/home/gallery-teaser";
import SupportBand from "@/components/home/support-band";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <HomeHero />
        <QuickActions />
        <WhySection />
        <WhatWeDo />
        <HowItWorks />
        <SixPillars />
        <StatsBand />
        <GalleryTeaser />
        <SupportBand />
      </main>
      <SiteFooter />
    </>
  );
}
