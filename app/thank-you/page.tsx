"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("life_tracker_access", Date.now().toString());
    } catch {
      // ignore localStorage errors (Safari private mode, etc.)
    }
  }, []);

  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 pb-24 pt-32">
        <section className="rounded-3xl border border-[var(--border)] bg-white/95 p-10 text-center shadow-sm">
          <p className="type-eyebrow text-[var(--muted)]">You&apos;re in</p>
          <h1 className="text-4xl font-serif text-[var(--ink)] md:text-5xl">You&apos;re in. Welcome to LIFE.</h1>
          <p className="mt-4 text-lg text-[var(--muted)]">Your habit library and tracker are ready. Start here.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/tracker" className="btn-primary">
              Open the LIFE Tracker →
            </Link>
            <a href="/downloads/life-guide.pdf" className="btn-outline" download>
              Download the LIFE Guide →
            </a>
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">
            The LIFE Guide and daily tracker are your two tools for building the Six Pillars into your life. Work through the guide first, then use the tracker
            to build your streak. Come back to both anytime.
          </p>
        </section>
      </main>
    </div>
  );
}
