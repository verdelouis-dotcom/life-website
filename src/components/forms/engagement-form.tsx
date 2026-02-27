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
        <input name="name" placeholder="Name" required className="rounded-xl border px-4 py-3" />
        <input name="email" type="email" placeholder="Email" required className="rounded-xl border px-4 py-3" />
      </div>
      <input name="city" placeholder="City (optional)" className="rounded-xl border px-4 py-3" />
      <select name="interestType" required defaultValue={INTEREST_OPTIONS[0]} className="rounded-xl border px-4 py-3">
        {INTEREST_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Message (optional)"
        className="min-h-[140px] rounded-xl border px-4 py-3"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236] disabled:opacity-60"
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
