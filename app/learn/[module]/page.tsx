// app/learn/[module]/page.tsx
// @ts-nocheck

import Link from "next/link";
import { lessons } from "@/data/lessons";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params; // Next 16: params is a Promise
  const lesson = (lessons as any)[module];

  if (!lesson) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Module not found</h1>
        <p className="text-gray-300 mb-2">
          No lesson data found for "{module}".
        </p>
        <p className="text-gray-400 text-sm">
          Available modules: {Object.keys(lessons).join(", ")}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">{lesson.title}</h1>

      <h2 className="text-2xl font-semibold mb-4">Subsections</h2>
      <div className="flex flex-col gap-3">
        {lesson.subsections?.map((subsection: any) => (
          <Link
            key={subsection.slug}
            href={`/learn/${module}/${subsection.slug}`}
            className="border border-zinc-700 p-4 rounded-lg hover:bg-zinc-900 transition"
          >
            {subsection.title}
          </Link>
        ))}
      </div>
    </main>
  );
}