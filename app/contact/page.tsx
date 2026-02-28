import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10 text-[#5b5149]">
          <p>For hosting, workshops, and partnerships, use the Get Involved form on the homepage so we can route your message immediately.</p>
          <a
            href="/#get-involved"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-[#6b7a46] px-5 py-3 text-base font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6b7a46]/40 focus:ring-offset-2"
          >
            Go to the Get Involved form
          </a>
          <p className="mt-6 text-sm">
            Prefer email? Reach us at{" "}
            <a href="mailto:info@longevityinitiativeforfoodandeducation.com">
              info@longevityinitiativeforfoodandeducation.com
            </a>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
