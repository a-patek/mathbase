// app/course/[week]/[session]/page.tsx

import Link from "next/link";
import { proofCourse } from "@/data/proofCourse";
import CourseSessionClient from "@/components/CourseSessionClient";

type Params = {
  week: string;
  session: string;
};

const normalizeWeek = (value: string) => {
  if (value.startsWith("week-")) {
    const parsed = Number(value.replace("week-", ""));
    return Number.isNaN(parsed) ? null : parsed;
  }
  const parsed = Number(value);
  return Number.isNaN(parsed) ? null : parsed;
};

export default async function CourseSessionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { week, session: sessionParam } = await params;
  const weekNumber = normalizeWeek(week);
  const sessionCode = sessionParam.toUpperCase();

  const session = proofCourse.sessions.find(
    (item) => item.week === weekNumber && item.session.toUpperCase() === sessionCode
  );

  if (!session) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">404</p>
          <h1 className="text-2xl font-semibold">Session not found</h1>
          <p className="text-sm text-zinc-400">
            The session you tried to open does not exist yet.
          </p>
          <Link
            href="/course"
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800"
          >
            Back to course
          </Link>
        </div>
      </main>
    );
  }

  const index = proofCourse.sessions.findIndex((item) => item.id === session.id);
  const previous = index > 0 ? proofCourse.sessions[index - 1] : null;
  const next =
    index >= 0 && index < proofCourse.sessions.length - 1
      ? proofCourse.sessions[index + 1]
      : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-black">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <Link href="/course" className="hover:text-zinc-100">
              Course
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-100">Week {session.week}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-100">Session {session.session}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:py-12">
        <CourseSessionClient session={session} previous={previous} next={next} />
      </section>
    </main>
  );
}
