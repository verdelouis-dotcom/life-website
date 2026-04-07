import type { Metadata } from "next";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/data/gallery";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const GALLERY_URL = "https://www.longevityinitiativeforfoodandeducation.com/gallery";

export const metadata: Metadata = {
  title: "LIFE Cooking Experiences Gallery | Longevity Initiative",
  description: "Real photos from LIFE cooking experiences in Atlanta, Austin, and beyond. Neighbors cooking together, shared with permission.",
  alternates: {
    canonical: GALLERY_URL,
  },
  openGraph: {
    title: "LIFE Cooking Experiences Gallery | Longevity Initiative",
    description: "Real photos from LIFE cooking experiences in Atlanta, Austin, and beyond. Neighbors cooking together, shared with permission.",
    url: GALLERY_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "LIFE Cooking Experiences Gallery | Longevity Initiative",
    description: "Real photos from LIFE cooking experiences in Atlanta, Austin, and beyond. Neighbors cooking together, shared with permission.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function GalleryPage() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-16 text-[var(--text)]">
        <section className="text-center mb-10">
          <p className="type-eyebrow">From the community</p>
          <h1 className="section-heading">Real tables. Real neighbors.</h1>
          <p className="mt-3 type-detail">Shared with permission from LIFE hosts.</p>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          {GALLERY_PHOTOS.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={900}
                style={{ width: "100%", height: "auto" }}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="block"
              />
              <figcaption className="px-4 py-3 flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-[var(--earth-mid)]">
                  {photo.city}, {photo.state}
                  {photo.host && <span className="text-[var(--muted)] font-normal"> · Hosted by {photo.host}</span>}
                </span>
                <span className="type-detail shrink-0">{photo.hostedDate}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
    </>
  );
}
