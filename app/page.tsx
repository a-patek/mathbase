// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        mathbase
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl text-center mb-8">
        Master mathematical proofs through short lessons, practice problems, and peer review.
      </p>
      <div className="flex gap-4">
        <a
          href="/learn"
          className="rounded-lg px-6 py-3 border border-white text-sm md:text-base hover:bg-white hover:text-black transition"
        >
          Start Learning
        </a>
        <a
          href="/practice"
          className="rounded-lg px-6 py-3 border border-gray-500 text-sm md:text-base hover:border-white transition"
        >
          Practice Problems
        </a>
      </div>
    </main>
  );
}