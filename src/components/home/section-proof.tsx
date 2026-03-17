import ProofHighlightList from "@/components/proof/ProofHighlightList";
import { PARTNER_READY_HIGHLIGHTS, PILOT_QUOTES } from "@/data/proof";

const FEATURED_QUOTE = PILOT_QUOTES[1];

export default function SectionProof() {
  return (
    <section className="bg-[var(--bg)] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <ProofHighlightList eyebrow="Proof of progress" title="Signals that LIFE is accountable" items={PARTNER_READY_HIGHLIGHTS} />
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 text-center shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">From our hosts</p>
          <p className="mt-3 text-lg italic text-[var(--text)]">“{FEATURED_QUOTE.quote}”</p>
          <p className="mt-2 text-sm font-semibold text-[var(--life-forest)]">{FEATURED_QUOTE.attribution}</p>
          <p className="text-xs text-[var(--muted)]">{FEATURED_QUOTE.context}</p>
          <a href="/impact" className="btn-outline mt-4 inline-flex px-6 text-sm">
            See the Impact
          </a>
        </div>
      </div>
    </section>
  );
}
