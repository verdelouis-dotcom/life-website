import type { Metadata } from "next";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingEveningSection } from "@/components/landing/landing-evening-section";
import { LandingRippleSection } from "@/components/landing/landing-ripple-section";
import { LandingGuideSection } from "@/components/landing/landing-guide-section";
import { LandingLifeInAction } from "@/components/landing/landing-life-in-action";
import { LandingCTASection } from "@/components/landing/landing-cta-section";

const HOME_URL = "https://www.longevityinitiativeforfoodandeducation.com";

export const metadata: Metadata = {
  title: "Longevity Initiative for Food & Education | Shared LIFE Workshop Movement",
  description:
    "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE workshop or host your own.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "Longevity Initiative for Food & Education | Shared LIFE Workshop Movement",
    description:
      "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE workshop or host your own.",
    url: HOME_URL,
  },
  twitter: {
    title: "Longevity Initiative for Food & Education | Shared LIFE Workshop Movement",
    description:
      "Discover how shared meals, Mediterranean cooking, and community connection can improve health and longevity. Join a LIFE workshop or host your own.",
  },
};

export default function HomePage() {
  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="pt-10 md:pt-16">
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
