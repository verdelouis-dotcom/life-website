import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CTA from "@/components/cta";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const subscribed = typeof sp.subscribed === "string" && sp.subscribed === "1";

  return (
    <>
      <SiteHeader />

      <main>
        {subscribed && (
          <section className="mx-auto max-w-6xl px-6 pt-8">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
              You're in. Welcome to the Longevity Letter.
            </div>
          </section>
        )}

        {/* HERO */}
        <section className="relative isolate overflow-hidden border-b border-[#e8decd] bg-[#f4efe6]">
          <div className="absolute inset-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/hero-table.jpg')] bg-cover bg-center opacity-50"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#fff5eb]/80 backdrop-blur-sm" />
            <div
              aria-hidden="true"
              className="absolute inset-y-10 left-4 right-4 rounded-[40px] border border-[#f2e6d5]/70 bg-[#f2e6d5]/30"
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="rounded-[32px] border border-[#e7dac8] bg-[#fff8ef]/90 p-8 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">
                  Longevity Initiative for Food &amp; Education
                </p>
                <h1 className="mt-4 font-serif text-4xl leading-tight text-[#2e2a26] md:text-5xl lg:text-6xl">
                  Rebuilding Health.
                  <br />
                  Rebuilding Community.
                  <br />
                  Starting at the Table.
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-[#5b5149]">
                  The Longevity Initiative for Food &amp; Education (L.I.F.E.) restores shared meals,
                  simple cooking, and meaningful connection inspired by traditional Mediterranean
                  life.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/join"
                    className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white shadow-sm transition hover:bg-[#566236]"
                  >
                    Pull Up a Chair
                  </Link>
                  <Link
                    href="/workshops"
                    className="rounded-2xl border border-[#c46a3a]/50 px-5 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
                  >
                    Learn About Our Workshops
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[36px] border border-[#e7dac8] bg-[#fdf7f0]/70 shadow-xl">
                  <Image
                    priority
                    src="/images/hero-table.jpg"
                    width={900}
                    height={700}
                    alt="Hands preparing dough at a shared wooden table"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 left-6 w-[260px] rounded-3xl border border-[#e7dac8] bg-[#fff8ef]/90 p-5 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">The Pattern</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#5b5149]">
                    <li>
                      <span className="font-semibold text-[#2e2a26]">Food:</span> Mediterranean staples
                      cooked simply
                    </li>
                    <li>
                      <span className="font-semibold text-[#2e2a26]">Connection:</span> gather weekly
                      and linger
                    </li>
                    <li>
                      <span className="font-semibold text-[#2e2a26]">Movement:</span> everyday chores,
                      walks, stairs
                    </li>
                    <li>
                      <span className="font-semibold text-[#2e2a26]">Purpose:</span> host, serve, be
                      needed&mdash;then pass it on
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NOW */}
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight">Why this matters now</h2>
              <p className="mt-3 text-zinc-700">
                We didn't just change our diets. We changed our rhythm. We ate faster. We sat alone.
                We stopped cooking. We lost the system that kept families grounded.
              </p>
            </div>

            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                <h3 className="text-lg font-semibold">Not a program</h3>
                <p className="mt-2 text-zinc-700">
                  L.I.F.E. isn't "30 days to fix you." It's a pattern you can live for decades.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                <h3 className="text-lg font-semibold">Built to replicate</h3>
                <p className="mt-2 text-zinc-700">
                  Small workshops. Simple recipes. A host framework. Then: pay it forward.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                <h3 className="text-lg font-semibold">The table is the tool</h3>
                <p className="mt-2 text-zinc-700">
                  Slow meals, conversation, laughter&mdash;these aren't "extras." They're protective.
                </p>
              </div>
              <div className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                <h3 className="text-lg font-semibold">Practical + joyful</h3>
                <p className="mt-2 text-zinc-700">
                  Learn what to cook, how to shop, and how to build a weekly ritual people want.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />

        {/* EMAIL SIGNUP */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Join the Longevity Letter</h3>
                <p className="mt-2 text-zinc-700">
                  One short email each week: one recipe, one habit, one science insight, and one
                  story to bring you back to the table.
                </p>
              </div>

              <form action="/api/subscribe" method="post" className="flex flex-col gap-3 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border px-4 py-3"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-black"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <p className="mt-3 text-xs text-zinc-600">No spam. Ever. Just practical, hopeful momentum.</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
