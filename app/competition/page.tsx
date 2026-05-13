// app/competition/page.tsx

import Link from "next/link";

const SIGNUP_URL = "https://forms.gle/rFjV3nfqVt7WwD5U9";

export default function CompetitionPage() {
  return (
    <main className="min-h-screen bg-[#060815] text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-[#060815] to-[#060815]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[0.7rem] font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Math Base Open · Monthly contest
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              mathbase{" "}
              <span className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl gradient-text">
                Open & Invitational
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300">
              A two–stage competition series designed for serious students who love
              problem-solving: a fast-paced multiple-choice Open round, followed by a
              proof-based Invitational with cash prizes.
            </p>

            <div className="flex flex-wrap gap-3 text-[0.75rem] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                Free to enter · 40-question competition math set
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                Top performers invited to proof contest with prize money
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-300/30 hover:brightness-110"
              >
                Sign up for MBO (free)
              </Link>
              <p className="text-[0.7rem] text-slate-500">
                Please fill this out if you intend on competing in the MathBase Open.
              </p>
            </div>
            <div><Link
  href="/competition/highlights"
  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900"
>
  January MBO / MBI highlights →
</Link></div>
          </div>

          {/* Format + date/schedule overview */}
          <div className="max-w-sm space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-xs text-slate-200">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Format overview
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="font-semibold text-teal-200">MBO</span> —{" "}
                  40 competition-style multiple choice questions · 60 minutes · algebra,
                  geometry, number theory, probability.
                </li>
                <li>
                  Top <span className="font-semibold">8</span> scores qualify for{" "}
                  <span className="font-semibold text-teal-200">
                    MBI (MathBase Invitational)
                  </span>
                  , a proof-based round with a cash prize pool.
                </li>
                <li>
                  <span className="font-semibold text-teal-200">MBI</span> — 4
                  proof-based questions · 90 minutes · deep number theory and algebra.
                </li>
                <li>
                  Top 3 students in MBI receive money from the prize pool.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-teal-300/40 bg-teal-300/5 p-5 text-xs text-teal-100">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-teal-200">
                February 2026 schedule
              </p>
              <p className="mt-2 text-[0.8rem]">
                The February MBO/MBI will be held on{" "}
                <span className="font-semibold text-teal-100">
                  2/24/2026 (February 24) (Eastern Time Zone)
                </span>
                .
              </p>
              <ul className="mt-3 space-y-1.5 text-[0.8rem]">
                <li>• MBO: 1:00 PM – 2:00 PM (strictly)</li>
                <li>• MBI qualifiers announced: 4:00 PM</li>
                <li>• MBI: 5:00 PM – 6:30 PM</li>
                <li>• Winners announced: 7:30 PM</li>
              </ul>
              <p className="mt-2 text-[0.75rem] text-teal-100">
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
          <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-teal-300">
                  MBO · MathBase Open
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-50">
                  Monthly competition math round
                </h2>
              </div>
              <span className="rounded-full border border-teal-300/60 bg-teal-300/10 px-3 py-1 text-[0.7rem] font-medium text-teal-100">
                Free · Open to all
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-slate-300">
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

            <div className="mt-5 rounded-xl border border-white/10 bg-[#060815]/60 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">
                Advancement to MBI (MathBase Invitational)
              </p>
              <p className="mt-2 text-xs text-slate-400">
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
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:brightness-110"
              >
                Register for the next MBO →
              </Link>
            </div>
          </div>

          {/* MBI card */}
          <div className="rounded-2xl border border-teal-300/40 bg-teal-300/5 p-6 shadow-[0_0_40px_rgba(16,185,129,0.35)]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-teal-200">
                  MBI · MathBase Invitational
                </p>
                <h2 className="mt-1 text-sm font-semibold text-teal-50">
                  Proof-based invitational round
                </h2>
              </div>
              <span className="rounded-full border border-teal-300/60 bg-teal-300/10 px-3 py-1 text-[0.7rem] font-medium text-teal-100">
                Invite only
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-teal-50">
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
            <div className="mt-5 rounded-xl border border-teal-300/40 bg-[#060815]/50 p-4 text-xs text-teal-100 space-y-3">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-teal-200">
                February 2026 MBI prize pool
              </p>

              <div className="flex flex-wrap items-baseline gap-4">
                <div className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl gradient-text">
                  $750
                </div>
                <div className="text-[0.8rem] text-teal-100 space-y-1">
                  <p className="font-semibold">prize pool</p>
                  <p className="text-teal-100">
                    February MathBase Invitational champion
                  </p>
                </div>
              </div>

              <div className="grid gap-2 text-[0.8rem] md:grid-cols-2">
                <p>
                  1st place: <span className="font-semibold">$500</span>
                </p>
                <p>
                  2nd place: <span className="font-semibold">$200</span>
                </p>
                <p>
                  3rd place: <span className="font-semibold">$50</span>
                </p>
              </div>

              <p className="text-[0.7rem] text-teal-200">
                Cash rewards for the February MBI (1st: $500, 2nd: $200, 3rd: $50) will
                be forwarded in the week following the competition.
              </p>
            </div>

            <p className="mt-4 text-[0.7rem] text-teal-100">
              Invitations are sent by email to top MBO performers with full
              instructions and submission guidelines.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Ready to compete?
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Sign up for the next{" "}
                <span className="font-semibold text-teal-200">MathBase Open (MBO)</span>{" "}
                using the form below. It is free to compete, and prize money is awarded
                to the top three in the MathBase Invitational.
              </p>
            </div>
            <Link
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-300/30 hover:brightness-110"
            >
              
              Open sign-up form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}