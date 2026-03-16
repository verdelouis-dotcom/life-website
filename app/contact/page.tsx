import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/forms/contact-form";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/contact";

export const metadata: Metadata = {
  title: "Contact LIFE | Longevity Initiative for Food & Education",
  description: "Get in touch with the Longevity Initiative for Food & Education for partnerships, workshops, or community table programs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact LIFE | Longevity Initiative for Food & Education",
    description: "Get in touch with the Longevity Initiative for Food & Education for partnerships, workshops, or community table programs.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Contact LIFE | Longevity Initiative for Food & Education",
    description: "Get in touch with the Longevity Initiative for Food & Education for partnerships, workshops, or community table programs.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">Contact LIFE</h1>
            <p className="mt-4 text-base text-[var(--muted)]">
              We welcome partnerships, workshop invitations, keynote requests, and community questions. Tell us a bit about your interest and
              we&apos;ll respond within two business days.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Send us a note</h2>
            <p className="mt-3 text-sm text-[var(--text)]">All fields are optional except name and email.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--life-forest)]">How to reach us</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a className="text-[var(--terracotta)] underline" href="mailto:info@longevityinitiativeforfoodandeducation.com">
                  info@longevityinitiativeforfoodandeducation.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Partnerships:</span> Community health systems, universities, and faith organizations interested
                in piloting LIFE tables.
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
      </main>
      <SiteFooter />
    </>
  );
}
