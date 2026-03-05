import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { GALLERY_PHOTOS } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 text-[#2e2a26]">
        <section className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Tables</p>
          <h1 className="mt-3 text-4xl font-semibold">Tables</h1>
          <p className="mt-3 text-base text-[#5b5149]">Shared with permission.</p>
        </section>
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {GALLERY_PHOTOS.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-[24px] border border-[#dfd4c6] bg-white shadow-sm">
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
