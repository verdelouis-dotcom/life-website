import Reveal from "@/components/ui/reveal";

export default function SectionPilot() {
  return (
    <section className="section-spacing bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
        <Reveal>
          <h2 className="heading-lg">Pilot Accountability</h2>
        </Reveal>
        <Reveal className="space-y-3 body-md text-[var(--muted)]">
          <p>LIFE began in Georgia, where board members host twelve LIFE gatherings each year to stress-test the model.</p>
          <p>Registered LIFE gatherings, host follow-up, and quarterly board reviews keep the pilot transparent as it expands.</p>
          <p className="font-semibold text-[var(--life-forest)]">Currently piloting in select U.S. communities.</p>
        </Reveal>
      </div>
    </section>
  );
}
