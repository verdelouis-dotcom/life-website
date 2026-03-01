import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import IconHost from "@/components/icons/icon-host";

const STEPS = [
  {
    title: "Raise your hand.",
    description: "Fill out the short form so we can understand your people, kitchen, and cadence.",
  },
  {
    title: "Receive the host kit.",
    description: "Menus, sourcing tips, facilitation prompts, and a simple budget so you can focus on people over perfection.",
  },
  {
    title: "Gather monthly.",
    description: "We check in, capture lessons, and plug you into a network of table hosts across the city.",
  },
];

// TODO: Replace placeholder imagery with final photography (host-table.jpg).

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#f2e9dc] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <Reveal className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">How hosting works</p>
              <h2 className="text-3xl font-semibold text-[var(--text)]">Host a table in three grounded steps.</h2>
              <p className="text-lg text-[var(--muted)]">
                Momentum compounds when people gather consistently. We make that consistency doable.
              </p>
            </Reveal>
            <ol className="space-y-8 border-l border-[var(--border)] pl-8">
              {STEPS.map((step, index) => (
                <Reveal key={step.title} delay={index * 120} className="relative space-y-2">
                  <span className="absolute -left-[34px] flex h-10 w-10 items-center justify-center rounded-full bg-white font-semibold text-[var(--olive)] shadow-lg">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold text-[var(--text)]">{step.title}</h3>
                  <p className="text-base text-[var(--muted)]">{step.description}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal className="flex flex-wrap gap-4">
              <Link
                href="/host#engagement-form"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--olive)] px-6 py-3 text-white shadow-sm transition hover:bg-[#394930]"
              >
                <IconHost className="h-5 w-5" />
                Become a Host
              </Link>
              <Link
                href="/workshops#engagement-form"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-[var(--olive)] transition hover:bg-white"
              >
                Ask about support
              </Link>
            </Reveal>
          </div>
          <div className="relative">
            <div className="relative h-[460px] overflow-hidden rounded-[32px] border border-[var(--border)]">
              <Image src="/images/host-table.jpg" alt="Neighbors preparing ingredients before a shared table" fill className="object-cover" />
            </div>
            <div className="relative -mt-12 ml-auto max-w-sm rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">Host cadence</p>
              <p className="mt-3 text-lg text-[var(--text)]">1 evening per month. 90 minutes of facilitation. Infinite ripples.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
