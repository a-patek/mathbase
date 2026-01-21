// app/competition/highlights/page.tsx

import Link from "next/link";

const PAST_PROBLEMS_URL =
  "https://drive.google.com/file/d/1UQ4g8VqXY_gys5-lVXAf6BYO8GqA6WUt/view?usp=sharing";

export default function CompetitionHighlightsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        {/* Animated border wrapper */}
        <div className="relative rounded-3xl p-[2px]">
          {/* flowing border */}
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_var(--a),rgba(56,189,248,0.9),rgba(16,185,129,0.9),rgba(167,139,250,0.9),rgba(56,189,248,0.9))] blur-[10px] opacity-70 animate-borderSpin" />
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_var(--a),rgba(56,189,248,0.9),rgba(16,185,129,0.9),rgba(167,139,250,0.9),rgba(56,189,248,0.9))] opacity-60 animate-borderSpin" />

          {/* card content */}
          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                MathBase Open & Invitational
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                January 2026 MBO / MBI Highlights
              </h1>
              <p className="mt-3 text-sm text-zinc-400">
                Final standings + prize distribution.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/50 p-6 space-y-6">
              {/* First place */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-sm font-semibold text-emerald-400">
                    1st Place
                  </p>
                  <p className="text-lg font-medium">
                    Tim Young <span className="text-zinc-400">(USA)</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-emerald-300">$500</p>
              </div>

              {/* Second place */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-sm font-semibold text-sky-400">2nd Place</p>
                  <p className="text-lg font-medium">
                    Rohan Patil <span className="text-zinc-400">(India)</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-sky-300">$200</p>
              </div>

              {/* Third place */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-violet-400">
                    3rd Place
                  </p>
                  <p className="text-lg font-medium">
                    Tejas Mukeshkumar <span className="text-zinc-400">(USA)</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-violet-300">$50</p>
              </div>
            </div>

            {/* Past problems link */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <Link
                href={PAST_PROBLEMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:from-sky-400 hover:to-emerald-400"
              >
                Click here to see past MBO problems →
              </Link>
              <p className="mt-2 text-center text-[0.75rem] text-zinc-500">
                Opens a Google Drive PDF in a new tab.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/competition"
                className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
              >
                ← Back to competition page
              </Link>
            </div>
          </div>
        </div>

        {/* CSS for animated border (scoped) */}
        <style>{`
          @property --a {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
          }
          .animate-borderSpin {
            animation: borderSpin 4.5s linear infinite;
          }
          @keyframes borderSpin {
            from { --a: 0deg; }
            to { --a: 360deg; }
          }
        `}</style>
      </section>
    </main>
  );
}