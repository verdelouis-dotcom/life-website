"use client";

import { FormEvent, useState } from "react";

const GENERIC_ERROR_MESSAGE =
  "Sorry — something went wrong. Please try again, or email info@longevityinitiativeforfoodandeducation.com.";

export default function SpeakingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      organization: formData.get("organization")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      preferredDate: formData.get("preferredDate")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setErrorMessage("Name and email are required.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          source: "Keynote Request",
          message: `Organization: ${payload.organization || "N/A"} | Preferred Date: ${payload.preferredDate || "Flexible"}`,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(GENERIC_ERROR_MESSAGE);
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error("SPEAKING_FORM_ERROR", error);
      setStatus("error");
      setErrorMessage(GENERIC_ERROR_MESSAGE);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
          placeholder="Full name"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
          placeholder="School, civic group, workplace"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
          placeholder="you@email.com"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="preferredDate" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Preferred Date
        </label>
        <input id="preferredDate" name="preferredDate" type="date" className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3" />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-2xl bg-[var(--olive)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#3a4a33] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Keynote"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">Thank you—we will reply soon.</p>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{errorMessage}</p>
      )}
    </form>
  );
}
