import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function SpeakingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h1 className="text-4xl font-semibold text-[#2e2a26]">Bring L.I.F.E. to Your Organization</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            L.I.F.E. offers two formats for schools, community organizations, and corporate teams.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Keynote (30 Minutes)",
                body: "A powerful presentation on the decline of the American table and why it matters now.",
              },
              {
                title: "Interactive Workshop (60 Minutes)",
                body: "Education, demonstration, and a guided Table Commitment.",
              },
            ].map((talk) => (
              <div key={talk.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#2e2a26]">{talk.title}</h3>
                <p className="mt-3 text-[#5b5149]">{talk.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="mailto:hello@longevityinitiativeforfoodandeducation.com"
              className="inline-flex rounded-2xl border border-[#6b7a46] px-6 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
            >
              Request a Speaker
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
