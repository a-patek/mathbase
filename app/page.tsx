// app/page.tsx
import Link from "next/link";

const coreModules = [
  {
    slug: "what-is-a-proof",
    label: "Module 1",
    title: "What is a Proof?",
    description: "Build intuition for what proofs actually are and how mathematicians think.",
  },
  {
    slug: "logic",
    label: "Module 2",
    title: "Logic & Quantifiers",
    description:
      "Learn propositions, connectives, truth tables, and quantifiers — the language of proofs.",
  },
  {
    slug: "direct-proofs",
    label: "Module 3",
    title: "Direct Proofs",
    description:
      "Turn definitions into clean, step-by-step arguments about parity, divisibility, and inequalities.",
  },
];

const branches = [
  {
    key: "number-theory",
    title: "Number Theory",
    description:
      "Divisibility, modular arithmetic, primes, and Diophantine equations — the heart of contest math.",
    tag: "Branch A",
  },
  {
    key: "combinatorics",
    title: "Combinatorics",
    description:
      "Counting principles, permutations, invariants, and classic olympiad-style problems.",
    tag: "Branch B",
  },
  {
    key: "graph-theory",
    title: "Graph Theory",
    description:
      "Vertices, edges, trees, cycles, and colorings — the discrete language of modern math.",
    tag: "Branch C",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.20),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.15),_transparent_55%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:py-24">
          {/* Left side: text */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Proof-focused learning for serious students
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Master mathematical proofs{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                step by step
              </span>
            </h1>

            <p className="max-w-xl text-lg text-zinc-300">
              mathbase takes you from “I kind of get it” to writing clean, rigorous proofs —
              through short lessons, structured practice, and AI-assisted feedback.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-black shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Start learning proofs
              </Link>
              <Link
                href="/practice"
                className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Explore practice problems
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Designed for AMC / AIME / olympiad-track & proof-based courses
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Built for LaTeX, Google Docs, or handwritten PDFs
              </div>
            </div>
          </div>

          {/* Right side: “code-ish” proof card */}
          <div className="flex-1">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-medium text-zinc-200">Sample proof snippet</span>
                <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[0.65rem]">
                  Direct proof · Number theory
                </span>
              </div>

              <div className="rounded-xl bg-black/60 p-4 text-sm font-mono text-zinc-200">
                <p className="text-zinc-400">Statement.</p>
                <p className="mb-3">
                  If <span className="text-sky-300">n</span> is even, then{" "}
                  <span className="text-sky-300">n²</span> is even.
                </p>

                <p className="text-zinc-400">Proof sketch.</p>
                <p className="mb-1">
                  Assume <span className="text-sky-300">n</span> is even. Then{" "}
                  <span className="text-sky-300">n = 2k</span> for some integer{" "}
                  <span className="text-sky-300">k</span>.
                </p>
                <p className="mb-1">
                  Squaring gives <span className="text-sky-300">n² = 4k² = 2(2k²)</span>, which
                  is divisible by <span className="text-sky-300">2</span>.
                </p>
                <p className="text-emerald-300">Therefore n² is even. ▢</p>
              </div>

              <p className="mt-4 text-xs text-zinc-400">
                On mathbase you’ll turn sketches like this into fully rigorous proofs —
                with guided structure and feedback at each step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-zinc-800 bg-zinc-950/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row">
          {[
            {
              title: "1 · Learn",
              body: "Short, focused modules introduce each proof idea with examples and TL;DR summaries.",
            },
            {
              title: "2 · Practice",
              body: "Solve carefully chosen proof problems and compare with model solutions when you’re ready.",
            },
            {
              title: "3 · Publish",
              body: "Upload LaTeX, Google Docs, or handwritten PDFs and later route them into peer review.",
            },
          ].map((step) => (
            <div key={step.title} className="flex-1 space-y-2">
              <h3 className="text-sm font-semibold text-zinc-100">{step.title}</h3>
              <p className="text-sm text-zinc-400">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core proof track */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Core proof track</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Work through these in order to build a rock-solid proof foundation.
              </p>
            </div>
            <Link
              href="/learn"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              View all modules →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {coreModules.map((m) => (
              <Link
                key={m.slug}
                href={`/learn/${m.slug}`}
                className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 transition hover:border-sky-500/70 hover:bg-zinc-900"
              >
                <span className="text-xs font-semibold text-sky-400">{m.label}</span>
                <h3 className="mt-1 text-sm font-semibold text-zinc-50 group-hover:text-sky-50">
                  {m.title}
                </h3>
                <p className="mt-2 flex-1 text-xs text-zinc-400">{m.description}</p>
                <span className="mt-3 text-[0.7rem] font-medium text-zinc-400 group-hover:text-sky-300">
                  Start module →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-zinc-950/80">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold">Choose your branch</h2>
          <p className="mt-1 text-sm text-zinc-400">
            After the core track, specialize in the areas that match your contests or courses.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {branches.map((branch) => (
              <div
                key={branch.key}
                className="flex flex-col rounded-xl border border-zinc-800 bg-black/80 p-5"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[0.65rem] font-medium text-zinc-300">
                    {branch.tag}
                  </span>
                  <span className="text-[0.65rem] text-zinc-500">
                    Coming online module by module
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-50">{branch.title}</h3>
                <p className="mt-2 flex-1 text-xs text-zinc-400">{branch.description}</p>
                <p className="mt-3 text-[0.7rem] text-zinc-500">
                  You’ll be able to solve problems here and submit full write-ups for review.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
