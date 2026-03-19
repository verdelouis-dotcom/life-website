import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ResourceCard from "@/components/resources/ResourceCard";
import { RESOURCE_ENTRIES } from "@/data/resources";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/resources";

export const metadata: Metadata = {
  title: "LIFE Resources | Longevity, Food & Community Education",
  description: "Explore LIFE resources on longevity, shared meals, Mediterranean cooking, and community health.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LIFE Resources | Longevity, Food & Community Education",
    description: "Explore LIFE resources on longevity, shared meals, Mediterranean cooking, and community health.",
    url: PAGE_URL,
  },
  twitter: {
    title: "LIFE Resources | Longevity, Food & Community Education",
    description: "Explore LIFE resources on longevity, shared meals, Mediterranean cooking, and community health.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="label-text">LIFE Resources</p>
            <h1 className="mt-2 heading-xl">LIFE Resources</h1>
            <p className="mt-4 body-md text-[var(--muted)]">
              LIFE shares practical education about longevity, Mediterranean-inspired cooking, and the power of community LIFE workshops. Explore the
              guides below to understand the philosophy that began in Georgia and how early hosts are carrying it to Atlanta, Rochester, and Austin.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCE_ENTRIES.map((resource) => (
              <ResourceCard key={resource.slug} title={resource.title} description={resource.description} href={`/resources/${resource.slug}`} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="label-text">Explore the LIFE model</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-solid px-8 text-base">
                Take the Assessment
              </Link>
              <Link href="/workshops" className="btn-outline px-8 text-base">
                Explore LIFE Workshops
              </Link>
              <Link href="/donate" className="btn-outline px-8 text-base">
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
