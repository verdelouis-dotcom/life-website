import type { Metadata } from "next";
import Link from "next/link";
import ResourceArticleLayout from "@/components/resources/ResourceArticleLayout";
import ResourceSection from "@/components/resources/ResourceSection";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources/why-shared-meals-matter";

export const metadata: Metadata = {
  title: "Why Shared Meals Matter | LIFE Resources",
  description: "Learn why shared meals can support healthier habits, stronger relationships, and a more connected approach to longevity.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Why Shared Meals Matter | LIFE Resources",
    description: "Learn why shared meals can support healthier habits, stronger relationships, and a more connected approach to longevity.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Why Shared Meals Matter | LIFE Resources",
    description: "Learn why shared meals can support healthier habits, stronger relationships, and a more connected approach to longevity.",
  },
};

export default function WhySharedMealsMatterPage() {
  return (
    <ResourceArticleLayout
      title="Why Shared Meals Matter"
      intro="LIFE focuses on shared meals because the LIFE cooking experience is where habits, trust, and accountability intersect. When people prepare food together and take a seat together, they are more likely to remember the six LIFE pillars throughout the week."
      primaryCta={{ href: "/host", label: "Host a LIFE Cooking Experience" }}
      secondaryCta={{ href: "/assessment", label: "Take the Assessment", variant: "outline" }}
    >
      <ResourceSection title="Shared meals anchor healthy routines">
        <p>
          Preparing a meal together creates a natural checkpoint that resets the day. It is easier to prioritize whole foods, sleep, and movement
          when a specific meal anchors the schedule. The LIFE cycle highlighted in {" "}
          <Link href="/about" className="text-[var(--terracotta)] underline">
            How LIFE Works
          </Link>{" "}
          shows how one LIFE cooking experience can influence the rest of the week.
        </p>
      </ResourceSection>

      <ResourceSection title="The LIFE cooking experience builds accountability">
        <p>
          When neighbors or family members host each other, they notice how stress, work, or isolation affects everyday choices. LIFE hosts share
          what is working, what feels hard, and what resources they need. Over time, those conversations become a light-touch support system that
          is more approachable than a clinic visit.
        </p>
        <p>
          Anyone can begin with a small cooking experience and use the {" "}
          <Link href="/host" className="text-[var(--terracotta)] underline">
            Host guide
          </Link>{" "}
          to keep the format simple.
        </p>
      </ResourceSection>

      <ResourceSection title="Meals surface real stories and needs">
        <p>
          LIFE cooking experiences often reveal who needs help getting produce, who is caring for an aging parent, or who is struggling with sleep. These stories
          feed into the organization’s {" "}
          <Link href="/impact" className="text-[var(--terracotta)] underline">
            impact work
          </Link>
          , which helps donors and partners respond to the most relevant needs.
        </p>
      </ResourceSection>

      <ResourceSection title="The LIFE Assessment keeps habits measurable">
        <p>
          Each cooking experience invites participants to reflect using the {" "}
          <Link href="/assessment" className="text-[var(--terracotta)] underline">
            LIFE Longevity Assessment
          </Link>
          . Hosts do not diagnose or coach; they simply provide a structured way to notice patterns in Food, Movement, Sleep, Connection, Purpose,
          and Stress Regulation. When LIFE cooking experiences register their events online, assessment insights can be tracked over time.
        </p>
      </ResourceSection>

      <ResourceSection title="Shared meals invite everyone to contribute">
        <p>
          The LIFE cooking experience is one of the few places where children, grandparents, neighbors, and volunteers all have a role. Someone sets the LIFE cooking experience, someone
          chops vegetables, someone tells the story behind the recipe. That shared ownership keeps the LIFE model inclusive and ensures the mission
          belongs to the community—not to a single program director.
        </p>
      </ResourceSection>
    </ResourceArticleLayout>
  );
}
