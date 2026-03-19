import Link from "next/link";

const WORKSHOP_LINK = "/host";
const DONATE_LINK = "/donate";

export default function SectionNextStep() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Next Step</p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--life-forest)] md:text-4xl">Bring LIFE to your table.</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">Start with one table. That’s how the movement grows.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={WORKSHOP_LINK} className="btn-solid px-8 text-base">
            Host a LIFE Table
          </Link>
          <Link href={DONATE_LINK} className="btn-outline px-8 text-base">
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
