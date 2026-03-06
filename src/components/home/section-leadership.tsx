import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionLeadership() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Leadership</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">
            Founder Lou Verde delivers community education on L.I.F.E. principles and longevity fundamentals.
            <br />
            Lou has traveled internationally—with an emphasis on Italy—to study cultural patterns linked to longer, healthier lives, and
            continues this field research to enrich the program.
          </p>
        </Reveal>
        <Reveal className="mx-auto h-64 w-64 overflow-hidden rounded-full border border-[var(--border)] shadow-sm">
          <Image src="/images/founder2.jpeg" alt="Founder Lou Verde" width={256} height={256} className="h-full w-full object-cover" />
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/keynote"
            className="btn-outline"
          >
            Request a 30-Minute Keynote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
