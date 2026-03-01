import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const COMMUNITY_TABLE_IMAGES = [
  "/images/hero-table2.jpeg",
  "/images/hero-table3.jpeg",
  "/images/hero-table4.jpeg",
  "/images/hero-table5.jpeg",
  "/images/hero-table7.jpeg",
  "/images/hero-table8.jpeg",
  "/images/hero-table9.jpeg",
  "/images/hero-table10.jpeg",
];

const HANDS_ON_PREP_IMAGES = ["/images/farmtotable1.jpeg", "/images/farmtotable2.jpeg", "/images/farmtotable3.jpeg"];

const KITCHEN_SESSION_IMAGES = [
  "/images/hero-workshop.jpeg",
  "/images/hero-workshop1.jpeg",
  "/images/hero-workshop2.jpeg",
  "/images/hero-workshop3.jpeg",
  "/images/hero-workshop4.jpeg",
  "/images/hero-tworkshop1.jpeg",
];

const TRADITION_IMAGES = ["/images/winemaking.jpeg"];

const INGREDIENT_FOCUS_IMAGES = ["/images/pasta.jpeg", "/images/octopus.jpeg"];

const GALLERY_ITEMS = [
  ...COMMUNITY_TABLE_IMAGES.map((src) => ({
    src,
    heading: "Community Table",
    description: "Registered LIFE table documented by local hosts.",
  })),
  ...HANDS_ON_PREP_IMAGES.map((src) => ({
    src,
    heading: "Hands-On Prep",
    description: "Participants prepping ingredients together before serving.",
  })),
  ...KITCHEN_SESSION_IMAGES.map((src) => ({
    src,
    heading: "Kitchen Session",
    description: "Hands-on kitchen lesson from the LIFE curriculum.",
  })),
  ...TRADITION_IMAGES.map((src) => ({
    src,
    heading: "Family Tradition",
    description: "Heritage skills being shared with the LIFE community.",
  })),
  ...INGREDIENT_FOCUS_IMAGES.map((src) => ({
    src,
    heading: "Ingredient Focus",
    description: "Ingredients highlighted during a LIFE teaching moment.",
  })),
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Measured Participation</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Gallery</h1>
          <p className="mt-3 text-lg text-[#5b5149]">
            Shared with permission. Each gallery highlight represents community participation in the L.I.F.E. pilot.
          </p>
          <p className="mt-4 text-sm text-[#5b5149]">
            Upload a photo when you{" "}
            <Link className="underline" href="/register">
              register your table
            </Link>{" "}
            so impact can be documented with both data and visuals.
          </p>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.src} className="overflow-hidden rounded-3xl border border-[#dfd4c6] bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={`${item.heading} — ${item.description}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[#6b7a46]">{item.heading}</p>
                <p className="mt-2 text-[#2e2a26]">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
