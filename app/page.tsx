import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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
                  Rebuilding Health Starts at the Table.
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-[#5b5149]">
                  Longevity Initiative for Food &amp; Education (L.I.F.E.) is a nonprofit educational organization restoring the daily practices that support long-term health and human connection.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/host" className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white transition hover:bg-[#566236]">
                    Host a Table
                  </Link>
                  <Link
                    href="/workshops"
                    className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
                  >
                    Attend a Workshop
                  </Link>
                </div>
              </div>

              <div className="rounded-[36px] border border-[#e7dac8] bg-[#fff8ef]/80 p-6 shadow-xl">
                <Image
                  priority
                  src="/images/hero-table4.jpeg"
                  width={900}
                  height={700}
                  alt="Hands arranging fresh produce on a shared table"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
          <h2 className="text-3xl font-semibold">The Moment We&apos;re In</h2>
          <div className="mt-4 space-y-3 text-lg text-[#5b5149]">
            <p>For the first time in modern history, life expectancy in the United States has declined.</p>
            <p>Chronic disease continues to rise. Social isolation is increasing. Shared meals are disappearing.</p>
            <p>These are not separate problems. They are signals that foundational systems have eroded.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Our Approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2e2a26]">What we do</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              We provide structured educational programming that helps communities rebuild practical, repeatable health-supporting routines.
            </p>
            <ul className="mt-6 grid gap-4 text-[#5b5149] sm:grid-cols-2">
              {["Fresh, simple food education", "Shared meal structure and rhythms", "Everyday activity and stress regulation", "Connection practices that strengthen belonging"].map((item) => (
                <li key={item} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Community-Based Health Education</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              L.I.F.E. delivers structured, small-group educational programming designed to improve nutrition literacy, strengthen shared meal practices, and reduce social isolation at the community level.
            </p>
            <p className="mt-3 text-lg text-[#5b5149]">
              Our model focuses on practical instruction, measurable behavior shifts, and local replication through hosted gatherings.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16 text-center text-lg text-[#2e2a26]">
          <p className="font-serif text-2xl">
            If we want longer lives, we must rebuild the systems that once supported them.
          </p>
          <p className="mt-4 text-xl text-[#5b5149]">One of the most powerful was the shared table.</p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Educational Programming</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              Our workshops and presentations translate evidence-informed principles into action people can repeat at home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/workshops"
                className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
              >
                Attend a Workshop
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-[#c46a3a] px-5 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
              >
                Request a Presentation
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Host a Table</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              Education spreads when it&apos;s shared. Participants are invited to extend what they learn by hosting a simple shared meal in their own home—creating space for conversation and connection.
            </p>
            <p className="mt-3 text-[#5b5149]">We provide the framework. You provide the table.</p>
            <Link
              href="/host"
              className="mt-6 inline-flex rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              Host a Table
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Institutional Partnerships</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              L.I.F.E. partners with community organizations, healthcare systems, civic groups, and foundations to expand access to practical health education. Small community grants ($2,000–$10,000) accelerate pilots, resource kitchens, and underwrite hosted gatherings.
            </p>
            <p className="mt-3 text-[#5b5149]">
              For partnership or grant inquiries:{" "}
              <a className="underline" href="mailto:hello@longevityinitiativeforfoodandeducation.com">
                hello@longevityinitiativeforfoodandeducation.com
              </a>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-2xl font-semibold text-[#2e2a26]">How we are funded</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              Longevity Initiative for Food &amp; Education is supported through a combination of individual contributions and program-related support from workshops and educational presentations. All funds advance our charitable and educational mission.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
