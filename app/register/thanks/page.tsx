import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const REGISTER_THANKS_URL = "https://www.longevityinitiativeforfoodandeducation.com/register/thanks";

export const metadata: Metadata = {
  title: "Thank You for Registering | LIFE Table Recorded",
  description: "Thanks for registering your LIFE table. Your gathering now counts toward the movement’s measurable community impact.",
  alternates: {
    canonical: REGISTER_THANKS_URL,
  },
  openGraph: {
    title: "Thank You for Registering | LIFE Table Recorded",
    description: "Thanks for registering your LIFE table. Your gathering now counts toward the movement’s measurable community impact.",
    url: REGISTER_THANKS_URL,
  },
  twitter: {
    title: "Thank You for Registering | LIFE Table Recorded",
    description: "Thanks for registering your LIFE table. Your gathering now counts toward the movement’s measurable community impact.",
  },
};

export default function RegisterThanksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Thank you</p>
          <h1 className="section-heading">Thank you</h1>
          <p className="mt-4 type-lede text-[var(--muted)]">Your table has been recorded as community participation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn-outline px-6 text-base">
              Donate
            </Link>
            <Link
              href="/register"
              className="btn-solid px-6 text-base"
            >
              Register Another Table
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
