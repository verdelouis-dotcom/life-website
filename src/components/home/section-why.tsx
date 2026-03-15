import Image from "next/image";
import Reveal from "@/components/ui/reveal";

export default function SectionWhy() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 text-center md:grid-cols-2 md:text-left">
        <div className="space-y-5">
          <Reveal>
            <h2 className="section-heading">Why Now</h2>
          </Reveal>
          <Reveal className="space-y-3 type-body-muted">
            <div className="space-y-1">
              <p>U.S. life expectancy is declining.</p>
              <p>Chronic disease is rising.</p>
              <p>Isolation is increasing.</p>
              <p>Family meals are disappearing.</p>
            </div>
            <p>LIFE reintroduces practical habits people can use at home through food, connection, and shared responsibility.</p>
          </Reveal>
        </div>
        <Reveal delay={120} className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-[var(--border)] shadow-lg">
          <Image
            src="/images/workshops/IMG_6843.jpeg"
            alt="Neighbors kneading dough during a LIFE table"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
