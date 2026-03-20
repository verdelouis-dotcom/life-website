import Image from "next/image";
import Link from "next/link";

export default function SectionWhoWeAre() {
  return (
    <section className="bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Who We Are</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-6xl">
            LIFE provides proven steps to strip away habits harming your long-term health and your connection with the people you love.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-800 md:text-xl">
            Shared meals. Practical learning. Simple habits people can actually live and pass on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/host" className="btn-solid px-6 text-sm md:px-8">
              Host a Table
            </Link>
            <Link href="/how-it-works" className="btn-outline px-6 text-sm md:px-8">
              See How It Works
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-600">One shared meal can begin a ripple effect.</p>
        </div>
        <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          <Image src="/images/table/table5.jpeg" alt="Families sharing a LIFE table" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
