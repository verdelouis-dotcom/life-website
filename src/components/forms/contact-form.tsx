"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      city: formData.get("city")?.toString().trim() ?? "",
      interest: formData.get("interest")?.toString().trim() || "General inquiry",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email || !payload.city || !payload.message) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
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
      console.error("contact submission failed", error);
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
      <input name="city" placeholder="City / Organization" required className="rounded-xl border px-4 py-3" />
      <select name="interest" className="rounded-xl border px-4 py-3" defaultValue="Host a Table">
        <option value="Host a Table">Host a Table</option>
        <option value="Community Workshop">Community Workshop</option>
        <option value="Educational Keynote">Educational Keynote</option>
        <option value="Partnership / Grant">Partnership / Grant</option>
        <option value="General inquiry">General Inquiry</option>
      </select>
      <textarea
        name="message"
        placeholder="Message"
        required
        className="min-h-[140px] rounded-xl border px-4 py-3"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Message received. We&apos;ll respond within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          Please complete all required fields or try again later.
        </p>
      )}
    </form>
  );
}
