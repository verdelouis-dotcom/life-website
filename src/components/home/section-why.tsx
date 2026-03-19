const WHY_COPY = `Life expectancy is declining.
Connection is fading.
Isolation is rising.
Chronic illness is accelerating.

These aren’t separate problems—they’re all connected.

LIFE exists to restore the daily habits that bring people back to health, back to connection, and back to the table—where those habits actually stick.`;

export default function SectionWhy() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Why It Matters</p>
        <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">The way we live is changing—and it’s costing us.</h2>
        <p className="whitespace-pre-line text-base leading-relaxed text-neutral-700 md:text-lg">{WHY_COPY}</p>
      </div>
    </section>
  );
}
