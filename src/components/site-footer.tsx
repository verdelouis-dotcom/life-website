export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[#f4efe6]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-[var(--text)]">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="type-eyebrow tracking-[0.2em]">LIFE</p>
            <p className="mt-2 type-detail">
              The Longevity Initiative for Food &amp; Education (LIFE) is a nonprofit pilot restoring shared meals through education,
              tools, and measurable reporting.
            </p>
          </div>
          <div className="type-detail">
            <p className="font-semibold text-[var(--life-forest)]">Reach Us</p>
            <p className="mt-2">
              Email{" "}
              <a
                className="underline decoration-[#c46a3a] underline-offset-4"
                href="mailto:info@longevityinitiativeforfoodandeducation.com"
              >
                info@longevityinitiativeforfoodandeducation.com
              </a>{" "}
              with program or partnership questions.
            </p>
            <p className="mt-4">
              <a
                href="/assessment/methodology"
                className="inline-flex text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4"
              >
                Review the LIFE Assessment methodology
              </a>
            </p>
          </div>
          <div className="type-detail">
            <p className="font-semibold text-[var(--life-forest)]">Keynote</p>
            <p className="mt-2">Request a 30-minute nonprofit keynote on longevity fundamentals.</p>
            <a href="/keynote" className="mt-4 btn-outline px-5">
              Request a Keynote
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-white/60 p-6 type-detail">
          <p className="type-eyebrow">Sustainability</p>
          <p className="mt-3">
            Funding streams include individual donations, local sponsorships, keynote honoraria, and grants—keeping the pilot responsive and
            accountable.
          </p>
        </div>

        <div className="mt-10 space-y-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
          <div className="flex flex-col gap-2 text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>© {year} LIFE Longevity Initiative for Food &amp; Education</p>
            <p className="opacity-80">Start local. Prove the model. Expand when ready.</p>
          </div>
          <p>
            LIFE is organized as a Georgia nonprofit corporation and has applied for recognition as a tax-exempt organization under
            Section 501(c)(3) of the Internal Revenue Code.
          </p>
          <p>No goods or services were provided in exchange for donations unless otherwise noted.</p>
        </div>
      </div>
    </footer>
  );
}
