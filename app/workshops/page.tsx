import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import WorkshopForm from "@/components/forms/workshop-form";

const FORMAT_DETAILS = [
  {
    title: "Education",
    body: "30 minutes on the data behind Mediterranean lifestyles, shared meals, and local health gaps.",
  },
  {
    title: "Hands-on Cooking",
    body: "We cook together using seasonal produce, beans, herbs, and olive oil. Everything is replicable at home.",
  },
  {
    title: "Shared Meal",
    body: "Phones go away. We sit, eat slowly, and walk through guided questions about family rhythms.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Community Programming</p>
          <h1 className="mt-3 text-4xl font-semibold">Community Cooking Workshops</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            These nonprofit educational workshops blend hands-on meal preparation, evidence-informed teaching, and a guided shared dining experience. Participants are invited to support L.I.F.E.&apos;s educational mission through a suggested contribution of $50 per participant.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {FORMAT_DETAILS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{item.title}</p>
              <p className="mt-3 text-[#5b5149]">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Next workshop</h2>
          <div className="mt-4 grid gap-4 text-[#5b5149] md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">Date</p>
              <p className="mt-1 text-lg font-semibold text-[#2e2a26]">March 22, 2026</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">Time</p>
              <p className="mt-1 text-lg font-semibold text-[#2e2a26]">4:00 - 6:00 PM</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">Location</p>
              <p className="mt-1 text-lg font-semibold text-[#2e2a26]">Peachtree City Test Kitchen</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#5b5149]">
            Seats are capped at 12 to keep it personal. Reserve yours below and we&apos;ll send final details.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-2xl font-semibold">Reserve your seat</h2>
          <p className="mt-3 text-[#5b5149]">
            Fill this out for each attendee. Phone and dietary notes are optional but helpful for planning. We&apos;ll confirm your reservation and share contribution details.
          </p>
          <div className="mt-6">
            <WorkshopForm />
          </div>
          <p className="mt-6 text-xs text-[#5b5149]">
            A portion of contributions associated with in-person programming may not be tax-deductible due to goods or services received.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
