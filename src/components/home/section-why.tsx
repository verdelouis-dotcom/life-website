export default function SectionWhy() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h2 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Why It Matters</h2>
        <p className="mb-4 text-lg leading-relaxed text-neutral-800">The way we live is changing—and it’s costing us.</p>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
          <p>
            We eat faster.<br />We gather less.<br />We rely more on convenience and less on community.
          </p>
          <p>These are not separate problems. They shape how we eat, how we move, how we connect, and how well we live over time.</p>
          <p>LIFE exists to bring people back to the table—where healthier habits can be learned, practiced, and passed on.</p>
        </div>
      </div>
    </section>
  );
}
