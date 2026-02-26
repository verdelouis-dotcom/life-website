import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-[#dfd4c6] bg-[#fff7ef] p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#2e2a26]">
              Ready to start living the Italian way?
            </h3>
            <p className="mt-2 text-[#5b5149]">
              Not a trend. Not a challenge. A lifestyle you can keep: simple ingredients,
              daily movement, and people around the table.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/join"
              className="rounded-xl bg-[#6b7a46] px-5 py-3 text-white transition hover:bg-[#566236]"
            >
              Join the Table
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[#c46a3a]/50 px-5 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
            >
              Bring L.I.F.E. to Your Group
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
