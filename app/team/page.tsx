// app/team/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Team | MathBase",
  description:
    "Meet the MathBase team — a student-led educational initiative focused on problem-solving and proof-based mathematics.",
};

const founders = [
  {
    name: "Ahaan Pathak",
    role: "Founder",
    focus: "Curriculum • Platform",
    note: "AMC 12A: 120",
    description:
      "Founded MathBase to provide free, proof-first resources for students pursuing deeper mathematical problem solving and clear reasoning.",
    accent: "from-sky-500/25 to-transparent",
    glow: "hover:shadow-sky-500/10 hover:ring-sky-500/20",
  },
  {
    name: "Anirudh Dusi",
    role: "Co-Founder",
    focus: "Review • Rigor",
    note: "AMC 12B: 124",
    description:
      "Supports problem review and mathematical precision, focusing on correctness, clarity, and consistent standards across published content.",
    accent: "from-violet-500/20 to-transparent",
    glow: "hover:shadow-violet-500/10 hover:ring-violet-500/20",
  },
  {
    name: "Ayaan Saini",
    role: "Co-Founder",
    focus: "Clarity • Learning Design",
    note: "AMC 12A: 143 • AMC 12B: 141",
    description:
      "Helps refine explanations and learning progression, aiming for content that is accessible without losing rigor or proof structure.",
    accent: "from-emerald-500/20 to-transparent",
    glow: "hover:shadow-emerald-500/10 hover:ring-emerald-500/20",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Subtle, serious background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.10),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.10),transparent_45%),radial-gradient(circle_at_30%_90%,rgba(16,185,129,0.10),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">


          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl gradient-text">
            Team
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/100 sm:text-lg">
            MathBase is organized by a team with distinct roles across
            curriculum, problem writing/review, and platform operations.
          </p>
          <p className="mt-3 text-sm text-white/40">
            MathBase is founded and operated by students from Robbinsville High School in New Jersey
            and receives informal support and guidance from teachers at the school.
            </p>

        </header>

        {/* Founders */}
        <section className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-semibold tracking-tight">Founders</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {founders.map((f) => (
              <article
                key={f.name}
                className={[
                  "group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6",
                  "ring-1 ring-transparent transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]",
                  "hover:shadow-xl hover:shadow-black/40",
                  f.glow,
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-80",
                    `bg-gradient-to-r ${f.accent}`,
                  ].join(" ")}
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {f.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/55">{f.focus}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/70">
                    {f.role}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {f.description}
                </p>

                <div className="mt-5 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/60">
                  {f.note}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Structure (short + clean) */}
        <section className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="animated-border bg-white/[0.03] p-7">
              <h2 className="text-lg font-semibold tracking-tight">
                Problem Writing &amp; Review
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Problems are original and reviewed for correctness, clarity, and
                appropriate difficulty before publication.
              </p>
              <p className="mt-3 text-xs text-white/50">
                Some contributors are listed publicly; others contribute
                anonymously.
              </p>
            </div>

            <div className="animated-border bg-white/[0.03] p-7">
              <h2 className="text-lg font-semibold tracking-tight">
                Advisors &amp; Transparency
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                MathBase receives informal feedback from educators and mentors
                (listed with permission).
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                MathBase is free, and competitions are not tied to tutoring or paid
                products.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-white/45 sm:flex-row sm:text-left">
            <span>© {new Date().getFullYear()} MathBase</span>
            <span className="text-white/35">Built for proof-based learning.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
