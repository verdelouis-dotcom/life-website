import type { Metadata } from "next";
import Link from "next/link";
import ResourceArticleLayout from "@/components/resources/ResourceArticleLayout";
import ResourceSection from "@/components/resources/ResourceSection";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources/the-six-pillars-of-life";

export const metadata: Metadata = {
  title: "The Six Pillars of LIFE | LIFE Resources",
  description: "Learn how the six pillars of LIFE work together to support healthier habits, stronger communities, and longevity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "The Six Pillars of LIFE | LIFE Resources",
    description: "Learn how the six pillars of LIFE work together to support healthier habits, stronger communities, and longevity.",
    url: PAGE_URL,
  },
  twitter: {
    title: "The Six Pillars of LIFE | LIFE Resources",
    description: "Learn how the six pillars of LIFE work together to support healthier habits, stronger communities, and longevity.",
  },
};

const PILLAR_LINKS = {
  food: "/pillars/food",
  movement: "/pillars/movement",
  sleep: "/pillars/sleep",
  connection: "/pillars/connection",
  purpose: "/pillars/purpose",
  stress: "/pillars/stress-regulation",
};

export default function SixPillarsPage() {
  return (
    <ResourceArticleLayout
      title="The Six Pillars of LIFE"
      intro="The LIFE Longevity Assessment organizes everyday habits into six pillars. Focusing on one pillar at a time makes progress approachable while still capturing the whole picture of health."
      primaryCta={{ href: "/assessment", label: "Take the Assessment" }}
      secondaryCta={{ href: "/assessment/methodology", label: "Review Methodology", variant: "outline" }}
    >
      <ResourceSection title="Food">
        <p>
          Plants, healthy fats, and home-prepared meals steady energy and reduce reliance on ultra-processed food. Explore the {" "}
          <Link href={PILLAR_LINKS.food} className="text-[var(--terracotta)] underline">
            Food pillar
          </Link>{" "}
          to see practical ways LIFE tables keep ingredients simple and affordable.
        </p>
      </ResourceSection>

      <ResourceSection title="Movement">
        <p>
          Natural movement, everyday walking, and strength work keep people mobile. LIFE does not require gyms; it encourages frequent motion,
          stair use, and chores. See examples inside the {" "}
          <Link href={PILLAR_LINKS.movement} className="text-[var(--terracotta)] underline">
            Movement pillar
          </Link>
          .
        </p>
      </ResourceSection>

      <ResourceSection title="Sleep">
        <p>
          Consistent bedtimes and restorative rest help digestion, mood, and energy. Hosts regularly discuss how to protect evening routines and
          minimize screens. Learn more inside the {" "}
          <Link href={PILLAR_LINKS.sleep} className="text-[var(--terracotta)] underline">
            Sleep pillar
          </Link>
          .
        </p>
      </ResourceSection>

      <ResourceSection title="Connection">
        <p>
          Belonging impacts longevity as much as some physical health markers. LIFE tables create room for mutual support and storytelling. Visit
          the {" "}
          <Link href={PILLAR_LINKS.connection} className="text-[var(--terracotta)] underline">
            Connection pillar
          </Link>{" "}
          to explore why community is central to our pilot.
        </p>
      </ResourceSection>

      <ResourceSection title="Purpose">
        <p>
          Longevity research consistently shows that meaning and direction influence how people invest their time. The {" "}
          <Link href={PILLAR_LINKS.purpose} className="text-[var(--terracotta)] underline">
            Purpose pillar
          </Link>{" "}
          encourages participants to name the contributions that matter most to them.
        </p>
      </ResourceSection>

      <ResourceSection title="Stress Regulation">
        <p>
          Chronic stress wears down every other pillar. LIFE meals normalize breathing breaks, walks, and conversations that help people reset.
          Visit the {" "}
          <Link href={PILLAR_LINKS.stress} className="text-[var(--terracotta)] underline">
            Stress Regulation pillar
          </Link>{" "}
          to see more ideas.
        </p>
      </ResourceSection>

      <ResourceSection title="Putting the pillars to work">
        <p>
          The pillars become measurable through the {" "}
          <Link href="/assessment" className="text-[var(--terracotta)] underline">
            LIFE Longevity Assessment
          </Link>{" "}
          and the transparent process described in the {" "}
          <Link href="/assessment/methodology" className="text-[var(--terracotta)] underline">
            methodology guide
          </Link>
          . Hosts and participants revisit the pillars after each table to see which ones improved and what needs attention next.
        </p>
      </ResourceSection>
    </ResourceArticleLayout>
  );
}
