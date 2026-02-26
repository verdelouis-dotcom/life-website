import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function JoinPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const hostStatus = typeof sp.host === "string" ? sp.host : undefined;
  const hostSuccess = hostStatus === "success";
  const hostError = hostStatus === "error";

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-4xl font-semibold tracking-tight">Join the Table</h1>
        <p className="mt-4 text-lg text-zinc-700">
          "Join" doesn't mean liking a post. It means taking one real step.
          Choose the path that fits your season.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">Attend</h2>
            <p className="mt-2 text-zinc-700">
              Come to a workshop. Learn Mediterranean staples and a weekly rhythm that sticks.
            </p>
            <a
              href="/workshops"
              className="mt-5 inline-flex rounded-xl bg-emerald-700 px-5 py-3 text-white hover:bg-emerald-800"
            >
              View Workshops
            </a>
          </section>

          <section className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">Host</h2>
            <p className="mt-2 text-zinc-700">
              This is how we scale. Open your table once a month using our simple host guide.
            </p>

            {hostSuccess && (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
                Thanks for raising your hand. Check your inbox for the host guide and next steps.
              </div>
            )}

            {hostError && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-900">
                Something went wrong. Please try again or email us at hello@longevityinitiativeforfoodandeducation.com.
              </div>
            )}

            <form action="/api/host" method="post" className="mt-5 grid gap-3">
              <input name="name" required placeholder="Name" className="rounded-xl border px-4 py-3" />
              <input name="email" type="email" required placeholder="Email" className="rounded-xl border px-4 py-3" />
              <input name="city" placeholder="City" className="rounded-xl border px-4 py-3" />
              <button type="submit" className="rounded-xl border bg-white px-5 py-3 hover:bg-zinc-50">
                Become a Table Host
              </button>
            </form>

            <p className="mt-3 text-xs text-zinc-600">
              You'll receive the host guide + next steps.
            </p>
          </section>

          <section className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">Support</h2>
            <p className="mt-2 text-zinc-700">
              Help us bring workshops to families, schools, and communities.
            </p>

            <form action="/api/sponsor" method="post" className="mt-5 grid gap-3">
              <input name="name" required placeholder="Name" className="rounded-xl border px-4 py-3" />
              <input name="email" type="email" required placeholder="Email" className="rounded-xl border px-4 py-3" />
              <input name="amount" placeholder="Sponsorship amount (optional)" className="rounded-xl border px-4 py-3" />
              <button type="submit" className="rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-black">
                Sponsor a Table
              </button>
            </form>

            <p className="mt-3 text-xs text-zinc-600">
              We'll follow up with sponsorship options.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
