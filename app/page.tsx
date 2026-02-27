import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const HOW_IT_WORKS = [
  {
    title: "Learn",
    body: "30 minutes of science-backed teaching on longevity, family meals, and why Mediterranean habits work.",
  },
  {
    title: "Cook",
    body: "Hands-on preparation with seasonal produce, olive oil, herbs, and the tools found in any simple kitchen.",
  },
  {
    title: "Share",
    body: "We sit, eat, slow down, and practice the conversations that restore connection at home.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-[#e8decd] bg-[#f4efe6]">
          <div className="absolute inset-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/hero-table4.jpeg')] bg-cover bg-center opacity-40"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#fff5eb]/85 backdrop-blur-sm" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="rounded-[32px] border border-[#e7dac8] bg-[#fff8ef]/90 p-8 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Longevity Initiative for Food &amp; Education</p>
                <h1 className="mt-4 font-serif text-4xl leading-tight text-[#2e2a26] md:text-5xl">
                  Rebuild health and connection — starting at the table.
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-[#5b5149]">
                  Local Mediterranean-style cooking workshops that restore shared meals, community, and longevity.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/workshops"
                    className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white shadow-sm transition hover:bg-[#566236]"
                  >
                    Join the next workshop
                  </Link>
                  <Link
                    href="/support"
                    className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
                  >
                    Support the foundation
                  </Link>
                </div>
              </div>

              <div className="rounded-[36px] border border-[#e7dac8] bg-[#fff8ef]/80 p-6 shadow-xl">
                <Image
                  priority
                  src="/images/hero-table4.jpeg"
                  width={900}
                  height={700}
                  alt="Family preparing a Mediterranean meal together"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">How it works</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{item.title}</p>
                  <p className="mt-3 text-[#5b5149]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Why now</h2>
            <div className="mt-4 space-y-4 text-lg text-[#5b5149]">
              <p>U.S. life expectancy has declined for the first sustained stretch in modern history.</p>
              <p>Chronic disease keeps rising while family dinners disappear and isolation becomes normal.</p>
              <p>Teaching people to gather, cook, move, and talk around a table is one of the most practical antidotes.</p>
              <p className="text-[#2e2a26] font-medium">We start here, prove the model, then expand.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <p className="text-lg text-[#5b5149]">
            L.I.F.E. is intentionally local-first. We&apos;re restoring one neighborhood table at a time until there&apos;s a track
            record strong enough to scale.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
