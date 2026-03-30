import type { Metadata } from "next";
import RegisterForm from "@/components/forms/register-form";

const REGISTER_URL = "https://www.longevityinitiativeforfoodandeducation.com/register";

export const metadata: Metadata = {
  title: "Register a LIFE Cooking Experience | Track Community Impact",
  description: "Hosted a LIFE cooking experience? Register your event to help track community impact and expand the shared LIFE cooking experience movement.",
  alternates: {
    canonical: REGISTER_URL,
  },
  openGraph: {
    title: "Register a LIFE Cooking Experience | Track Community Impact",
    description: "Hosted a LIFE cooking experience? Register your event to help track community impact and expand the shared LIFE cooking experience movement.",
    url: REGISTER_URL,
  },
  twitter: {
    title: "Register a LIFE Cooking Experience | Track Community Impact",
    description: "Hosted a LIFE cooking experience? Register your event to help track community impact and expand the shared LIFE cooking experience movement.",
  },
};

export default function RegisterPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Measurement</p>
          <h1 className="section-heading">Register a LIFE Cooking Experience</h1>
          <p className="mt-2 type-detail uppercase tracking-[0.3em] text-[var(--olive)]">For hosted LIFE cooking experiences only</p>
          <p className="mt-4 type-body-muted">
            Use this form after you have hosted a LIFE cooking experience. Registration is how LIFE measures participation and reach for grants,
            accountability, and replication. Optional: upload a photo and provide consent so we can share the rhythm publicly.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <RegisterForm />
        </section>
      </main>
</>
  );
}
