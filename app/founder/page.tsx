import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function FounderPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[#2e2a26]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Founder Story</p>
        <h1 className="mt-3 text-4xl font-semibold">Why I&apos;m rebuilding the table</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#5b5149]">
          <p>
            I grew up in a kitchen that always smelled like roasted tomatoes, garlic, and lemon. We didn&apos;t own much, but we owned a table, and we used it every single night. My dad stretched ingredients, my mom led the conversation, and we learned to slow down together.
          </p>
          <p>
            Years later I noticed how often friends answered &ldquo;almost never&rdquo; when I asked about shared meals. I started keeping a notebook of these conversations. The stories were heartbreaking: parents eating in cars, kids alone with screens, couples too exhausted to cook.
          </p>
          <p>
            When I dug into the research, the picture was obvious. The table isn&apos;t just where food is served. It bundles nutrition, movement, belonging, and purpose. Remove it and everything frays: health, trust, identity, hope.
          </p>
          <p>
            L.I.F.E. exists because I&apos;m not interested in nostalgia. I&apos;m interested in building a new normal. That begins locally. We host workshops, cook Mediterranean staples, and teach families how to reclaim this rhythm. Once it&apos;s proven here, we&apos;ll expand carefully.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/workshops" className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]">
            Join a workshop
          </Link>
          <Link href="/support" className="rounded-2xl border border-[#6b7a46] px-6 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]">
            Support the mission
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
