"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-[#060815] px-3 py-2 text-sm text-white outline-none transition focus:border-teal-200/45";

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
    <main className="min-h-screen bg-[#060815] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-[#060815] to-[#060815]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.05fr)] lg:items-start lg:py-14">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[0.7rem] font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              MathBase Competition Team
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Travel with MathBase to{" "}
                <span className="bg-gradient-to-r from-teal-200 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
                  college math competitions
                </span>
              </h1>

              <p className="text-sm text-slate-300 md:text-base">
                Apply to join the MathBase competition team: a group of motivated
                students training together and traveling to university-hosted math
                contests throughout the year.
              </p>
            </div>

            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal-300">
                  Compete
                </p>
                <p className="mt-2">
                  Represent MathBase at college contests with team rounds,
                  individual rounds, and proof-heavy problem solving.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-indigo-300">
                  Train
                </p>
                <p className="mt-2">
                  Prepare with focused practice in algebra, number theory,
                  geometry, combinatorics, and strategic collaboration.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-200">
                  Travel
                </p>
                <p className="mt-2">
                  Visit campuses, meet other problem solvers, and experience
                  serious competitions in person.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Grow
                </p>
                <p className="mt-2">
                  Build resilience, proof-writing skill, and the confidence to
                  attack unfamiliar problems with a team.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-teal-300/40 bg-teal-300/5 p-5 text-xs text-teal-50">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-teal-200">
                Who should apply
              </p>
              <ul className="mt-3 space-y-2">
                <li>- Students who enjoy AMC/AIME-style problems or proofs.</li>
                <li>- Students who can commit to training and occasional travel.</li>
                <li>- Students who want a serious, supportive competition environment.</li>
              </ul>
            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg border border-white/10 bg-slate-950/90 p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)]"
          >
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Application
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-50">
                Join the competition team
              </h2>
              <p className="mt-2 text-[0.75rem] text-slate-400">
                Tell us about your background, goals, and ability to travel.
                MathBase will follow up by email with next steps.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                  Student name
                </label>
                <input
                  type="text"
                  className={fieldClass}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  className={fieldClass}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                  School
                </label>
                <input
                  type="text"
                  className={fieldClass}
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                  placeholder="School name"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                  Grade / year
                </label>
                <input
                  type="text"
                  className={fieldClass}
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                  placeholder="e.g. 8th, 10th, 12th"
                  required
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                  City / state
                </label>
                <input
                  type="text"
                  className={fieldClass}
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="e.g. Robbinsville, NJ"
                />
              </div>

              <div>
                <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                  Parent / guardian email
                </label>
                <input
                  type="email"
                  className={fieldClass}
                  value={parentEmail}
                  onChange={(event) => setParentEmail(event.target.value)}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                Competition background
              </label>
              <textarea
                className={`${fieldClass} h-24 resize-none`}
                value={contests}
                onChange={(event) => setContests(event.target.value)}
                placeholder="AMC, AIME, MATHCOUNTS, school team, proof experience, or other contests."
              />
            </div>

            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                Travel or team experience
              </label>
              <textarea
                className={`${fieldClass} h-20 resize-none`}
                value={travelExperience}
                onChange={(event) => setTravelExperience(event.target.value)}
                placeholder="Tell us about past travel, team competitions, or anything we should know."
              />
            </div>

            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                Why do you want to join?
              </label>
              <textarea
                className={`${fieldClass} h-24 resize-none`}
                value={whyJoin}
                onChange={(event) => setWhyJoin(event.target.value)}
                placeholder="What are your goals, and what would you bring to the team?"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-[0.7rem] font-medium text-slate-300">
                Availability / constraints
              </label>
              <textarea
                className={`${fieldClass} h-20 resize-none`}
                value={availability}
                onChange={(event) => setAvailability(event.target.value)}
                placeholder="Training availability, travel limits, dates to avoid, etc."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-300/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending application..." : "Apply to join"}
            </button>

            {submitted && (
              <p className="text-[0.7rem] text-teal-200">
                Your application was sent. We will reply by email with next steps.
              </p>
            )}

            {submitError && (
              <p className="text-[0.7rem] text-rose-300">{submitError}</p>
            )}

            {fallbackMailtoUrl && (
              <a
                href={fallbackMailtoUrl}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                Open email draft
              </a>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
