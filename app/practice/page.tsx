"use client";

import { useState, useMemo } from "react";
import { practiceProblems } from "@/data/practiceProblems";

// I'm keeping types loose for now so TS doesn't complain
type PracticeProblem = any;
type PracticeSection = any;

const sections: PracticeSection[] = practiceProblems as any[];

const difficultyColors: Record<string, string> = {
  warmup: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  core: "bg-sky-500/15 text-sky-300 border-sky-500/40",
  challenge: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/40",
};

const difficultyLabels: Record<string, string> = {
  all: "All difficulties",
  warmup: "Warm-up",
  core: "Core",
  challenge: "Challenge",
};

const difficultyOrder = ["warmup", "core", "challenge"];

type DifficultyFilter = "all" | "warmup" | "core" | "challenge";

export default function PracticePage() {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0]?.id ?? ""
  );
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");

  const activeSection = sections.find((s) => s.id === activeSectionId);

  const filteredProblems: PracticeProblem[] = useMemo(() => {
    if (!activeSection) return [];
    if (difficultyFilter === "all") return activeSection.problems ?? [];
    return (activeSection.problems ?? []).filter(
      (p: PracticeProblem) => p.difficulty === difficultyFilter
    );
  }, [activeSection, difficultyFilter]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 md:px-12 lg:px-20">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-2">
          Practice
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Proof training studio
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-3xl">
          Choose a topic, pick your difficulty, then try writing the proof on
          your own (LaTeX, notebook, or tablet). Use hints, outlines, and model
          proofs only after you’ve genuinely struggled.
        </p>
      </header>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left column – section list */}
        <aside className="lg:w-64 space-y-5">
          <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4">
            <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.16em] mb-3">
              Sections
            </h2>
            <div className="space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeSectionId;
                return (
                  <button
                    key={section.id}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm transition border ${
                      isActive
                        ? "bg-zinc-900 border-zinc-500 text-zinc-50 shadow-sm"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-900/60 hover:border-zinc-700 hover:text-zinc-100"
                    }`}
                    onClick={() => setActiveSectionId(section.id)}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 line-clamp-1">
                      {section.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 text-xs text-zinc-400 space-y-2">
            <h3 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-[0.16em] mb-1">
              How to use this page
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Pick a module and difficulty.</li>
              <li>Try to solve on paper before opening hints.</li>
              <li>Compare your reasoning with the model proof.</li>
            </ul>
          </div>
        </aside>

        {/* Right column – problems */}
        <section className="flex-1 space-y-5">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-[0.18em] mb-1">
                Problem set
              </p>
              <p className="text-sm text-zinc-200">
                {activeSection?.title ?? "Choose a module"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">Difficulty:</span>
              <div className="inline-flex rounded-full bg-zinc-900/80 border border-zinc-800 p-1">
                {(["all", ...difficultyOrder] as DifficultyFilter[]).map(
                  (level) => {
                    const active = level === difficultyFilter;
                    return (
                      <button
                        key={level}
                        onClick={() => setDifficultyFilter(level)}
                        className={`px-3 py-1 text-[11px] rounded-full transition font-medium ${
                          active
                            ? "bg-zinc-100 text-black shadow-sm"
                            : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70"
                        }`}
                      >
                        {difficultyLabels[level]}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Problems */}
          {!activeSection && (
            <div className="mt-6 text-sm text-zinc-500">
              Choose a module on the left to see problems.
            </div>
          )}

          {activeSection && (
            <div className="mt-3">
              {filteredProblems.length === 0 ? (
                <p className="mt-6 text-sm text-zinc-500">
                  No problems at this difficulty yet — try switching the filter
                  or pick another module.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProblems.map((problem: PracticeProblem) => (
                    <ProblemCard
                      key={problem.id}
                      problem={problem}
                      section={activeSection}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* ---------- ProblemCard component ---------- */

type ProblemCardProps = {
  problem: PracticeProblem;
  section: PracticeSection;
};

function ProblemCard({ problem, section }: ProblemCardProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showOutline, setShowOutline] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showModelProof, setShowModelProof] = useState(false);

  const badgeClass =
    difficultyColors[problem.difficulty] ??
    "bg-zinc-700/40 text-zinc-200 border-zinc-500/60";

  return (
    <div className="group flex flex-col bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-5 hover:border-zinc-500/80 hover:bg-zinc-900 transition-colors duration-200 shadow-sm hover:shadow-md">
      {/* Difficulty + section */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeClass}`}
        >
          {problem.difficulty.toUpperCase()}
        </span>
        <span className="text-xs text-zinc-500">
          {section.title}
        </span>
      </div>

      {/* Title & topic */}
      <h3 className="text-sm font-semibold text-zinc-50 mb-1">
        {problem.title}
      </h3>
      {problem.topic && (
        <p className="text-[11px] text-zinc-500 mb-2">{problem.topic}</p>
      )}

      {/* Prompt toggle */}
      <button
        onClick={() => setShowPrompt((v) => !v)}
        className="text-xs text-emerald-400 hover:text-emerald-300 mb-2 flex items-center gap-1"
      >
        {showPrompt ? "Hide prompt" : "Show prompt"}
      </button>
      {showPrompt && (
        <p className="text-sm text-zinc-200 bg-zinc-900/80 border border-zinc-800 rounded-lg p-3 mb-2">
          {problem.prompt}
        </p>
      )}

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mt-1 mb-2">
        <button
          onClick={() => setShowHint((v) => !v)}
          className="text-[11px] px-2 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition"
        >
          {showHint ? "Hide hint" : "Show hint"}
        </button>
        <button
          onClick={() => setShowOutline((v) => !v)}
          className="text-[11px] px-2 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition"
        >
          {showOutline ? "Hide outline" : "Show outline"}
        </button>
        <button
          onClick={() => setShowSolution((v) => !v)}
          className="text-[11px] px-2 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition"
        >
          {showSolution ? "Hide sketch" : "Show sketch"}
        </button>
        <button
          onClick={() => setShowModelProof((v) => !v)}
          className="text-[11px] px-2 py-1 rounded-full border border-indigo-500/60 text-indigo-200 hover:border-indigo-400 hover:text-indigo-100 transition"
        >
          {showModelProof ? "Hide model proof" : "Show model proof"}
        </button>
      </div>

      {/* Content blocks */}
      {showHint && problem.hint && (
        <div className="mt-1 text-xs text-zinc-300 bg-zinc-900/80 border border-dashed border-zinc-700 rounded-lg p-3">
          <span className="font-semibold text-zinc-100">Hint. </span>
          {problem.hint}
        </div>
      )}

      {showOutline && problem.outline && (
        <div className="mt-2 text-xs text-zinc-300 bg-zinc-900/80 border border-zinc-700 rounded-lg p-3">
          <span className="font-semibold text-zinc-100">Outline. </span>
          {problem.outline}
        </div>
      )}

      {showSolution && problem.solution && (
        <div className="mt-2 text-xs text-zinc-300 bg-zinc-950/80 border border-zinc-800 rounded-lg p-3">
          <span className="font-semibold text-zinc-100">Solution sketch. </span>
          {problem.solution}
        </div>
      )}

      {showModelProof && problem.modelProof && (
        <div className="mt-2 text-xs text-zinc-200 bg-zinc-950 border border-indigo-700/70 rounded-lg p-3 font-mono whitespace-pre-wrap">
          {problem.modelProof}
        </div>
      )}
    </div>
  );
}
