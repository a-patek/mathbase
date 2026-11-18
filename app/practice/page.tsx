"use client";

import { useEffect, useMemo, useState } from "react";
import { practiceProblems } from "@/data/practiceProblems";
import Image from "next/image";

type Difficulty = "beginner" | "moderate" | "advanced";

type PracticeProblem = {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  topic: string;
  prompt: string;
  hint?: string;
  outline?: string;
  solution?: string;
  modelProof?: string;
};

type GradingFeedback = {
  verdict?: string;
  score?: number;
  feedback?: string;
  missing_steps?: string[];
  next_steps?: string[];
  error?: string;
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: "Beginner",
  moderate: "Moderate",
  advanced: "Advanced",
};

const difficultyAccent: Record<Difficulty, string> = {
  beginner:
    "from-teal-300/30 to-teal-300/10 border-teal-300/30 text-teal-200",
  moderate:
    "from-teal-200/30 to-teal-300/10 border-teal-300/30 text-teal-200",
  advanced:
    "from-rose-300/25 to-indigo-300/10 border-rose-300/30 text-rose-200",
};

export default function PracticePage() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [selectedProblemId, setSelectedProblemId] = useState<string>("");
  const [latexSolution, setLatexSolution] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<GradingFeedback | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const filteredProblems = useMemo<PracticeProblem[]>(() => {
    return practiceProblems.filter(
      (p): p is PracticeProblem => p.difficulty === difficulty
    );
  }, [difficulty]);

  const selectedProblem = useMemo<PracticeProblem | null>(() => {
    return filteredProblems.find((p) => p.id === selectedProblemId) ?? null;
  }, [filteredProblems, selectedProblemId]);

  useEffect(() => {
    if (filteredProblems.length > 0) {
      setSelectedProblemId((currentId) => {
        const stillExists = filteredProblems.some((p) => p.id === currentId);
        return stillExists ? currentId : filteredProblems[0].id;
      });
    } else {
      setSelectedProblemId("");
    }

    setLatexSolution("");
    setFeedback(null);
    setErrorMsg("");
  }, [difficulty, filteredProblems]);

  function pickRandomProblem() {
    if (filteredProblems.length === 0) return;

    const randomProblem =
      filteredProblems[Math.floor(Math.random() * filteredProblems.length)];

    setSelectedProblemId(randomProblem.id);
    setLatexSolution("");
    setFeedback(null);
    setErrorMsg("");
  }

  async function submitForGrading() {
    if (!selectedProblem) {
      setErrorMsg("Please choose a problem first.");
      return;
    }

    if (!latexSolution.trim()) {
      setErrorMsg("Please paste your LaTeX solution before submitting.");
      return;
    }

    try {
      setErrorMsg("");
      setIsSubmitting(true);
      setFeedback(null);

      const res = await fetch("/api/practice-grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemTitle: selectedProblem.title,
          problemTopic: selectedProblem.topic,
          prompt: selectedProblem.prompt,
          hint: selectedProblem.hint ?? "",
          outline: selectedProblem.outline ?? "",
          modelProof: selectedProblem.modelProof ?? "",
          userSolution: latexSolution,
        }),
      });

      const contentType = res.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        if (res.status === 404) {
          throw new Error(
            "The grading API route was not found. Make sure app/api/practice-grade/route.ts exists."
          );
        }

        throw new Error(
          "The grading route did not return JSON. It may be crashing on the server."
        );
      }

      const data: GradingFeedback = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Grading failed.");
      }

      setFeedback({
        verdict: data.verdict ?? "No verdict provided",
        score: typeof data.score === "number" ? data.score : 0,
        feedback: data.feedback ?? "No feedback returned.",
        missing_steps: Array.isArray(data.missing_steps)
          ? data.missing_steps
          : [],
        next_steps: Array.isArray(data.next_steps) ? data.next_steps : [],
      });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while grading.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mb-practice-page">
      <section className="mb-practice-hero">
        <div><span>PRACTICE STUDIO</span><h1>Turn an idea into a <em>complete proof.</em></h1><p>Choose a problem, work through the argument, and get focused feedback on correctness, rigor, and missing steps.</p><div className="mb-practice-hero-stats"><span><strong>{practiceProblems.length}</strong> problems</span><span><strong>3</strong> levels</span><span><strong>AI</strong> proof feedback</span></div></div>
        <div className="mb-practice-hero-art" aria-hidden="true"><span className="practice-paper"><Image src="/learn-icons/equations.png" alt="" width={220} height={220} loading="eager"/></span><span className="practice-float practice-float-one"><Image src="/learn-icons/operations.png" alt="" width={100} height={100} loading="eager"/></span><span className="practice-float practice-float-two"><Image src="/learn-icons/symmetry.png" alt="" width={100} height={100} loading="eager"/></span><i>?</i><b>→</b><i>∴</i></div>
      </section>

      <div className="mb-practice-body">
        <section className="mb-practice-intro"><div><span>PROBLEM WORKSPACE</span><h2>Choose the right level, then make the reasoning yours.</h2></div><p>Hints are there when you need them. The proof itself should still be yours.</p></section>
        <div className="mb-practice-layout">
          <aside className="mb-practice-sidebar">
            <div className="mb-practice-controls">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Difficulty
              </p>

              <div className="mt-4 grid gap-2">
                {(["beginner", "moderate", "advanced"] as Difficulty[]).map(
                  (level) => {
                    const active = difficulty === level;
                    const count = practiceProblems.filter(
                      (p) => p.difficulty === level
                    ).length;

                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setDifficulty(level)}
                        className={`rounded-2xl border px-4 py-3 text-left transition ${
                          active
                            ? `bg-gradient-to-r ${difficultyAccent[level]}`
                            : "border-white/10 bg-[#060815]/30 text-slate-300 hover:border-white/15 hover:bg-slate-900/50"
                        }`}
                      >
                        <div className="text-sm font-medium">
                          {difficultyLabels[level]}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {count} problems
                        </div>
                      </button>
                    );
                  }
                )}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[#060815]/30 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Pick a problem
                </p>

                <select
                  value={selectedProblemId}
                  onChange={(e) => {
                    setSelectedProblemId(e.target.value);
                    setLatexSolution("");
                    setFeedback(null);
                    setErrorMsg("");
                  }}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm text-slate-100 outline-none focus:border-white/20"
                >
                  {filteredProblems.map((problem) => (
                    <option key={problem.id} value={problem.id}>
                      {problem.title}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={pickRandomProblem}
                  className="mt-3 w-full rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-4 py-2.5 text-sm font-medium text-slate-950 hover:brightness-110"
                >
                  Give me a random problem
                </button>
              </div>
            </div>

            <div className="mb-practice-how">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                How to use this
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>• Try the problem fully on your own first.</li>
                <li>• Use hints only if you’re genuinely stuck.</li>
                <li>• Submit LaTeX for AI feedback on rigor and logic.</li>
                <li>• Treat AI grading as feedback, not final truth.</li>
              </ul>
            </div>
          </aside>

          <section className="mb-practice-workspace">
            {selectedProblem ? (
              <>
                <div className="mb-problem-card">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium bg-gradient-to-r ${difficultyAccent[selectedProblem.difficulty]}`}
                    >
                      {difficultyLabels[selectedProblem.difficulty]}
                    </span>
                    <span className="text-xs text-slate-500">
                      {selectedProblem.topic}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-slate-50">
                    {selectedProblem.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    {selectedProblem.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#060815]/40 p-5">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-200">
                      {selectedProblem.prompt}
                    </p>
                  </div>

                  {(selectedProblem.hint || selectedProblem.outline) && (
                    <details className="mt-5 rounded-2xl border border-white/10 bg-[#060815]/30 p-5">
                      <summary className="cursor-pointer text-sm font-medium text-teal-300">
                        Show hint / outline
                      </summary>

                      {selectedProblem.hint && (
                        <p className="mt-4 text-sm text-slate-300">
                          <span className="font-semibold text-slate-100">
                            Hint.{" "}
                          </span>
                          {selectedProblem.hint}
                        </p>
                      )}

                      {selectedProblem.outline && (
                        <p className="mt-3 text-sm text-slate-300">
                          <span className="font-semibold text-slate-100">
                            Outline.{" "}
                          </span>
                          {selectedProblem.outline}
                        </p>
                      )}
                    </details>
                  )}
                </div>

                <div className="mb-proof-editor">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Submit your proof
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-100">
                        LaTeX answer box
                      </h3>
                    </div>

                    <div className="rounded-full border border-white/10 bg-[#060815]/30 px-3 py-1 text-xs text-slate-500">
                      AI grading
                    </div>
                  </div>

                  <textarea
                    value={latexSolution}
                    onChange={(e) => setLatexSolution(e.target.value)}
                    placeholder="Paste your LaTeX proof here..."
                    className="mt-5 min-h-[260px] w-full rounded-2xl border border-white/10 bg-[#060815]/50 px-4 py-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-white/20"
                  />

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={submitForGrading}
                      disabled={isSubmitting}
                      className="rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-5 py-2.5 text-sm font-medium text-slate-950 hover:brightness-110 disabled:opacity-60"
                    >
                      {isSubmitting ? "Grading..." : "Grade my solution"}
                    </button>

                    <span className="text-xs text-slate-500">
                      Checks correctness, rigor, and missing steps.
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  {feedback && (
                    <div className="mt-5 space-y-4 rounded-2xl border border-white/10 bg-[#060815]/40 p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/15 bg-slate-950 px-3 py-1 text-sm font-semibold text-slate-100">
                          Verdict: {feedback.verdict}
                        </span>

                        <span className="text-xs text-slate-400">
                          Score: {feedback.score}/10
                        </span>
                      </div>

                      <div className="whitespace-pre-wrap rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
                        {feedback.feedback}
                      </div>

                      {feedback.missing_steps && feedback.missing_steps.length > 0 && (
                        <div>
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Missing / weak steps
                          </p>
                          <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
                            {feedback.missing_steps.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {feedback.next_steps && feedback.next_steps.length > 0 && (
                        <div>
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            How to improve
                          </p>
                          <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
                            {feedback.next_steps.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="mb-practice-empty">
                No problem available for this difficulty yet.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
