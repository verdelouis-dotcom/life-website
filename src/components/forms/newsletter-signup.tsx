"use client";

import { FormEvent, useState } from "react";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  compact?: boolean;
  buttonLabel?: string;
}

export default function NewsletterSignup({ title, description, compact = false, buttonLabel = "Join the Newsletter" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("You are on the list. Thank you for being part of the table.");
      setEmail("");
    } catch (error) {
      console.error("NEWSLETTER_SIGNUP_ERROR", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again or email info@longevityinitiativeforfoodandeducation.com.");
    }
  }

  if (status === "success" && compact) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm text-[var(--olive)] shadow-sm">
        You&apos;re subscribed to The Shared Table. Welcome.
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${compact ? "text-left" : "text-center"}`}>
      {title && <h3 className={`${compact ? "text-lg" : "text-2xl"} font-semibold text-[var(--life-forest)]`}>{title}</h3>}
      {description && <p className="text-sm text-[var(--muted)]">{description}</p>}
      <form onSubmit={handleSubmit} className={`flex w-full flex-col gap-3 ${compact ? "sm:flex-row" : "sm:flex-row"}`}>
        <label className="sr-only" htmlFor={`newsletter-email-${compact ? "compact" : "full"}`}>
          Email address
        </label>
        <input
          id={`newsletter-email-${compact ? "compact" : "full"}`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="you@email.com"
          className="flex-1 rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base text-[var(--text)] shadow-sm focus:border-[var(--olive)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#394930] disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : buttonLabel}
        </button>
      </form>
      {message && (
        <p className={`text-sm ${status === "success" ? "text-[var(--olive)]" : "text-[var(--terracotta)]"}`}>{message}</p>
      )}
    </div>
  );
}
