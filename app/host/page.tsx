import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const PROVIDE_ITEMS = [
  {
    title: "1-Page Host Guide",
    body: "A clear, structured outline to help you lead with confidence.",
  },
  {
    title: "Simple Recipe Ideas",
    body: "Mediterranean-inspired, approachable meals designed for sharing.",
  },
  {
    title: "Conversation Prompts",
    body: "Questions that encourage meaningful, face-to-face dialogue.",
  },
  {
    title: "National Impact Tracking",
    body: "A centralized system that measures tables, people reached, and cities represented.",
  },
];

export default function HostPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Host L.I.F.E.</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#2e2a26]">Host a Table.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Restore a shared tradition that once anchored family life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/host-guide"
              className="rounded-2xl bg-[#6b7a46] px-5 py-3 text-white transition hover:bg-[#566236]"
            >
              View the Host Guide
            </Link>
            <Link
              href="/register"
              className="rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
            >
              Register Your Table
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">What You Do</h2>
          <ol className="mt-6 space-y-3 text-[#5b5149]">
            {[
              "Choose a date and invite 4–8 people.",
              "Prepare real, simple food.",
              "Sit together without phones or distractions.",
              "Use the conversation prompts provided.",
              "Register your table.",
              "Invite your guests to host within 30 days.",
            ].map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="font-semibold text-[#6b7a46]">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-3xl font-semibold text-[#2e2a26]">What We Provide</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROVIDE_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#2e2a26]">{item.title}</h3>
                <p className="mt-3 text-[#5b5149]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10 text-center">
          <p className="text-lg text-[#5b5149]">Every registered table strengthens the national story.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              Register Your Table
            </Link>
            <Link
              href="/host-guide"
              className="rounded-2xl border border-[#6b7a46] px-6 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
            >
              View the Host Guide
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
