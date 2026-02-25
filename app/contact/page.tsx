import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

type SearchParams = Record<string, string | string[] | undefined>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const isSuccess = typeof sp.success === "string" && sp.success === "1";

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-zinc-700">
          Want to bring a workshop to your club, school, or community? Reach out.
        </p>

        {isSuccess && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
            Message sent. We'll reply soon.
          </div>
        )}

        <div className="mt-10 rounded-2xl border p-7">
          <form action="/api/contact" method="post" className="grid gap-3">
            <input
              name="name"
              required
              placeholder="Name"
              className="rounded-xl border px-4 py-3"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="rounded-xl border px-4 py-3"
            />
            <input
              name="organization"
              placeholder="Organization (optional)"
              className="rounded-xl border px-4 py-3"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              className="min-h-[140px] rounded-xl border px-4 py-3"
            />
            <button
              type="submit"
              className="mt-2 rounded-xl bg-emerald-700 px-5 py-3 text-white hover:bg-emerald-800"
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
