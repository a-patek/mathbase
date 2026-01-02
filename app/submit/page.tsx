// app/submit/page.tsx
"use client";

import { useState } from "react";

const coreModules = [
  "What is a Proof?",
  "Logic & Quantifiers",
  "Direct Proofs",
  "Counterexamples",
  "Contrapositive & Contradiction",
  "Mathematical Induction",
  "Sets & Functions (Proof-Oriented)",
];

const branches = [
  "Number Theory",
  "Combinatorics",
  "Graph Theory",
];

export default function SubmitPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [module, setModule] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      return;
    }

    if (f.type !== "application/pdf") {
      setStatus({
        type: "error",
        message: "Please upload a PDF file only.",
      });
      setFile(null);
      return;
    }

    if (f.size > 15 * 1024 * 1024) {
      setStatus({
        type: "error",
        message: "File is too large (max 15 MB). Try exporting a smaller PDF.",
      });
      setFile(null);
      return;
    }

    setStatus(null);
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!file) {
      setStatus({ type: "error", message: "Please attach your proof as a PDF before submitting." });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("module", module);
      formData.append("notes", notes);
      formData.append("file", file);

      const res = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        type: "success",
        message: "Submission received! Your proof is now stored for peer review.",
      });

      // Reset (but keep module so they can submit multiple for same topic)
      setFile(null);
      setNotes("");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message:
          "Something went wrong while uploading your proof. Try again in a minute.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 md:px-10 lg:px-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Submit a Proof for Review
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          Upload your proof as a{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            PDF document
          </span>
        </h1>

        <p className="mt-4 text-zinc-400 max-w-3xl">
          Write your proof in a tool you’re comfortable with, export it as a PDF,
          and upload it here. Your work will be used for future peer review and
          feedback on{" "}
          <span className="font-semibold text-zinc-200">mathbase</span>.
        </p>
      </section>

      {/* Two-column layout: instructions + form */}
      <section className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Left: authoring guidance */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold">
                1
              </span>
              Choose how to write your proof
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              Use whatever writing environment makes you most productive. Here are
              two common workflows:
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/90 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Beginner-friendly</p>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-300">
                    Recommended if new
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
                  <li>• Write in Google Docs, Word, or Pages.</li>
                  <li>• Use clear sentences and headings.</li>
                  <li>• Insert equations using your editor’s equation tool.</li>
                  <li>• When finished, export as <span className="font-mono text-zinc-200">PDF</span>.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-sky-700/60 bg-sky-950/30 p-4">
                <p className="text-sm font-semibold">LaTeX / Overleaf</p>
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-300">
                  <li>• Ideal if you already know LaTeX.</li>
                  <li>• Use a standard article or amsart template.</li>
                  <li>• Typeset the full proof with aligned equations.</li>
                  <li>• Download the compiled PDF and upload it below.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold">
                2
              </span>
              What makes a good submission?
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>• State the problem at the top of the document.</li>
              <li>• Use full sentences, not just chains of symbols.</li>
              <li>• Clearly mark where each lemma or claim begins.</li>
              <li>• If you’re unsure, add a short note explaining what you want feedback on.</li>
              <li>• Review your proof for clarity before submitting.</li>
            </ul>
          </div>
        </div>

        {/* Right: upload form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-5 shadow-[0_0_40px_rgba(15,23,42,0.7)]"
        >
          <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold">
              3
            </span>
            Upload your PDF
          </h2>
          <p className="text-xs text-zinc-400 mb-3">
            Your file will be stored securely and associated with the module you choose.
          </p>

          {/* Name / email */}
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Name <span className="text-zinc-500">(optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-500"
                placeholder="Ada Lovelace"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Email <span className="text-zinc-500">(optional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Module selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-zinc-300">
              Which module or branch does this proof belong to?
            </label>
            <select
              value={module}
              onChange={(e) => setModule(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-500"
            >
              <option value="">Select a module…</option>
              <optgroup label="Core proof modules">
                {coreModules.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Branches">
                {branches.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </optgroup>
              <option value="Other">Other / mixed</option>
            </select>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-zinc-300">
              Notes for reviewers <span className="text-zinc-500">(optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 resize-none"
              placeholder="Example: I’m not sure about the last step of my argument, I tried to use the contrapositive but it felt clumsy."
            />
          </div>

          {/* File upload */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-zinc-300">
              PDF file
            </label>
            <label className="group flex cursor-pointer items-center justify-between rounded-lg border border-dashed border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm hover:border-sky-500 hover:bg-zinc-900/80 transition-colors">
              <div className="flex flex-col">
                <span className="font-medium text-zinc-100">
                  {file ? file.name : "Click to choose a PDF file"}
                </span>
                <span className="text-xs text-zinc-500">
                  Max 15 MB • PDF only • exported from Google Docs, Word, Overleaf, etc.
                </span>
              </div>
              <span className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-200 group-hover:border-sky-500 group-hover:text-sky-300">
                Browse…
              </span>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Status messages */}
          {status && (
            <div
              className={`rounded-lg border px-3 py-2 text-xs ${
                status.type === "success"
                  ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-300"
                  : "border-red-500/60 bg-red-500/10 text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || !file}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 disabled:from-zinc-700 disabled:to-zinc-700 disabled:text-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Uploading…" : "Submit proof PDF"}
          </button>

          <p className="text-[11px] text-zinc-500 mt-1">
            For now, submissions are stored privately and will be surfaced later in the
            peer-review dashboard. You can always re-submit an updated version.
          </p>
        </form>
      </section>
    </main>
  );
}
