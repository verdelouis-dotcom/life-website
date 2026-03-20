export default function SectionWhy() {
  return (
    <section className="bg-[#f0e7dc] text-[var(--text)]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Why It Matters</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
          <p className="text-lg font-medium text-neutral-800">The way we live is changing—and it’s costing us.</p>
          <p>
            We eat faster.<br />We gather less.<br />We rely more on convenience and less on community.
          </p>
          <p className="font-medium text-neutral-800">These are not separate problems.</p>
          <p>They shape how we eat, how we move, how we connect, and how well we live over time.</p>
          <p>LIFE exists to bring people back to the table—where healthier habits can be learned, practiced, and passed on.</p>
        </div>
      </div>
    </section>
  );
}
