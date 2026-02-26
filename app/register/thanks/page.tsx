import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function RegisterThanksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <h1 className="text-4xl font-semibold text-[#2e2a26]">Thank you. Your table matters.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            We’ve logged your gathering and will include it in the national impact tracking.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
              className="rounded-2xl border border-[#6b7a46] px-6 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
            >
              Download Host Guide
            </Link>
            <Link
              href="/host"
              className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]"
            >
              Host Another Table
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
