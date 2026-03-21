import { LandingHero } from "@/components/landing/landing-hero";
import { LandingEveningSection } from "@/components/landing/landing-evening-section";
import { LandingRippleSection } from "@/components/landing/landing-ripple-section";
import { LandingGuideSection } from "@/components/landing/landing-guide-section";
import { LandingCTASection } from "@/components/landing/landing-cta-section";
import { LandingLifeInAction } from "@/components/landing/landing-life-in-action";

export default function LifeLandingPage() {
  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="pt-[52px]">
        <LandingHero />
        <LandingEveningSection />
        <LandingRippleSection />
        <LandingGuideSection />
        <LandingLifeInAction />
        <LandingCTASection />
      </main>
    </div>
  );
}
