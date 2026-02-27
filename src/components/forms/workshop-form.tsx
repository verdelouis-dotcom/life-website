"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "success" | "error";

export default function WorkshopForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() || undefined,
      dietary: formData.get("dietary")?.toString().trim() || undefined,
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/workshop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error("workshop registration failed", error);
      setStatus("error");
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
        <input name="phone" placeholder="Phone (optional)" className="rounded-xl border px-4 py-3" />
        <input name="dietary" placeholder="Dietary restrictions (optional)" className="rounded-xl border px-4 py-3" />
      </div>
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
      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          Something went wrong. Please try again or email us.
        </p>
      )}
    </form>
  );
}
