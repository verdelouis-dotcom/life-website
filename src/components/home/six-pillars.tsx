"use client";

import { useState } from "react";

type Pillar = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  sources: SourceLink[];
};

type SourceLink = {
  id: string;
  label: string;
  description: string;
  url: string;
};

const PILLARS: Pillar[] = [
  {
    id: "food",
    title: "Food",
    summary: "Real food replaces ultra-processed food—one of the biggest health upgrades available.",
    detail:
      "Ultra-processed foods make up about 55% of calories consumed in the U.S. (higher in youth). Shifting toward whole ingredients—vegetables, olive oil, simple home cooking—supports metabolic health and lowers chronic disease risk.",
    sources: [
      {
        id: "1",
        label: "[1]",
        description: "CDC/NCHS Data Brief #536",
        url: "https://www.cdc.gov/nchs/products/databriefs/db536.htm",
      },
    ],
  },
  {
    id: "movement",
    title: "Movement",
    summary: "Regular movement protects the heart, brain, and metabolism—even without a gym.",
    detail:
      "Adults who are insufficiently active have a 20%–30% increased risk of death compared with those who are sufficiently active. Globally, about 31% of adults still fall short of recommended activity levels.",
    sources: [
      {
        id: "2",
        label: "[2]",
        description: "WHO Fact Sheet: Physical activity",
        url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      },
      {
        id: "3",
        label: "[3]",
        description: "WHO News Release: Nearly 1.8 billion adults at risk (2024)",
        url: "https://www.who.int/news/item/26-06-2024-nearly-1.8-billion-adults-at-risk-of-disease-from-not-doing-enough-physical-activity",
      },
    ],
  },
  {
    id: "connection",
    title: "Connection",
    summary: "Strong relationships are a measurable longevity advantage.",
    detail:
      "A landmark meta-analysis found that people with stronger social relationships had roughly a 50% higher likelihood of survival compared with those with weaker ties (OR ≈ 1.5). Connection buffers stress, reduces isolation, and sustains healthier behaviors.",
    sources: [
      {
        id: "4",
        label: "[4]",
        description: "Holt-Lunstad et al., PLOS Medicine (2010)",
        url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000316",
      },
    ],
  },
  {
    id: "community",
    title: "Community",
    summary: "Belonging to a community strengthens support, identity, and long-term resilience.",
    detail:
      "Community builds shared norms and mutual aid—traits repeatedly seen in long-lived populations. In a large JAMA Internal Medicine cohort, frequent religious service participation correlated with a 33% lower mortality risk among women (observational association).",
    sources: [
      {
        id: "5",
        label: "[5]",
        description: "Li et al., JAMA Internal Medicine (2016)",
        url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2521827",
      },
      {
        id: "5a",
        label: "[Blue Zones]",
        description: "Overview of Blue Zones ‘Power Nine’ patterns",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6125071/",
      },
    ],
  },
  {
    id: "purpose",
    title: "Purpose",
    summary: "Meaning and direction are protective—purpose changes behavior and biology.",
    detail:
      "In a large U.S. cohort, adults in the lowest life-purpose group had substantially higher all-cause mortality risk compared with the highest purpose group (HR 2.43). A sense of direction supports resilience, healthier routines, and better aging outcomes.",
    sources: [
      {
        id: "6",
        label: "[6]",
        description: "Alimujiang et al., JAMA Network Open (2019)",
        url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2734064",
      },
    ],
  },
  {
    id: "stress",
    title: "Stress",
    summary: "Chronic stress accelerates aging; regulation protects the body.",
    detail:
      "Allostatic load—the wear and tear of cumulative stress—is linked to higher mortality risk (HR ≈ 1.22). Reducing chronic stress helps protect cardiovascular, metabolic, and cognitive health.",
    sources: [
      {
        id: "7",
        label: "[7]",
        description: "Parker et al., Meta-analysis on allostatic load & mortality (2022)",
        url: "https://pubmed.ncbi.nlm.nih.gov/35393143/",
      },
      {
        id: "8",
        label: "[Mechanism]",
        description: "Mechanistic overview of stress physiology",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11872152/",
      },
    ],
  },
];

