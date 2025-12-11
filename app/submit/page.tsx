// app/submit/page.tsx
"use client";

import { useState } from "react";
import { practiceProblems } from "@/data/practiceProblems";

export default function SubmitPage() {
  const [selectedId, setSelectedId] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const selectedProblem = practiceProblems.find((p) => p.id === selectedId);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setSubmissionId(null);

    if (!selectedProblem) {
      setError("Please select a problem.");
      return;
    }

    if (!file) {
      setError("Please upload a PDF of your proof.");
      return;
    }

    const formData = new FormData();
    formData.append("problemId", selectedProblem.id);
    formData.append("module", selectedProblem.module);
    formData.append("problemStatement", selectedProblem.statement);
    formData.append("file", file);

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/submit-proof", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to submit proof.");
      }

      const data = await res.json();
      setMessage(data.message || "Submission saved.");
      setSubmissionId(data.submissionId || null);
      setFile(null);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Submit a Proof</h1>

      {/* Instructions: LaTeX vs Google Docs */}
      <section className="mb-8 max-w-3xl">
        <div className="border border-zinc-700 rounded-lg p-4 bg-zinc-950 mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            How to write and export your proof
          </h2>
          <p className="text-zinc-300 text-sm mb-2">
            You should write your proof <span className="font-semibold">outside</span> this site, then
            upload it as a PDF.
          </p>
          <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
            <li>
              <span className="font-semibold">If you know LaTeX:</span> write your proof in LaTeX
              (Overleaf is great), then export as a PDF.
            </li>
            <li>
              <span className="font-semibold">If you&apos;re newer to proofs / formatting:</span> use
              Google Docs or Word, write a clear proof in normal English and math notation, then
              <span className="font-semibold"> File → Download → PDF</span>.
            </li>
          </ul>
          <p className="text-zinc-400 text-xs mt-2">
            This page is only for uploading the final PDF so it can be stored and later reviewed by AI
            and peers.
          </p>
        </div>
      </section>

      {/* Step 1: Choose problem */}
      <section className="mb-8 max-w-xl">
        <h2 className="text-2xl font-semibold mb-3">1. Choose a Problem</h2>
        <p className="text-zinc-400 text-sm mb-2">
          Problem IDs match the ones on the Practice page (e.g. DP-1, LOG-2).
        </p>

        <label className="block text-sm mb-1 text-zinc-300">
          Problem ID
        </label>
        <select
          value={selectedId}
          onChange={(e) => {
            setSelectedId(e.target.value);
            setError(null);
            setMessage(null);
            setSubmissionId(null);
          }}
          className="w-full bg-zinc-950 border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-400"
        >
          <option value="">Select a problem…</option>
          {practiceProblems.map((p) => (
            <option key={p.id} value={p.id}>
              {p.id} — {p.title}
            </option>
          ))}
        </select>

        {selectedProblem && (
          <div className="mt-3 border border-zinc-700 rounded-md p-3 bg-zinc-950">
            <div className="text-xs text-zinc-400 mb-1">
              Module: {selectedProblem.module}
            </div>
            <div className="font-medium mb-1">{selectedProblem.title}</div>
            <p className="text-sm text-zinc-200 whitespace-pre-line">
              {selectedProblem.statement}
            </p>
          </div>
        )}
      </section>

      {/* Step 2: Upload PDF */}
      <section className="mb-8 max-w-xl">
        <h2 className="text-2xl font-semibold mb-3">2. Upload Your Proof (PDF)</h2>
        <p className="text-zinc-400 text-sm mb-2">
          Upload the PDF you exported from LaTeX / Google Docs / Word. Only PDF files are accepted for
          now.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-zinc-300">
              Proof PDF
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const f = e.target.files?.[0] || null;
                setFile(f);
                setError(null);
                setMessage(null);
                setSubmissionId(null);
              }}
              className="text-sm text-zinc-200"
            />
            {file && (
              <p className="text-xs text-zinc-500 mt-1">
                Selected: {file.name}
              </p>
            )}
          </div>

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          {message && (
            <p className="text-green-400 text-sm">
              {message}
              {submissionId && (
                <>
                  {" "}
                  (Submission ID:{" "}
                  <span className="font-mono">{submissionId}</span>)
                </>
              )}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 disabled:cursor-not-allowed text-sm font-medium"
          >
            {isSubmitting ? "Uploading..." : "Upload proof PDF"}
          </button>
        </form>
      </section>

      {/* Info about storage / future */}
      <section className="border-t border-zinc-800 pt-6 mt-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">
          What happens to your submission?
        </h2>
        <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
          <li>Your PDF file is stored on the server in an internal uploads folder.</li>
          <li>
            Basic metadata (problem ID, filename, timestamp) is saved so it can later be shown in a
            peer review dashboard.
          </li>
          <li>
            In the next iteration, you&apos;ll be able to get AI feedback and structured comments from
            other students on this same proof.
          </li>
        </ul>
      </section>
    </main>
  );
}
