"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "success" | "error";

export default function WorkshopForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const city = formData.get("city")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim();
    const dietary = formData.get("dietary")?.toString().trim();

    if (!name || !email || !city) {
      setStatus("error");
      setErrorMessage("Please provide your name, email, and city.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      email,
      city,
      message: [
        "Workshop interest submission",
        phone ? `Phone: ${phone}` : undefined,
        dietary ? `Dietary notes: ${dietary}` : undefined,
      ]
        .filter(Boolean)
        .join(" | "),
      source: "Workshop reservation",
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
        setErrorMessage(data?.error ?? "Unable to reserve your seat. Please email us.");
        return;
      }

      setStatus("success");
      setErrorMessage(null);
      event.currentTarget.reset();
    } catch (error) {
      console.error("workshop registration failed", error);
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
      <div className="grid gap-4 md:grid-cols-2">
        <input name="city" placeholder="City" required className="rounded-xl border px-4 py-3" />
        <input name="phone" placeholder="Phone (optional)" className="rounded-xl border px-4 py-3" />
      </div>
      <input name="dietary" placeholder="Dietary notes (optional)" className="rounded-xl border px-4 py-3" />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236] disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Reserve my seat"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          You&apos;re on the list. We&apos;ll follow up with confirmation details.
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
