import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Request Information</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Hosting, workshops, partnerships, and presentations—tell us what you&apos;re interested in and we&apos;ll respond with next steps.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
