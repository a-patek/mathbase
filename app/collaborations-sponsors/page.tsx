import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Collaborations & Sponsors | MathBase",
  description:
    "Collaborations, sponsors, and community spaces connected to MathBase.",
};

export default function CollaborationsSponsorsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060815] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[120px] h-[320px] w-[420px] rounded-full bg-indigo-300/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[5%] h-[300px] w-[420px] rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            Community network
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Collaborations{" "}
            <span className="bg-gradient-to-r from-teal-200 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
              &amp; Sponsors
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
            MathBase grows through local partnerships, sponsors, student
            projects, and shared spaces where people can build, teach, and solve
            problems together.
          </p>
        </header>

        <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start">
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-sm">
            <Image
              src="/img-4155.jpeg"
              alt="MathBase students outside Code Ninjas"
              width={1820}
              height={1180}
              className="aspect-[16/10] w-full object-cover"
              priority
            />
            <figcaption className="border-t border-white/10 px-6 py-5 text-sm leading-relaxed text-white/55">
              One of the spaces connected to MathBase&apos;s student-led work:
              building community through coding, math, mentoring, and
              competition-focused collaboration.
            </figcaption>
          </figure>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                Collaborations
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                Some of the collaborations we have had
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                MathBase works with community spaces and student groups that
                support problem solving, coding, mentoring, and competition
                math.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                Sponsors
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                Supporting free math opportunities
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Sponsors help MathBase keep competitions, resources, and
                student opportunities accessible.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
