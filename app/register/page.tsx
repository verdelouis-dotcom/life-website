import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import RegisterForm from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Measurement</p>
          <h1 className="section-heading">Register</h1>
          <p className="mt-3 type-lede">Less than one minute.</p>
          <p className="mt-4 type-body-muted">
            Registration is how L.I.F.E. measures participation and reach for reporting and grants. Optional: upload a photo and provide consent
            so we can share the rhythm publicly.
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
