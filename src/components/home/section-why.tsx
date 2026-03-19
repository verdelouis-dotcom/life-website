const WHY_COPY = `Life expectancy is declining.
Connection is fading.
Isolation is rising.
Chronic illness is accelerating.

These aren’t separate problems—they’re all connected.

LIFE exists to restore the daily habits that bring people back to health, back to connection, and back to the table—where those habits actually stick.`;

export default function SectionWhy() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h2 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Why It Matters</h2>
        <p className="mb-6 text-lg leading-relaxed text-neutral-800">The way we live is changing—and it’s costing us.</p>
        <p className="whitespace-pre-line text-base leading-relaxed text-neutral-700 md:text-lg">{WHY_COPY}</p>
      </div>
    </section>
  );
}
