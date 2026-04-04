import type { Metadata } from "next";
import Link from "next/link";
import ResourceArticleLayout from "@/components/resources/ResourceArticleLayout";
import ResourceSection from "@/components/resources/ResourceSection";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources/mediterranean-cooking-for-longevity";

export const metadata: Metadata = {
  title: "Mediterranean Cooking for Longevity | LIFE Resources",
  description: "Explore how Mediterranean-inspired cooking habits can support health, longevity, and everyday wellbeing.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mediterranean Cooking for Longevity | LIFE Resources",
    description: "Explore how Mediterranean-inspired cooking habits can support health, longevity, and everyday wellbeing.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Mediterranean Cooking for Longevity | LIFE Resources",
    description: "Explore how Mediterranean-inspired cooking habits can support health, longevity, and everyday wellbeing.",
  },
};

export default function MediterraneanCookingForLongevityPage() {
  return (
    <ResourceArticleLayout
      title="Mediterranean Cooking for Longevity"
      intro="LIFE takes cues from Mediterranean food cultures because they emphasize plants, healthy fats, and community. You do not need elaborate recipes—just consistent, fresh ingredients that make healthy defaults easier."
      primaryCta={{ href: "/pasta-class", label: "Book the Fresh Pasta Cooking Class" }}
      secondaryCta={{ href: "/assessment", label: "Take the Assessment", variant: "outline" }}
    >
      <ResourceSection title="Fresh ingredients become the default">
        <p>
          Stocking beans, olive oil, herbs, leafy greens, and seasonal produce keeps plates colorful and satisfying. A pantry built around these
          staples makes it easier to practice the {" "}
          <Link href="/pillars/food" className="text-[var(--terracotta)] underline">
            LIFE Food pillar
          </Link>
          and reduces the temptation to rely on ultra-processed meals.
        </p>
      </ResourceSection>

      <ResourceSection title="Simple prep removes resistance">
        <p>
          Mediterranean cooking celebrates one-pan roasting, salads, soups, and braises. LIFE cooking experiences teach techniques that work in small
          kitchens with busy schedules. {" "}
          <Link href="/pasta-class" className="text-[var(--terracotta)] underline">
            LIFE Cooking Experiences
          </Link>{" "}
          demonstrate that a shared meal can be assembled in under an hour when everyone helps.
        </p>
      </ResourceSection>

      <ResourceSection title="Balanced plates support steady energy">
        <p>
          Combining vegetables, legumes, whole grains, and moderate portions of fish or poultry stabilizes blood sugar and makes people less likely
          to overeat late at night. Quality fats—like olive oil, nuts, and seeds—add flavor and keep the meal satisfying without heavy sauces.
        </p>
      </ResourceSection>

      <ResourceSection title="Cooking together reinforces connection">
        <p>
          LIFE meals double as connection time. One person chops herbs, another toasts bread, another mixes a vinaigrette. When people contribute, they
          are more invested in the outcome and more likely to repeat the habit at home.
        </p>
      </ResourceSection>

      <ResourceSection title="Track how habits shift over time">
        <p>
          Pairing Mediterranean-style habits with the {" "}
          <Link href="/assessment" className="text-[var(--terracotta)] underline">
            LIFE Longevity Assessment
          </Link>{" "}
          helps participants notice how often they actually prepare meals at home, how much produce they eat, and where convenience food still
          creeps in. Tracking trends gently encourages better planning for the next week.
        </p>
      </ResourceSection>
    </ResourceArticleLayout>
  );
}
