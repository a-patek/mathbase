"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";

type AuthMode = "signup" | "login";

type AuthApiResponse = {
  error?: string;
  message?: string;
  user?: {
    id: string;
    email?: string;
  } | null;
  session?: {
    access_token: string;
    refresh_token: string;
  } | null;
};

const getRedirectTarget = (nextParam: string | null) => {
  if (!nextParam || !nextParam.startsWith("/")) {
    return "/profile";
  }

  return nextParam;
};

const submitAuthRequest = async ({
  mode,
  email,
  password,
  redirectTo,
}: {
  mode: AuthMode;
  email: string;
  password: string;
  redirectTo: string;
}) => {
  const endpoint = mode === "signup" ? "/api/auth/signup" : "/api/auth/login";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      redirectTo,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as AuthApiResponse;

  if (!response.ok) {
    throw new Error(payload.error ?? "Authentication failed.");
  }

  return payload;
};

function AuthPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = getRedirectTarget(searchParams.get("next"));

  const [mode, setMode] = useState<AuthMode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) {
        return;
      }

      const session = data.session;
      setIsSignedIn(Boolean(session?.user));
      setUserEmail(session?.user?.email ?? null);
      setIsCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(Boolean(session?.user));
      setUserEmail(session?.user?.email ?? null);
      setIsCheckingSession(false);
    });

    return () => {
      active = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const clearMessages = () => {
    setNotice(null);
    setError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearMessages();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Enter your email address.");
      return;
    }

    if (password.length < 6) {
      setError("Use a password with at least 6 characters.");
      return;
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = await submitAuthRequest({
        mode,
        email: trimmedEmail,
        password,
        redirectTo: redirectTarget,
      });

      if (payload.session) {
        const { error: sessionError } = await supabase.auth.setSession(payload.session);

        if (sessionError) {
          setError(sessionError.message);
          return;
        }

        router.push(redirectTarget);
        router.refresh();
        return;
      }

      setNotice(
        payload.message ??
          "Account created. Check your email to confirm your address, then come back to log in."
      );
      setPassword("");
      setConfirmPassword("");
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Authentication failed.");
    } finally {
      setIsSubmitting(false);
    }

  };

  const handleSignOut = async () => {
    clearMessages();
    setIsSubmitting(true);

    const { error: signOutError } = await supabase.auth.signOut();

    setIsSubmitting(false);

    if (signOutError) {
      setError(signOutError.message);
      return;
    }

    setNotice("You have been signed out.");
  };

  return (
    <main className="min-h-screen bg-[#070914] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="auth-ambient absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,_rgba(45,212,191,0.2),_transparent_34%),_radial-gradient(circle_at_82%_18%,_rgba(129,140,248,0.18),_transparent_36%),_radial-gradient(circle_at_58%_88%,_rgba(251,113,133,0.12),_transparent_42%),_linear-gradient(135deg,_#070914_0%,_#10172a_48%,_#08111f_100%)]" />
          <div className="auth-grid-drift absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,rgba(125,211,252,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,181,253,0.16)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="auth-float absolute left-[-8%] top-16 h-44 w-64 rounded-[45%] bg-teal-300/12 blur-3xl" />
          <div className="auth-float-delayed absolute right-[-10%] top-40 h-52 w-72 rounded-[42%] bg-indigo-300/14 blur-3xl" />
          <div className="auth-float-slow absolute bottom-[-80px] left-[36%] h-48 w-80 rounded-[46%] bg-rose-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="auth-rise space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/15 bg-slate-950/55 px-3 py-1 text-xs font-medium text-teal-100/80 shadow-[0_0_24px_rgba(45,212,191,0.08)]">
              <span className="auth-pulse-dot h-1.5 w-1.5 rounded-full bg-teal-300" />
              Account access
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Create your{" "}
              <span className="bg-gradient-to-r from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent">
                mathbase
              </span>{" "}
              account or log back in
            </h1>

            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              Save progress, sync your proof course across devices, and keep your profile in one
              place.
            </p>

            <div className="relative h-28 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="auth-equation-stream absolute inset-x-0 top-5 flex gap-10 whitespace-nowrap text-sm font-medium text-teal-100/55">
                <span>x² + y² = r²</span>
                <span>∑ n</span>
                <span>∀ ε &gt; 0</span>
                <span>aₙ → L</span>
                <span>∫ f(x) dx</span>
                <span>x² + y² = r²</span>
                <span>∑ n</span>
                <span>∀ ε &gt; 0</span>
                <span>aₙ → L</span>
                <span>∫ f(x) dx</span>
              </div>
              <div className="auth-equation-stream-reverse absolute inset-x-0 bottom-5 flex gap-10 whitespace-nowrap text-sm font-medium text-amber-100/50">
                <span>proof → clarity</span>
                <span>AMC</span>
                <span>AIME</span>
                <span>logic</span>
                <span>QED</span>
                <span>proof → clarity</span>
                <span>AMC</span>
                <span>AIME</span>
                <span>logic</span>
                <span>QED</span>
              </div>
            </div>
          </div>

          <div className="auth-card-in rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35),0_0_42px_rgba(129,140,248,0.16)] backdrop-blur-md">
            {!isSupabaseConfigured ? (
              <div className="rounded-xl border border-amber-200/40 bg-amber-200/10 p-5 text-sm text-amber-100">
                <p className="font-semibold">Auth is not configured yet</p>
                <p className="mt-2 text-amber-100/80">
                  Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` before this
                  page can create accounts or log users in.
                </p>
              </div>
            ) : isCheckingSession ? (
              <div className="rounded-xl border border-white/10 bg-slate-900/55 p-5 text-sm text-slate-400">
                Checking your account status...
              </div>
            ) : isSignedIn ? (
              <div className="space-y-4 rounded-xl border border-teal-200/25 bg-teal-300/10 p-5">
                <div>
                  <p className="text-sm font-semibold text-teal-100">You are signed in</p>
                  <p className="mt-1 text-sm text-teal-100/75">{userEmail ?? "Account linked"}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={redirectTarget}
                    className="rounded-lg bg-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-200"
                  >
                    Continue
                  </Link>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={isSubmitting}
                    className="rounded-lg border border-teal-200/30 px-4 py-2 text-sm text-teal-100 hover:bg-teal-200/10 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex gap-2 rounded-full border border-white/10 bg-slate-900/55 p-1">
                  <button
                    type="button"
                    onClick={() => {
                      clearMessages();
                      setMode("signup");
                    }}
                    className={[
                      "flex-1 rounded-full px-4 py-2 text-sm transition",
                      mode === "signup"
                        ? "bg-teal-300 text-slate-950 shadow-[0_0_18px_rgba(94,234,212,0.22)]"
                        : "text-slate-300 hover:bg-white/5",
                    ].join(" ")}
                  >
                    Create account
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      clearMessages();
                      setMode("login");
                    }}
                    className={[
                      "flex-1 rounded-full px-4 py-2 text-sm transition",
                      mode === "login"
                        ? "bg-indigo-300 text-slate-950 shadow-[0_0_18px_rgba(165,180,252,0.22)]"
                        : "text-slate-300 hover:bg-white/5",
                    ].join(" ")}
                  >
                    Log in
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="auth-email">
                      Email
                    </label>
                    <input
                      id="auth-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-teal-200/45 focus:ring-2 focus:ring-teal-300/15"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="auth-password">
                      Password
                    </label>
                    <input
                      id="auth-password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="At least 6 characters"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-teal-200/45 focus:ring-2 focus:ring-teal-300/15"
                    />
                  </div>

                  {mode === "signup" && (
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="auth-confirm-password">
                        Confirm password
                      </label>
                      <input
                        id="auth-confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder="Repeat your password"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-teal-200/45 focus:ring-2 focus:ring-teal-300/15"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(45,212,191,0.18)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Working..."
                      : mode === "signup"
                        ? "Create account"
                        : "Log in"}
                  </button>
                </form>
              </>
            )}

            {notice && <p className="mt-4 text-sm text-teal-200">{notice}</p>}
            {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#070914] text-white">
          <section className="relative grid min-h-screen place-items-center px-6">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-sm text-slate-300">
              Loading account access...
            </div>
          </section>
        </main>
      }
    >
      <AuthPageContent />
    </Suspense>
  );
}
