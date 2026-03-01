import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Learn",
    description: "Receive community education on the six pillars and longevity fundamentals.",
  },
  {
    title: "Cook",
    description: "Prepare fresh, Mediterranean-style meals using seasonal, accessible ingredients.",
  },
  {
    title: "Gather",
    description: "Host a shared table experience that reinforces connection and daily routines.",
  },
  {
    title: "Register",
    description: "Submit your table so participation is measured and counted toward the pilot.",
  },
];

// TODO: Replace placeholder imagery with final photography (host-table.jpg).

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#f2e9dc] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <Reveal className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Program Rhythm</p>
              <h2 className="text-3xl font-semibold text-[var(--text)]">How It Works</h2>
              <p className="text-lg text-[var(--muted)]">
                L.I.F.E. keeps the process simple so community education can travel table to table.
              </p>
            </Reveal>
            <ol className="space-y-8">
              {STEPS.map((step, index) => (
                <Reveal key={step.title} delay={index * 120}>
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white font-semibold text-[var(--olive)] shadow-lg">
                      {index + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-[var(--text)]">{step.title}</h3>
                      <p className="text-base text-[var(--muted)]">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="flex flex-wrap gap-4">
              <Link
                href="/host#engagement-form"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-white shadow-sm transition hover:bg-[#394930]"
              >
                Become a Host
              </Link>
              <Link
                href="/workshops#engagement-form"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-[var(--olive)] transition hover:bg-white"
              >
                Ask about support
              </Link>
            </Reveal>
            <p className="text-sm text-[var(--muted)]">
              Participation happens locally. Impact is measured nationally through registered tables.
            </p>
          </div>
          <div className="space-y-6 lg:pl-8">
            <div className="relative h-[460px] overflow-hidden rounded-[32px] border border-[var(--border)] shadow-lg shadow-black/10">
              <Image src="/images/host-table.jpg" alt="Neighbors preparing ingredients before a shared table" fill className="object-cover object-top" />
            </div>
            <div className="max-w-sm rounded-3xl border border-white/40 bg-white/85 p-6 text-[var(--text)] shadow-xl backdrop-blur-sm lg:ml-auto">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">Host cadence</p>
              <p className="mt-3 text-lg text-[var(--text)]">1 evening per month. 90 minutes of facilitation. Infinite ripples.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
