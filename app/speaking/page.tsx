import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SpeakingForm from "@/components/forms/speaking-form";

export default function SpeakingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Community Education</p>
          <h1 className="mt-3 text-4xl font-semibold">Keynote</h1>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">30-Minute Keynote</p>
              <p className="mt-3 text-[#5b5149]">Longevity fundamentals, cultural restoration, and practical community tools.</p>
            </div>
            <div className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">Audience</p>
              <p className="mt-3 text-[#5b5149]">Civic groups, schools, corporate teams, community organizations.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <p className="text-sm text-[#5b5149]">
            Request a keynote using the short form below. Fees or honoraria, if offered, are treated as donations to the nonprofit initiative.
          </p>
          <div className="mt-6">
            <SpeakingForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
