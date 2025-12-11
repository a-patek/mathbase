// app/learn/[module]/[subsection]/page.tsx
// @ts-nocheck

import { lessons } from "@/data/lessons";
import SubsectionClient from "@/components/SubsectionClient";

export default async function SubsectionPage({
  params,
}: {
  params: Promise<{ module: string; subsection: string }>;
}) {
  const { module, subsection: subsectionSlug } = await params;

  const moduleData = (lessons as any)[module];
  if (!moduleData) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Module not found</h1>
      </main>
    );
  }

  const subsection = moduleData.subsections?.find(
    (s: any) => s.slug === subsectionSlug
  );

  if (!subsection) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Subsection not found</h1>
      </main>
    );
  }

  // ✅ Pass both subsection + module slug to the client component
  return (
    <SubsectionClient
      subsection={subsection}
      moduleSlug={module}
    />
  );
}
