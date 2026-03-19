import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import KeynoteForm from "@/components/forms/keynote-form";

const KEYNOTE_URL = "https://www.longevityinitiativeforfoodandeducation.com/keynote";

export const metadata: Metadata = {
  title: "Longevity Keynote Speaker | Food, Health & Community",
  description: "Book a keynote on longevity, nutrition, and community health exploring how shared meals can transform wellness and connection.",
  alternates: {
    canonical: KEYNOTE_URL,
  },
  openGraph: {
    title: "Longevity Keynote Speaker | Food, Health & Community",
    description: "Book a keynote on longevity, nutrition, and community health exploring how shared meals can transform wellness and connection.",
    url: KEYNOTE_URL,
  },
  twitter: {
    title: "Longevity Keynote Speaker | Food, Health & Community",
    description: "Book a keynote on longevity, nutrition, and community health exploring how shared meals can transform wellness and connection.",
  },
};

export default function KeynotePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
          <div className="space-y-4 text-center">
            <p className="type-eyebrow">Community Education</p>
            <h1 className="section-heading">Keynote</h1>
            <p className="type-body-muted">
              Founder Lou Verde offers a 30-minute keynote on longevity, culture, and the restoration of the shared LIFE workshop.
            </p>
          </div>
          <div className="mt-6 text-left text-sm text-[var(--text)]">
            <p className="type-eyebrow text-[var(--olive)]">Topics may include:</p>
            <ul className="mt-3 space-y-2">
              <li>• the longevity crisis</li>
              <li>• the six pillars of healthy living</li>
              <li>• fresh-ingredient cooking, shared meals, and healthy communities</li>
              <li>• practical ways to improve longevity</li>
            </ul>
          </div>
        </section>
        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <Image
              src="/images/keynote.png"
              alt="Lou Verde presenting the LIFE six pillars slide during a keynote"
              width={1200}
              height={750}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            Lou highlights LIFE&apos;s six pillars and how shared meals build practical longevity habits during every keynote.
          </p>
        </section>
        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <p className="type-detail">
            Honoraria or donations are discussed separately. We prioritize community education and public awareness.
          </p>
          <div className="mt-6">
            <KeynoteForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
