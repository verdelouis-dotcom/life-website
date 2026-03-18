import Image from "next/image";

export default function SectionWhy() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto space-y-6 px-6 text-center">
        <p className="label-text text-[var(--olive)]">Why It Matters</p>
        <h2 className="heading-lg text-[var(--life-forest)]">Why it matters</h2>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 pt-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm space-y-4 body-md leading-relaxed text-center md:text-left">
          <p>We didn’t lose our health overnight. We lost it slowly—one missed meal, one broken routine, one empty table at a time.</p>
          <p>Now people are living sicker, lonelier, and more disconnected than ever because no one is holding the habits in place.</p>
          <p>LIFE rebuilds what we lost—starting at the table.</p>
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-[var(--border)] shadow-lg">
          <Image
            src="/images/workshops/IMG_6843.jpeg"
            alt="Neighbors kneading dough during a LIFE table"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
