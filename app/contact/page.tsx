import Link from "next/link";
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
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Let&apos;s talk.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Email is the fastest way to reach us. If you prefer a form, use the one below and we&apos;ll reply within two business days.
          </p>
          <p className="mt-4 text-sm text-[#5b5149]">
            Direct email: <Link className="underline" href="mailto:hello@longevityinitiativeforfoodandeducation.com">hello@longevityinitiativeforfoodandeducation.com</Link>
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold text-[#2e2a26]">Send a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
