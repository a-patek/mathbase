// app/learn/[module]/page.tsx
// @ts-nocheck
import Link from "next/link";
import { lessons } from "@/data/lessons";

type ModuleParams = {
  module: string;
};

export default async function ModulePage({
  params,
}: {
  params: Promise<ModuleParams>;
}) {
  // ✅ unwrap the promise from Next
  const { module } = await params;

  const moduleData = (lessons as any)[module];

  if (!moduleData) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            404
          </p>
          <h1 className="text-2xl font-semibold">Module not found</h1>
          <p className="text-sm text-zinc-400">
            The module you tried to open doesn’t exist (or isn’t wired up yet).
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800"
          >
            ← Back to Learn
          </Link>
        </div>
      </main>
    );
  }

  const subsections = moduleData.subsections ?? [];

  const readableModuleTitle =
    moduleData.title || module.replace(/-/g, " ");

  const trackLabel = (() => {
    switch (moduleData.topic) {
      case "core":
        return "Core proof track";
      case "number-theory":
        return "Number theory branch";
      case "combinatorics":
        return "Combinatorics branch";
      case "graph-theory":
        return "Graph theory branch";
      default:
        return "Mathbase module";
    }
  })();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* --- header / hero --- */}
      <div className="border-b border-zinc-900 bg-gradient-to-b from-zinc-900/70 to-black">
        <div className="mx-auto max-w-6xl px-6 py-6 lg:py-10 space-y-6">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Link href="/learn" className="hover:text-zinc-100">
              Learn
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-100">{readableModuleTitle}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                {trackLabel}
              </p>
              <h1 className="text-3xl font-semibold md:text-4xl">
                {readableModuleTitle}
              </h1>
              <p className="text-sm text-zinc-400">
                Work through these bite-sized lessons. Each subsection has
                reading, notebook prompts, and an optional AI critique to refine
                your understanding.
              </p>
            </div>

            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  {subsections.length}{" "}
                  {subsections.length === 1 ? "subsection" : "subsections"}
                </span>
                <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-emerald-300">
                  Read → write → refine
                </span>
              </div>
              <p className="max-w-xs text-[0.7rem] text-zinc-500">
                Recommended: move in order, but you can jump around if you’re
                reviewing specific ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- subsections grid --- */}
      <div className="mx-auto max-w-6xl px-6 py-8 lg:py-12 space-y-6">
        {subsections.length === 0 ? (
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6 text-sm text-zinc-400">
            This module doesn’t have any subsections wired up yet. Check back
            soon.
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-zinc-200">
                Subsections
              </h2>
              <p className="text-xs text-zinc-500">
                Click into a subsection to read, practice, and get feedback on
                your explanation.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {subsections.map((sub: any, index: number) => {
                const href = `/learn/${module}/${sub.slug}`;
                const subtitle =
                  sub.tldr ||
                  "Reading, prompts, and a reflection checkpoint.";

                return (
                  <Link
                    key={sub.slug}
                    href={href}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5 transition hover:border-emerald-500/60 hover:bg-zinc-950"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500">
                          <span className="rounded-full bg-zinc-900 px-2 py-1 text-zinc-400">
                            Lesson {index + 1}
                          </span>
                          <span className="hidden sm:inline">Subsection</span>
                        </div>
                        <h3 className="text-sm font-semibold text-zinc-50">
                          {sub.title}
                        </h3>
                        <p className="text-xs text-zinc-400 line-clamp-3">
                          {subtitle}
                        </p>
                      </div>

                      <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition group-hover:border-emerald-500/60 group-hover:text-emerald-300">
                        →
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-zinc-500">
                      <span className="rounded-full bg-black/40 px-2 py-1">
                        Reading + notebook work
                      </span>
                      <span className="rounded-full bg-black/40 px-2 py-1">
                        Reflection + AI critique
                      </span>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-emerald-500/10 via-transparent opacity-0 transition group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
