import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function ContactStrip() {
  return (
    <section className="bg-[#0e1511] py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 text-left md:flex-row md:items-center md:justify-between">
        <Reveal className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Need a human?</p>
          <h2 className="text-3xl font-semibold">Let&apos;s talk through your next step.</h2>
          <p className="text-base text-white/80">
            Prefer a personal walkthrough of the pilot, hosting kit, or workshop menu? Send a note—we reply within two business days.
          </p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white/90 px-6 py-3 text-base font-semibold text-[#0e1511] shadow-sm transition hover:bg-white"
          >
            Contact Form
          </Link>
          <a
            href="mailto:info@longevityinitiativeforfoodandeducation.com"
            className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Email Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
