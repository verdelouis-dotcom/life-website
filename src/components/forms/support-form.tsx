"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "success" | "error";

export default function SupportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const amount = formData.get("amount")?.toString().trim();

    if (!name || !email) {
      setStatus("error");
      setErrorMessage("Name and email are required.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      email,
      city: "Support submission",
      message: amount && amount.length > 0 ? `Support interest amount: ${amount}` : "Support interest submission",
      source: "Support form",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "Unable to submit. Please email us.");
        return;
      }

      setStatus("success");
      setErrorMessage(null);
      event.currentTarget.reset();
    } catch (error) {
      console.error("support interest failed", error);
      setStatus("error");
      setErrorMessage("Network error. Please email us.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input name="name" placeholder="Name" required className="rounded-xl border px-4 py-3" />
      <input name="email" type="email" placeholder="Email" required className="rounded-xl border px-4 py-3" />
      <input name="amount" placeholder="Amount you&apos;d like to contribute (optional)" className="rounded-xl border px-4 py-3" />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "I want to support"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thank you. We&apos;ll follow up with next steps.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
