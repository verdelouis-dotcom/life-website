import Reveal from "@/components/ui/reveal";

export default function SectionPilot() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Pilot Commitment</h2>
        </Reveal>
        <Reveal className="space-y-3 type-body-muted">
          <p>During the Metro Atlanta pilot, LIFE board members commit to hosting twelve workshops each year.</p>
          <p>These gatherings model the program structure and help establish the foundation for broader community participation.</p>
          <p>Participants who attend are encouraged to host a workshop of their own and continue sharing what they learned.</p>
        </Reveal>
      </div>
    </section>
  );
}
