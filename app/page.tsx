import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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
          <section className="mx-auto max-w-6xl px-6 pt-6">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
              You&apos;re in. Welcome to the Longevity Letter.
            </div>
          </section>
        )}

        <section className="relative isolate overflow-hidden border-b border-[#e8decd] bg-[#f4efe6]">
          <div className="absolute inset-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/hero-table4.jpeg')] bg-cover bg-center opacity-40"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#fff5eb]/80 backdrop-blur-sm" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="rounded-[32px] border border-[#e7dac8] bg-[#fff8ef]/90 p-8 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">
                  Longevity Initiative for Food &amp; Education
                </p>
                <h1 className="mt-4 font-serif text-4xl leading-tight text-[#2e2a26] md:text-5xl lg:text-6xl">
                  Rebuild the Culture of the Table.
                </h1>
                <div className="mt-5 space-y-3 text-lg leading-relaxed text-[#5b5149]">
                  <p>Shared meals once anchored families and strengthened communities.</p>
                  <p>Today, that structure is disappearing.</p>
                  <p>
                    L.I.F.E. restores the patterns that support connection, resilience, and long-term
                    health.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/host"
                    className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white shadow-sm transition hover:bg-[#566236]"
                  >
                    Host a Table
                  </Link>
                  <Link
                    href="/host-guide"
                    className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
                  >
                    View the Host Guide
                  </Link>
                </div>
              </div>

              <div className="rounded-[36px] border border-[#e7dac8] bg-[#fff8ef]/80 p-6 shadow-xl">
                <Image
                  priority
                  src="/images/hero-table4.jpeg"
                  width={900}
                  height={700}
                  alt="Multigenerational family preparing Mediterranean vegetables together"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">The Quiet Longevity Crisis</h2>
          <div className="mt-6 space-y-4 text-lg text-[#5b5149]">
            <p>For the first time in modern history, life expectancy in the United States is declining.</p>
            <p>Chronic disease is rising.<br />Isolation is increasing.<br />Family meals are disappearing.</p>
            <p>
              We spend more on healthcare than any nation in the world — yet rank near the bottom in life expectancy among
              developed countries.
            </p>
            <p>This is not random.</p>
            <p>
              As the cultural patterns that once anchored families erode, so do the structures that supported long,
              connected lives.
            </p>
            <p>The table was one of those structures.</p>
            <p>L.I.F.E. restores it.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">What Is L.I.F.E.?</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              L.I.F.E. is a national nonprofit movement restoring the power of shared meals. We educate communities using
              research-backed longevity data and teach simple Mediterranean-style cooking families can recreate at home.
              Then we multiply impact through one clear action: the Table Commitment.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">The Five Cultural Pillars of L.I.F.E.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "1) The Table",
                body:
                  "A shared gathering place. For generations, the table anchored family life. It created rhythm, expectation, and belonging. We restore the table as the center of the home and community.",
              },
              {
                title: "2) Real Food",
                body:
                  "Food that is prepared, not engineered. Seasonal. Simple. Shared. Cooking reconnects people to tradition and to one another.",
              },
              {
                title: "3) Conversation",
                body:
                  "Stories. Questions. Listening. Face-to-face dialogue builds resilience and understanding. When conversation disappears, culture thins.",
              },
              {
                title: "4) Contribution",
                body:
                  "Everyone participates. Setting the table. Cooking. Inviting. Cleaning. Shared responsibility builds dignity and purpose.",
              },
              {
                title: "5) Commitment",
                body:
                  "Traditions endure when they are repeated. Every table ends with a commitment to host again. This is how a meal becomes a pattern. A pattern becomes a culture.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2e2a26]">{pillar.title}</h3>
                <p className="mt-3 text-[#5b5149]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">How It Works</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Read the Host Guide", "Host a Meal", "Register Your Table", "Invite Others to Commit"].map(
                (step, index) => (
                  <div key={step} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-5 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">Step {index + 1}</p>
                    <p className="mt-3 text-base font-semibold text-[#2e2a26]">{step}</p>
                  </div>
                ),
              )}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/host"
                className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
              >
                Host a Table
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">A Growing National Movement</h2>
            <p className="mt-3 text-lg text-[#5b5149]">
              This is bigger than one person. Every hosted table strengthens the data, the story, and the scale.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { label: "Tables Hosted", value: "0" },
                { label: "People Reached", value: "0" },
                { label: "Cities Participating", value: "0" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#dfd4c6] bg-white p-6 text-center">
                  <p className="text-4xl font-serif text-[#2e2a26]">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-[#5b5149]">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5b5149]">Participation happens locally. Impact is tracked nationally.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-[#2e2a26]">Join L.I.F.E.</h2>
                <p className="mt-3 text-lg text-[#5b5149]">
                  Get recipes, research insights, host stories, and event announcements.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href="/join"
                  className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
                >
                  Join L.I.F.E.
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
