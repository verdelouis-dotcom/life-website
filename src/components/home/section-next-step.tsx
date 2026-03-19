import Link from "next/link";

const WORKSHOP_LINK = "/host";
const DONATE_LINK = "/donate";

export default function SectionNextStep() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-700 md:mb-8 md:text-base">Next Step</p>
        <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Bring LIFE to your table.</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">Start with one workshop. That’s how the movement grows.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={WORKSHOP_LINK} className="btn-solid px-8 text-base">
            Host a LIFE Workshop
          </Link>
          <Link href={DONATE_LINK} className="btn-outline px-8 text-base">
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
