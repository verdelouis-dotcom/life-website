import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const BOARD_GLIMPSE = [
  { name: "Lou Verde", role: "Founder & President" },
  { name: "Dr. Miles Medina", role: "Treasurer" },
  { name: "Bob Fabbio", role: "Vice President" },
  { name: "Kara Verde", role: "Secretary" },
];

export default function SectionBoardTeaser() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-5 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Board &amp; Accountability</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">
            Volunteer board members oversee workshops, finances, and reporting so LIFE can expand responsibly.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-[var(--life-forest)]">
          {BOARD_GLIMPSE.map((member) => (
            <div key={member.name} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-3 text-[var(--text)]">
              <p>{member.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--olive)]">{member.role}</p>
            </div>
          ))}
        </Reveal>
        <Reveal>
          <Link href="/about" className="btn-outline px-6 text-sm">
            Meet the full board
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
