"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TRACKER_UNLOCK_KEY } from "@/lib/tracker";

export default function ThankYouPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(TRACKER_UNLOCK_KEY, new Date().toISOString());
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    try {
      setStatus("loading");
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tag: "donor" }),
      });

      if (!response.ok) {
        throw new Error("Unable to save email");
      }

      setStatus("success");
      setEmail("");
      setMessage("You're on the list. Watch your inbox for updates from LIFE.");
    } catch (error) {
      console.error("Failed to save donor email", error);
      setStatus("error");
      setMessage("We couldn't save your email. Please try again.");
    }
  };

  return (
    <div className="bg-[var(--offwhite)] text-[var(--ink)]">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 pb-24 pt-32">
        <section className="rounded-3xl border border-[var(--border)] bg-white/90 p-10 shadow-sm">
          <p className="type-eyebrow text-center text-[var(--muted)]">Thank you</p>
          <h1 className="text-center text-4xl font-serif text-[var(--ink)] md:text-5xl">Welcome to LIFE — your journey starts tonight.</h1>
          <p className="mt-6 text-center text-lg text-[var(--muted)]">
            Download the LIFE Guide, add the tracker to your phone, and keep your momentum going. Your gift gives another family the tools to begin their own journey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/downloads/life-guide.pdf" className="btn-primary" download>
              Download the LIFE Guide
            </a>
            <Link href="/tracker" className="btn-outline">
              Open the LIFE Tracker
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--border)] bg-white/90 p-10 shadow-sm">
          <p className="type-eyebrow text-[var(--muted)]">Stay in the loop</p>
          <h2 className="text-3xl font-serif text-[var(--ink)]">Receive invites, habit drops, and pilot updates.</h2>
          <p className="mt-3 text-[var(--muted)]">
            Enter the email you used for your donation and we&apos;ll send updates as the pilot grows. You can unsubscribe anytime.
          </p>
          <form className="mt-6 flex flex-col gap-3 md:flex-row" onSubmit={handleSubmit}>
            <input
              className="flex-1 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-base text-[var(--ink)] outline-none"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button
              className="btn-primary min-w-[180px] text-center"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Saving..." : "Keep me updated"}
            </button>
          </form>
          {message && (
            <p className={`mt-3 text-sm ${status === "error" ? "text-[var(--terra)]" : "text-[var(--muted)]"}`}>
              {message}
            </p>
          )}
        </section>

        <section className="rounded-3xl border border-[var(--border)] bg-white/90 p-10 text-center shadow-sm">
          <h3 className="text-2xl font-serif text-[var(--ink)]">Ready for your next table?</h3>
          <p className="mt-3 text-[var(--muted)]">
            Share the LIFE Guide with someone you love. Hosting within 30 days moves you to the next level and unlocks more resources.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/workshops" className="btn-outline">
              Attend another workshop
            </Link>
            <Link href="/host" className="btn-primary">
              Host a LIFE Table
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
