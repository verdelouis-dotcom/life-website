import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import RegisterForm from "@/components/forms/register-form";

const REGISTER_URL = "https://www.longevityinitiativeforfoodandeducation.com/register";

export const metadata: Metadata = {
  title: "Register a LIFE Workshop | Track Community Impact",
  description: "Hosted a LIFE workshop? Register your event to help track community impact and expand the shared LIFE workshop movement.",
  alternates: {
    canonical: REGISTER_URL,
  },
  openGraph: {
    title: "Register a LIFE Workshop | Track Community Impact",
    description: "Hosted a LIFE workshop? Register your event to help track community impact and expand the shared LIFE workshop movement.",
    url: REGISTER_URL,
  },
  twitter: {
    title: "Register a LIFE Workshop | Track Community Impact",
    description: "Hosted a LIFE workshop? Register your event to help track community impact and expand the shared LIFE workshop movement.",
  },
};

export default function RegisterPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Measurement</p>
          <h1 className="section-heading">Register a LIFE Workshop</h1>
          <p className="mt-2 type-detail uppercase tracking-[0.3em] text-[var(--olive)]">For hosted LIFE workshops only</p>
          <p className="mt-4 type-body-muted">
            Use this form after you have hosted a LIFE workshop. Registration is how LIFE measures participation and reach for grants,
            accountability, and replication. Optional: upload a photo and provide consent so we can share the rhythm publicly.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <RegisterForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
