import Image from "next/image";

export default function SectionWhy() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-[var(--border)] bg-[#fff8ef] card-padding text-center shadow-sm space-y-6">
          <p className="label-text text-[var(--olive)]">Why It Matters</p>
          <p className="body-lg leading-relaxed">
            We didn’t lose our health overnight.
            <br />
            <br />
            We lost it slowly—one missed meal, one broken routine, one empty table at a time.
            <br />
            <br />
            Now people are living sicker, lonelier, and more disconnected than ever.
            <br />
            <br />
            Because no one is holding the habits in place.
            <br />
            <br />
            LIFE rebuilds what we lost—starting at the table.
          </p>
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
