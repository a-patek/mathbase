// app/team/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About & Team | MathBase",
  description:
    "Meet the MathBase team and learn about our New Jersey nonprofit mission to make math learning and competitions more accessible.",
};

type Person = {
  name: string;
  role: string;
  focus: string;
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
    description:
      "Founded MathBase to provide free, proof-first resources for students pursuing deeper mathematical problem solving and clear reasoning.",
    accent: "from-teal-300/30 via-cyan-200/10 to-transparent",
    glow: "hover:shadow-teal-300/10 hover:ring-teal-300/20",
    image: "/team/ahaan.jpeg",
  },
  {
    name: "Ayaan Saini",
    role: "Founder",
    focus: "Clarity • Learning Design",
    description:
      "Helps refine explanations and learning progression, aiming for content that is accessible without losing rigor or proof structure.",
    accent: "from-teal-300/30 via-teal-300/10 to-transparent",
    glow: "hover:shadow-teal-300/10 hover:ring-teal-300/20",
    image: "/team/ayaan.png",
  },
];

const staff: Person[] = [
  {
    name: "Anirudh Dusi",
    role: "Staff",
    focus: "Review • Rigor",
    description:
      "Supports problem review and mathematical precision, focusing on correctness, clarity, and consistent standards across published content.",
    accent: "from-indigo-300/30 via-indigo-300/10 to-transparent",
    glow: "hover:shadow-indigo-300/10 hover:ring-indigo-300/20",
  },
  {
    name: "Rohit Vadi",
    role: "Staff",
    focus: "Systems • Engineering",
    description:
      "Builds and maintains the technical foundation of the platform, translating learning design into reliable and scalable systems.",
    accent: "from-amber-200/30 via-amber-200/10 to-transparent",
    glow: "hover:shadow-amber-200/10 hover:ring-amber-200/20",
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
              <div className="shrink-0 rounded-full bg-gradient-to-r from-teal-200 via-indigo-300 to-teal-300 p-[2px]">
                <div className="rounded-full bg-[#060815] p-[2px]">
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

          <span className="shrink-0 rounded-full border border-white/10 bg-[#060815]/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
            {person.role}
          </span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/72">
          {person.description}
        </p>

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
    <main className="min-h-screen overflow-x-hidden bg-[#060815] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[120px] h-[320px] w-[420px] rounded-full bg-indigo-300/10 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[5%] h-[300px] w-[420px] rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            Filed New Jersey nonprofit
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            About the people behind{" "}
            <span className="bg-gradient-to-r from-teal-200 via-indigo-200 to-teal-200 bg-clip-text text-transparent">
              MathBase
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
            MathBase is a student-led, filed nonprofit organization in New
            Jersey dedicated to helping students access stronger math learning,
            proof-based resources, and competition opportunities.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-relaxed text-white/50 backdrop-blur-sm">
            MathBase is founded and operated by students from Robbinsville High
            School in New Jersey. We build free educational resources, run
            contests, and create spaces where motivated students can learn,
            practice, and support one another.
          </div>
        </header>

        <section className="mt-20">
          <SectionHeader
            eyebrow="About MathBase"
            title="A nonprofit built to help students grow"
            description="Our work is centered on access: making rigorous math, proof-writing, and competition preparation easier to find for students who want to go deeper."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                Mission
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                Helping students access better math
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                We create free lessons, practice materials, and contests for
                students who want math to feel understandable, challenging, and
                worth exploring.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Nonprofit Status
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                Filed in New Jersey
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                MathBase is a filed nonprofit organization in New Jersey. Our
                focus is educational service, student opportunity, and community
                support.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                Impact
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                Learning, contests, and mentorship
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                We help students build confidence through proof-based learning,
                competition math, peer support, and opportunities to practice
                serious problem solving.
              </p>
            </div>
          </div>
        </section>

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
