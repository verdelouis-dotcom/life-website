import Link from "next/link";

const WORKSHOP_LINK = "/host";
const DONATE_LINK = "/donate";

export default function SectionNextStep() {
  return (
    <section className="bg-[#1f1f1f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Next Step</p>
        <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">It starts with one table.</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">One shared meal can change habits, relationships, and what gets passed on.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href={WORKSHOP_LINK} className="btn-solid px-8 text-base">
            Host a Table
          </Link>
          <Link href={DONATE_LINK} className="btn-outline px-8 text-base bg-transparent text-white border-white/60 hover:bg-white/10">
            Support LIFE
          </Link>
        </div>
      </div>
    </section>
  );
}
