import type { Metadata } from "next";
import Link from "next/link";

const REGISTER_THANKS_URL = "https://www.longevityinitiativeforfoodandeducation.com/register/thanks";

export const metadata: Metadata = {
  title: "Thank You for Registering | LIFE Workshop Recorded",
  description: "Thanks for registering your LIFE workshop. Your gathering now counts toward the movement’s measurable community impact.",
  alternates: {
    canonical: REGISTER_THANKS_URL,
  },
  openGraph: {
    title: "Thank You for Registering | LIFE Workshop Recorded",
    description: "Thanks for registering your LIFE workshop. Your gathering now counts toward the movement’s measurable community impact.",
    url: REGISTER_THANKS_URL,
  },
  twitter: {
    title: "Thank You for Registering | LIFE Workshop Recorded",
    description: "Thanks for registering your LIFE workshop. Your gathering now counts toward the movement’s measurable community impact.",
  },
};

export default function RegisterThanksPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Thank you</p>
          <h1 className="section-heading">Thank you</h1>
          <p className="mt-4 type-lede text-[var(--muted)]">Your LIFE workshop has been recorded as community participation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn-outline px-6 text-base">
              Support Us
            </Link>
            <Link
              href="/register"
              className="btn-solid px-6 text-base"
            >
              Register Another LIFE Workshop
            </Link>
          </div>
        </section>
      </main>
</>
  );
}
