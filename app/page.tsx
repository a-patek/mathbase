// app/page.tsx
import type { CSSProperties } from "react";
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
      "Learn propositions, connectives, truth tables, and quantifiers, the language of proofs.",
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
      "Divisibility, modular arithmetic, primes, and Diophantine equations.",
    tag: "Branch A",
  },
  {
    key: "combinatorics",
    title: "Combinatorics",
    description:
      "Counting principles, permutations, invariants, and olympiad-style structure.",
    tag: "Branch B",
  },
  {
    key: "graph-theory",
    title: "Graph Theory",
    description:
      "Vertices, edges, trees, cycles, and colorings for discrete problem solving.",
    tag: "Branch C",
  },
];

const proofLines = [
  "Assume n is even.",
  "Then n = 2k for some integer k.",
  "Squaring gives n² = 4k².",
  "So n² = 2(2k²), which is even.",
  "Therefore n² is even.",
];

const journey = [
  {
    step: "01",
    title: "Learn the move",
    body: "Short lessons make each proof technique feel concrete before it gets formal.",
  },
  {
    step: "02",
    title: "Try the argument",
    body: "Practice problems push you to build the proof, not just recognize the answer.",
  },
  {
    step: "03",
    title: "Sharpen the write-up",
    body: "Feedback helps you turn a rough sketch into a clean mathematical explanation.",
  },
];

export default function Home() {
  return (
    <main className="home-cinematic min-h-screen overflow-x-hidden bg-[#05060d] text-white">
      <section className="home-hero relative min-h-screen overflow-hidden">
        <div className="home-aurora pointer-events-none absolute inset-0" />
        <div className="home-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid min-h-screen max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="home-hero-copy space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-teal-100/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,0.7)]" />
              Proof-focused learning for serious students
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Master proofs with a page that moves at your pace.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              MathBase takes you from intuition to rigorous write-ups through
              short lessons, structured practice, and feedback that helps the
              proof finally click.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_42px_rgba(45,212,191,0.22)] transition hover:brightness-110"
              >
                Start learning proofs
              </Link>
              <Link
                href="/practice"
                className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.08]"
              >
                Explore practice
              </Link>
              <Link
                href="/auth"
                className="rounded-full border border-teal-200/20 px-5 py-3 text-sm font-semibold text-teal-100 transition hover:bg-teal-200/10"
              >
                Sign up or log in
              </Link>
            </div>
          </div>

          <div className="home-hero-visual relative min-h-[430px]">
            <div className="home-orbit home-orbit-one" />
            <div className="home-orbit home-orbit-two" />
            <div className="home-glass-panel absolute inset-x-0 top-10 mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/65 p-5 shadow-[0_30px_120px_rgba(15,23,42,0.75)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-100">Proof engine</span>
                <span className="rounded-full border border-teal-200/15 bg-teal-300/10 px-3 py-1 text-teal-100">
                  Direct proof
                </span>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/8 bg-slate-950/60 p-4 font-mono text-sm">
                {proofLines.map((line, index) => (
                  <p
                    key={line}
                    className="home-proof-line rounded-lg border border-white/5 bg-white/[0.025] px-3 py-2 text-slate-300"
                    style={{ "--line": index } as CSSProperties}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-4">
                  <p className="text-xl font-semibold text-teal-200">3</p>
                  <p className="mt-1 text-slate-500">core modules</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-4">
                  <p className="text-xl font-semibold text-indigo-200">AI</p>
                  <p className="mt-1 text-slate-500">feedback</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-4">
                  <p className="text-xl font-semibold text-amber-200">AMC</p>
                  <p className="mt-1 text-slate-500">ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-center text-xs uppercase tracking-[0.22em] text-slate-500 sm:block">
          Scroll to unfold
        </div>
      </section>

      <section className="home-scroll-scene home-scene-teal">
        <div className="home-sticky-scene">
          <div className="home-scene-inner">
            <div className="home-scene-copy">
              <p className="home-kicker">From fuzzy idea to precise proof</p>
              <h2>Every scroll step reveals the next piece of the argument.</h2>
              <p>
                The homepage now behaves more like a guided product story:
                large sections hold still, visual pieces animate in, and the
                page moves from concept to structure.
              </p>
            </div>

            <div className="home-proof-stage">
              {proofLines.map((line, index) => (
                <div
                  key={line}
                  className="home-stage-line"
                  style={{ "--line": index } as CSSProperties}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-scroll-scene home-scene-indigo">
        <div className="home-sticky-scene">
          <div className="home-scene-inner home-scene-inner-reverse">
            <div className="home-scene-copy">
              <p className="home-kicker">A path that locks into place</p>
              <h2>Learn, practice, then polish the write-up.</h2>
              <p>
                Each stage has its own visual weight, so scrolling feels like
                moving through a sequence instead of passing a stack of boxes.
              </p>
            </div>

            <div className="home-journey-stack">
              {journey.map((item) => (
                <div key={item.step} className="home-journey-card">
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-scroll-scene home-scene-amber">
        <div className="home-sticky-scene">
          <div className="home-scene-inner">
            <div className="home-scene-copy">
              <p className="home-kicker">Core track</p>
              <h2>Start with the foundations, then branch outward.</h2>
              <p>
                The modules appear as a connected track, giving the page a
                stronger sense of progression while keeping the same lesson
                links.
              </p>
              <Link href="/learn" className="home-text-link">
                View all modules
              </Link>
            </div>

            <div className="home-module-track">
              {coreModules.map((module, index) => (
                <Link
                  key={module.slug}
                  href={`/learn/${module.slug}`}
                  className="home-module-card"
                  style={{ "--line": index } as CSSProperties}
                >
                  <span>{module.label}</span>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-final relative overflow-hidden px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="home-kicker">Choose your branch</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Specialize once the proof foundation feels solid.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {branches.map((branch) => (
              <div key={branch.key} className="home-branch-card">
                <span>{branch.tag}</span>
                <h3>{branch.title}</h3>
                <p>{branch.description}</p>
                <small>Coming online module by module</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
