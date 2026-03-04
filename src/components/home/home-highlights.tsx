import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const HIGHLIGHTS = [
  {
    title: "Our Environment Changed",
    description:
      "Convenience stripped away shared meals, natural movement, and unhurried conversation. We are rebuilding those daily systems with evidence-informed habits.",
    href: "/why-this-matters",
    linkLabel: "See why this matters",
    image: "/images/why-table.jpg",
  },
  {
    title: "Monthly Table Model",
    description:
      "Once a month we host, gift ingredients, and issue a 30-day replication challenge. One faithful table becomes 78 households in a year.",
    href: "/what-we-do",
    linkLabel: "Study the model",
    image: "/images/workshops/pasta-lesson-1.jpg",
  },
  {
    title: "Workshops & Education",
    description:
      "Keynotes and hands-on demos equip schools, civic groups, and employers with longevity fundamentals they can implement immediately.",
    href: "/workshops",
    linkLabel: "Bring a workshop",
    image: "/images/workshops/pasta-lesson-2.jpg",
  },
];

export default function HomeHighlights() {
  return (
    <section className="bg-[#f8f4ec] py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Key Focus Areas</p>
          <h2 className="text-3xl font-semibold">The story, the system, the tools.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-sm"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition duration-500 hover:scale-[1.03]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-base leading-relaxed text-[var(--muted)]">{item.description}</p>
                <Link href={item.href} className="inline-flex text-sm font-semibold text-[var(--olive)] underline-offset-4 hover:underline">
                  {item.linkLabel}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
