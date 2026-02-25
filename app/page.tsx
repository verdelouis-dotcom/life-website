import Link from "next/link";
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
        <section className="relative overflow-hidden border-b">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-zinc-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  A community movement for longer, healthier lives
                </p>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  Rebuild the system.
                  <span className="block text-emerald-700">Start at the table.</span>
                </h1>

                <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                  L.I.F.E. (Longevity Initiative for Food &amp; Education) helps families
                  rediscover the habits that quietly protect health: real food, daily movement,
                  deep connection, and un-rushed meals shared with others.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/join"
                    className="rounded-xl bg-emerald-700 px-5 py-3 text-white shadow-sm hover:bg-emerald-800"
                  >
                    Join the Table
                  </Link>
                  <Link
                    href="/workshops"
                    className="rounded-xl border px-5 py-3 text-zinc-900 hover:bg-zinc-50"
                  >
                    View Workshops
                  </Link>
                </div>

                <p className="mt-4 text-sm text-zinc-600">
                  Start local. Prove the model. Share it everywhere.
                </p>
              </div>

              <div className="rounded-2xl border bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm">
                <div className="rounded-2xl border bg-white p-6">
                  <h3 className="text-lg font-semibold">What we teach (the L.I.F.E. pattern)</h3>
                  <ul className="mt-4 space-y-3 text-zinc-700">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                      <span>
                        <b>Food:</b> simple Mediterranean meals using real ingredients
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                      <span>
                        <b>Connection:</b> the table as a weekly anchor for belonging
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                      <span>
                        <b>Movement:</b> small daily habits that add up (walks, stairs, chores)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                      <span>
                        <b>Purpose:</b> host, serve, be needed&mdash;then pay it forward
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <Link className="rounded-xl border p-4 hover:bg-zinc-50" href="/join#attend">
                      <p className="text-sm font-semibold">Attend</p>
                      <p className="mt-1 text-sm text-zinc-600">Come to a workshop</p>
                    </Link>
                    <Link className="rounded-xl border p-4 hover:bg-zinc-50" href="/join#host">
                      <p className="text-sm font-semibold">Host</p>
                      <p className="mt-1 text-sm text-zinc-600">Open your table</p>
                    </Link>
                    <Link className="rounded-xl border p-4 hover:bg-zinc-50" href="/join#support">
                      <p className="text-sm font-semibold">Support</p>
                      <p className="mt-1 text-sm text-zinc-600">Sponsor a table</p>
                    </Link>
                  </div>
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
              <div className="rounded-2xl border p-6">
                <h3 className="text-lg font-semibold">Not a program</h3>
                <p className="mt-2 text-zinc-700">
                  L.I.F.E. isn't "30 days to fix you." It's a pattern you can live for decades.
                </p>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="text-lg font-semibold">Built to replicate</h3>
                <p className="mt-2 text-zinc-700">
                  Small workshops. Simple recipes. A host framework. Then: pay it forward.
                </p>
              </div>
              <div className="rounded-2xl border p-6">
                <h3 className="text-lg font-semibold">The table is the tool</h3>
                <p className="mt-2 text-zinc-700">
                  Slow meals, conversation, laughter&mdash;these aren't "extras." They're protective.
                </p>
              </div>
              <div className="rounded-2xl border p-6">
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
          <div className="rounded-2xl border bg-zinc-50 p-8">
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
