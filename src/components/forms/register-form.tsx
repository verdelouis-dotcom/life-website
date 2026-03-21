"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const GENERIC_ERROR_MESSAGE =
  "Sorry — something went wrong. Please try again, or email info@longevityinitiativeforfoodandeducation.com.";

export default function RegisterForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [photoAttachment, setPhotoAttachment] = useState<{ name: string; dataUrl: string } | null>(null);
  const [photoAttachment2, setPhotoAttachment2] = useState<{ name: string; dataUrl: string } | null>(null);
  const [photoAttachment3, setPhotoAttachment3] = useState<{ name: string; dataUrl: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    const form = event.currentTarget;

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      city: formData.get("city")?.toString().trim() ?? "",
      state: formData.get("state")?.toString().trim() ?? "",
      dateHosted: formData.get("dateHosted")?.toString().trim() ?? "",
      totalPeople: formData.get("totalPeople")?.toString().trim() ?? "",
      consentPhoto: formData.get("consentPhoto") === "on",
      source: "LIFE Workshop Registration",
      photoAttached: Boolean(photoAttachment) || Boolean(photoAttachment2) || Boolean(photoAttachment3),
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
      photoAttachment ? "Photo attached" : "No photo uploaded",
    ].join(" | ");

    try {
      const photos = [photoAttachment, photoAttachment2, photoAttachment3]
        .filter((p): p is { name: string; dataUrl: string } => p !== null)
        .map((p) => ({ name: p.name, dataUrl: p.dataUrl }));

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message,
          source: payload.source,
          attachments: photos.length > 0 ? photos : undefined,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(GENERIC_ERROR_MESSAGE);
        return;
      }

      setStatus("idle");
      setErrorMessage(null);
      form.reset();
      setPhotoAttachment(null);
      setPhotoAttachment2(null);
      setPhotoAttachment3(null);
      router.push("/register/thanks");
    } catch (error) {
      console.error("REGISTER_FORM_ERROR", error);
      setStatus("error");
      setErrorMessage(GENERIC_ERROR_MESSAGE);
    }
  }

  function readPhoto(file: File, setter: (val: { name: string; dataUrl: string } | null) => void) {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result?.toString() ?? null;
      setter(result ? { name: file.name || "photo.jpg", dataUrl: result } : null);
    };
    reader.readAsDataURL(file);
  }

  function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) { setPhotoAttachment(null); return; }
    readPhoto(file, setPhotoAttachment);
  }

  function handlePhotoChange2(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) { setPhotoAttachment2(null); return; }
    readPhoto(file, setPhotoAttachment2);
  }

  function handlePhotoChange3(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) { setPhotoAttachment3(null); return; }
    readPhoto(file, setPhotoAttachment3);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="type-eyebrow">
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
          <label htmlFor="email" className="type-eyebrow">
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
          <label htmlFor="city" className="type-eyebrow">
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
          <label htmlFor="state" className="type-eyebrow">
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
          <label htmlFor="dateHosted" className="type-eyebrow">
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
          <label htmlFor="totalPeople" className="type-eyebrow">
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
      <div className="grid gap-4 md:grid-cols-3">
        <div className="grid gap-2">
          <label htmlFor="photo" className="type-eyebrow">
            Photo 1 <span className="normal-case font-normal text-[var(--muted)]">(optional)</span>
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
        <div className="grid gap-2">
          <label htmlFor="photo2" className="type-eyebrow">
            Photo 2 <span className="normal-case font-normal text-[var(--muted)]">(optional)</span>
          </label>
          <input
            id="photo2"
            name="photo2"
            type="file"
            accept="image/*"
            className="rounded-2xl border border-dashed border-[var(--border)] bg-white/70 px-4 py-3 text-sm"
            onChange={handlePhotoChange2}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="photo3" className="type-eyebrow">
            Photo 3 <span className="normal-case font-normal text-[var(--muted)]">(optional)</span>
          </label>
          <input
            id="photo3"
            name="photo3"
            type="file"
            accept="image/*"
            className="rounded-2xl border border-dashed border-[var(--border)] bg-white/70 px-4 py-3 text-sm"
            onChange={handlePhotoChange3}
          />
        </div>
      </div>
      <label className="flex items-start gap-3 type-detail text-[var(--text)]">
        <input type="checkbox" name="consentPhoto" className="mt-1" />
        <span>I give LIFE permission to add these photos to the website.</span>
      </label>
      <button type="submit" disabled={status === "submitting"} className="btn-solid text-base disabled:opacity-60">
        {status === "submitting" ? "Submitting..." : "Submit Registration"}
      </button>
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{errorMessage}</p>
      )}
      <p className="type-detail">Your submission helps LIFE report measurable community impact.</p>
    </form>
  );
}
