// components/SubsectionClient.tsx
// @ts-nocheck
"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
export default function SubsectionClient({
  subsection,
  moduleSlug,
}: {
  subsection: any;
  moduleSlug: string;
}) {
  const [solution, setSolution] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitted(true);
    setIsReviewing(true);
    setError(null);
    setFeedback(null);

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          solution,
          moduleSlug,
          subsectionSlug: subsection.slug,
          subsectionTitle: subsection.title,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to get AI feedback");
      }

      const data = await res.json();
      setFeedback(data.feedback);
    } catch (err: any) {
      console.error(err);
      setError("Something went wrong while generating feedback.");
    } finally {
      setIsReviewing(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">{subsection.title}</h1>

      {/* Reading */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Reading</h2>


    <div className="prose prose-invert max-w-none">
    <ReactMarkdown>
    {   subsection.reading}
    </ReactMarkdown>
    </div>
      </section>

      {/* Practice */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Practice Problems</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          {subsection.practice?.map((q: string, i: number) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </section>

      {/* TL;DR */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">TL;DR</h2>
        <p className="text-blue-300">{subsection.tldr}</p>
      </section>

   {/* Concept Check */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Concept Check</h2>
        <p className="text-zinc-400 mb-4">
          In your own words, explain the main idea covered in this section.
        </p>

        <textarea
          className="w-full bg-zinc-900 text-white border border-zinc-700 rounded-lg p-4 h-40 focus:outline-none focus:border-zinc-400 resize-none"
          placeholder="Explain the concept here..."
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={!solution || isReviewing}
          className="mt-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 disabled:cursor-not-allowed transition rounded-lg"
        >
          {isReviewing ? "Analyzing your explanation..." : "Check My Understanding"}
        </button>

        {submitted && !isReviewing && !error && (
          <p className="text-green-400 mt-3">
            ✔️ Got it! AI feedback on your understanding is shown below.
          </p>
        )}

        {error && (
          <p className="text-red-400 mt-3">
            {error}
          </p>
        )}
      </section>

      {/* AI Feedback Section */}
      {isReviewing && (
        <section className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Your Understanding</h2>
          <p className="text-gray-400">Thinking about your explanation…</p>
        </section>
      )}

      {feedback && !isReviewing && (
        <section className="mt-6 border border-zinc-700 rounded-lg p-4 bg-zinc-900">
          <h2 className="text-lg font-semibold mb-3">Your Understanding</h2>
          <p className="text-gray-200 whitespace-pre-line">{feedback}</p>
        </section>
      )}
    </main>
  );
}
