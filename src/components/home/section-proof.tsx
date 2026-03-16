import ProofHighlightList from "@/components/proof/ProofHighlightList";
import ProofQuoteGrid from "@/components/proof/ProofQuoteGrid";
import { PARTNER_READY_HIGHLIGHTS, PILOT_QUOTES } from "@/data/proof";

export default function SectionProof() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <ProofHighlightList eyebrow="Pilot momentum" title="Signals that LIFE is real and accountable" items={PARTNER_READY_HIGHLIGHTS} />
      <ProofQuoteGrid eyebrow="Voices from the tables" title="What people are saying during the pilot" quotes={PILOT_QUOTES} />
    </div>
  );
}
