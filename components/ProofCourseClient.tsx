// components/ProofCourseClient.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CourseSession } from "@/data/proofCourse";
import { useCourseProgress } from "@/lib/courseProgress";
import { SectionCard, McqCard } from "@/components/course/CourseBlocks";

type ProofCourseClientProps = {
  sessions: CourseSession[];
};

export default function ProofCourseClient({ sessions }: ProofCourseClientProps) {
  const {
    completed,
    setCompleted,
    responses,
    setResponses,
    learnerName,
    setLearnerName,
    certificateIssuedAt,
    setCertificateIssuedAt,
    authReady,
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
  const [certificateNotice, setCertificateNotice] = useState<string | null>(null);

  const totalSessions = sessions.length;
  const completedCount = sessions.filter((session) => completed[session.id]).length;
  const progress = totalSessions
    ? Math.round((completedCount / totalSessions) * 100)
    : 0;
  const isComplete = totalSessions > 0 && completedCount === totalSessions;

  const weeks = useMemo(() => {
    const map = new Map<number, CourseSession[]>();
    sessions.forEach((session) => {
      const list = map.get(session.week) ?? [];
      list.push(session);
      map.set(session.week, list);
    });
    return Array.from(map.entries());
  }, [sessions]);

  const toggleComplete = (sessionId: string) => {
    setCompleted((prev) => ({
      ...prev,
      [sessionId]: !prev[sessionId],
    }));
  };

  const handleSelect = (key: string, optionIndex: number) => {
    setResponses((prev) => ({
      ...prev,
      [key]: optionIndex,
    }));
  };

  const resetProgress = () => {
    setCompleted({});
    setResponses({});
    setCertificateIssuedAt(null);
  };

  const formatDate = (value: string | null) => {
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const downloadCertificate = () => {
    setCertificateNotice(null);
    if (!isSignedIn) {
      setCertificateNotice("Sign in to your account to unlock the certificate.");
      return;
    }
    if (!isComplete) return;

    if (!certificateIssuedAt) {
      setCertificateIssuedAt(new Date().toISOString());
    }

    const name = learnerName.trim() || "MathBase Learner";
    const canvas = document.createElement("canvas");
    const width = 1600;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#0b0b10");
    gradient.addColorStop(1, "#111827");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 2;
    ctx.strokeRect(70, 70, width - 140, height - 140);

    const centerText = (text: string, y: number, font: string, color: string) => {
      ctx.font = font;
      ctx.fillStyle = color;
      const metrics = ctx.measureText(text);
      ctx.fillText(text, (width - metrics.width) / 2, y);
    };

    centerText("Certificate of Completion", 220, "bold 64px Georgia", "#e2e8f0");
    centerText(name, 360, "bold 56px Georgia", "#7dd3fc");
    centerText("has completed", 430, "24px Arial", "#94a3b8");
    centerText(
      "Proof-Based Math for Beginners",
      520,
      "bold 40px Georgia",
      "#e2e8f0"
    );

    const dateString = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    centerText(`MathBase - ${dateString}`, 610, "24px Arial", "#94a3b8");
    centerText(
      `${completedCount} sessions completed`,
      660,
      "22px Arial",
      "#94a3b8"
    );

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "mathbase-proof-course-certificate.png";
    link.click();
  };

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

  const sessionHref = (session: CourseSession) =>
    `/course/week-${session.week}/${session.session}`;

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Course account sync
            </p>
            <h2 className="text-xl font-semibold text-zinc-100">
              Save progress to your account
            </h2>
            <p className="text-sm text-zinc-400">
              Sign in to store your course progress and certificate on your MathBase
              account. If you stay signed out, progress will live only in this browser.
            </p>
          </div>
          {isSyncing && (
            <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">
              Syncing...
            </span>
          )}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {!authReady ? (
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
              <label className="block text-xs text-zinc-500" htmlFor="course-email">
                Email address
              </label>
              <input
                id="course-email"
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
            <p className="font-semibold text-zinc-200">Why sign in?</p>
            <ul className="mt-2 space-y-2">
              <li>Store progress across devices and browsers.</li>
              <li>Unlock certificates tied to your account.</li>
              <li>Keep MCQ answers and completion data synced.</li>
            </ul>
            {authNotice && (
              <p className="mt-3 text-emerald-300">{authNotice}</p>
            )}
            {authError && <p className="mt-3 text-rose-300">{authError}</p>}
            {syncError && (
              <p className="mt-3 text-rose-300">
                Account sync is unavailable: {syncError}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5">
          <p className="text-xs text-zinc-500">Total sessions</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">
            {totalSessions}
          </p>
          <p className="mt-1 text-xs text-zinc-500">8 weeks - 4 sessions each</p>
        </div>
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5">
          <p className="text-xs text-zinc-500">Session length</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">45-75 min</p>
          <p className="mt-1 text-xs text-zinc-500">Default learning flow</p>
        </div>
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-5">
          <p className="text-xs text-zinc-500">Course progress</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">
            {completedCount} / {totalSessions}
          </p>
          <div className="mt-3 h-2 w-full rounded-full bg-zinc-900">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">{progress}% complete</p>
        </div>
      </section>

      {weeks.map(([weekNumber, weekSessions]) => (
        <section key={`week-${weekNumber}`} className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500">
                Week {weekNumber}
              </p>
              <h2 className="text-xl font-semibold text-zinc-100">
                Sessions {weekNumber}A to {weekNumber}D
              </h2>
            </div>
            <span className="rounded-full border border-zinc-800 px-3 py-1 text-[0.7rem] text-zinc-400">
              {weekSessions.length} sessions
            </span>
          </div>

          <div className="space-y-4">
            {weekSessions.map((session) => (
              <details
                key={session.id}
                className="group rounded-2xl border border-zinc-900 bg-zinc-950/70 p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-emerald-400">
                      Session {session.session}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-zinc-100">
                      {session.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">{session.duration}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    {completed[session.id] ? (
                      <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-emerald-200">
                        Completed
                      </span>
                    ) : (
                      <span className="rounded-full border border-zinc-700 px-3 py-1">
                        In progress
                      </span>
                    )}
                    <span className="text-lg text-zinc-500 group-open:rotate-180">
                      v
                    </span>
                  </div>
                </summary>

                <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
                  <div className="space-y-4">
                    {session.lessonNotes.length > 0 && (
                      <SectionCard title="Lesson notes" items={session.lessonNotes} />
                    )}
                    {session.workedExamples && session.workedExamples.length > 0 && (
                      <SectionCard
                        title="Worked examples"
                        items={session.workedExamples}
                      />
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
                      onClick={() => toggleComplete(session.id)}
                      className={[
                        "w-full rounded-lg px-4 py-2 text-sm font-semibold transition",
                        completed[session.id]
                          ? "bg-emerald-500/20 text-emerald-100 border border-emerald-500/60"
                          : "bg-sky-500/20 text-sky-100 border border-sky-500/60",
                      ].join(" ")}
                    >
                      {completed[session.id]
                        ? "Mark as incomplete"
                        : "Mark session complete"}
                    </button>
                    <Link
                      href={sessionHref(session)}
                      className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
                    >
                      Open session page
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Certificate
            </p>
            <h2 className="text-xl font-semibold text-zinc-100">
              Proof-Based Math Certificate
            </h2>
            <p className="text-sm text-zinc-400">
              Complete all sessions and sign in to unlock your certificate. Your
              progress syncs to your account when signed in.
            </p>
          </div>
          <div className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
            {completedCount} / {totalSessions} sessions complete
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <label className="block text-xs text-zinc-500" htmlFor="learner-name">
              Name for certificate
            </label>
            <input
              id="learner-name"
              type="text"
              value={learnerName}
              onChange={(event) => setLearnerName(event.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-zinc-800 bg-black/50 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600"
            />

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={downloadCertificate}
                disabled={!isComplete || !isSignedIn}
                className={[
                  "rounded-lg px-4 py-2 text-sm font-semibold transition",
                  isComplete && isSignedIn
                    ? "bg-emerald-400 text-black hover:bg-emerald-300"
                    : "cursor-not-allowed bg-zinc-800 text-zinc-500",
                ].join(" ")}
              >
                Download certificate
              </button>
              <button
                type="button"
                onClick={resetProgress}
                className="rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
              >
                Reset progress
              </button>
            </div>
            {certificateNotice && (
              <p className="text-xs text-rose-300">{certificateNotice}</p>
            )}
            {certificateIssuedAt && (
              <p className="text-xs text-emerald-300">
                Certificate issued on {formatDate(certificateIssuedAt)}.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              Preview
            </p>
            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-black/60 p-4 text-center">
              <p className="text-sm font-semibold text-emerald-100">
                Certificate of Completion
              </p>
              <p className="mt-2 text-lg font-semibold text-emerald-200">
                {learnerName.trim() || "MathBase Learner"}
              </p>
              <p className="mt-2 text-xs text-emerald-200/80">
                Proof-Based Math for Beginners
              </p>
              <p className="mt-1 text-[0.7rem] text-emerald-200/70">
                {isSignedIn
                  ? "Unlocks when all sessions are complete"
                  : "Sign in to unlock the certificate"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
