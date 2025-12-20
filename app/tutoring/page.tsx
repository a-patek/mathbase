// app/tutoring/page.tsx

"use client";

import { useState } from "react";

export default function TutoringPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [focusArea, setFocusArea] = useState("");
  const [details, setDetails] = useState("");
  const [availability, setAvailability] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const subject = encodeURIComponent("MathBase Tutoring Inquiry");
    const bodyLines = [
      `Name: ${name || "(not provided)"}`,
      `Email: ${email || "(not provided)"}`,
      `School: ${school || "(not provided)"}`,
      `Grade / Year: ${grade || "(not provided)"}`,
      "",
      `Focus area / course: ${focusArea || "(not provided)"}`,
      "",
      "What I want help with:",
      details || "(not provided)",
      "",
      "Typical availability:",
      availability || "(not provided)",
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));

    // This opens the user's email client with a prefilled email to you
    window.location.href = `mailto:pathak.ahaan1@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-[0.7rem] font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              One-on-one tutoring with MathBase
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              1-on-1{" "}
              <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
                proof-first tutoring
              </span>{" "}
              for serious students
            </h1>

            <p className="text-sm md:text-base text-zinc-300">
              Work directly with a top competition and advanced-math student
              for structured help in school math, contest prep, computer
              science, and physics. Sessions are focused on understanding,
              not memorizing tricks.
            </p>

            <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
              <li>• Middle school math through Multivariable Calculus</li>
              <li>• AMC 8/10/12, AIME, and problem-solving skills</li>
              <li>• AP Computer Science / programming fundamentals</li>
              <li>• Honors + AP Physics (concepts, problem-solving, math connection)</li>
            </ul>
          </div>

          <div className="max-w-sm rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-5 text-xs text-emerald-100">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              How it works
            </p>
            <ul className="mt-2 space-y-2 text-emerald-50">
              <li>1. Fill out the short form below.</li>
              <li>2. You’ll get an email to schedule a free intro call.</li>
              <li>3. We’ll build a plan around your goals (grades, contests, proofs, etc.).</li>
              <li>4. Meet weekly or as needed over Zoom / online.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content: what we tutor + form */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:py-14">
        {/* Left side: what we offer */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6">
            <h2 className="text-sm font-semibold text-zinc-50">
              What we tutor
            </h2>
            <div className="mt-4 grid gap-4 text-xs text-zinc-300 md:grid-cols-2">
              <div className="space-y-1.5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  School math
                </p>
                <ul className="space-y-1">
                  <li>• Pre-algebra, Algebra 1</li>
                  <li>• Geometry, Algebra 2</li>
                  <li>• Precalculus</li>
                  <li>• AP Calc AB / BC</li>
                  <li>• Multivariable / Linear Algebra (intro level)</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Contest & enrichment
                </p>
                <ul className="space-y-1">
                  <li>• AMC 8 / 10 / 12</li>
                  <li>• AIME preparation</li>
                  <li>• Proof techniques & olympiad-style problems</li>
                  <li>• Building a competition-math mindset</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Computer science
                </p>
                <ul className="space-y-1">
                  <li>• AP Computer Science A (Java)</li>
                  <li>• Intro programming (Python / Java)</li>
                  <li>• Problem-solving & basic algorithms</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Physics
                </p>
                <ul className="space-y-1">
                  <li>• Honors Physics / Physics 1</li>
                  <li>• AP Physics 1 concepts & problem-solving</li>
                  <li>• Connecting physics problems to the math behind them</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/80 p-6 text-xs text-zinc-300">
            <h3 className="text-sm font-semibold text-zinc-50">
              What a typical session looks like
            </h3>
            <ul className="mt-3 space-y-2">
              <li>• Start by checking where you are and what’s confusing.</li>
              <li>• Work through carefully chosen problems together.</li>
              <li>• Emphasis on reasoning out loud, not just getting the answer.</li>
              <li>• End with a short “homework” set or reflection so you actually retain it.</li>
            </ul>
            <p className="mt-3 text-[0.7rem] text-zinc-500">
              You’ll always know *why* something works, not just which button to press or formula to memorize.
            </p>
          </div>
        </div>

        {/* Right side: sign-up form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-zinc-900 bg-zinc-950/90 p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)]"
        >
          <h2 className="text-sm font-semibold text-zinc-50">
            Sign up for 1-on-1 tutoring
          </h2>
          <p className="mt-1 text-[0.75rem] text-zinc-400">
            Fill this out and it will open an email to{" "}
            <span className="font-mono text-zinc-200">
              pathak.ahaan1@gmail.com
            </span>{" "}
            with your info pre-filled. You can edit the email before sending.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
                Student name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
                School
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="School name"
              />
            </div>

            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
                Grade / year
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="e.g. 8th, 10th, 12th"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
              Main course / focus area
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
              value={focusArea}
              onChange={(e) => setFocusArea(e.target.value)}
              placeholder="e.g. Algebra 2, AMC 10, AP Physics 1, AP CSA"
            />
          </div>

          <div>
            <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
              What do you want help with?
            </label>
            <textarea
              className="h-24 w-full resize-none rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell me about your goals, upcoming tests/contests, or specific struggles."
            />
          </div>

          <div>
            <label className="mb-1 block text-[0.7rem] font-medium text-zinc-300">
              Typical availability (time zone, days, times)
            </label>
            <textarea
              className="h-20 w-full resize-none rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none focus:border-emerald-500/70"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="Example: Weekdays after 5pm EST, weekends mornings."
            />
          </div>

          <button
            type="submit"
            className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:from-sky-400 hover:to-emerald-400"
          >
            Open email to request tutoring
          </button>

          {submitted && (
            <p className="mt-2 text-[0.7rem] text-emerald-300">
              Your email client should open with everything filled in. Review it,
              add anything else you’d like, and hit send.
            </p>
          )}

          <p className="mt-2 text-[0.7rem] text-zinc-500">
            If the email doesn’t open for some reason, you can manually email{" "}
            <span className="font-mono text-zinc-200">
              pathak.ahaan1@gmail.com
            </span>{" "}
            with the info above.
          </p>
        </form>
      </section>
    </main>
  );
}
