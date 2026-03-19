const WHY_COPY = `Life expectancy is declining.
Connection is fading.
Isolation is rising.
Chronic illness is accelerating.

These aren’t separate problems—they’re all connected.

LIFE exists to restore the daily habits that bring people back to health, back to connection, and back to the LIFE workshop—where those habits actually stick.`;

export default function SectionWhy() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Why It Matters</p>
        <p className="whitespace-pre-line max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">{WHY_COPY}</p>
      </div>
    </section>
  );
}
