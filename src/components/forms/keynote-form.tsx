"use client";

import { FormEvent, useState } from "react";

const ERROR_MESSAGE =
  "Sorry — something went wrong. Please try again or email info@longevityinitiativeforfoodandeducation.com.";

export default function KeynoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      organization: formData.get("organization")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      preferredDate: formData.get("preferredDate")?.toString().trim() ?? "",
      location: formData.get("location")?.toString().trim() ?? "",
      notes: formData.get("notes")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      return;
    }

    const message = [
      `Organization: ${payload.organization || "N/A"}`,
      `Preferred Date: ${payload.preferredDate || "Flexible"}`,
      `Location: ${payload.location || "N/A"}`,
      `Notes: ${payload.notes || "N/A"}`,
    ].join(" | ");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          city: payload.location,
          interestType: "Keynote Inquiry",
          message,
          source: "Keynote Request",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error("KEYNOTE_FORM_ERROR", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name" className="type-eyebrow">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          placeholder="Full name"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="organization" className="type-eyebrow">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          placeholder="Community group, school, etc."
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="type-eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          placeholder="you@email.com"
        />
      </div>
      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
        <div className="grid gap-1">
          <label htmlFor="preferredDate" className="type-eyebrow">
            Preferred Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="location" className="type-eyebrow">
            Location
          </label>
          <input
            id="location"
            name="location"
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
            placeholder="City / State"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="notes" className="type-eyebrow">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          className="min-h-[120px] rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          placeholder="Context, audience, or format."
        />
      </div>
      <button type="submit" disabled={status === "submitting"} className="btn-solid text-base disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
      {status === "success" && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thank you. We&apos;ll reply within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{ERROR_MESSAGE}</p>
      )}
    </form>
  );
}
