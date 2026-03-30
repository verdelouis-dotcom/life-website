"use client";

import { FormEvent, useRef, useState } from "react";

const ERROR_MESSAGE =
  "Sorry — something went wrong. Please try again or email info@longevityinitiativeforfoodandeducation.com.";

const INTEREST_OPTIONS = [
  "Partnership inquiry",
  "Host or LIFE cooking experience support",
  "Keynote or speaking",
  "Press / storytelling",
  "General question",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      city: formData.get("city")?.toString().trim() ?? "",
      interestType: formData.get("interestType")?.toString().trim() ?? "General question",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          city: payload.city,
          interestType: payload.interestType,
          message: payload.message,
          source: "Contact Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("CONTACT_FORM_ERROR", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name" className="type-eyebrow">
          Name
        </label>
        <input id="name" name="name" className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3" placeholder="Full name" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="type-eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          placeholder="you@email.com"
          required
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="city" className="type-eyebrow">
          City / Region
        </label>
        <input id="city" name="city" className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3" placeholder="City, State" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="interestType" className="type-eyebrow">
          Interest
        </label>
        <select id="interestType" name="interestType" className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="type-eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="min-h-[140px] rounded-2xl border border-[var(--border)] bg-white px-4 py-3"
          placeholder="Tell us how we can help."
        />
      </div>
      <button type="submit" disabled={status === "submitting"} className="btn-solid text-base disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {status === "success" && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thank you. A LIFE team member will reply within two business days.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{ERROR_MESSAGE}</p>
      )}
    </form>
  );
}
