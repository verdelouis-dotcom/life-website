import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionPilot() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Pilot Accountability</h2>
        </Reveal>
        <Reveal className="space-y-3 type-body-muted">
          <p>LIFE began in Georgia, where board members host twelve workshops each year to stress-test the model.</p>
          <p>Registered tables, host follow-up, and quarterly board reviews keep the pilot transparent as it expands.</p>
          <p className="font-semibold text-[var(--life-forest)]">Currently piloting in select U.S. communities.</p>
        </Reveal>
        <Reveal>
          <Link href="/impact" className="btn-outline px-6">
            See the Impact
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
