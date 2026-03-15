"use client";

import { useState } from "react";
import type { AssessmentResultsPayload } from "@/components/assessment/AssessmentTypes";

interface EmailCaptureCardProps {
  defaultFirstName?: string;
  report: AssessmentResultsPayload;
}

export default function EmailCaptureCard({ defaultFirstName = "", report }: EmailCaptureCardProps) {
  const [firstName, setFirstName] = useState(defaultFirstName);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage(null);

    const payload = {
      email,
      firstName: firstName || undefined,
      context: {
        source: "life-assessment",
        metrics: report.metrics,
      },
      report: {
        metrics: report.metrics,
        pillarScores: report.pillarScores,
        strengths: report.strengths,
        opportunities: report.opportunities,
        recommendations: report.recommendations,
      },
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(data?.error || "Unable to subscribe");
      }

      setStatus("success");
      const successMessage =
        data?.alreadySubscribed && typeof data?.message === "string"
          ? data.message
          : data?.message ?? (data?.alreadySubscribed ? "You’re already on the LIFE newsletter." : "Report on the way—check your inbox soon.");
      setMessage(successMessage);
      setEmail("");
    } catch (error) {
      console.error("ASSESSMENT_EMAIL_CAPTURE_ERROR", error);
      setStatus("error");
      const friendly =
        error instanceof Error && error.message ? error.message : "We couldn’t send the report right now. Please try again.";
      setMessage(friendly);
    }
  }

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Get Your Full Report</p>
      <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">Get Your Full Report</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Enter your email to receive your results, practical longevity tips, and updates from LIFE.
      </p>

      {status === "success" ? (
        <p className="mt-6 rounded-2xl border border-[var(--olive)] bg-[var(--olive)]/10 px-4 py-3 text-sm text-[var(--olive)]">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold text-[var(--life-forest)]" htmlFor="report-first-name">
              First Name
            </label>
            <input
              id="report-first-name"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base text-[var(--text)] focus:border-[var(--olive)] focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[var(--life-forest)]" htmlFor="report-email">
              Email
            </label>
            <input
              id="report-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base text-[var(--text)] focus:border-[var(--olive)] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-2xl bg-[var(--olive)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#394930] disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send My Report"}
          </button>
          {message && status === "error" && <p className="text-sm text-[var(--terracotta)]">{message}</p>}
        </form>
      )}

      <p className="mt-4 text-xs text-[var(--muted)]">No spam. Unsubscribe anytime.</p>
    </section>
  );
}
