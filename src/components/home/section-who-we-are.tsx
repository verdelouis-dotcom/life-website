import Link from "next/link";

export default function SectionWhoWeAre() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Who We Are</p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-6xl">
          LIFE provides proven steps to strip away habits harming your long-term health and your connection with the people you love.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-800 md:text-xl">
          We do this through shared meals, practical learning, and simple habits you can actually repeat.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/how-it-works" className="btn-solid px-6 text-sm md:px-8">
            Start Here
          </Link>
        </div>
      </div>
    </section>
  );
}
