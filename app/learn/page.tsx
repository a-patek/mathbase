// app/learn/page.tsx
import Link from "next/link";
import { lessons } from "@/data/lessons";

// Loosely typed so TS doesn't scream
type LessonModule = {
  title: string;
  topic?: string;
  subsections?: { slug: string; title: string }[];
};

const rawEntries = Object.entries(
  lessons as unknown as Record<string, LessonModule>
);

// Detect branches by slug prefix
const isBranchSlug = (slug: string) =>
  slug.startsWith("number-theory") ||
  slug.startsWith("combinatorics") ||
  slug.startsWith("graph-theory");

// Separate into core vs branches
const coreModules = rawEntries.filter(([slug]) => !isBranchSlug(slug));
const branchModules = rawEntries.filter(([slug]) => isBranchSlug(slug));

// Optional metadata for nicer blurbs on known modules
const moduleMeta: Record<
  string,
  { label?: string; blurb?: string; tag?: string }
> = {
  "what-is-a-proof": {
    label: "Module 1",
    blurb: "What proofs are really doing, and how mathematicians think with them.",
    tag: "Start here",
  },
  logic: {
    label: "Module 2",
    blurb: "Propositions, implications, truth tables, and quantifiers.",
  },
  "direct-proofs": {
    label: "Module 3",
    blurb: "Turn definitions into step-by-step arguments using direct proof.",
  },
  counterexamples: {
    label: "Module 4",
    blurb: "Disprove false claims and build minimal counterexamples.",
  },
  "contradiction-contrapositive": {
    label: "Module 5",
    blurb: "Use contrapositive and contradiction to prove tricky statements.",
  },
  induction: {
    label: "Module 6",
    blurb: "Learn induction as a logical structure, not just a magic trick.",
  },
  "sets-and-functions": {
    label: "Module 7",
    blurb: "Proof-oriented view of sets, functions, injective/surjective/bijective.",
  },
  "number-theory": {
    tag: "Branch A",
    blurb: "Divisibility, modular arithmetic, primes, and Diophantine equations.",
  },
  combinatorics: {
    tag: "Branch B",
    blurb: "Counting principles, invariants, and classic olympiad-style problems.",
  },
  "graph-theory": {
    tag: "Branch C",
    blurb: "Vertices, edges, paths, cycles, and graph colorings.",
  },
};

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 via-black to-black">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Learn · Structured proof curriculum
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Work through a{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                proof-first math track
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-300">
              Start with the core proof modules — what proofs are, logic, direct proof,
              contradiction, induction, and sets/functions — then branch into number
              theory, combinatorics, and graph theory. Every module is built to feed
              directly into contest math, olympiad-style problems, and proof-based
              courses.
            </p>

            <div className="flex flex-wrap gap-3 text-[0.75rem] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Best for students aiming at AMC/AIME, olympiads, and proof courses
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Each module has reading, practice, TL;DR, and proof-writing prompts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core modules + branches */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14 space-y-12">
        {/* Core Proof Track */}
        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Core proof track</h2>
              <p className="mt-1 text-sm text-zinc-400 max-w-xl">
                Go through these in order. They build the mental toolkit you’ll reuse in
                every branch of math.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreModules.map(([slug, data], idx) => {
              const meta = moduleMeta[slug] ?? {};
              const label =
                meta.label ?? `Module ${idx + 1}`;
              const blurb =
                meta.blurb ??
                "Explore concepts and proof techniques in this topic.";
              const tag = meta.tag;

              return (
                <Link
                  key={slug}
                  href={`/learn/${slug}`}
                  className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 transition hover:border-sky-500/70 hover:bg-zinc-900"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-sky-400">
                      {label}
                    </span>
                    {tag && (
                      <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-200">
                        {tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-50 group-hover:text-sky-50">
                    {data.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs text-zinc-400">{blurb}</p>
                  <div className="mt-3 flex items-center justify-between text-[0.7rem] text-zinc-500">
                    <span>
                      {data.subsections?.length ?? 0} lesson
                      {(data.subsections?.length ?? 0) === 1 ? "" : "s"}
                    </span>
                    <span className="font-medium text-sky-300 group-hover:text-sky-200">
                      Open module →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Branches */}
        {branchModules.length > 0 && (
          <div className="border-t border-zinc-800 pt-10">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Branches of math</h2>
              <p className="mt-1 text-sm text-zinc-400 max-w-xl">
                Once you’re comfortable with the core modules, dive into one or more
                branches. Each branch leans heavily on proof-style thinking, not just
                computational drills.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {branchModules.map(([slug, data]) => {
                const meta = moduleMeta[slug] ?? {};
                const tag = meta.tag ?? "Branch";
                const blurb =
                  meta.blurb ??
                  "Intro-level modules in this branch, built around proof-based reasoning.";

                return (
                  <Link
                    key={slug}
                    href={`/learn/${slug}`}
                    className="group flex flex-col rounded-2xl border border-zinc-800 bg-black/80 p-5 transition hover:border-violet-500/70 hover:bg-zinc-950"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[0.65rem] font-medium text-zinc-300">
                        {tag}
                      </span>
                      <span className="text-[0.65rem] text-zinc-500">
                        {data.subsections?.length ?? 0} lessons
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-50 group-hover:text-violet-50">
                      {data.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs text-zinc-400">{blurb}</p>
                    <p className="mt-3 text-[0.7rem] font-medium text-violet-300 group-hover:text-violet-200">
                      Explore this branch →
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
