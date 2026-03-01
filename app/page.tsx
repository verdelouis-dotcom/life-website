import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import StatsBand from "@/components/home/stats-band";
import WhySection from "@/components/home/why-section";
import WhatWeDo from "@/components/home/what-we-do";
import HowItWorks from "@/components/home/how-it-works";
import WorkshopsCard from "@/components/home/workshops-card";
import GalleryTeaser from "@/components/home/gallery-teaser";
import SupportBand from "@/components/home/support-band";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <HomeHero />
        <StatsBand />
        <WhySection />
        <WhatWeDo />
        <HowItWorks />
        <WorkshopsCard />
        <GalleryTeaser />
        <SupportBand />
      </main>
      <SiteFooter />
    </>
  );
}
