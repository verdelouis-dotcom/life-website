import { LandingNav } from "@/components/landing/landing-nav";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingEveningSection } from "@/components/landing/landing-evening-section";
import { LandingRippleSection } from "@/components/landing/landing-ripple-section";
import { LandingGuideSection } from "@/components/landing/landing-guide-section";
import { LandingCTASection } from "@/components/landing/landing-cta-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingLifeInAction } from "@/components/landing/landing-life-in-action";

export default function LifeLandingPage() {
  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <LandingNav />
      <main className="pt-16">
        <LandingHero />
        <LandingEveningSection />
        <LandingRippleSection />
        <LandingGuideSection />
        <LandingLifeInAction />
        <LandingCTASection />
      </main>
      <LandingFooter />
    </div>
  );
}
