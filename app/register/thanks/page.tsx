import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function RegisterThanksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Thank you</p>
          <h1 className="mt-4 text-4xl font-semibold">Thank you</h1>
          <p className="mt-4 text-lg text-[#5b5149]">Your table has been recorded as community participation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/host"
              className="inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#556236]"
            >
              Host Again
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl border border-[#6b7a46] px-6 py-3 text-base font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white"
            >
              Donate
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-2xl border border-[#dfd4c6] px-6 py-3 text-base font-semibold text-[#2e2a26] transition hover:bg-[#fff8ef]"
            >
              View Tables
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
