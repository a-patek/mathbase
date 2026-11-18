"use client";
// @ts-nocheck

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

type SubsectionClientProps = {
  subsection: any;
  moduleSlug: string;
};

const lessonIcons: Record<string, string> = {
  "what-is-a-proof": "/learn-icons/foundations.png",
  logic: "/learn-icons/logic.png",
  "direct-proofs": "/learn-icons/equations.png",
  counterexamples: "/learn-icons/relations.png",
  "contradiction-contrapositive": "/learn-icons/operations.png",
  induction: "/learn-icons/graph.png",
  "sets-and-functions": "/learn-icons/sets.png",
  "number-theory": "/learn-icons/equations.png",
  combinatorics: "/learn-icons/operations.png",
  "graph-theory": "/learn-icons/graph.png",
};

const visualIcons = [
  "/learn-icons/foundations.png",
  "/learn-icons/logic.png",
  "/learn-icons/equations.png",
  "/learn-icons/relations.png",
  "/learn-icons/operations.png",
  "/learn-icons/geometry.png",
  "/learn-icons/graph.png",
  "/learn-icons/sets.png",
  "/learn-icons/symmetry.png",
];

const lessonSymbols = ["∑", "∀", "⇒", "≠", "¬", "n+1", "A∪B", "ℤ", "n!", "G"];

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
          "Got a response, but it wasn’t in the expected format.",
      );
      setSubmitted(true);
    } catch (err: any) {
      const message = String(err?.message ?? "Something went wrong.");
      setError(
        message.toLowerCase().includes("insufficient_quota")
          ? "We hit the AI usage limit for now. Your explanation is still saved here—try again later."
          : "Feedback could not be generated. Your explanation is still saved here.",
      );
    } finally {
      setIsReviewing(false);
    }
  };

  const practiceItems: string[] =
    subsection.practice ??
    (subsection.practicePrompt ? [subsection.practicePrompt] : []);
  const readableModule = moduleSlug.replace(/-/g, " ");
  const icon = lessonIcons[moduleSlug] ?? "/learn-icons/foundations.png";
  const visualSeed = Array.from(subsection.slug as string).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );
  const visualIndex = visualSeed % visualIcons.length;
  const secondaryIcon = visualIcons[visualIndex];
  const tertiaryIcon = visualIcons[(visualIndex + 4) % visualIcons.length];
  const symbol = lessonSymbols[visualSeed % lessonSymbols.length];

  return (
    <main className="mb-lesson-page">
      <header className="mb-lesson-hero">
        <nav aria-label="Breadcrumb">
          <Link href="/learn">Learn</Link>
          <span>/</span>
          <Link href={`/learn/${moduleSlug}`} className="capitalize">{readableModule}</Link>
          <span>/</span>
          <span>{subsection.title}</span>
        </nav>

        <div className="mb-lesson-hero-grid">
          <div className="mb-lesson-hero-copy">
            <span>LESSON SUBSECTION</span>
            <h1>{subsection.title}</h1>
            <p>See the idea. Try the key step. Explain it back.</p>
            <div>
              <span>10–20 min</span>
              <span>Notebook ready</span>
              <span>Proof-first</span>
            </div>
          </div>

          <div className={`mb-lesson-hero-art visual-${(visualIndex % 5) + 1}`}>
            <div className="mb-lesson-concept-art" aria-hidden="true">
              <span>{symbol}</span>
              <Image className="is-primary" src={icon} alt="" width={175} height={175} priority />
              <Image className="is-secondary" src={secondaryIcon} alt="" width={90} height={90} />
              <Image className="is-tertiary" src={tertiaryIcon} alt="" width={78} height={78} />
              <i>{subsection.title}</i>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-lesson-content">
        <section className="mb-lesson-reading-column">
          <div className="mb-lesson-snapshot">
            <article><Image src="/learn-icons/foundations.png" alt="" width={58} height={58} /><div><b>Read</b><span>Find the structure.</span></div></article>
            <article><Image src="/learn-icons/equations.png" alt="" width={58} height={58} /><div><b>Try</b><span>Work it on paper.</span></div></article>
            <article><Image src="/learn-icons/symmetry.png" alt="" width={58} height={58} /><div><b>Explain</b><span>Say why it works.</span></div></article>
          </div>

          <article className="mb-lesson-reading-card">
            <header>
              <div className="mb-lesson-card-icon"><Image src={icon} alt="" width={88} height={88} /></div>
              <div><span>CORE IDEA</span><h2>Read the argument</h2></div>
            </header>
            <div className="mb-lesson-prose">
              <ReactMarkdown>{subsection.reading}</ReactMarkdown>
            </div>
          </article>

          {subsection.tldr && (
            <aside className="mb-lesson-key-idea">
              <Image src="/learn-icons/logic.png" alt="" width={76} height={76} />
              <div><span>KEEP THIS</span><p>{subsection.tldr}</p></div>
            </aside>
          )}

          <div className={`mb-lesson-visual-break visual-${(visualIndex % 5) + 1}`} aria-hidden="true">
            <span>{symbol}</span>
            <Image className="is-primary" src={icon} alt="" width={150} height={150} />
            <Image className="is-secondary" src={secondaryIcon} alt="" width={100} height={100} />
            <Image className="is-tertiary" src={tertiaryIcon} alt="" width={90} height={90} />
            <p>IDEA <b>→</b> ARGUMENT <b>→</b> PROOF</p>
          </div>

          {practiceItems.length > 0 && (
            <article className="mb-lesson-notebook-card">
              <header>
                <Image src="/learn-icons/equations.png" alt="" width={82} height={82} />
                <div><span>YOUR TURN</span><h2>Try it in your notebook</h2><p>Sketch the reasoning before you type.</p></div>
              </header>
              <ol>
                {practiceItems.map((prompt: string, index: number) => (
                  <li key={index}><span>{index + 1}</span><p>{prompt}</p></li>
                ))}
              </ol>
            </article>
          )}
        </section>

        <aside className="mb-lesson-reflection-column">
          <div className="mb-lesson-reflection-card">
            <div className="mb-lesson-reflection-icon"><Image src="/learn-icons/relations.png" alt="" width={90} height={90} /></div>
            <span>CHECK YOUR UNDERSTANDING</span>
            <h2>Teach the key idea.</h2>
            <p>Explain it in 3–6 sentences as if a friend asked “why?”</p>
            <textarea
              placeholder="Write your explanation here…"
              value={reflection}
              onChange={(event) => setReflection(event.target.value)}
            />
            <button type="button" onClick={handleSubmit} disabled={!reflection.trim() || isReviewing}>
              {isReviewing ? "Getting feedback…" : "Get AI feedback"}
            </button>
            <small>Optional feedback · your reasoning comes first.</small>

            {submitted && !isReviewing && !error && (
              <p className="mb-lesson-success">✓ Feedback generated below.</p>
            )}
            {error && <p className="mb-lesson-error">{error}</p>}
          </div>

          {feedback && (
            <div className="mb-lesson-feedback">
              <span>AI FEEDBACK</span>
              <h2>Refine the explanation</h2>
              <p>{feedback}</p>
            </div>
          )}

          <Link className="mb-lesson-next-link" href={`/learn/${moduleSlug}`}>
            <span>BACK TO THE MODULE</span>
            <b>See every lesson →</b>
          </Link>
        </aside>
      </section>
    </main>
  );
}
