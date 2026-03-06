import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import KeynoteForm from "@/components/forms/keynote-form";

export default function KeynotePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Community Education</p>
          <h1 className="section-heading">Keynote</h1>
          <p className="mt-4 type-body-muted">
            30-minute nonprofit keynote on L.I.F.E., longevity fundamentals, and cultural restoration through the table.
          </p>
        </section>
        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <p className="type-detail">
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
