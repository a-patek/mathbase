"use client";

import type { Dispatch, SetStateAction } from "react";
import { useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";

export type AnswerMap = Record<string, number>;
export type CompletionMap = Record<string, boolean>;

export type CourseProgressState = {
  completed: CompletionMap;
  responses: AnswerMap;
  learnerName: string;
  certificateIssuedAt: string | null;
};

type UseCourseProgressResult = {
  completed: CompletionMap;
  setCompleted: Dispatch<SetStateAction<CompletionMap>>;
  responses: AnswerMap;
  setResponses: Dispatch<SetStateAction<AnswerMap>>;
  learnerName: string;
  setLearnerName: Dispatch<SetStateAction<string>>;
  certificateIssuedAt: string | null;
  setCertificateIssuedAt: Dispatch<SetStateAction<string | null>>;
  authReady: boolean;
  isSignedIn: boolean;
  userEmail: string | null;
  isSyncing: boolean;
  syncError: string | null;
  signInWithEmail: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<{ error?: string }>;
};

const LOCAL_KEY = "mathbase-proof-course-state";
const TABLE_NAME = "proof_course_progress";

const emptyState: CourseProgressState = {
  completed: {},
  responses: {},
  learnerName: "",
  certificateIssuedAt: null,
};

const isObject = (value: unknown) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const normalizeState = (raw: unknown): CourseProgressState => {
  if (!isObject(raw)) {
    return { ...emptyState };
  }

  const completed = isObject((raw as any).completed)
    ? (raw as any).completed
    : {};
  const responses = isObject((raw as any).responses)
    ? (raw as any).responses
    : {};
  const learnerName =
    typeof (raw as any).learnerName === "string"
      ? (raw as any).learnerName
      : "";
  const certificateIssuedAt =
    typeof (raw as any).certificateIssuedAt === "string"
      ? (raw as any).certificateIssuedAt
      : null;

  return {
    completed,
    responses,
    learnerName,
    certificateIssuedAt,
  };
};

const readLocalState = (): CourseProgressState => {
  if (typeof window === "undefined") {
    return { ...emptyState };
  }

  try {
    const stored = window.localStorage.getItem(LOCAL_KEY);
    if (!stored) {
      return { ...emptyState };
    }
    return normalizeState(JSON.parse(stored));
  } catch {
    return { ...emptyState };
  }
};

const writeLocalState = (state: CourseProgressState) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
};

const hasLocalData = (state: CourseProgressState) =>
  Object.keys(state.completed).length > 0 ||
  Object.keys(state.responses).length > 0 ||
  state.learnerName.trim().length > 0 ||
  Boolean(state.certificateIssuedAt);

export function useCourseProgress(): UseCourseProgressResult {
  const [completed, setCompleted] = useState<CompletionMap>({});
  const [responses, setResponses] = useState<AnswerMap>({});
  const [learnerName, setLearnerName] = useState("");
  const [certificateIssuedAt, setCertificateIssuedAt] = useState<string | null>(
    null
  );
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [hasLoadedRemote, setHasLoadedRemote] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  const isSignedIn = Boolean(user);
  const userEmail = user?.email ?? null;

  const snapshot = useMemo(
    () => ({
      completed,
      responses,
      learnerName,
      certificateIssuedAt,
    }),
    [completed, responses, learnerName, certificateIssuedAt]
  );

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setUser(null);
      setAuthReady(true);
      setSyncError("Missing Supabase environment variables.");
      return () => undefined;
    }

    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setUser(data.session?.user ?? null);
      setAuthReady(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setAuthReady(true);
      }
    );

    return () => {
      active = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!authReady) {
      return;
    }

    if (!isSupabaseConfigured) {
      const local = readLocalState();
      setCompleted(local.completed);
      setResponses(local.responses);
      setLearnerName(local.learnerName);
      setCertificateIssuedAt(local.certificateIssuedAt);
      setHasLoadedRemote(false);
      return;
    }

    if (!user) {
      setSyncError(null);
      const local = readLocalState();
      setCompleted(local.completed);
      setResponses(local.responses);
      setLearnerName(local.learnerName);
      setCertificateIssuedAt(local.certificateIssuedAt);
      setHasLoadedRemote(false);
      return;
    }

    let cancelled = false;

    const loadRemote = async () => {
      setIsSyncing(true);
      setSyncError(null);
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .select("completed,responses,learner_name,certificate_issued_at")
        .eq("user_id", user.id)
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        setSyncError(error.message);
        const local = readLocalState();
        setCompleted(local.completed);
        setResponses(local.responses);
        setLearnerName(local.learnerName);
        setCertificateIssuedAt(local.certificateIssuedAt);
        setHasLoadedRemote(true);
        setIsSyncing(false);
        return;
      }

      if (data) {
        setSyncError(null);
        setCompleted((data.completed as CompletionMap) ?? {});
        setResponses((data.responses as AnswerMap) ?? {});
        setLearnerName(data.learner_name ?? "");
        setCertificateIssuedAt(data.certificate_issued_at ?? null);
        setHasLoadedRemote(true);
        setIsSyncing(false);
        return;
      }

      const local = readLocalState();
      if (hasLocalData(local)) {
        setSyncError(null);
        setCompleted(local.completed);
        setResponses(local.responses);
        setLearnerName(local.learnerName);
        setCertificateIssuedAt(local.certificateIssuedAt);

        await supabase.from(TABLE_NAME).upsert(
          {
            user_id: user.id,
            completed: local.completed,
            responses: local.responses,
            learner_name: local.learnerName || null,
            certificate_issued_at: local.certificateIssuedAt,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        );
      } else {
        setCompleted({});
        setResponses({});
        setLearnerName("");
        setCertificateIssuedAt(null);
      }

      setHasLoadedRemote(true);
      setIsSyncing(false);
    };

    loadRemote();

    return () => {
      cancelled = true;
    };
  }, [authReady, user]);

  useEffect(() => {
    if (!authReady) return;
    writeLocalState(snapshot);
  }, [authReady, snapshot]);

  useEffect(() => {
    if (!isSupabaseConfigured || !authReady || !user || !hasLoadedRemote || syncError) {
      return;
    }

    const timeout = setTimeout(async () => {
      await supabase.from(TABLE_NAME).upsert(
        {
          user_id: user.id,
          completed: snapshot.completed,
          responses: snapshot.responses,
          learner_name: snapshot.learnerName || null,
          certificate_issued_at: snapshot.certificateIssuedAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    }, 600);

    return () => clearTimeout(timeout);
  }, [authReady, user, hasLoadedRemote, snapshot]);

  const signInWithEmail = async (email: string) => {
    const trimmed = email.trim();
    if (!trimmed) {
      return { error: "Please enter an email address." };
    }

    const redirectTo =
      typeof window === "undefined"
        ? undefined
        : `${window.location.origin}/course`;

    const { error } = await supabase.auth.signInWithOtp({
      email: trimmed,
      options: redirectTo ? { emailRedirectTo: redirectTo } : undefined,
    });

    return error ? { error: error.message } : {};
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return error ? { error: error.message } : {};
  };

  return {
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
  };
}
