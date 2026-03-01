import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import RegisterForm from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Measurement</p>
          <h1 className="mt-3 text-4xl font-semibold">Register</h1>
          <p className="mt-3 text-lg text-[#5b5149]">Less than one minute.</p>
          <p className="mt-4 text-base text-[#5b5149]">
            Registration is how L.I.F.E. measures participation and reach for program evaluation and grants.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <RegisterForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
