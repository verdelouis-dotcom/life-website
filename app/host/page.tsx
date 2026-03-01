import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const TOOLS = [
  {
    title: "Host Guide",
    description: "A structured, nonprofit toolkit to lead a meaningful table experience.",
    href: "/downloads/LIFE_Host_Guide_BRANDED.pdf",
  },
  {
    title: "Fresh Meal Ideas",
    description: "Approachable Mediterranean-style meals using seasonal ingredients.",
  },
  {
    title: "Conversation Prompts",
    description: "Simple prompts that strengthen connection and belonging.",
  },
  {
    title: "9 Pillars Tips",
    description: "Practical fundamentals you can carry into everyday life.",
  },
];

export default function HostPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Community Education</p>
          <h1 className="mt-4 text-4xl font-semibold">Host</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Host a shared meal that models practical longevity fundamentals—food, connection, and repeatable routines.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
              className="inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#556236]"
            >
              Download Host Guide
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl border border-[#6b7a46] px-6 py-3 text-base font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white"
            >
              Register Your Table
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Resources</p>
            <h2 className="mt-3 text-3xl font-semibold">Tools</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TOOLS.map((tool) => (
              <div key={tool.title} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef]/60 p-6">
                <p className="text-lg font-semibold text-[#2e2a26]">{tool.title}</p>
                <p className="mt-3 text-[#5b5149]">{tool.description}</p>
                {tool.href && (
                  <Link href={tool.href} className="mt-4 inline-flex text-sm font-semibold text-[#6b7a46] underline-offset-4 hover:underline">
                    Download
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-sm text-[#5b5149]">After you host, register your table so it counts toward measurable community participation.</p>
          <div className="mt-5 flex justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#556236]"
            >
              Register
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
