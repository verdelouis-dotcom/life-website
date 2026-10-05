import type { Metadata } from "next";
import Link from "next/link";
import ResourceCard from "@/components/resources/ResourceCard";
import { RESOURCE_ENTRIES } from "@/data/resources";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources";

export const metadata: Metadata = {
  title: "Learn with LIFE | Free Longevity Education & Resources",
  description: "Explore free LIFE education across six pillars: Food, Movement, Sleep, Connection, Purpose, and Stress Regulation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Learn with LIFE | Free Longevity Education & Resources",
    description: "Explore free LIFE education across six pillars: Food, Movement, Sleep, Connection, Purpose, and Stress Regulation.",
    url: PAGE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Learn with LIFE | Free Longevity Education & Resources",
    description: "Explore free LIFE education across six pillars: Food, Movement, Sleep, Connection, Purpose, and Stress Regulation.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="label-text">Learn with LIFE</p>
            <h1 className="mt-2 heading-xl">Free longevity education for everyday life.</h1>
            <p className="mt-4 body-md text-[var(--muted)]">
              LIFE teaches practical, evidence-informed habits across Food, Movement, Sleep, Connection, Purpose, and Stress Regulation. Explore free articles,
              pillar guides, and the LIFE Guide—then choose the next step that fits your life. The philosophy began in Georgia and now serves people from the Washington, DC metro area and beyond.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCE_ENTRIES.map((resource) => {
              const href = resource.downloadUrl ?? (resource.slug ? `/resources/${resource.slug}` : "#");
              const key = resource.slug ?? resource.downloadUrl ?? resource.title;
              const label = resource.category ?? "Resource";
              const ctaLabel = resource.downloadUrl ? `Download ${resource.type ?? "resource"}` : "Read article";
              const external = Boolean(resource.downloadUrl);

              return (
                <ResourceCard
                  key={key}
                  title={resource.title}
                  description={resource.description}
                  href={href}
                  label={label}
                  ctaLabel={ctaLabel}
                  external={external}
                />
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="label-text">Explore the LIFE model</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-solid px-8 text-base">
                Take the Assessment
              </Link>
              <Link href="/pasta-class" className="btn-outline px-8 text-base">
                Book the Fresh Pasta Cooking Class
              </Link>
              <Link href="/donate" className="btn-outline px-8 text-base">
                Support Us
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
  );
}
