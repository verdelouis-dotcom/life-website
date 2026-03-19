import Link from "next/link";

export default function SectionWhoWeAre() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Together, we can bring back the table.</h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-800 md:text-xl">
          Shared meals are disappearing—and with them, connection, health, and the daily habits that help people live longer, stronger lives.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/how-it-works" className="btn-solid px-6 text-sm md:px-8">
            Start Here
          </Link>
          <Link href="/donate" className="btn-outline px-6 text-sm md:px-8">
            Support LIFE
          </Link>
        </div>
      </div>
    </section>
  );
}
