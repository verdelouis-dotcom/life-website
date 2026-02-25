import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function WorkshopsPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const isSuccess = typeof sp.success === "string" && sp.success === "1";
  const isError = typeof sp.error === "string" && sp.error === "1";

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-4xl font-semibold tracking-tight">Workshops</h1>
        <p className="mt-4 text-lg text-zinc-700">
          Bring L.I.F.E. to your school, church, Rotary, OSDIA lodge, or community group.
        </p>

        {isSuccess && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
            Workshop request received. We'll be in touch shortly.
          </div>
        )}

        {isError && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900">
            Something went wrong. Please try again or email us directly at{" "}
            <a className="underline" href="mailto:info@longevityinitiativeforfoodandeducation.com">
              info@longevityinitiativeforfoodandeducation.com
            </a>
            .
          </div>
        )}

        <div className="mt-10 rounded-2xl border p-8">
          <form action="/api/workshop" method="post" className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Full Name"
                className="rounded-xl border px-4 py-3"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="rounded-xl border px-4 py-3"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input name="phone" placeholder="Phone" className="rounded-xl border px-4 py-3" />
              <input
                name="organization"
                placeholder="Organization"
                className="rounded-xl border px-4 py-3"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input name="city" placeholder="City" className="rounded-xl border px-4 py-3" />
              <input
                name="preferredDate"
                placeholder="Preferred Date"
                className="rounded-xl border px-4 py-3"
              />
            </div>

            <input
              name="attendees"
              placeholder="Estimated Attendees"
              className="rounded-xl border px-4 py-3"
            />

            <textarea
              name="message"
              placeholder="Tell us about your group and goals"
              className="min-h-[140px] rounded-xl border px-4 py-3"
            />

            <button
              type="submit"
              className="mt-2 rounded-xl bg-emerald-700 px-5 py-3 text-white hover:bg-emerald-800"
            >
              Request Workshop
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
