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
              You're in. Welcome to the Longevity Letter.
            </div>
          </section>
        )}

        <section className="relative isolate overflow-hidden border-b border-[#e8decd] bg-[#f4efe6]">
          <div className="absolute inset-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/hero-table.jpg')] bg-cover bg-center opacity-40"
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
                  Rebuild Life at the Table.
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-[#5b5149]">
                  Most families no longer sit down together for dinner. We&rsquo;re bringing the table
                  back — and with it, connection, health, and longevity.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#host"
                    className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white shadow-sm transition hover:bg-[#566236]"
                  >
                    Host a Table
                  </Link>
                  <Link
                    href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
                    className="rounded-2xl border border-[#c46a3a]/60 px-5 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
                  >
                    Download Host Guide (PDF)
                  </Link>
                </div>
              </div>

              <div className="rounded-[36px] border border-[#e7dac8] bg-[#fff8ef]/80 p-6 shadow-xl">
                <Image
                  priority
                  src="/images/hero-table.jpg"
                  width={900}
                  height={700}
                  alt="Hands preparing dough at a shared wooden table"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">The Quiet Crisis</h2>
          <p className="mt-4 text-lg text-[#5b5149]">
            Family dinner is disappearing in America. At the same time, U.S. life expectancy has
            declined, chronic disease continues to rise, and screens have replaced shared time. We
            removed the table — and accidentally dismantled a system that supported health,
            belonging, and purpose. This is bigger than food. This is about rebuilding connection.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">What Is L.I.F.E.?</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              L.I.F.E. is a national nonprofit movement restoring the power of shared meals. We
              educate communities using research-backed longevity data and teach simple
              Mediterranean-style cooking families can recreate at home. Then we multiply impact
              through one clear action: pay it forward at the table.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">How It Works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1) Attend a Workshop",
                body: "Learn the data, cook together, and feel the table again.",
              },
              {
                title: "2) Host Your Own Table",
                body: "Simple meal, no screens, slow conversation, intentional guests.",
              },
                {
                  title: "3) Pay It Forward",
                  body: "Guests leave committed to host their own table within 30 days.",
                },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#2e2a26]">{item.title}</h3>
                <p className="mt-3 text-[#5b5149]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="host" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Host a Table</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              You don’t need to be a chef. You just need a table. We provide simple recipes, a
              one-page Host Guide, conversation prompts, and tracking tools. Hosting is how this
              movement grows — intentionally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
                className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white"
              >
                Download Host Guide
              </Link>
              <Link
                href="/join"
                className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white transition hover:bg-[#566236]"
              >
                Become a Host
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[#2e2a26]">Speaking &amp; Workshops</h2>
                <p className="mt-3 text-lg text-[#5b5149]">
                  Bring the story and science of the table to your conference, school, or community.
                </p>
              </div>
              <Link
                href="/contact#speaker"
                className="rounded-2xl border border-[#c46a3a]/60 px-5 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
              >
                Request a Speaker
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Keynote (30 Minutes)",
                  body: "A powerful talk on the decline of the American table and the science of longevity.",
                },
                {
                  title: "Interactive Workshop (60 Minutes)",
                  body: "Educational talk plus a hands-on cooking experience.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                  <h3 className="text-xl font-semibold text-[#2e2a26]">{item.title}</h3>
                  <p className="mt-3 text-[#5b5149]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Track the Movement</h2>
            <p className="mt-3 text-lg text-[#5b5149]">
              This is bigger than one person. Every hosted table strengthens the data, the story, and
              the scale.
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
            <p className="mt-6 text-sm text-[#5b5149]">
              As hosts submit results, these numbers will update.
            </p>
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
