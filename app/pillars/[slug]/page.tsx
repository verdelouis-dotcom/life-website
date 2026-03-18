import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";

const PILLAR_CONTENT = {
  food: {
    title: "Food",
    description: "At a LIFE table, food is where everything begins.",
    body: [
      "At a LIFE table, food is where everything begins.",
      "It is not about perfection or strict diets. It is about real meals made at home, shared with others, and rooted in tradition.",
      "Hosts teach simple recipes they already love—something practical that someone else can make again.",
      "Food becomes a way to connect, learn, and build healthier habits naturally.",
    ],
  },
  movement: {
    title: "Movement",
    description: "Movement at a LIFE table is natural, not forced.",
    body: [
      "Movement at a LIFE table is natural, not forced.",
      "Cooking, setting the table, walking after dinner—these small actions matter.",
      "It is about building a life where movement is part of everyday routines, not something separate you have to squeeze in.",
    ],
  },
  sleep: {
    title: "Sleep",
    description: "Better sleep starts with better rhythms.",
    body: [
      "Better sleep starts with better rhythms.",
      "Shared meals, reduced stress, and consistent routines all support deeper rest.",
      "At a LIFE table, people begin to rebuild habits that help the body recover and reset.",
    ],
  },
  connection: {
    title: "Connection",
    description: "Connection is the core of every LIFE table.",
    body: [
      "Connection is the core of every LIFE table.",
      "People sit together, talk, listen, and build relationships.",
      "This is where trust grows—and where healthier habits are more likely to stick.",
    ],
  },
  purpose: {
    title: "Purpose",
    description: "Purpose grows when people share something meaningful.",
    body: [
      "Purpose grows when people share something meaningful.",
      "A recipe, a story, a tradition, or a simple lesson can give a meal deeper value.",
      "Teaching someone else gives the experience direction and gives people a reason to show up for one another.",
    ],
  },
  stress: {
    title: "Stress Regulation",
    description: "The table creates space to slow down.",
    body: [
      "The table creates space to slow down.",
      "Cooking, eating, and being present with others can reduce stress in a way that feels natural and repeatable.",
      "It is a simple reset—grounded in rhythm, conversation, and shared time.",
    ],
  },
};

type PillarSlug = keyof typeof PILLAR_CONTENT;

type PillarPageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PILLAR_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PillarPageProps): Promise<Metadata> {
  const slug = params.slug as PillarSlug;
  const pillar = PILLAR_CONTENT[slug];

  if (!pillar) {
    return {
      title: "LIFE Pillars",
      description: "Explore the six pillars that shape LIFE tables.",
    };
  }

  const pageUrl = `${SITE_URL}/pillars/${slug}`;
  const pageTitle = `${pillar.title} | LIFE Pillars`;

  return {
    title: pageTitle,
    description: pillar.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description: pillar.description,
      url: pageUrl,
    },
    twitter: {
      title: pageTitle,
      description: pillar.description,
    },
  };
}

export default function PillarPage({ params }: PillarPageProps) {
  const slug = params.slug as PillarSlug;
  const pillar = PILLAR_CONTENT[slug];

  if (!pillar) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="py-16">
          <div className="mx-auto max-w-2xl space-y-6 px-6">
            <Link href="/" className="inline-flex items-center text-sm font-semibold text-[var(--olive)] hover:text-[var(--life-forest)]">
              <span aria-hidden="true">←</span>
              <span className="ml-2">Back to Home</span>
            </Link>
            <div className="space-y-4">
              <p className="label-text text-[var(--olive)]">LIFE Pillar</p>
              <h1 className="heading-xl">{pillar.title}</h1>
              <div className="space-y-4 body-md text-[var(--text)]">
                {pillar.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
