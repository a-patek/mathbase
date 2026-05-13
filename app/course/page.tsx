// app/course/page.tsx

import ProofCourseClient from "@/components/ProofCourseClient";
import { proofCourse } from "@/data/proofCourse";

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-[#060815] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-[#060815] to-[#060815]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Proof-based course - full track
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {proofCourse.title}
            </h1>

            <p className="text-sm md:text-base text-slate-300">
              An 8-week, proof-first course built for beginners who want to learn how
              real mathematical reasoning works. Each week has four focused sessions
              with lessons, worked examples, practice sets, quizzes, and a final
              portfolio.
            </p>

            <div className="flex flex-wrap gap-3 text-[0.75rem] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                32 sessions total - 45 to 75 minutes each
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                Includes quizzes, solution outlines, and a certificate
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              How to use this course
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>1. Read the lesson notes (10 to 20 minutes).</li>
              <li>2. Work the examples (10 to 15 minutes).</li>
              <li>3. Do the practice problems (20 to 35 minutes).</li>
              <li>4. Check answers or outlines (about 10 minutes).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Optional grading
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Weekly quiz: 20%.</li>
              <li>Homework proofs (best 2 each week): 40%.</li>
              <li>Final proof portfolio (10 polished proofs): 40%.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Use grading only if you want structure and accountability.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-teal-300/40 bg-teal-300/5 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-teal-200">
            Proof writing template
          </p>
          <ol className="mt-4 space-y-2 text-sm text-teal-100">
            <li>1. Claim: state what you will prove.</li>
            <li>2. Definitions: rewrite key terms in definition form.</li>
            <li>3. Assume: assume the hypotheses.</li>
            <li>4. Goal: state what must be shown.</li>
            <li>5. Proof: step-by-step logical chain.</li>
            <li>6. Conclusion: therefore ... and end.</li>
          </ol>
        </div>

        <ProofCourseClient sessions={proofCourse.sessions} />
      </section>
    </main>
  );
}
