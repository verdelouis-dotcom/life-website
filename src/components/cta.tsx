import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              Ready to start living the Italian way?
            </h3>
            <p className="mt-2 text-zinc-700">
              Not a trend. Not a challenge. A lifestyle you can keep: simple ingredients,
              daily movement, and people around the table.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/join"
              className="rounded-xl bg-emerald-700 px-5 py-3 text-white hover:bg-emerald-800"
            >
              Join the Table
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border px-5 py-3 hover:bg-zinc-50"
            >
              Bring L.I.F.E. to Your Group
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
