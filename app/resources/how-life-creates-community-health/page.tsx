import type { Metadata } from "next";
import Link from "next/link";
import ResourceArticleLayout from "@/components/resources/ResourceArticleLayout";
import ResourceSection from "@/components/resources/ResourceSection";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources/how-life-creates-community-health";

export const metadata: Metadata = {
  title: "How LIFE Creates Community Health | LIFE Resources",
  description: "See how the LIFE model turns shared meals, LIFE workshops, and local hosts into a growing community health movement.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How LIFE Creates Community Health | LIFE Resources",
    description: "See how the LIFE model turns shared meals, LIFE workshops, and local hosts into a growing community health movement.",
    url: PAGE_URL,
  },
  twitter: {
    title: "How LIFE Creates Community Health | LIFE Resources",
    description: "See how the LIFE model turns shared meals, LIFE workshops, and local hosts into a growing community health movement.",
  },
};

export default function HowLifeCreatesCommunityHealthPage() {
  return (
    <ResourceArticleLayout
      title="How LIFE Creates Community Health"
      intro="LIFE is designed as a simple, replicable framework: attend a LIFE workshop, host a LIFE workshop, register the gathering. Each step adds data and trust, making it easier to serve more neighborhoods without diluting the mission."
      primaryCta={{ href: "/how-it-works", label: "Learn How LIFE Works" }}
      secondaryCta={{ href: "/donate", label: "Donate", variant: "outline" }}
    >
      <ResourceSection title="LIFE Workshops transfer practical skills">
        <p>
          <Link href="/workshops" className="text-[var(--terracotta)] underline">
            LIFE workshops
          </Link>{" "}
          in Georgia and early host cities teach basic cooking, facilitation, and assessment skills. They are the beginning of the {" "}
          <Link href="/how-it-works" className="text-[var(--terracotta)] underline">
            Attend → Host → Register
          </Link>{" "}
          cycle and ensure every host understands the six pillars before inviting neighbors.
        </p>
      </ResourceSection>

      <ResourceSection title="Hosts activate their own circles">
        <p>
          After attending, participants use the {" "}
          <Link href="/host" className="text-[var(--terracotta)] underline">
            host guide
          </Link>{" "}
          to gather friends, coworkers, or faith communities. Because the meals are home-based, the initiative grows through networks that already
          exist.
        </p>
      </ResourceSection>

      <ResourceSection title="Registration keeps the model measurable">
        <p>
          Every LIFE workshop is logged through the {" "}
          <Link href="/register" className="text-[var(--terracotta)] underline">
            registration form
          </Link>
          . Attendance, stories, and needs flow into LIFE&apos;s {" "}
          <Link href="/impact" className="text-[var(--terracotta)] underline">
            impact reporting
          </Link>
          , giving donors and partners visibility into what is happening on the ground.
        </p>
      </ResourceSection>

      <ResourceSection title="Assessment data informs next steps">
        <p>
          Aggregated insights from the {" "}
          <Link href="/assessment" className="text-[var(--terracotta)] underline">
            LIFE Longevity Assessment
          </Link>{" "}
          show which pillars need additional support. If movement or sleep scores lag in a neighborhood, LIFE can tailor LIFE workshops and resources.
        </p>
      </ResourceSection>

      <ResourceSection title="Partners join when results are transparent">
        <p>
          As LIFE publishes more pilot metrics, hospitals, schools, and grantmakers can see how shared meals translate into real community health
          markers. That transparency builds confidence for every new city—including Rochester and Austin—to adopt the framework responsibly.
        </p>
      </ResourceSection>
    </ResourceArticleLayout>
  );
}
