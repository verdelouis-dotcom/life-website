"use client";

export default function ThankYouPage() {

  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 pb-24 pt-32">
        <section className="rounded-3xl border border-[var(--border)] bg-white/95 p-10 text-center shadow-sm">
          <p className="type-eyebrow text-[var(--muted)]">You&apos;re in</p>
          <h1 className="text-4xl font-serif text-[var(--ink)] md:text-5xl">You&apos;re in. Welcome to LIFE.</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">Your habit library is ready. Start here.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/downloads/life-guide.html" className="btn-primary" target="_blank" rel="noreferrer">
              Download the LIFE Guide →
            </a>
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">
            The LIFE Guide is your tool for building the Six Pillars into your family&apos;s life. Start with one habit. Share it with everyone at your table.
          </p>
        </section>
      </main>
    </div>
  );
}
