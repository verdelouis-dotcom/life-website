import Reveal from "@/components/ui/reveal";

export default function SectionPilot() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Pilot Commitment</h2>
        </Reveal>
        <Reveal className="space-y-3 type-body-muted">
          <p>LIFE began in Georgia, where board members still commit to hosting twelve workshops per year to keep the model accountable.</p>
          <p>Those gatherings fuel early hosts in Atlanta, Rochester, and Austin who are adapting the same shared-table framework for their communities.</p>
          <p>Everyone who attends is encouraged to host, register their table, and keep the ripple effect measurable.</p>
        </Reveal>
      </div>
    </section>
  );
}
