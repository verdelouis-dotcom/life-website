import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import KeynoteForm from "@/components/forms/keynote-form";

export default function KeynotePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
          <div className="space-y-4 text-center">
            <p className="type-eyebrow">Community Education</p>
            <h1 className="section-heading">Keynote</h1>
            <p className="type-body-muted">
              Founder Lou Verde offers a 30-minute keynote on longevity, culture, and the restoration of the shared table.
            </p>
          </div>
          <div className="mt-6 text-left text-sm text-[var(--text)]">
            <p className="type-eyebrow text-[var(--olive)]">Topics may include:</p>
            <ul className="mt-3 space-y-2">
              <li>• the longevity crisis</li>
              <li>• the six pillars of healthy living</li>
              <li>• fresh-ingredient cooking, shared meals, and healthy communities</li>
              <li>• practical ways to improve longevity</li>
            </ul>
          </div>
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
