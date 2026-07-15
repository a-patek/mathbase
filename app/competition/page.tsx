import Link from "next/link";

const SIGNUP_URL = "https://forms.gle/rFjV3nfqVt7WwD5U9";

const schedule = [
  { time: "1:00 PM", label: "MBO begins", detail: "60 minutes · strictly timed" },
  { time: "4:00 PM", label: "Qualifiers announced", detail: "Top 8 advance" },
  { time: "5:00 PM", label: "MBI begins", detail: "90-minute proof round" },
  { time: "7:30 PM", label: "Winners announced", detail: "Top 3 earn prizes" },
];

const openDetails = [
  ["40", "multiple-choice problems"],
  ["60 min", "to complete the round"],
  ["4 topics", "algebra, geometry, number theory & probability"],
];

const invitationalDetails = [
  ["4", "proof-based problems"],
  ["90 min", "to write complete solutions"],
  ["Top 8", "MBO scorers receive invitations"],
];

export default function CompetitionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060816] text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute left-[-12rem] top-[32rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute right-[-10rem] top-[58rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-200/20 bg-cyan-200/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>
                Registration open for August 2026
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-indigo-300">
                MathBase Open + Invitational
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Solve boldly.
                <span className="block bg-gradient-to-r from-cyan-200 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  Prove brilliantly.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                A free, two-stage competition for students who love ambitious
                problems—starting with a fast-paced Open and culminating in a
                proof-based Invitational with a $750 prize pool.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_14px_45px_rgba(103,232,249,0.14)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060816]"
                >
                  Register for free
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/competition/highlights"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  View July results
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                {["Free to enter", "Open to all students", "Cash prizes"].map((item) => (
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
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Next competition</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Saturday, August 15</h2>
                    <p className="mt-1 text-sm text-slate-400">All times Eastern · online</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-2 text-center">
                    <p className="text-2xl font-semibold text-white">2026</p>
                    <p className="text-[0.65rem] uppercase tracking-widest text-slate-500">Edition</p>
                  </div>
                </div>

                <ol className="mt-6 space-y-1">
                  {schedule.map((item, index) => (
                    <li key={item.time} className="group grid grid-cols-[4.6rem_1rem_1fr] gap-3">
                      <p className="pt-1 text-right font-mono text-xs font-semibold text-slate-400">{item.time}</p>
                      <div className="flex flex-col items-center">
                        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ${index === 0 ? "bg-cyan-300 ring-cyan-300/15" : "bg-indigo-300 ring-indigo-300/10"}`} />
                        {index < schedule.length - 1 && <span className="my-1 h-12 w-px bg-gradient-to-b from-white/20 to-white/5" />}
                      </div>
                      <div className="pb-5">
                        <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                        <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-2 rounded-2xl border border-amber-200/15 bg-amber-200/[0.06] px-4 py-3 text-xs leading-5 text-amber-100/80">
                  Prize payments are sent during the week following the competition.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">One competition, two stages</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">Your path to the podium</h2>
          <p className="mt-4 leading-7 text-slate-400">Start in the Open. Finish among the top eight, and you will earn an invitation to the proof-based final.</p>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-2">
          <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d1228] text-lg text-cyan-200 shadow-xl lg:flex" aria-hidden="true">→</div>

          <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 sm:p-8">
            <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Stage 01 · MBO</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">MathBase Open</h3>
                </div>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/[0.07] px-3 py-1.5 text-xs font-semibold text-cyan-100">Open to all</span>
              </div>
              <p className="mt-5 max-w-lg leading-7 text-slate-400">A brisk, wide-ranging round with original MathBase problems inspired by the creativity of AMC and AIME competition math.</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {openDetails.map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-white/8 bg-black/15 p-4">
                    <p className="text-xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-300/10 text-xs font-bold text-indigo-200">8</span>
                <p className="text-sm leading-6 text-slate-300"><strong className="text-white">Top eight advance.</strong> Scoring and proctoring instructions are included with each contest set.</p>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[1.75rem] border border-indigo-300/20 bg-gradient-to-br from-indigo-400/[0.09] to-violet-400/[0.035] p-6 shadow-[0_25px_80px_rgba(79,70,229,0.1)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200/35 sm:p-8">
            <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-300">Stage 02 · MBI</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">MathBase Invitational</h3>
                </div>
                <span className="rounded-full border border-indigo-200/20 bg-indigo-200/[0.08] px-3 py-1.5 text-xs font-semibold text-indigo-100">Invite only</span>
              </div>
              <p className="mt-5 max-w-lg leading-7 text-slate-400">A focused final that rewards mathematical depth, creative reasoning, and clear proof-writing in number theory and algebra.</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {invitationalDetails.map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-white/8 bg-black/15 p-4">
                    <p className="text-xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-300/10 text-sm text-violet-200">✦</span>
                <p className="text-sm leading-6 text-slate-300"><strong className="text-white">Write complete proofs.</strong> Invitations and submission instructions are emailed directly to qualifiers.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">August prize pool</p>
            <p className="mt-5 bg-gradient-to-r from-amber-100 via-amber-300 to-orange-300 bg-clip-text text-7xl font-semibold tracking-[-0.06em] text-transparent sm:text-8xl">$750</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Proofs worth writing.</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-400">The three strongest MBI performances earn cash prizes, with $500 awarded to the Invitational champion.</p>
          </div>

          <div className="grid items-end gap-4 sm:grid-cols-3">
            <div className="order-2 rounded-[1.5rem] border border-slate-300/15 bg-slate-300/[0.05] p-6 text-center sm:order-1 sm:py-8">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/20 bg-slate-200/10 text-sm font-bold text-slate-200">2</span>
              <p className="mt-5 text-3xl font-semibold">$200</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Second place</p>
            </div>
            <div className="order-1 rounded-[1.5rem] border border-amber-300/25 bg-gradient-to-b from-amber-300/[0.12] to-amber-300/[0.035] p-6 text-center shadow-[0_20px_60px_rgba(251,191,36,0.08)] sm:order-2 sm:py-12">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/30 bg-amber-200/10 text-lg font-bold text-amber-200">1</span>
              <p className="mt-5 text-4xl font-semibold text-amber-50">$500</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-amber-200/60">Champion</p>
            </div>
            <div className="order-3 rounded-[1.5rem] border border-orange-300/15 bg-orange-300/[0.045] p-6 text-center sm:py-7">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-orange-200/20 bg-orange-200/10 text-sm font-bold text-orange-200">3</span>
              <p className="mt-5 text-3xl font-semibold">$50</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Third place</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-gradient-to-br from-[#101b37] via-[#10152d] to-[#17102d] px-6 py-12 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16">
          <div className="absolute left-1/2 top-0 h-48 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-[90px]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">The next problem is yours</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Ready to see how far your thinking can take you?</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Registration is free. Sign up now to receive the August MathBase Open contest details.</p>
            <Link
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-200 to-indigo-200 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_16px_50px_rgba(103,232,249,0.16)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Sign up for the MBO
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <p className="mt-4 text-xs text-slate-500">You’ll be taken to a short Google Form.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
