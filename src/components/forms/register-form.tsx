"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const GENERIC_ERROR_MESSAGE =
  "Sorry — something went wrong. Please try again, or email info@longevityinitiativeforfoodandeducation.com.";

export default function RegisterForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [photoData, setPhotoData] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      city: formData.get("city")?.toString().trim() ?? "",
      state: formData.get("state")?.toString().trim() ?? "",
      dateHosted: formData.get("dateHosted")?.toString().trim() ?? "",
      totalPeople: formData.get("totalPeople")?.toString().trim() ?? "",
      consentPhoto: formData.get("consentPhoto") === "on",
      source: "Table Registration",
      photoData,
    };

    if (!payload.name || !payload.email || !payload.dateHosted || !payload.totalPeople) {
      setStatus("error");
      setErrorMessage("Name, email, hosted date, and total people are required.");
      return;
    }

    const message = [
      `City: ${payload.city || "N/A"}, State: ${payload.state || "N/A"}`,
      `Date Hosted: ${payload.dateHosted}`,
      `Total People Hosted: ${payload.totalPeople}`,
      `Photo consent: ${payload.consentPhoto ? "Yes" : "No"}`,
      payload.photoData ? "Photo attached (base64)" : "No photo uploaded",
    ].join(" | ");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message,
          source: payload.source,
          attachment: payload.photoData,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(GENERIC_ERROR_MESSAGE);
        return;
      }

      setStatus("idle");
      setErrorMessage(null);
      event.currentTarget.reset();
      setPhotoData(null);
      router.push("/register/thanks");
    } catch (error) {
      console.error("REGISTER_FORM_ERROR", error);
      setStatus("error");
      setErrorMessage(GENERIC_ERROR_MESSAGE);
    }
  }

  async function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPhotoData(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result?.toString() ?? null;
      setPhotoData(result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
            placeholder="First and last name"
          />
        </div>
        <div className="grid gap-2">
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
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="city" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
            City
          </label>
          <input
            id="city"
            name="city"
            className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
            placeholder="Atlanta"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="state" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
            State
          </label>
          <input
            id="state"
            name="state"
            className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
            placeholder="GA"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="dateHosted" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
            Date Hosted
          </label>
          <input
            id="dateHosted"
            name="dateHosted"
            type="date"
            required
            className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="totalPeople" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
            Total People Hosted
          </label>
          <input
            id="totalPeople"
            name="totalPeople"
            type="number"
            min={1}
            required
            className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3"
            placeholder="8"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="photo" className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Optional Photo
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="rounded-2xl border border-dashed border-[var(--border)] bg-white/70 px-4 py-3 text-sm"
          onChange={handlePhotoChange}
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-[var(--text)]">
        <input type="checkbox" name="consentPhoto" className="mt-1" />
        <span>Yes, L.I.F.E. may share this photo publicly.</span>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-2xl bg-[var(--olive)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#3a4a33] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Registration"}
      </button>
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{errorMessage}</p>
      )}
      <p className="text-xs text-[var(--muted)]">Your submission helps L.I.F.E. report measurable community impact.</p>
    </form>
  );
}
