"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-[#080b19]/80 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition duration-200 hover:border-white/20 focus:border-indigo-300/60 focus:bg-[#090d20] focus:ring-4 focus:ring-indigo-300/10";

const teamPillars = [
  {
    number: "01",
    title: "Train with purpose",
    description:
      "Build range across algebra, number theory, geometry, and combinatorics through focused team sessions.",
    color: "text-cyan-300",
    accent: "bg-cyan-300/10 border-cyan-300/15",
  },
  {
    number: "02",
    title: "Compete together",
    description:
      "Take on individual, team, and proof-based rounds while representing MathBase at university contests.",
    color: "text-indigo-300",
    accent: "bg-indigo-300/10 border-indigo-300/15",
  },
  {
    number: "03",
    title: "Travel & grow",
    description:
      "Visit campuses, meet serious problem solvers, and gain confidence under real competition pressure.",
    color: "text-violet-300",
    accent: "bg-violet-300/10 border-violet-300/15",
  },
];

const fitPoints = [
  "You enjoy AMC, AIME, MATHCOUNTS, proof-writing, or similarly creative problems.",
  "You can commit to regular preparation and occasional competition travel.",
  "You want a serious, collaborative environment where teammates help each other improve.",
];

export default function CompetitionTeamPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [location, setLocation] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [contests, setContests] = useState("");
  const [travelExperience, setTravelExperience] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [availability, setAvailability] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [fallbackMailtoUrl, setFallbackMailtoUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(false);
    setSubmitError("");
    setFallbackMailtoUrl("");

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/competition-team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          school,
          grade,
          location,
          parentEmail,
          contests,
          travelExperience,
          whyJoin,
          availability,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        mailtoUrl?: string;
        message?: string;
      };

      if (!response.ok) {
        if (payload.mailtoUrl) {
          setFallbackMailtoUrl(payload.mailtoUrl);
          window.location.href = payload.mailtoUrl;
        }

        throw new Error(payload.error ?? "Could not send your application.");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setSchool("");
      setGrade("");
      setLocation("");
      setParentEmail("");
      setContests("");
      setTravelExperience("");
      setWhyJoin("");
      setAvailability("");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Could not send your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060816] text-white selection:bg-indigo-300 selection:text-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[-28rem] h-[54rem] w-[54rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[130px]" />
        <div className="absolute right-[-14rem] top-[40rem] h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute left-[-16rem] top-[75rem] h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_48%)]" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-indigo-200/20 bg-indigo-200/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-indigo-100 shadow-[0_0_30px_rgba(129,140,248,0.08)]">
                <span className="h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.9)]" />
                MathBase Competition Team
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                Train · Travel · Compete
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Go farther,
                <span className="block bg-gradient-to-r from-cyan-200 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  together.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Join a team of driven students preparing for university-hosted
                mathematics competitions—and represent MathBase on campuses
                throughout the year.
              </p>

              <a
                href="#apply"
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_14px_45px_rgba(129,140,248,0.14)] transition hover:-translate-y-0.5 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816]"
              >
                Apply to the team
                <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                {["Team training", "College competitions", "Supportive peers"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300/10 text-[0.65rem] font-bold text-emerald-300">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/10 via-indigo-500/10 to-violet-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1026]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
                <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">The team experience</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Built for serious growth</h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-200/15 bg-indigo-200/[0.07] text-xl text-indigo-200">✦</div>
                </div>

                <div className="mt-2 divide-y divide-white/10">
                  {teamPillars.map((pillar) => (
                    <div key={pillar.number} className="grid grid-cols-[2.7rem_1fr] gap-4 py-5">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-xs font-bold ${pillar.accent} ${pillar.color}`}>
                        {pillar.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-100">{pillar.title}</h3>
                        <p className="mt-1.5 text-xs leading-5 text-slate-500">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.05] px-4 py-3 text-xs leading-5 text-cyan-100/80">
                  Team selection considers experience, motivation, collaboration,
                  and availability—not just contest scores.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">Who should apply</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Curiosity matters. Commitment does too.</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-400">
              You do not need a perfect contest résumé. We are looking for students
              who genuinely enjoy hard problems and want to improve as teammates.
            </p>
          </div>

          <div className="space-y-3">
            {fitPoints.map((point, index) => (
              <div key={point} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-indigo-200/20 hover:bg-white/[0.045]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-200/15 bg-indigo-200/[0.07] font-mono text-xs font-bold text-indigo-200">0{index + 1}</span>
                <p className="pt-1 text-sm leading-6 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="relative scroll-mt-20 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-10 lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Team application</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Tell us how you think.</h2>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Share your background, goals, and availability. MathBase will review
              your application and follow up by email with next steps.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-xs text-slate-300">1</span>
                Complete the application
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-xs text-slate-300">2</span>
                Receive an email follow-up
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-xs text-slate-300">3</span>
                Discuss fit and next steps
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0b0f22]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-indigo-400/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="border-b border-white/10 pb-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">Competition team</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Student application</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">Required fields *</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">This usually takes about five minutes.</p>
              </div>

              <fieldset className="mt-8">
                <legend className="mb-5 text-sm font-semibold text-slate-200">About you</legend>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="student-name" className="mb-2 block text-xs font-medium text-slate-300">Student name *</label>
                    <input id="student-name" type="text" className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" autoComplete="name" required />
                  </div>
                  <div>
                    <label htmlFor="student-email" className="mb-2 block text-xs font-medium text-slate-300">Email *</label>
                    <input id="student-email" type="email" className={fieldClass} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" required />
                  </div>
                  <div>
                    <label htmlFor="school" className="mb-2 block text-xs font-medium text-slate-300">School *</label>
                    <input id="school" type="text" className={fieldClass} value={school} onChange={(event) => setSchool(event.target.value)} placeholder="School name" required />
                  </div>
                  <div>
                    <label htmlFor="grade" className="mb-2 block text-xs font-medium text-slate-300">Grade / year *</label>
                    <input id="grade" type="text" className={fieldClass} value={grade} onChange={(event) => setGrade(event.target.value)} placeholder="e.g. 8th, 10th, 12th" required />
                  </div>
                  <div>
                    <label htmlFor="location" className="mb-2 block text-xs font-medium text-slate-300">City / state</label>
                    <input id="location" type="text" className={fieldClass} value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. Robbinsville, NJ" autoComplete="address-level2" />
                  </div>
                  <div>
                    <label htmlFor="parent-email" className="mb-2 block text-xs font-medium text-slate-300">Parent / guardian email</label>
                    <input id="parent-email" type="email" className={fieldClass} value={parentEmail} onChange={(event) => setParentEmail(event.target.value)} placeholder="Optional" autoComplete="email" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-9 border-t border-white/10 pt-8">
                <legend className="px-1 text-sm font-semibold text-slate-200">Your competition experience</legend>
                <div className="mt-5 space-y-5">
                  <div>
                    <label htmlFor="contests" className="mb-2 block text-xs font-medium text-slate-300">Competition background</label>
                    <textarea id="contests" className={`${fieldClass} min-h-28 resize-y`} value={contests} onChange={(event) => setContests(event.target.value)} placeholder="AMC, AIME, MATHCOUNTS, school team, proof experience, or other contests." />
                  </div>
                  <div>
                    <label htmlFor="travel-experience" className="mb-2 block text-xs font-medium text-slate-300">Travel or team experience</label>
                    <textarea id="travel-experience" className={`${fieldClass} min-h-24 resize-y`} value={travelExperience} onChange={(event) => setTravelExperience(event.target.value)} placeholder="Tell us about past travel, team competitions, or anything else we should know." />
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-9 border-t border-white/10 pt-8">
                <legend className="px-1 text-sm font-semibold text-slate-200">Goals & availability</legend>
                <div className="mt-5 space-y-5">
                  <div>
                    <label htmlFor="why-join" className="mb-2 block text-xs font-medium text-slate-300">Why do you want to join? *</label>
                    <textarea id="why-join" className={`${fieldClass} min-h-32 resize-y`} value={whyJoin} onChange={(event) => setWhyJoin(event.target.value)} placeholder="What are your goals, and what would you bring to the team?" required />
                  </div>
                  <div>
                    <label htmlFor="availability" className="mb-2 block text-xs font-medium text-slate-300">Availability / constraints</label>
                    <textarea id="availability" className={`${fieldClass} min-h-24 resize-y`} value={availability} onChange={(event) => setAvailability(event.target.value)} placeholder="Training availability, travel limits, dates to avoid, etc." />
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-200 via-indigo-200 to-violet-200 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_16px_50px_rgba(129,140,248,0.14)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
              >
                {isSubmitting ? "Sending application…" : "Submit application"}
                {!isSubmitting && <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>}
              </button>

              <div aria-live="polite" className="mt-4">
                {submitted && (
                  <p className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-3 text-sm text-emerald-200">
                    Your application was sent. We’ll reply by email with next steps.
                  </p>
                )}

                {submitError && (
                  <p className="rounded-xl border border-rose-300/20 bg-rose-300/[0.07] px-4 py-3 text-sm text-rose-200">{submitError}</p>
                )}
              </div>

              {fallbackMailtoUrl && (
                <a href={fallbackMailtoUrl} className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.09]">
                  Open email draft instead
                </a>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
