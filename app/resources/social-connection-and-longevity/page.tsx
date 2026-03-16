import type { Metadata } from "next";
import Link from "next/link";
import ResourceArticleLayout from "@/components/resources/ResourceArticleLayout";
import ResourceSection from "@/components/resources/ResourceSection";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources/social-connection-and-longevity";

export const metadata: Metadata = {
  title: "Social Connection and Longevity | LIFE Resources",
  description: "Discover why social connection is one of the most important factors in long-term health and longevity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Social Connection and Longevity | LIFE Resources",
    description: "Discover why social connection is one of the most important factors in long-term health and longevity.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Social Connection and Longevity | LIFE Resources",
    description: "Discover why social connection is one of the most important factors in long-term health and longevity.",
  },
};

export default function SocialConnectionLongevityPage() {
  return (
    <ResourceArticleLayout
      title="Social Connection and Longevity"
      intro="People with strong social ties tend to live longer, recover faster, and make healthier choices. LIFE tables create the setting for those ties to form and for hosts to notice who might need extra support."
      primaryCta={{ href: "/host", label: "Host a Table" }}
      secondaryCta={{ href: "/how-it-works", label: "Learn How LIFE Works", variant: "outline" }}
    >
      <ResourceSection title="Belonging protects physical and emotional health">
        <p>
          Studies consistently show that loneliness increases risk factors for heart disease and mental health challenges. The {" "}
          <Link href="/pillars/connection" className="text-[var(--terracotta)] underline">
            Connection pillar
          </Link>{" "}
          keeps this insight front and center so LIFE tables never feel transactional—they feel relational.
        </p>
      </ResourceSection>

      <ResourceSection title="Shared tables reveal who needs help">
        <p>
          When people cook together, it becomes clear who is exhausted, who skipped meals, or who is caring for a relative. Hosts log those
          observations when they register gatherings, feeding LIFE&apos;s {" "}
          <Link href="/impact" className="text-[var(--terracotta)] underline">
            impact tracking
          </Link>
          so the right partners can respond.
        </p>
      </ResourceSection>

      <ResourceSection title="Hosting builds leadership skills">
        <p>
          Hosting requires empathy, planning, and follow-through. The {" "}
          <Link href="/host" className="text-[var(--terracotta)] underline">
            host pathway
          </Link>{" "}
          gives neighbors a chance to practice these skills in low-stakes settings that still have real outcomes.
        </p>
      </ResourceSection>

      <ResourceSection title="Connection supports the other pillars">
        <p>
          Sleep routines improve when people are less stressed. Movement increases when friends invite each other on walks. Purpose grows when someone
          feels responsible for their table. Connection is the thread tying the other pillars together.
        </p>
      </ResourceSection>

      <ResourceSection title="Practical ways to strengthen connection">
        <p>
          Start with consistent meal times, limit screens at the table, invite neighbors who might not otherwise be included, and rotate hosting
          responsibilities. Each small practice makes the next gathering easier and keeps the LIFE mission community-owned.
        </p>
      </ResourceSection>
    </ResourceArticleLayout>
  );
}
