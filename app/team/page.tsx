// app/team/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team | MathBase",
  description:
    "Meet the MathBase team — a student-led educational initiative focused on problem-solving and proof-based mathematics.",
};

type Person = {
  name: string;
  role: string;
  focus: string;
  note: string;
  description: string;
  accent: string;
  glow: string;
  image?: string;
};

const founders: Person[] = [
  {
    name: "Ahaan Pathak",
    role: "Founder",
    focus: "Curriculum • Platform",
    note: "AMC 12A: 120",
    description:
      "Founded MathBase to provide free, proof-first resources for students pursuing deeper mathematical problem solving and clear reasoning.",
    accent: "from-sky-500/30 via-sky-400/10 to-transparent",
    glow: "hover:shadow-sky-500/10 hover:ring-sky-500/20",
    image: "/team/ahaan.jpeg",
  },
  {
    name: "Ayaan Saini",
    role: "Founder",
    focus: "Clarity • Learning Design",
    note: "AMC 12A: 145.5 • AMC 12B: 141",
    description:
      "Helps refine explanations and learning progression, aiming for content that is accessible without losing rigor or proof structure.",
    accent: "from-emerald-500/30 via-emerald-400/10 to-transparent",
    glow: "hover:shadow-emerald-500/10 hover:ring-emerald-500/20",
  },
];

const staff: Person[] = [
  {
    name: "Anirudh Dusi",
    role: "Staff",
    focus: "Review • Rigor",
    note: "AMC 12B: 124",
    description:
      "Supports problem review and mathematical precision, focusing on correctness, clarity, and consistent standards across published content.",
    accent: "from-violet-500/30 via-violet-400/10 to-transparent",
    glow: "hover:shadow-violet-500/10 hover:ring-violet-500/20",
  },
  {
    name: "Rohit Vadi",
    role: "Staff",
    focus: "Systems • Engineering",
    note: "AMC 12B: 133.5",
    description:
      "Builds and maintains the technical foundation of the platform, translating learning design into reliable and scalable systems.",
    accent: "from-amber-500/30 via-amber-400/10 to-transparent",
    glow: "hover:shadow-amber-500/10 hover:ring-amber-500/20",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function TeamCard({ person }: { person: Person }) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6",
        "backdrop-blur-sm ring-1 ring-transparent transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]",
        "hover:shadow-2xl hover:shadow-black/40",
        person.glow,
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-x-0 top-0 h-24 bg-gradient-to-r opacity-90 blur-2xl",
          person.accent,
        ].join(" ")}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            {person.image && (
              <div className="shrink-0 rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 p-[2px]">
                <div className="rounded-full bg-black p-[2px]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {person.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">{person.focus}</p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
            {person.role}
          </span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/72">
          {person.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/35">
            Background
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/65">
            {person.note}
          </span>
        </div>
      </div>
    </article>
  );
}

function TeamGrid({ people }: { people: Person[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {people.map((person) => (
        <TeamCard key={person.name} person={person} />
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[120px] h-[320px] w-[420px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[5%] h-[300px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Student-led initiative
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Meet the team behind{" "}
            <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
              MathBase
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
            MathBase is built by students focused on proof-based learning,
            mathematical clarity, and thoughtful platform design.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-relaxed text-white/50 backdrop-blur-sm">
            MathBase is founded and operated by students from Robbinsville High
            School in New Jersey and receives informal support and guidance from
            teachers at the school.
          </div>
        </header>

        <section className="mt-20">
          <SectionHeader
            eyebrow="Core Team"
            title="Founders"
            description="The students shaping MathBase’s direction, curriculum, and learning experience."
          />
          <TeamGrid people={founders} />
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="Operations"
            title="Staff"
            description="Team members supporting review, rigor, and technical development across the platform."
          />
          <TeamGrid people={staff} />
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Problem Writing &amp; Review
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Problems are original and reviewed for correctness, clarity, and
              appropriate difficulty before publication.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              Some contributors are listed publicly, while others contribute
              anonymously.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Advisors &amp; Transparency
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              MathBase receives informal feedback from educators and mentors
              when appropriate and with permission.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              MathBase is free, and competitions are not tied to tutoring or
              paid products.
            </p>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-white/40 sm:flex-row sm:text-left">
            <span>© {new Date().getFullYear()} MathBase</span>
            <span className="text-white/30">
              Built for proof-based learning.
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}