import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import HomeHero from "@/components/home/home-hero";
import QuickActions from "@/components/home/quick-actions";
import StoryStack from "@/components/home/story-stack";
import SixPillars from "@/components/home/six-pillars";
import ImpactSnapshot from "@/components/home/impact-snapshot";
import ContactStrip from "@/components/home/contact-strip";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <HomeHero />
        <QuickActions />
        <StoryStack />
        <SixPillars />
        <ImpactSnapshot />
        <ContactStrip />
      </main>
      <SiteFooter />
    </>
  );
}
