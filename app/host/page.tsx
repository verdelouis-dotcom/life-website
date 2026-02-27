import HostForm from "@/components/forms/host-form";
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
            A simple shared meal can restore connection—and multiply impact beyond a single event.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#host-form"
              className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              I Want to Host
            </a>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10 text-center">
          <h2 className="text-2xl font-semibold">What it is</h2>
          <p className="mt-4 text-[#5b5149]">Hosting is simple.</p>
          <p className="mt-2 text-[#5b5149]">Gather a few people.</p>
          <p className="text-[#5b5149]">Prepare a shared meal.</p>
          <p className="text-[#5b5149]">Create space for conversation.</p>
          <p className="mt-4 text-[#5b5149]">We provide guidance and a clear framework after you raise your hand.</p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <h2 className="text-2xl font-semibold">Who it&apos;s for</h2>
          <p className="mt-4 text-[#5b5149]">Anyone who believes shared meals matter:</p>
          <p className="mt-2 text-[#5b5149]">Families. Friends. Neighborhood connectors. Community leaders.</p>
          <p className="mt-2 text-[#5b5149]">You don&apos;t need to be a chef. You need to be willing.</p>
        </section>

        <section id="host-form" className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Become a Host</h2>
          <p className="mt-3 text-[#5b5149]">We&apos;ll send next steps and a simple hosting guide.</p>
          <div className="mt-6">
            <HostForm />
          </div>
          <p className="mt-4 text-xs text-[#5b5149]">Participation is voluntary and does not create any financial obligation.</p>
        </section>

        <p className="mt-12 text-center text-sm text-[#5b5149]">
          Start where you are. Start at your table.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
