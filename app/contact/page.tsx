import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/contact-form";
import FaqSchema from "@/components/seo/FaqSchema";
import ProofHighlightList from "@/components/proof/ProofHighlightList";
import { CONTACT_PROOF } from "@/data/proof";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/contact";

export const metadata: Metadata = {
  title: "Contact LIFE | Longevity Initiative for Food & Education",
  description: "Get in touch with the Longevity Initiative for Food & Education for partnerships, LIFE gatherings, or community LIFE gathering programs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact LIFE | Longevity Initiative for Food & Education",
    description: "Get in touch with the Longevity Initiative for Food & Education for partnerships, LIFE gatherings, or community LIFE gathering programs.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Contact LIFE | Longevity Initiative for Food & Education",
    description: "Get in touch with the Longevity Initiative for Food & Education for partnerships, LIFE gatherings, or community LIFE gathering programs.",
  },
};

const CONTACT_FAQ = [
  {
    question: "What types of inquiries can I send?",
    answer:
      "Program partnerships, keynote or LIFE gathering requests, donation questions, and general volunteering interest are all welcome through this form.",
  },
  {
    question: "How quickly will someone respond?",
    answer: "The LIFE volunteer team replies within two business days and routes urgent needs to the appropriate board lead.",
  },
  {
    question: "Can I ask about partnerships, LIFE gatherings, or speaking?",
    answer:
      "Yes. Include your organization name, desired dates, and location so we can determine whether current host cities or a virtual option fit.",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="section-spacing">
          <div className="mx-auto max-w-4xl rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="label-text">Contact</p>
            <h1 className="mt-2 heading-xl">Contact LIFE</h1>
            <p className="mt-4 body-md text-[var(--muted)]">
              Use this form for partnerships, hosted LIFE gathering requests, keynote inquiries, or general questions. We respond within two business days.
            </p>
            <ul className="mt-4 space-y-2 body-sm text-[var(--text)] text-left">
              <li>• Partnership or hosted LIFE gathering requests</li>
              <li>• Host or LIFE gathering support questions</li>
              <li>• Keynote, speaking, or media inquiries</li>
            </ul>
            <p className="mt-3 text-sm text-[var(--muted)]">Choose the interest type that fits best—we’ll route it to the right board lead.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-white card-padding shadow-sm">
            <h2 className="heading-lg">Send us a note</h2>
            <p className="mt-3 body-sm text-[var(--text)]">All fields are optional except name and email.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <h2 className="heading-md">How to reach us</h2>
            <ul className="mt-4 space-y-3 body-sm text-[var(--text)]">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a className="text-[var(--terracotta)] underline" href="mailto:info@longevityinitiativeforfoodandeducation.com">
                  info@longevityinitiativeforfoodandeducation.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Partnerships:</span> Community health systems, universities, and faith organizations interested
                in piloting LIFE gatherings.
              </li>
              <li>
                <span className="font-semibold">Media:</span> Requests for interviews, stories, or research collaboration.
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm">
              <p className="font-semibold text-[var(--life-forest)]">Mailing address</p>
              <p>Longevity Initiative for Food &amp; Education</p>
              <p>PO Box 54744</p>
              <p>Atlanta, GA 30308</p>
            </div>
          </aside>
        </section>

        <ProofHighlightList eyebrow="Why reach out" title="What to expect after you contact LIFE" items={CONTACT_PROOF} background="accent" />

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">What types of inquiries can I send?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">Program partnerships, keynote or LIFE gathering requests, donation questions, and general volunteering interest are all welcome through this form.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">How quickly will someone respond?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">The LIFE volunteer team replies within two business days and routes urgent needs to the appropriate board lead.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Can I ask about partnerships, LIFE gatherings, or speaking?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">Yes. Include your organization name, desired dates, and location so we can determine whether current host cities or a virtual option fit.</p>
              </div>
            </div>
          </div>
        </section>

        <FaqSchema items={CONTACT_FAQ} />

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Next steps</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-solid px-8 text-base">
                Take the Assessment
              </Link>
              <Link href="/host" className="btn-outline px-8 text-base">
                Host a LIFE Gathering
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
