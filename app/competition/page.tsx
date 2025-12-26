// app/competition/page.tsx

import Link from "next/link";

const SIGNUP_URL = "https://forms.gle/rFjV3nfqVt7WwD5U9";

export default function CompetitionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-[0.7rem] font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              MathBase Open · Monthly contest
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              mathbase{" "}
              <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
                Open & Invitational
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-300">
              A two–stage competition series designed for serious students who love
              problem-solving: a fast-paced multiple-choice Open round, followed by a
              proof-based Invitational with cash prizes.
            </p>

            <div className="flex flex-wrap gap-3 text-[0.75rem] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Free to enter · 40-question competition math set
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Top performers invited to proof contest with prize money
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:from-sky-400 hover:to-emerald-400"
              >
                Sign up for MBO (free)
              </Link>
              <p className="text-[0.7rem] text-zinc-500">
                Please fill this out if you intend on competing in the MathBase Open.
              </p>
            </div>
          </div>

          {/* Format + date/schedule overview */}
          <div className="max-w-sm space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 text-xs text-zinc-200">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Format overview
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="font-semibold text-sky-300">MBO</span> —{" "}
                  40 competition-style multiple choice questions · 60 minutes · algebra,
                  geometry, number theory, probability.
                </li>
                <li>
                  Top <span className="font-semibold">8</span> scores qualify for{" "}
                  <span className="font-semibold text-emerald-300">
                    MBI (MathBase Invitational)
                  </span>
                  , a proof-based round with a cash prize pool.
                </li>
                <li>
                  <span className="font-semibold text-emerald-300">MBI</span> — 4
                  proof-based questions · 90 minutes · deep number theory and algebra.
                </li>
                <li>
                  Top 3 students in MBI receive money from the prize pool.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-500/40 bg-sky-500/5 p-5 text-xs text-sky-100">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
                January 2026 schedule
              </p>
              <p className="mt-2 text-[0.8rem]">
                The January MBO/MBI will be held on{" "}
                <span className="font-semibold text-sky-100">
                  1/10/2026 (January 10, 2026)
                </span>
                .
              </p>
              <ul className="mt-3 space-y-1.5 text-[0.8rem]">
                <li>• MBO: 1:00 PM – 2:00 PM (strictly)</li>
                <li>• MBI qualifiers announced: 4:00 PM</li>
                <li>• MBI: 5:00 PM – 6:30 PM</li>
                <li>• Winners announced: 7:30 PM</li>
              </ul>
              <p className="mt-2 text-[0.75rem] text-sky-200">
                Cash rewards will be forwarded in the week following the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:py-14 space-y-10">
        {/* Two cards: MBO and MBI */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* MBO card */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/90 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-400">
                  MBO · MathBase Open
                </p>
                <h2 className="mt-1 text-sm font-semibold text-zinc-50">
                  Monthly competition math round
                </h2>
              </div>
              <span className="rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-[0.7rem] font-medium text-sky-200">
                Free · Open to all
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-zinc-300">
              <p>
                • <span className="font-semibold">40 multiple choice questions</span>
              </p>
              <p>• <span className="font-semibold">60 minute</span> time limit</p>
              <p>
                • Topics:{" "}
                <span className="font-medium">
                  algebra, geometry, number theory, probability
                </span>
              </p>
              <p>
                • Questions are designed to feel like a mix of AMC/AIME-style problems
                  and original MathBase problems.
              </p>
              <p>
                • Scoring details and proctoring instructions are included with each
                  contest set.
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-zinc-800 bg-black/60 p-4 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-100">
                Advancement to MBI (MathBase Invitational)
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                The <span className="font-semibold">top 8 scores</span> in each edition
                of MBO receive an invitation to MBI, the proof-based round with a cash
                prize pool.
              </p>
            </div>

            <div className="mt-5">
              <Link
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-black hover:bg-white"
              >
                Register for the next MBO →
              </Link>
            </div>
          </div>

          {/* MBI card */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6 shadow-[0_0_40px_rgba(16,185,129,0.35)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  MBI · MathBase Invitational
                </p>
                <h2 className="mt-1 text-sm font-semibold text-emerald-50">
                  Proof-based invitational round
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-medium text-emerald-100">
                Invite only
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-emerald-50">
              <p>
                • <span className="font-semibold">4 problems</span>, each requiring
                  full written proofs
              </p>
              <p>• <span className="font-semibold">90 minute</span> time limit</p>
              <p>
                • Focus areas:{" "}
                <span className="font-medium">number theory and algebra</span>
              </p>
              <p>
                • Problems reward depth of reasoning, creativity, and clear exposition.
              </p>
            </div>

            {/* January prize pool section */}
            <div className="mt-5 rounded-xl border border-emerald-500/40 bg-black/50 p-4 text-xs text-emerald-100 space-y-3">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                January 2026 MBI prize pool
              </p>

              <div className="flex flex-wrap items-baseline gap-4">
                <div className="text-4xl md:text-5xl font-extrabold text-emerald-300 leading-none">
                  $700
                </div>
                <div className="text-[0.8rem] text-emerald-100 space-y-1">
                  <p className="font-semibold">1st place</p>
                  <p className="text-emerald-200">
                    January MathBase Invitational champion
                  </p>
                </div>
              </div>

              <div className="grid gap-2 text-[0.8rem] md:grid-cols-2">
                <p>
                  2nd place: <span className="font-semibold">$200</span>
                </p>
                <p>
                  3rd place: <span className="font-semibold">$100</span>
                </p>
              </div>

              <p className="text-[0.7rem] text-emerald-300">
                Cash rewards for the January MBI (1st: $700, 2nd: $200, 3rd: $100) will
                be forwarded in the week following the competition.
              </p>
            </div>

            <p className="mt-4 text-[0.7rem] text-emerald-200">
              Invitations are sent by email to top MBO performers with full
              instructions and submission guidelines.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6 text-sm text-zinc-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Ready to compete?
              </p>
              <p className="mt-2 text-sm text-zinc-200">
                Sign up for the next{" "}
                <span className="font-semibold text-sky-300">MathBase Open (MBO)</span>{" "}
                using the form below. It is free to compete, and prize money is awarded
                to the top three in the MathBase Invitational.
              </p>
            </div>
            <Link
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:from-sky-400 hover:to-emerald-400"
            >
              Open sign-up form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
