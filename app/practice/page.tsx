// app/practice/page.tsx
"use client";

import { useState } from "react";
import { practiceProblems } from "@/data/practiceProblems";

const coreModules = [
  { slug: "what-is-a-proof", title: "What is a Proof?" },
  { slug: "logic", title: "Logic & Quantifiers" },
  { slug: "direct-proofs", title: "Direct Proofs" },
  { slug: "counterexamples", title: "Counterexamples" },
  {
    slug: "indirect-proofs",
    title: "Proof by Contradiction & Contrapositive",
  },
  { slug: "induction", title: "Mathematical Induction" },
  { slug: "sets-functions", title: "Sets & Functions (Proof-Oriented)" },
];

export default function PracticePage() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [openSolutionId, setOpenSolutionId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Practice Problems</h1>

      <p className="text-zinc-300 mb-6 max-w-2xl">
        Use these problems to write full proofs in your own notebook or LaTeX
        environment. When you&apos;re happy with a proof, go to the{" "}
        <span className="font-semibold">Submit</span> page to upload a PDF for
        AI and (soon) peer feedback.
      </p>

      {/* Core Proof Modules */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Core Proof Track</h2>
        <p className="text-zinc-400 mb-4 text-sm">
          Start with these modules to build your proof foundation. Each module
          has a small set of focused practice problems.
        </p>

        <div className="space-y-3">
          {coreModules.map((mod) => {
            const problemsForModule = practiceProblems.filter(
              (p) => p.module === mod.slug
            );

            const isOpen = expandedModule === mod.slug;

            return (
              <div
                key={mod.slug}
                className="border border-zinc-700 rounded-lg"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedModule(isOpen ? null : mod.slug)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 hover:bg-zinc-900"
                >
                  <span className="font-semibold">{mod.title}</span>
                  <span className="text-xs text-zinc-400">
                    {problemsForModule.length > 0
                      ? `${problemsForModule.length} problem${
                          problemsForModule.length > 1 ? "s" : ""
                        }`
                      : "No problems yet (coming soon)"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 space-y-4">
                    {problemsForModule.length > 0 ? (
                      problemsForModule.map((prob) => (
                        <div
                          key={prob.id}
                          className="border border-zinc-800 rounded-md p-3 bg-zinc-950"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-zinc-400">
                              {prob.id}
                            </span>
                            <span className="text-xs text-zinc-500">
                              Solve offline · submit as PDF later
                            </span>
                          </div>

                          <h3 className="font-medium mb-1">{prob.title}</h3>
                          <p className="text-sm text-zinc-200 whitespace-pre-line">
                            {prob.statement}
                          </p>

                          {/* Show valid proof toggle */}
                          <button
                            type="button"
                            onClick={() =>
                              setOpenSolutionId(
                                openSolutionId === prob.id ? null : prob.id
                              )
                            }
                            className="mt-3 text-xs px-3 py-1 rounded-md border border-zinc-600 hover:bg-zinc-800 transition"
                          >
                            {openSolutionId === prob.id
                              ? "Hide valid proof"
                              : "Show valid proof"}
                          </button>

                          {openSolutionId === prob.id && (
                            <div className="mt-3 border border-zinc-700 rounded-md p-3 bg-black">
                              {prob.solution ? (
                                <div className="text-xs text-zinc-100 whitespace-pre-line">
                                  {prob.solution}
                                </div>
                              ) : (
                                <p className="text-xs text-zinc-500">
                                  Model solution coming soon. Try to fully
                                  justify each step in your own proof first.
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-zinc-500">
                        No practice problems added here yet. They&apos;re
                        coming soon as this module is expanded.
                      </p>
                    )}

                    {problemsForModule.length > 0 && (
                      <p className="text-xs text-zinc-500 mt-2">
                        When you&apos;ve written a full proof for any of these,
                        upload it on the{" "}
                        <span className="font-semibold">Submit</span> page
                        using the matching problem ID (for example{" "}
                        {problemsForModule[0].id}).
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Tier 2 teaser */}
      <section className="border-t border-zinc-800 pt-6 mt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Tier 2: Branches of Math (Coming Soon)
        </h2>
        <p className="text-zinc-400 text-sm mb-3 max-w-2xl">
          Once you&apos;re comfortable with the core proof track, you&apos;ll be
          able to practice Number Theory, Combinatorics, and Graph Theory here
          as well. Their problem sets will appear as modules go live.
        </p>
      </section>
    </main>
  );
}
