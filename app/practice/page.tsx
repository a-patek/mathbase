"use client";

import { useEffect, useMemo, useState } from "react";
import { practiceProblems } from "@/data/practiceProblems";

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
    "from-emerald-400/30 to-emerald-500/10 border-emerald-500/30 text-emerald-300",
  moderate:
    "from-sky-400/30 to-sky-500/10 border-sky-500/30 text-sky-300",
  advanced:
    "from-fuchsia-400/30 to-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-300",
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
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[-120px] top-[180px] h-[360px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[8%] h-[360px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Practice Studio
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Proof problem bank
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Choose a difficulty, select a problem, or get a random one. Then
            write your proof in LaTeX and submit it for AI feedback on
            correctness, rigor, and missing steps.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
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
                            : "border-zinc-800 bg-black/30 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/50"
                        }`}
                      >
                        <div className="text-sm font-medium">
                          {difficultyLabels[level]}
                        </div>
                        <div className="mt-1 text-xs text-zinc-500">
                          {count} problems
                        </div>
                      </button>
                    );
                  }
                )}
              </div>

              <div className="mt-5 rounded-2xl border border-zinc-800 bg-black/30 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
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
                  className="mt-3 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-3 text-sm text-zinc-100 outline-none focus:border-zinc-600"
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
                  className="mt-3 w-full rounded-full bg-zinc-100 px-4 py-2.5 text-sm font-medium text-black hover:bg-white"
                >
                  Give me a random problem
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                How to use this
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>• Try the problem fully on your own first.</li>
                <li>• Use hints only if you’re genuinely stuck.</li>
                <li>• Submit LaTeX for AI feedback on rigor and logic.</li>
                <li>• Treat AI grading as feedback, not final truth.</li>
              </ul>
            </div>
          </aside>

          <section className="space-y-6">
            {selectedProblem ? (
              <>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] md:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium bg-gradient-to-r ${difficultyAccent[selectedProblem.difficulty]}`}
                    >
                      {difficultyLabels[selectedProblem.difficulty]}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {selectedProblem.topic}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
                    {selectedProblem.title}
                  </h2>

                  <p className="mt-2 text-sm text-zinc-400">
                    {selectedProblem.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/40 p-5">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-200">
                      {selectedProblem.prompt}
                    </p>
                  </div>

                  {(selectedProblem.hint || selectedProblem.outline) && (
                    <details className="mt-5 rounded-2xl border border-zinc-800 bg-black/30 p-5">
                      <summary className="cursor-pointer text-sm font-medium text-emerald-400">
                        Show hint / outline
                      </summary>

                      {selectedProblem.hint && (
                        <p className="mt-4 text-sm text-zinc-300">
                          <span className="font-semibold text-zinc-100">
                            Hint.{" "}
                          </span>
                          {selectedProblem.hint}
                        </p>
                      )}

                      {selectedProblem.outline && (
                        <p className="mt-3 text-sm text-zinc-300">
                          <span className="font-semibold text-zinc-100">
                            Outline.{" "}
                          </span>
                          {selectedProblem.outline}
                        </p>
                      )}
                    </details>
                  )}
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Submit your proof
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-zinc-100">
                        LaTeX answer box
                      </h3>
                    </div>

                    <div className="rounded-full border border-zinc-800 bg-black/30 px-3 py-1 text-xs text-zinc-500">
                      AI grading
                    </div>
                  </div>

                  <textarea
                    value={latexSolution}
                    onChange={(e) => setLatexSolution(e.target.value)}
                    placeholder="Paste your LaTeX proof here..."
                    className="mt-5 min-h-[260px] w-full rounded-2xl border border-zinc-800 bg-black/50 px-4 py-4 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-zinc-600"
                  />

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={submitForGrading}
                      disabled={isSubmitting}
                      className="rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-black hover:bg-white disabled:opacity-60"
                    >
                      {isSubmitting ? "Grading..." : "Grade my solution"}
                    </button>

                    <span className="text-xs text-zinc-500">
                      Checks correctness, rigor, and missing steps.
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  {feedback && (
                    <div className="mt-5 space-y-4 rounded-2xl border border-zinc-800 bg-black/40 p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-sm font-semibold text-zinc-100">
                          Verdict: {feedback.verdict}
                        </span>

                        <span className="text-xs text-zinc-400">
                          Score: {feedback.score}/10
                        </span>
                      </div>

                      <div className="whitespace-pre-wrap rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-300">
                        {feedback.feedback}
                      </div>

                      {feedback.missing_steps && feedback.missing_steps.length > 0 && (
                        <div>
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                            Missing / weak steps
                          </p>
                          <ul className="list-inside list-disc space-y-1 text-sm text-zinc-300">
                            {feedback.missing_steps.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {feedback.next_steps && feedback.next_steps.length > 0 && (
                        <div>
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                            How to improve
                          </p>
                          <ul className="list-inside list-disc space-y-1 text-sm text-zinc-300">
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
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 text-zinc-400">
                No problem available for this difficulty yet.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}