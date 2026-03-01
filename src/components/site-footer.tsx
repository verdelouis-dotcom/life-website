export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dfd4c6] bg-[#f4efe6]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-[#2e2a26]">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold tracking-wide">L.I.F.E.</p>
            <p className="mt-2 text-sm text-[#5b5149]">
              The Longevity Initiative for Food &amp; Education restores shared meals so families reconnect over real food.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-[#2e2a26]">Reach Us</p>
            <p className="mt-2 text-[#5b5149]">
              Email{" "}
              <a
                className="underline decoration-[#c46a3a] underline-offset-4"
                href="mailto:info@longevityinitiativeforfoodandeducation.com"
              >
                info@longevityinitiativeforfoodandeducation.com
              </a>{" "}
              for workshop details or partnerships.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-[#2e2a26]">Stay in the Loop</p>
            <p className="mt-2 text-[#5b5149]">
              Follow our slow build:{" "}
              <a
                className="font-semibold text-[#c46a3a] underline decoration-[#c46a3a]/60"
                href="https://www.instagram.com/longevity_initiative/"
                target="_blank"
                rel="noreferrer"
              >
                @longevity_initiative
              </a>{" "}
              (Instagram)
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-[#dfd4c6] bg-white/60 p-6 text-sm">
          <p className="font-semibold uppercase tracking-[0.35em] text-[#6b7a46]">Keynote</p>
          <p className="mt-3 text-[#5b5149]">
            Invite L.I.F.E. to deliver a 30-minute nonprofit keynote on longevity, culture, and practical community tools.
          </p>
          <a
            href="/speaking"
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-[#6b7a46] px-5 py-2 text-sm font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white"
          >
            Request a Keynote
          </a>
        </div>

        <div className="mt-10 border-t border-[#dfd4c6] pt-6 text-xs text-[#5b5149] space-y-3">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {year} L.I.F.E. Longevity Initiative for Food &amp; Education</p>
            <p className="opacity-80">Start local. Prove the model. Expand when ready.</p>
          </div>
          <p>
            Longevity Initiative for Food &amp; Education is organized as a nonprofit corporation in the State of Georgia and has applied for recognition as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code.
          </p>
          <p>No goods or services were provided in exchange for donations unless otherwise noted.</p>
        </div>
      </div>
    </footer>
  );
}
