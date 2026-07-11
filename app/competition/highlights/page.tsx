// app/competition/highlights/page.tsx

import Link from "next/link";

const PAST_PROBLEMS_URL =
  "https://drive.google.com/file/d/1UQ4g8VqXY_gys5-lVXAf6BYO8GqA6WUt/view?usp=sharing";

export default function CompetitionHighlightsPage() {
  return (
    <main className="min-h-screen bg-[#060815] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        {/* Animated border wrapper */}
        <div className="relative rounded-3xl p-[2px]">
          {/* flowing border */}
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_var(--a),rgba(94,234,212,0.9),rgba(165,180,252,0.9),rgba(253,230,138,0.9),rgba(94,234,212,0.9))] blur-[10px] opacity-70 animate-borderSpin" />
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_var(--a),rgba(94,234,212,0.9),rgba(165,180,252,0.9),rgba(253,230,138,0.9),rgba(94,234,212,0.9))] opacity-60 animate-borderSpin" />

          {/* card content */}
          <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-8 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                MathBase Open & Invitational
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                July MBO Results
              </h1>
              <p className="mt-3 text-sm text-slate-400">
                Final standings + prize distribution.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#060815]/50 p-6 space-y-6">
              {/* First place */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-teal-300">
                    1st Place
                  </p>
                  <p className="text-lg font-medium">
                    Tim Young <span className="text-slate-400">(USA)</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-teal-200">$500</p>
              </div>

              {/* Second place */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-teal-300">2nd Place</p>
                  <p className="text-lg font-medium">
                    Rohan Patil <span className="text-slate-400">(India)</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-teal-200">$200</p>
              </div>

              {/* Third place */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-indigo-300">
                    3rd Place
                  </p>
                  <p className="text-lg font-medium">
                    Tejas Mukeshkumar <span className="text-slate-400">(USA)</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-indigo-200">$50</p>
              </div>
            </div>

            {/* Past problems link */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <Link
                href={PAST_PROBLEMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-300/30 hover:brightness-110"
              >
                Click here to see past MBO problems →
              </Link>
              <p className="mt-2 text-center text-[0.75rem] text-slate-500">
                Opens a Google Drive PDF in a new tab.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/competition"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300 hover:bg-slate-900"
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
