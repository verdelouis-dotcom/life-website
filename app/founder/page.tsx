import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function FounderPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Founder Story</p>
            <h1 className="mt-3 text-4xl font-semibold">Why I&apos;m rebuilding the table</h1>
          </div>
          <div className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-4">
            <Image
              src="/images/founder.jpeg"
              alt="Founder Louis Verde preparing food"
              width={640}
              height={760}
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#5b5149]">
          <p>
            I grew up in upstate New York in a home that never felt small — even when it was. Three generations lived under one roof. My grandparents and parents were born in Italy and came to America as teenagers, chasing opportunity and a better life. What they carried with them was a way of living.
          </p>
          <p>
            Our house was always full. Family. Friends. Neighbors who felt like relatives. No one came by for a quick visit. They came in, sat down, and ate. My grandfather kept a massive garden bursting with lettuce, tomatoes, peas, peppers, squash, zucchini, garlic, eggplant, green beans, peach trees, mulberry trees, fig trees, raspberries, and barrels of basil and parsley. Wine was made the old-fashioned way. It wasn&apos;t a health trend. It was life.
          </p>
          <p>
            My grandmother was always in the kitchen. Preparing food wasn&apos;t a task — it was love. Recipes travelled across generations. The table was sacred. Meals were slow. Conversations were long. Laughter was constant. Everyone who came to our home left with bags full of whatever was in season. My grandparents lived into their 90s, celebrated and surrounded by family. At the time, I didn&apos;t realize how rare that was.
          </p>
          <p>
            After high school I joined the United States Navy. I experienced war and everything that comes with it, but one of the biggest shocks was getting to know my shipmates. Many didn&apos;t grow up around a dinner table, didn&apos;t have gardens, didn&apos;t live in multi-generational homes, and relied on processed food as normal. I remember writing my parents a letter — tears streaming down my face — thanking them not for money or comfort, but for community, for food, for the way of life they protected.
          </p>
          <p>
            That&apos;s when I realized what I assumed was ordinary was extraordinary. Later, as I studied the data — chronic disease rising, life expectancy falling, isolation replacing connection — I saw how far we drifted. We replaced gardens with drive-thrus, dinner tables with screens, community with convenience. It&apos;s costing us years of life.
          </p>
          <p>
            The Longevity Initiative for Food &amp; Education was born from that realization. This isn&apos;t about romanticizing the past; it&apos;s about reclaiming what worked. Longevity doesn&apos;t require wealth, complicated systems, or perfection. It requires real food, daily movement, connection, and intention. I watched two Italian immigrants build long, vibrant lives in America without surrendering the habits that protected their health. Now my mission is to bring those principles back — not as nostalgia, but as a practical, accessible path forward for American families.
          </p>
          <p className="font-semibold text-[#2e2a26]">
            Because if we change kitchens, we change habits. If we change habits, we change health. And if we change health, we change the future.
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