const ALL_SOURCES: SourceLink[] = PILLARS.flatMap((pillar) => pillar.sources).filter(
  (source, index, array) => array.findIndex((s) => s.id === source.id) === index,
);

export default function SixPillars() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [showSources, setShowSources] = useState(false);
  const allExpanded = openIds.length === PILLARS.length;

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(PILLARS.map((pillar) => pillar.id));
    }
  };

  const togglePanel = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      const next = [...prev, id];
      if (next.length === PILLARS.length) {
        return PILLARS.map((pillar) => pillar.id);
      }
      return next;
    });
  };

  return (
    <section className="bg-[#fff8ef] py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Framework</p>
            <h2 className="mt-3 text-3xl font-semibold">The Six Pillars of Longevity</h2>
            <p className="mt-3 max-w-2xl text-lg text-[var(--muted)]">
              These six behaviors anchor the L.I.F.E. approach. They&apos;re simple in daily life yet powerful when practiced together.
            </p>
          </div>
          <button
            type="button"
            onClick={toggleAll}
            aria-expanded={allExpanded}
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-5 py-3 text-sm font-semibold text-[var(--olive)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)]"
          >
            {allExpanded ? "Collapse" : "Expand the science"}
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {PILLARS.map((pillar) => {
            const isOpen = openIds.includes(pillar.id);
            return (
              <div
                key={pillar.id}
                className="flex h-full flex-col rounded-[32px] border border-[var(--border)] bg-white/80 p-6 shadow-sm transition hover:border-[var(--olive)] focus-within:border-[var(--olive)]"
              >
                <button
                  type="button"
                  onClick={() => togglePanel(pillar.id)}
                  aria-expanded={isOpen}
                  aria-controls={`pillar-panel-${pillar.id}`}
                  className="flex items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)]"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--olive)]">{pillar.title}</p>
                    <p className="mt-2 text-base font-medium text-[var(--text)]">{pillar.summary}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-lg transition ${
                      isOpen ? "border-[var(--terracotta)] text-[var(--terracotta)]" : "border-[var(--olive)] text-[var(--olive)]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`pillar-panel-${pillar.id}`}
                  role="region"
                  aria-live="polite"
                  aria-hidden={!isOpen}
                  className={`mt-4 text-sm text-[var(--muted)] ${isOpen ? "opacity-100" : "pointer-events-none h-0 overflow-hidden opacity-0"}`}
                >
                  {isOpen && (
                    <>
                      <p className="leading-relaxed">{pillar.detail}</p>
                      <div className="mt-3 text-xs text-[var(--olive)]">
                        Sources:{" "}
                        {pillar.sources.map((source, index) => (
                          <a
                            key={source.id}
                            href={source.url}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-1 align-super text-[0.75rem] text-[var(--terracotta)] underline-offset-4 hover:text-[#9b4d30]"
                          >
                            {source.label}
                            {index < pillar.sources.length - 1 ? "," : ""}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
          <p className="font-medium text-[var(--text)]">Science sources available in each pillar.</p>
          <button
            type="button"
            aria-expanded={showSources}
            aria-controls="pillars-sources"
            onClick={() => setShowSources((prev) => !prev)}
            className="inline-flex items-center text-[var(--terracotta)] underline-offset-4 hover:text-[#9b4d30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)]"
          >
            {showSources ? "Hide sources" : "Show sources"}
          </button>
        </div>

        {showSources && (
          <div id="pillars-sources" className="mt-8 rounded-[24px] border border-[var(--border)] bg-white/70 p-5 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--olive)]">Sources</p>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              {ALL_SOURCES.map((source) => (
                <li key={source.id}>
                  <span className="font-semibold text-[var(--text)]">{source.label}</span>{" "}
                  <a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-[var(--terracotta)]/50 underline-offset-4 hover:text-[#9b4d30]">
                    {source.description}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
