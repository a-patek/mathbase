import Link from "next/link";
import { branches } from "@/data/branches";

const modules = [
  { slug: "what-is-a-proof", title: "What is a Proof?" },
  { slug: "logic", title: "Logic & Quantifiers" },
  { slug: "direct-proofs", title: "Direct Proofs" },
  { slug: "counterexamples", title: "Counterexamples" },
  { slug: "indirect-proofs", title: "Proof by Contradiction & Contrapositive" },
  { slug: "induction", title: "Mathematical Induction" },
  { slug: "sets-functions", title: "Sets & Functions (Proof-Oriented)" },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Learn</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Core Proof Modules</h2>
        <div className="flex flex-col gap-4">
{modules.map((m) => (
  <Link
    key={m.slug}
    href={`/learn/${m.slug}`}
    className="border border-zinc-700 rounded-lg p-4 hover:bg-zinc-900 transition"
  >
    {m.title}
  </Link>
))}
        </div>
      </section>
      <section className="mt-12">
  <h2 className="text-2xl font-semibold mb-4">Tier 2: Branches of Math</h2>
  <p className="text-zinc-400 mb-4">
    After mastering the core proof track, pick a branch to explore more deeply.
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    {Object.values(branches).map((branch) => (
      <div
        key={branch.id}
        className="border border-zinc-700 rounded-lg p-4 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold mb-2">{branch.name}</h3>
          <p className="text-zinc-400 text-sm mb-3">{branch.description}</p>
          <ul className="text-sm text-zinc-300 space-y-1">
            {branch.modules.map((m) => (
              <li key={m.slug}>• {m.title}</li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-zinc-500 mt-3">
          Coming soon as full interactive modules.
        </p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}
