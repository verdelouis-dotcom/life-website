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
                  Rebuild Health. Restore Connection. Start at the Table.
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-[#5b5149]">
                  Longevity Initiative for Food &amp; Education (L.I.F.E.) is a nonprofit educational organization dedicated to strengthening health and community through shared meals, cultural food traditions, and practical lifestyle education.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/support"
                    className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white shadow-sm transition hover:bg-[#566236]"
                  >
                    Host a Workshop
                  </Link>
                  <Link
                    href="/founder"
                    className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
                  >
                    Learn More
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
            <h2 className="text-3xl font-semibold text-[#2e2a26]">What we do</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              L.I.F.E. delivers educational programming designed to improve long-term health and restore meaningful connection around the table.
            </p>
            <div className="mt-6 grid gap-4 text-[#5b5149] sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Community Cooking Workshops", body: "Hands-on education rooted in fresh ingredients and shared meal traditions." },
                { title: "Educational Keynote Presentations", body: "Short-form talks for schools, workplaces, and community groups." },
                { title: "Interactive Culinary Education Experiences", body: "Immersive programs that combine instruction, discussion, and shared dining." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{item.title}</p>
                  <p className="mt-3 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5b5149]">
              Each program teaches simple, fresh food preparation, shared meal traditions, and evidence-informed lifestyle practices that support longevity.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">Community Cooking Workshops</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              Participants are invited to support L.I.F.E.&rsquo;s educational mission through a suggested contribution of $50 per participant.
            </p>
            <ul className="mt-6 space-y-3 text-[#5b5149]">
              {[
                "Hands-on meal preparation",
                "Education on fresh, whole ingredients",
                "Discussion on longevity and shared meal traditions",
                "A guided shared dining experience",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#6b7a46]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#5b5149]">
              L.I.F.E. is a nonprofit organization. A portion of contributions may not be tax-deductible due to goods or services received.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-[#dfd4c6] bg-white p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Educational Keynote Presentation</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#2e2a26]">30-minute keynote</h2>
              <p className="mt-3 text-[#5b5149]">
                Organizations may host a L.I.F.E. keynote with a suggested program support contribution of $500. The presentation explores the relationship between shared meals, cultural traditions, and long-term health outcomes.
              </p>
            </div>
            <div className="rounded-3xl border border-[#dfd4c6] bg-white p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Interactive Culinary Education Workshop</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#2e2a26]">3-hour experience</h2>
              <p className="mt-3 text-[#5b5149]">
                Suggested program support contribution: $1,000. This immersive educational workshop includes hands-on instruction, guided discussion, and practical implementation tools designed to multiply impact beyond the event.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-[#dfd4c6] bg-white p-10 text-center">
            <h2 className="text-3xl font-semibold text-[#2e2a26]">The 30-Day Table Commitment</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              Participants are invited to extend the impact of their experience by hosting at least two guests within 30 days and preparing a simple shared meal using the principles learned.
            </p>
            <p className="mt-4 text-lg text-[#5b5149]">
              This voluntary commitment strengthens community connection and expands the educational reach of the movement.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
