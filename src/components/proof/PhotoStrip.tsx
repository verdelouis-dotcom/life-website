"use client";

import Image from "next/image";

interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoStripProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  photos: PhotoItem[];
}

export default function PhotoStrip({ eyebrow, title, description, photos }: PhotoStripProps) {
  if (!photos.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
        {eyebrow && <p className="type-eyebrow text-[var(--olive)]">{eyebrow}</p>}
        {title && <h2 className="mt-2 text-3xl font-semibold text-[var(--life-forest)]">{title}</h2>}
        {description && <p className="mt-3 text-base text-[var(--text)]">{description}</p>}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="space-y-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)]">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              {photo.caption && <figcaption className="text-xs text-[var(--muted)]">{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
