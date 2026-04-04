import Image from "next/image";
import Link from "next/link";

const HERO_BADGES = [
  { label: "Hosts preparing cooking experiences", value: "In progress", dot: "var(--terra)" },
  { label: "Pilot footprint", value: "ATL · ATX", dot: "var(--sage)" },
];

export function LandingHero() {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-[52%_48%]" id="hero">
      <div className="flex flex-col justify-center bg-[var(--offwhite)] px-6 py-12 md:px-16">
        <div className="eyebrow fu1 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--terra)]" style={{ animation: "fadeUp 0.65s ease 0.1s both" }}>
          <span className="block h-[1px] w-7 bg-[var(--terra)]" />
          Atlanta, GA · Austin, TX · Nonprofit · Pilot
        </div>
        <h1 className="fu2 font-[var(--font-landing-heading)] text-[clamp(2.4rem,3.5vw,3.2rem)] font-normal leading-[1.18] text-[var(--ink)]" style={{ animation: "fadeUp 0.65s ease 0.25s both" }}>
          A neighbor invites you in. You cook. You eat. You <em className="text-[var(--terra)] not-italic">pass it on.</em>
        </h1>
        <p className="fu3 max-w-xl text-[1rem] font-light leading-[1.9] text-[var(--earth-mid)]" style={{ animation: "fadeUp 0.65s ease 0.4s both" }}>
          LIFE evenings teach people how to cook Mediterranean-inspired meals, build grounding habits, and restore the expectation that friends, families, and neighbors gather around a shared table.
        </p>
        <p className="fu4 max-w-md border-l-2 border-[var(--parchment)] pl-4 text-[0.85rem] font-normal leading-[1.7] text-[var(--muted-earth)]" style={{ animation: "fadeUp 0.65s ease 0.55s both" }}>
          Every guest receives the LIFE Guide to try small habits at home. Within 30 days, they host their own LIFE cooking experience—keeping the measureable ripple growing.
        </p>
        <div className="fu5 flex flex-wrap gap-3" style={{ animation: "fadeUp 0.65s ease 0.68s both" }}>
          <Link href="/host" className="btn-p">
            Host a Table
          </Link>
          <Link href="/how-it-works" className="btn-o">
            See How It Works
          </Link>
        </div>
        <p className="fu6 text-[0.85rem] text-[var(--earth-mid)]" style={{ animation: "fadeUp 0.65s ease 0.8s both" }}>
          Been invited to a cooking experience?{" "}
          <Link href="/pasta-class" className="text-[var(--terra)] underline underline-offset-4">
            Here&apos;s what to expect →
          </Link>
        </p>
      </div>

      <div className="relative h-[520px] overflow-hidden bg-[var(--parchment)] md:h-full">
        <Image
          src="/images/workshops/pasta-lesson-1.jpg"
          alt="LIFE hosts rolling fresh pasta together"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(253,250,246,0.25)] to-transparent" />
        {HERO_BADGES.map((badge, index) => (
          <div
            key={badge.label}
            className={`absolute flex items-center gap-2 rounded-full border border-[rgba(62,46,30,0.12)] bg-[rgba(253,250,246,0.95)] px-4 py-2 text-[0.8rem] text-[var(--earth-mid)] shadow-sm ${index === 0 ? "bottom-10 left-6" : "right-6 top-10"}`}
            style={{ animation: "floatA 5s ease-in-out infinite", animationDelay: index === 0 ? "0s" : "2.5s" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: badge.dot }} />
            <span>
              <strong className="font-semibold text-[var(--ink)]">{badge.value}</strong> {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
