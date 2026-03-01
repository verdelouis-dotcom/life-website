import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const GALLERY_ITEMS = [
  {
    src: "/images/hero-table2.jpeg",
    location: "Peachtree City, GA",
    note: "Pasta making workshop in a home.",
  },
  {
    src: "/images/hero-table3.jpeg",
    location: "Peachtree City, GA",
    note: "Pasta making workshop for a couple.",
  },
  {
    src: "/images/hero-table4.jpeg",
    location: "Austin, TX",
    note: "Pasta making workshop for a family.",
  },
  {
    src: "/images/winemaking.jpeg",
    location: "Family Wine Press",
    note: "Generational wine making tradition.",
  },
  {
    src: "/images/farmtotable1.jpeg",
    location: "Peachtree City, GA",
    note: "Farm-to-table class prepping ingredients.",
  },
  {
    src: "/images/farmtotable2.jpeg",
    location: "Peachtree City, GA",
    note: "Hands-on cooking demonstration.",
  },
  {
    src: "/images/farmtotable3.jpeg",
    location: "Peachtree City, GA",
    note: "Gathered around a long table.",
  },
  {
    src: "/images/hero-table5.jpeg",
    location: "Community Workshop",
    note: "Knife skills lesson around the island.",
  },
  {
    src: "/images/hero-table7.jpeg",
    location: "Community Workshop",
    note: "Intergenerational table conversation.",
  },
  {
    src: "/images/hero-table8.jpeg",
    location: "Community Workshop",
    note: "Sharing a Mediterranean spread.",
  },
  {
    src: "/images/hero-table9.jpeg",
    location: "Community Workshop",
    note: "Setting the table before guests arrive.",
  },
  {
    src: "/images/hero-table10.jpeg",
    location: "Community Workshop",
    note: "Warm candlelight dinner service.",
  },
  {
    src: "/images/hero-workshop.jpeg",
    location: "Kitchen Session",
    note: "Cooking through foundational techniques.",
  },
  {
    src: "/images/hero-workshop1.jpeg",
    location: "Kitchen Session",
    note: "Passing down recipes step-by-step.",
  },
  {
    src: "/images/hero-workshop2.jpeg",
    location: "Kitchen Session",
    note: "Simple ingredients, shared intention.",
  },
  {
    src: "/images/hero-workshop3.jpeg",
    location: "Kitchen Session",
    note: "Hands in motion around the table.",
  },
  {
    src: "/images/hero-workshop4.jpeg",
    location: "Kitchen Session",
    note: "Finishing touches before serving.",
  },
  {
    src: "/images/hero-tworkshop1.jpeg",
    location: "Workshop",
    note: "Young hosts learning to plate.",
  },
  {
    src: "/images/pasta.jpeg",
    location: "Kitchen Session",
    note: "Fresh pasta ready for the pot.",
  },
  {
    src: "/images/octopus.jpeg",
    location: "Kitchen Session",
    note: "Seafood lesson rooted in tradition.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">National Movement</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Tables Across the Nation</h1>
          <p className="mt-3 text-lg text-[#5b5149]">
            Real hosts. Real kitchens. Real community spaces. Every table strengthens the cultural restoration.
          </p>
          <p className="mt-4 text-sm text-[#5b5149]">
            Want your table featured? Upload a photo when you{" "}
            <Link className="underline" href="/register">
              register your table
            </Link>{" "}
            or email{" "}
            <a className="underline" href="mailto:hello@longevityinitiativeforfoodandeducation.com">
              hello@longevityinitiativeforfoodandeducation.com
            </a>
            .
          </p>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.src} className="overflow-hidden rounded-3xl border border-[#dfd4c6] bg-white shadow-sm">
              <Image src={item.src} alt={item.location} width={1200} height={900} className="h-72 w-full object-cover" />
              <div className="px-5 py-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[#6b7a46]">{item.location}</p>
                <p className="mt-2 text-[#2e2a26]">{item.note}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
