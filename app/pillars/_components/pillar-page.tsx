import Link from "next/link";

interface PillarPageProps {
  title: string;
  intro: string;
  body: string;
}

export default function PillarPage({ title, intro, body }: PillarPageProps) {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="inline-flex text-sm font-semibold text-neutral-500 transition hover:text-neutral-900">
            ← Back to Home
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">{title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-neutral-800">{intro}</p>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">{body}</p>
        </div>
      </section>
    </main>
  );
}
