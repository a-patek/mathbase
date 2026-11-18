// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { lessons } from "@/data/lessons";

type ModuleParams = {
  module: string;
};

const moduleIcons: Record<string, string> = {
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

const supportingIcons = [
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

const modulePhotos: Record<string, { src: string; alt: string; caption: string }> = {
  "what-is-a-proof": {
    src: "/media/study-session.jpg",
    alt: "Math Base students working together during a study session",
    caption: "Proofs get clearer when ideas are shared",
  },
  "direct-proofs": {
    src: "/media/mathbase-wall.jpg",
    alt: "Two students wearing Math Base shirts",
    caption: "Student-built mathematics, made to be shared",
  },
  counterexamples: {
    src: "/media/mathbase-bench.jpg",
    alt: "Math Base students with a Math Base shirt",
    caption: "A toolkit built beyond the classroom",
  },
  combinatorics: {
    src: "/media/pigeonhole-presentation.jpg",
    alt: "Math Base students presenting the pigeonhole principle",
    caption: "A Math Base pigeonhole-principle lesson in action",
  },
};

const moduleSymbols = ["∑", "∀", "⇒", "≠", "¬", "n+1", "A∪B", "ℤ", "n!", "G"];

function getTrackLabel(topic?: string) {
  if (topic === "number-theory") return "Number theory branch";
  if (topic === "combinatorics") return "Combinatorics branch";
  if (topic === "graph-theory") return "Graph theory branch";
  return "Core proof track";
}

export default async function ModulePage({
  params,
}: {
  params: Promise<ModuleParams>;
}) {
  const { module } = await params;
  const moduleData = (lessons as any)[module];

  if (!moduleData) {
    return (
      <main className="mb-module-page mb-module-missing">
        <span>404</span>
        <h1>Module not found</h1>
        <p>The module you tried to open is not available yet.</p>
        <Link href="/learn">← Back to Learn</Link>
      </main>
    );
  }

  const subsections = moduleData.subsections ?? [];
  const title = moduleData.title || module.replace(/-/g, " ");
  const icon = moduleIcons[module] ?? "/learn-icons/foundations.png";
  const photo = modulePhotos[module];
  const moduleIndex = Math.max(0, Object.keys(moduleIcons).indexOf(module));
  const symbol = moduleSymbols[moduleIndex % moduleSymbols.length];
  const secondaryIcon = supportingIcons[(moduleIndex + 3) % supportingIcons.length];
  const tertiaryIcon = supportingIcons[(moduleIndex + 6) % supportingIcons.length];

  return (
    <main className="mb-module-page">
      <section className="mb-module-hero">
        <div className="mb-module-hero-copy">
          <nav aria-label="Breadcrumb">
            <Link href="/learn">Learn</Link>
            <span>/</span>
            <span>{title}</span>
          </nav>

          <span>{getTrackLabel(moduleData.topic)}</span>
          <h1>{title}</h1>
          <p>Short lessons, notebook work, and one clear idea at a time.</p>

          <div className="mb-module-meta">
            <span><strong>{subsections.length}</strong> lessons</span>
            <span><strong>10–20</strong> min each</span>
            <span><strong>01</strong> connected path</span>
          </div>
        </div>

        <div className={`mb-module-hero-visual visual-${(moduleIndex % 5) + 1}`}>
          {photo ? (
            <>
              <figure>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 42vw" priority />
                <figcaption>{photo.caption}</figcaption>
              </figure>
              <div className="mb-module-icon-tile" aria-hidden="true">
                <Image src={icon} alt="" width={180} height={180} />
              </div>
            </>
          ) : (
            <div className="mb-module-concept-art" aria-hidden="true">
              <span>{symbol}</span>
              <Image className="is-primary" src={icon} alt="" width={210} height={210} />
              <Image className="is-secondary" src={secondaryIcon} alt="" width={105} height={105} />
              <Image className="is-tertiary" src={tertiaryIcon} alt="" width={90} height={90} />
              <i>{title}</i>
            </div>
          )}
        </div>
      </section>

      <section className="mb-module-shell">
        <div className="mb-module-flow" aria-label="How each lesson works">
          <article><b>01</b><Image src="/learn-icons/foundations.png" alt="" width={72} height={72} /><div><strong>See the idea</strong><span>Start with the visual structure.</span></div></article>
          <article><b>02</b><Image src="/learn-icons/equations.png" alt="" width={72} height={72} /><div><strong>Try it</strong><span>Work the key step on paper.</span></div></article>
          <article><b>03</b><Image src="/learn-icons/symmetry.png" alt="" width={72} height={72} /><div><strong>Explain it</strong><span>Make the reasoning your own.</span></div></article>
        </div>

        <header className="mb-module-list-head">
          <div>
            <span>YOUR LESSONS</span>
            <h2>Build the idea step by step.</h2>
          </div>
          <p>Move in order or jump to the concept you need.</p>
        </header>

        {subsections.length === 0 ? (
          <div className="mb-module-empty">Lessons for this module are coming soon.</div>
        ) : (
          <div className="mb-module-lesson-grid">
            {subsections.map((sub: any, index: number) => (
              <Link
                key={sub.slug}
                href={`/learn/${module}/${sub.slug}`}
                className="mb-module-lesson-card"
              >
                <div className={`mb-module-lesson-icon shade-${(index % 4) + 1}`}>
                  <Image
                    src={supportingIcons[index % supportingIcons.length]}
                    alt=""
                    width={105}
                    height={105}
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <span>LESSON {index + 1}</span>
                  <h3>{sub.title}</h3>
                  <p>{sub.tldr || "Read the idea, sketch the reasoning, and explain the key step."}</p>
                  <footer><small>Reading · notebook · reflection</small><b>→</b></footer>
                </div>
              </Link>
            ))}
          </div>
        )}

        <section className="mb-module-community-strip">
          <div className={`mb-module-community-art visual-${(moduleIndex % 5) + 1}`} aria-hidden="true">
            <span>{symbol}</span>
            <Image className="is-primary" src={icon} alt="" width={180} height={180} />
            <Image className="is-secondary" src={secondaryIcon} alt="" width={105} height={105} />
          </div>
          <section>
            <span>MATH IS SOCIAL</span>
            <h2>Read alone. Think together.</h2>
            <p>The best proof is the one you can explain clearly to someone else.</p>
            <Link href="/practice">Take it into practice <b>→</b></Link>
          </section>
        </section>
      </section>
    </main>
  );
}
