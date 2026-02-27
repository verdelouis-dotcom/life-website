"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "success" | "error";

export default function HostForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      city: formData.get("city")?.toString().trim() ?? "",
      reason: formData.get("reason")?.toString().trim() || undefined,
    };

    if (!payload.name || !payload.email || !payload.city) {
      setStatus("error");
      setErrorMessage("Name, email, and city are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/host", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "Unable to submit your interest. Please email us.");
        return;
      }

      setStatus("success");
      setErrorMessage(null);
      event.currentTarget.reset();
    } catch (error) {
      console.error("host interest failed", error);
      setStatus("error");
      setErrorMessage("Network error. Please email us.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" placeholder="Name" required className="rounded-xl border px-4 py-3" />
        <input name="email" type="email" placeholder="Email" required className="rounded-xl border px-4 py-3" />
      </div>
      <input name="city" placeholder="City" required className="rounded-xl border px-4 py-3" />
      <textarea
        name="reason"
        placeholder="Why do you want to host? (optional)"
        className="min-h-[120px] rounded-xl border px-4 py-3"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236] disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thank you. We&apos;ll send hosting guidance shortly.
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
