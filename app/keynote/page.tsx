import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import KeynoteForm from "@/components/forms/keynote-form";

export default function KeynotePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Community Education</p>
          <h1 className="mt-4 text-4xl font-semibold">Keynote</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            30-minute nonprofit keynote on L.I.F.E., longevity fundamentals, and cultural restoration through the table.
          </p>
        </section>
        <section className="mt-10 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <p className="text-sm text-[#5b5149]">
            Honoraria or donations are discussed separately. We prioritize community education and public awareness.
          </p>
          <div className="mt-6">
            <KeynoteForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
