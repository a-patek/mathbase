"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";

export default function ProfilePage() {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) {
        return;
      }

      setUserEmail(data.session?.user?.email ?? null);
      setIsCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
      setIsCheckingSession(false);
    });

    return () => {
      active = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#060815] px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Profile</p>
          <h1 className="mt-2 text-3xl font-bold">Your mathbase account</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            This page will grow into your home for progress, completed modules, badges, and course
            milestones.
          </p>
        </div>

        {!isSupabaseConfigured ? (
          <div className="rounded-2xl border border-amber-200/40 bg-amber-200/10 p-6 text-sm text-amber-100">
            Auth is not configured yet. Add the Supabase public environment variables to turn on
            account sign-in.
          </div>
        ) : isCheckingSession ? (
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">
            Checking your account...
          </div>
        ) : userEmail ? (
          <div className="rounded-2xl border border-teal-300/40 bg-teal-300/10 p-6">
            <p className="text-sm font-semibold text-teal-100">Signed in</p>
            <p className="mt-2 text-teal-100/80">{userEmail}</p>
            <p className="mt-4 text-sm text-teal-100/80">
              Your synced course progress and account-based features can live here next.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm font-semibold text-slate-100">No account connected</p>
            <p className="mt-2 text-sm text-slate-400">
              Create an account or log in to save progress across devices.
            </p>
            <Link
              href="/auth?next=/profile"
              className="mt-4 inline-flex rounded-lg bg-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-200"
            >
              Go to sign in
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
