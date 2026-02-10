// components/CourseSessionClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseSession } from "@/data/proofCourse";
import { useCourseProgress } from "@/lib/courseProgress";
import { McqCard, SectionCard } from "@/components/course/CourseBlocks";

type CourseSessionClientProps = {
  session: CourseSession;
  previous?: CourseSession | null;
  next?: CourseSession | null;
};

export default function CourseSessionClient({
  session,
  previous,
  next,
}: CourseSessionClientProps) {
  const {
    completed,
    setCompleted,
    responses,
    setResponses,
    authReady,
    isSupabaseConfigured,
    isSignedIn,
    userEmail,
    isSyncing,
    syncError,
    signInWithEmail,
    signOut,
  } = useCourseProgress();

  const [email, setEmail] = useState("");
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  const sessionComplete = Boolean(completed[session.id]);

  const toggleComplete = () => {
    setCompleted((prev) => ({
      ...prev,
      [session.id]: !prev[session.id],
    }));
  };

  const handleSelect = (key: string, optionIndex: number) => {
    setResponses((prev) => ({
      ...prev,
      [key]: optionIndex,
    }));
  };

  const sessionHref = (target: CourseSession) =>
    `/course/week-${target.week}/${target.session}`;

  const handleSignIn = async () => {
    setAuthNotice(null);
    setAuthError(null);
    const result = await signInWithEmail(email);
    if (result.error) {
      setAuthError(result.error);
      return;
    }
    setAuthNotice("Magic link sent. Check your email to sign in.");
  };

  const handleSignOut = async () => {
    setAuthNotice(null);
    setAuthError(null);
    const result = await signOut();
    if (result.error) {
      setAuthError(result.error);
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-emerald-400">
              Session {session.session}
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-zinc-100">
              {session.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              {session.duration} - work through lesson notes, practice, and the MCQ
              check.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {sessionComplete ? (
              <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-emerald-200">
                Completed
              </span>
            ) : (
              <span className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-300">
                In progress
              </span>
            )}
            {isSyncing && (
              <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-sky-200">
                Syncing...
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Account sync
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Sign in to keep this session synced across devices.
            </p>
          </div>
          {isSyncing && (
            <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">
              Syncing...
            </span>
          )}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {!isSupabaseConfigured ? (
            <div className="rounded-xl border border-zinc-800 bg-black/40 p-4 text-sm text-zinc-300">
              <p className="font-semibold text-zinc-100">Account sync disabled</p>
              <p className="mt-2 text-xs text-zinc-400">
                Add Supabase environment variables to enable account sync. Progress
                is saved locally in this browser for now.
              </p>
            </div>
          ) : !authReady ? (
            <div className="rounded-xl border border-zinc-800 bg-black/40 p-4 text-sm text-zinc-400">
              Checking account status...
            </div>
          ) : isSignedIn ? (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              <p className="font-semibold">Signed in</p>
              <p className="mt-1 text-xs text-emerald-200/80">
                {userEmail ?? "Account linked"}
              </p>
              <button
                type="button"
                onClick={handleSignOut}
                className="mt-3 rounded-lg border border-emerald-400/40 px-3 py-1.5 text-xs text-emerald-100 hover:bg-emerald-500/10"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-800 bg-black/40 p-4 text-sm text-zinc-200">
              <label className="block text-xs text-zinc-500" htmlFor="session-email">
                Email address
              </label>
              <input
                id="session-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600"
              />
              <button
                type="button"
                onClick={handleSignIn}
                className="mt-3 rounded-lg bg-sky-500 px-3 py-2 text-xs font-semibold text-black hover:bg-sky-400"
              >
                Send magic link
              </button>
            </div>
          )}

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4 text-xs text-zinc-400">
            <p className="font-semibold text-zinc-200">Session tips</p>
            <ul className="mt-2 space-y-2">
              <li>Finish the MCQ before marking complete.</li>
              <li>Check the answer outlines after trying on paper.</li>
              <li>Mark complete to update your certificate progress.</li>
            </ul>
            {authNotice && (
              <p className="mt-3 text-emerald-300">{authNotice}</p>
            )}
            {authError && <p className="mt-3 text-rose-300">{authError}</p>}
            {syncError && isSupabaseConfigured && (
              <p className="mt-3 text-rose-300">
                Account sync is unavailable: {syncError}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
        <div className="space-y-4">
          {session.lessonNotes.length > 0 && (
            <SectionCard title="Lesson notes" items={session.lessonNotes} />
          )}
          {session.workedExamples && session.workedExamples.length > 0 && (
            <SectionCard title="Worked examples" items={session.workedExamples} />
          )}
          {session.practice.length > 0 && (
            <SectionCard title="Practice" items={session.practice} />
          )}
          {session.answers && session.answers.length > 0 && (
            <details className="rounded-xl border border-zinc-900 bg-zinc-950/70 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-200">
                Show answers / outlines
              </summary>
              <div className="mt-3">
                <SectionCard title="Answers" items={session.answers} />
              </div>
            </details>
          )}
          {session.quiz && session.quiz.length > 0 && (
            <SectionCard title="Week quiz" items={session.quiz} />
          )}
          {session.quizAnswers && session.quizAnswers.length > 0 && (
            <details className="rounded-xl border border-zinc-900 bg-zinc-950/70 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-200">
                Show quiz answers
              </summary>
              <div className="mt-3">
                <SectionCard title="Quiz answers" items={session.quizAnswers} />
              </div>
            </details>
          )}
        </div>

        <div className="space-y-4">
          {session.mcqs.map((mcq, index) => (
            <McqCard
              key={`${session.id}-${index}`}
              sessionId={session.id}
              index={index}
              question={mcq.question}
              options={mcq.options}
              answerIndex={mcq.answerIndex}
              explanation={mcq.explanation}
              responses={responses}
              onSelect={handleSelect}
            />
          ))}
          <button
            type="button"
            onClick={toggleComplete}
            className={[
              "w-full rounded-lg px-4 py-2 text-sm font-semibold transition",
              sessionComplete
                ? "bg-emerald-500/20 text-emerald-100 border border-emerald-500/60"
                : "bg-sky-500/20 text-sky-100 border border-sky-500/60",
            ].join(" ")}
          >
            {sessionComplete ? "Mark as incomplete" : "Mark session complete"}
          </button>
          <Link
            href="/course"
            className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
          >
            Back to course overview
          </Link>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5">
        <div className="flex items-center gap-3">
          {previous ? (
            <Link
              href={sessionHref(previous)}
              className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
            >
              Previous: {previous.session}
            </Link>
          ) : (
            <span className="text-xs text-zinc-500">First session</span>
          )}
          {next ? (
            <Link
              href={sessionHref(next)}
              className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
            >
              Next: {next.session}
            </Link>
          ) : (
            <span className="text-xs text-zinc-500">Final session</span>
          )}
        </div>
        <span className="text-xs text-zinc-500">
          Week {session.week} - Session {session.session}
        </span>
      </section>
    </div>
  );
}
