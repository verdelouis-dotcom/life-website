"use client";

import Image from "next/image";

interface PhotoHighlightProps {
  imageSrc: string;
  alt: string;
  title: string;
  body: string;
  eyebrow?: string;
  caption?: string;
  reverse?: boolean;
}

export default function PhotoHighlight({ imageSrc, alt, title, body, eyebrow, caption, reverse }: PhotoHighlightProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div
        className={`flex flex-col gap-8 rounded-[40px] border border-[var(--border)] bg-white/90 p-8 shadow-sm md:items-center md:gap-10 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)]">
            <Image src={imageSrc} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          {caption && <p className="mt-3 text-xs text-[var(--muted)]">{caption}</p>}
        </div>
        <div className="md:w-1/2">
          {eyebrow && <p className="type-eyebrow text-[var(--olive)]">{eyebrow}</p>}
          <h2 className="mt-2 text-3xl font-semibold text-[var(--life-forest)]">{title}</h2>
          <p className="mt-3 text-base leading-7 text-[var(--text)]">{body}</p>
        </div>
      </div>
    </section>
  );
}
