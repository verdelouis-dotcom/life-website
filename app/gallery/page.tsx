import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { GALLERY_PHOTOS } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 text-[var(--text)]">
        <section className="text-center">
          <p className="type-eyebrow">Tables</p>
          <h1 className="section-heading">Tables</h1>
          <p className="mt-3 type-detail">Shared with permission.</p>
        </section>
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {GALLERY_PHOTOS.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm">
              <div className="relative h-64 w-full">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </figure>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
