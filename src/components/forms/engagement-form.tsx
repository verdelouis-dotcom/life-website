"use client";

import { FormEvent, useState } from "react";

const INTEREST_OPTIONS = [
  "Hosting a Table",
  "Bring L.I.F.E. to My Organization (Speaking / Workshop)",
  "Supporting the Mission (Donation)",
  "Learning More",
];

const FRIENDLY_ERROR =
  "Something went wrong. Please try again or email info@longevityinitiativeforfoodandeducation.com.";

export default function EngagementForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      city: formData.get("city")?.toString().trim() || undefined,
      message: formData.get("message")?.toString().trim() || undefined,
      interestType: formData.get("interestType")?.toString().trim() ?? INTEREST_OPTIONS[0],
      source: "Website Engagement Form",
    };

    if (!payload.name || !payload.email || !payload.interestType) {
      setStatus("error");
      setErrorMessage("Name, email, and interest are required.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? FRIENDLY_ERROR);
        return;
      }

      setStatus("success");
      setErrorMessage(null);
      event.currentTarget.reset();
    } catch (error) {
      console.error("ENGAGEMENT_FORM_ERROR", error);
      setStatus("error");
      setErrorMessage(FRIENDLY_ERROR);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--olive)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
            className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--olive)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="city" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">
          City (optional)
        </label>
        <input
          id="city"
          name="city"
          placeholder="Peachtree City, GA"
          className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--olive)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
        />
      </div>
      <div className="grid gap-1">
        <label
          htmlFor="interestType"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--olive)]"
        >
          How would you like to engage?
        </label>
        <select
          id="interestType"
          name="interestType"
          required
          defaultValue={INTEREST_OPTIONS[0]}
          className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--olive)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
        >
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Share any context or timing preferences."
          className="min-h-[140px] rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--olive)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-2xl bg-[var(--olive)] px-6 py-3 text-white transition hover:bg-[#3a4a33] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thank you. We will follow up shortly.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{errorMessage}</p>
      )}
    </form>
  );
}
