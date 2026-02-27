import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-4xl font-semibold tracking-tight">About L.I.F.E.</h1>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          L.I.F.E. stands for <b>Longevity Initiative for Food &amp; Education</b>. Our mission is simple:
          help people reclaim the everyday habits that protect health&mdash;through real food, shared meals,
          daily movement, and belonging.
        </p>

        <div className="mt-10 space-y-6">
          <section className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">The idea</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              The table did something extraordinary. It synchronized life. When we shared meals, we slowed down,
              we talked, we laughed, we belonged. And almost accidentally, we ate differently: seasonal, simple,
              prepared&mdash;not engineered.
            </p>
          </section>

          <section className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">What makes this different</h2>
            <ul className="mt-4 list-disc pl-5 text-zinc-700 space-y-2">
              <li>We teach a repeatable pattern, not a &ldquo;challenge.&rdquo;</li>
              <li>We combine food + connection + movement into one simple system.</li>
              <li>We scale through hosts: people opening their table and paying it forward.</li>
            </ul>
          </section>

          <section className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">Our promise</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              If you show up, we&apos;ll make this practical. You&apos;ll leave with recipes you can repeat,
              a simple shopping rhythm, and a weekly table habit you can actually keep.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/join"
                className="rounded-xl bg-emerald-700 px-5 py-3 text-white hover:bg-emerald-800"
              >
                Join the Table
              </Link>
              <Link
                href="/workshops"
                className="rounded-xl border px-5 py-3 hover:bg-zinc-50"
              >
                View Workshops
              </Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
