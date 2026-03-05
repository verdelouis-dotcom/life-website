import Link from "next/link";

export default function SharedTableCTA({ compactLink = "/newsletter" }: { compactLink?: string }) {
  return (
    <section className="bg-[#fff8ef] py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-[32px] border border-[var(--border)] bg-white px-6 py-8 text-center shadow-sm sm:flex-row sm:text-left">
        <div className="flex-1 space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Join The Shared Table</p>
          <p className="text-lg text-[var(--muted)]">
            Stay connected to the L.I.F.E. movement through stories, shared meals, and monthly updates.
          </p>
        </div>
        <Link
          href={compactLink}
          className="inline-flex min-w-[150px] items-center justify-center rounded-2xl border border-[var(--olive)] px-5 py-2 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
        >
          Subscribe
        </Link>
      </div>
    </section>
  );
}
