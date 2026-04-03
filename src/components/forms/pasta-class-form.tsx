"use client";

import { FormEvent, useRef, useState } from "react";

const ERROR_MESSAGE = "Sorry — something went wrong. Please email info@longevityinitiativeforfoodandeducation.com.";

export default function PastaClassForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      groupSize: formData.get("groupSize")?.toString().trim() ?? "",
      date: formData.get("date")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email || !payload.groupSize || !payload.date) {
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
          interestType: "Fresh Pasta Cooking Class",
          city: "Atlanta",
          message: `Fresh Pasta Class Inquiry\nGroup size: ${payload.groupSize}\nPreferred date: ${payload.date}\n${payload.message ? `Notes: ${payload.message}` : ""}`.trim(),
          source: "Pasta Class Page",
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("PASTA_CLASS_FORM_ERROR", error);
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
        <input id="name" name="name" required className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3" placeholder="Full name" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="type-eyebrow">
          Email
        </label>
        <input id="email" name="email" type="email" required className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3" placeholder="you@email.com" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="groupSize" className="type-eyebrow">
          Group size
        </label>
        <input id="groupSize" name="groupSize" required className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3" placeholder="2–6 guests" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="date" className="type-eyebrow">
          Preferred date
        </label>
        <input id="date" name="date" type="date" required className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="type-eyebrow">
          Message (optional)
        </label>
        <textarea id="message" name="message" className="min-h-[140px] rounded-2xl border border-[var(--border)] bg-white px-4 py-3" placeholder="Dietary needs, special request, etc." />
      </div>
      <button type="submit" disabled={status === "submitting"} className="btn-primary text-base disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
      {status === "success" && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Thank you. Lou and Kara will reach out to confirm your date.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{ERROR_MESSAGE}</p>
      )}
    </form>
  );
}
