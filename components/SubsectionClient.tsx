// components/SubsectionClient.tsx
"use client";
// @ts-nocheck

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

type SubsectionClientProps = {
  subsection: any;
  moduleSlug: string;
};

export default function SubsectionClient({
  subsection,
  moduleSlug,
}: SubsectionClientProps) {
  const [reflection, setReflection] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!reflection.trim()) return;

    setIsReviewing(true);
    setError(null);
    setSubmitted(false);
    setFeedback("");

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          solution: reflection,
          moduleSlug,
          subsectionSlug: subsection.slug,
          lessonTitle: subsection.title,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to get AI feedback.");
      }

      const data = await res.json();
      setFeedback(
        data.feedback ??
          data.message ??
          "Got a response, but it wasn’t in the expected format."
      );
      setSubmitted(true);
    } catch (err: any) {
      const msg = String(err?.message ?? "Something went wrong.");
      if (msg.toLowerCase().includes("insufficient_quota")) {
        setError(
          "We hit the AI usage limit for now. Your explanation is still in the box — try again later."
        );
      } else {
        setError(
          "Something went wrong while generating feedback. Your explanation is still in the box."
        );
      }
    } finally {
      setIsReviewing(false);
    }
  };

  const practiceItems: string[] =
    subsection.practice ??
    (subsection.practicePrompt ? [subsection.practicePrompt] : []);

  const readableModule = moduleSlug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-[#060815] text-white">
      {/* Top bar / hero */}
      <div className="border-b border-white/10 bg-gradient-to-b from-slate-900/70 to-[#060815]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 lg:py-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/learn" className="hover:text-slate-100">
              Learn
            </Link>
            <span className="text-slate-600">/</span>
            <span className="capitalize text-slate-300">
              {readableModule}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-100">{subsection.title}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal-300">
                Lesson subsection
              </p>
              <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
                {subsection.title}
              </h1>
              <p className="mt-3 text-sm text-slate-400">
                Read the explanation, try the on-paper prompts, then
                explain the idea in your own words. Use AI feedback as a
                mentor, not a shortcut.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 text-xs text-slate-400 sm:items-end">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 px-3 py-1">
                  10–20 min focus
                </span>
                <span className="rounded-full border border-teal-300/60 bg-teal-300/10 px-3 py-1 text-teal-200">
                  Proof-first mindset
                </span>
              </div>
              <p className="max-w-xs text-right text-[0.7rem] text-slate-500">
                Best flow: read → think on paper → write a short
                explanation → refine with feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:py-12">
        {/* LEFT: Reading + TL;DR + prompts */}
        <section className="space-y-6 lg:space-y-8">
          {/* Reading card */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold">Reading</h2>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                Core explanation
              </span>
            </div>

            <div className="prose prose-invert max-w-none prose-headings:text-slate-100 prose-strong:text-slate-100 prose-code:text-teal-200 prose-a:text-teal-200">
              <ReactMarkdown>{subsection.reading}</ReactMarkdown>
            </div>
          </div>

          {/* TL;DR */}
          {subsection.tldr && (
            <div className="rounded-2xl border border-teal-300/60 bg-teal-300/8 p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal-200">
                TL;DR — key idea
              </p>
              <p className="mt-2 text-sm text-teal-50">
                {subsection.tldr}
              </p>
            </div>
          )}

          {/* On-paper prompts */}
          {(practiceItems && practiceItems.length > 0) && (
            <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-5">
              <h2 className="text-sm font-semibold">
                Try these in your notebook
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Don’t skip this – writing proofs or explanations on
                paper is where most of the learning actually happens.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {practiceItems.map((p: string, i: number) => (
                  <li
                    key={i}
                    className="flex gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-3"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-900 text-[0.7rem] text-slate-400">
                      {i + 1}
                    </span>
                    <p className="whitespace-pre-line">{p}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[0.7rem] text-slate-500">
                Once you’ve sketched some ideas, summarize the main
                insight in the reflection box on the right.
              </p>
            </div>
          )}
        </section>

        {/* RIGHT: Reflection + AI feedback */}
        <section className="space-y-6 lg:space-y-8">
          <div className="sticky top-4 space-y-6">
            {/* Reflection card */}
            <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-5">
              <h2 className="text-sm font-semibold">
                Check your understanding
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                In 3–6 sentences, explain the core idea of this
                subsection as if you were teaching a friend who hasn’t
                seen it. Focus on the logic, not just the final
                statements.
              </p>

              <textarea
                className="mt-4 h-40 w-full resize-none rounded-xl border border-white/10 bg-[#060815]/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-600 focus:border-teal-200/45"
                placeholder="Write your own explanation here…"
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
              />

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={!reflection.trim() || isReviewing}
                  className="inline-flex items-center justify-center rounded-full bg-teal-300 px-4 py-2 text-sm font-medium text-slate-950 shadow-md shadow-teal-300/30 transition hover:bg-teal-200 disabled:bg-slate-800 disabled:text-slate-500 disabled:shadow-none"
                >
                  {isReviewing
                    ? "Getting AI critique…"
                    : "Get AI feedback"}
                </button>
                <p className="text-[0.7rem] text-slate-500">
                  AI is optional. Use it to spot gaps and sharpen your
                  wording, not to replace your own thinking.
                </p>
              </div>

              {submitted && !isReviewing && !error && (
                <p className="mt-3 text-xs text-teal-200">
                  ✔️ Feedback generated below. Re-write your explanation
                  if you spot mistakes or fuzzy parts.
                </p>
              )}

              {error && (
                <p className="mt-3 text-xs text-red-400">{error}</p>
              )}
            </div>

            {/* Feedback card */}
            {feedback && (
              <div className="rounded-2xl border border-teal-300/50 bg-teal-300/8 p-5">
                <h2 className="text-sm font-semibold text-teal-100">
                  AI feedback
                </h2>
                <p className="mt-2 text-xs text-teal-200">
                  Treat this as a mentor’s comments, not a grade.
                </p>
                <div className="mt-3 whitespace-pre-line text-sm text-teal-50">
                  {feedback}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
