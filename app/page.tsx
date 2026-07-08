import Image from "next/image";
import Link from "next/link";

const proofLines = [
  "Assume n is even.",
  "Then n = 2k for some integer k.",
  "Squaring gives n^2 = 4k^2.",
  "So n^2 = 2(2k^2), which is even.",
  "Therefore n^2 is even.",
];

const learningCards = [
  {
    title: "Learn proofs",
    body: "Start with the structure of a proof, then build toward logic, direct proofs, and deeper topics.",
    href: "/learn",
  },
  {
    title: "Practice problems",
    body: "Work through problems that reward clean reasoning instead of memorized tricks.",
    href: "/practice",
  },
  {
    title: "Compete",
    body: "Join MathBase contests and apply for the travel competition team.",
    href: "/competition",
  },
];

const stats = [
  { value: "Proof-first", label: "curriculum" },
  { value: "Free", label: "resources" },
  { value: "Student-led", label: "team" },
];

const branches = [
  "Number theory",
  "Combinatorics",
  "Graph theory",
  "Logic",
  "Algebra",
  "Geometry",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060815] text-white">
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-[-160px] h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
          <div className="absolute right-[-120px] top-[180px] h-[320px] w-[420px] rounded-full bg-indigo-300/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-teal-300" />
              Proof-based math learning
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn math the way it actually works.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              MathBase helps students move from intuition to rigorous proof
              through focused lessons, thoughtful practice, and competition
              opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/learn"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-300/20 transition hover:brightness-110"
              >
                Start learning
              </Link>
              <Link
                href="/competition"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.08]"
              >
                View competitions
              </Link>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-white/45">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Proof preview
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  A clean argument, line by line
                </h2>
              </div>
              <span className="rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-xs text-teal-100">
                Direct proof
              </span>
            </div>

            <div className="space-y-2 rounded-lg border border-white/10 bg-[#060815] p-4 font-mono text-sm">
              {proofLines.map((line, index) => (
                <div
                  key={line}
                  className="flex gap-3 rounded-md border border-white/5 bg-white/[0.025] px-3 py-2 text-slate-300"
                >
                  <span className="text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["Assumption", "Definition", "Conclusion"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-center text-xs text-white/55"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {learningCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.055]"
            >
              <h2 className="text-lg font-semibold tracking-tight text-white">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/55">{card.body}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-teal-200 transition group-hover:text-teal-100">
                Explore
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/35">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
              Competition team
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Train seriously. Compete together.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              MathBase is building a team for students who want to practice
              advanced problem solving and travel to college competitions.
            </p>
            <Link
              href="/competition-team"
              className="mt-6 inline-flex rounded-full border border-teal-300/40 bg-teal-300/10 px-5 py-3 text-sm font-semibold text-teal-100 transition hover:bg-teal-300/15"
            >
              Apply to join
            </Link>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
            <Image
              src="/img-4155.jpeg"
              alt="MathBase students outside a collaboration space"
              width={1820}
              height={1180}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              What you can study
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A foundation that branches into real problem solving.
            </h2>
          </div>
          <Link
            href="/learn"
            className="inline-flex rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.06] hover:text-white"
          >
            Browse lessons
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {branches.map((branch) => (
            <span
              key={branch}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/65"
            >
              {branch}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
