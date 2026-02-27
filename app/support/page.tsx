import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SupportForm from "@/components/forms/support-form";

const SUPPORT_OPTIONS = [
  {
    title: "Sponsor a seat",
    body: "Cover the $50 tuition for a neighbor who needs this education but can&apos;t afford it yet.",
  },
  {
    title: "Underwrite ingredients",
    body: "Fresh produce, beans, and olive oil add up. Help us buy the staples that make workshops possible.",
  },
  {
    title: "Partner locally",
    body: "Bring L.I.F.E. into your school, congregation, or workplace as part of your wellness strategy.",
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Support</p>
          <h1 className="mt-3 text-4xl font-semibold">Help the table return home.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            We&apos;re proving this model in one city first. Your contribution fuels the kitchens, the volunteers, and the
            curriculum so we can keep tuition accessible.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {SUPPORT_OPTIONS.map((option) => (
            <div key={option.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{option.title}</p>
              <p className="mt-3 text-[#5b5149]">{option.body}</p>
            </div>
          ))}
        </section>

        <section id="support-form" className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Tell us how you&apos;d like to help</h2>
          <p className="mt-3 text-[#5b5149]">No payment is taken here. We&apos;ll follow up with wiring instructions or sponsorship packets.</p>
          <div className="mt-6">
            <SupportForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
