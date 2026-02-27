import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function HostPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">L.I.F.E.</p>
          <h1 className="mt-4 text-4xl font-semibold">Host a Table.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            One shared meal can restore connection, strengthen health, and multiply impact.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              I Want to Host
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10 text-center">
          <h2 className="text-2xl font-semibold">Why it matters</h2>
          <p className="mt-4 text-[#5b5149]">
            For the first time in modern history, life expectancy in the United States is declining.
          </p>
          <p className="mt-3 text-[#5b5149]">Families are eating separately.</p>
          <p className="text-[#5b5149]">Screens have replaced conversation.</p>
          <p className="text-[#5b5149]">Connection is disappearing.</p>
          <p className="mt-4 text-[#5b5149]">L.I.F.E. exists to rebuild what we lost.</p>
          <p className="text-[#5b5149]">It starts at the table.</p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <h2 className="text-2xl font-semibold">What hosting means</h2>
          <p className="mt-4 text-[#5b5149]">Hosting is simple.</p>
          <p className="mt-2 text-[#5b5149]">Gather a few people.</p>
          <p className="text-[#5b5149]">Prepare a shared meal.</p>
          <p className="text-[#5b5149]">Create space for conversation.</p>
          <p className="mt-4 text-[#5b5149]">We provide the guidance. You provide the table.</p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10 text-center">
          <h2 className="text-2xl font-semibold">Who can host?</h2>
          <p className="mt-4 text-[#5b5149]">Anyone who believes shared meals matter.</p>
          <p className="mt-2 text-[#5b5149]">Families.</p>
          <p className="text-[#5b5149]">Friends.</p>
          <p className="text-[#5b5149]">Community leaders.</p>
          <p className="text-[#5b5149]">Neighbors.</p>
          <p className="mt-4 text-[#5b5149]">You do not need to be a chef. You only need to care.</p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              Become a Host
            </Link>
          </div>
          <p className="mt-4 text-sm text-[#5b5149]">Details and next steps will be shared after you express interest.</p>
        </section>

        <p className="mt-12 text-center text-sm text-[#5b5149]">
          Start where you are. Start at your table.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
