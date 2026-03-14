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
        <Reveal className="space-y-3">
          <p className="type-body-muted">
            Founder Lou Verde leads LIFE through community education, hosted workshops, and 30-minute keynote presentations on longevity and healthy living.
          </p>
          <p className="type-body-muted">
            Lou continues to travel internationally—with a focus on Italy—to study cultural patterns associated with long-living communities and bring those insights back to the program.
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
