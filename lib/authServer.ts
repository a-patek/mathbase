import { createClient } from "@supabase/supabase-js";

export type AuthRequestBody = {
  email?: unknown;
  password?: unknown;
  redirectTo?: unknown;
};

export type AuthSessionPayload = {
  access_token: string;
  refresh_token: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getSupabaseAuthClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};

export const parseAuthBody = (body: AuthRequestBody) => {
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const redirectTo = typeof body.redirectTo === "string" ? body.redirectTo : null;

  if (!email || !emailPattern.test(email)) {
    return { error: "Enter a valid email address." };
  }

  if (password.length < 6) {
    return { error: "Use a password with at least 6 characters." };
  }

  return { email, password, redirectTo };
};

export const getEmailRedirectTo = (requestUrl: string, redirectTo: string | null) => {
  const origin = new URL(requestUrl).origin;

  if (!redirectTo || !redirectTo.startsWith("/")) {
    return `${origin}/profile`;
  }

  return `${origin}${redirectTo}`;
};

export const serializeSession = (
  session: { access_token?: string; refresh_token?: string } | null
): AuthSessionPayload | null => {
  if (!session?.access_token || !session.refresh_token) {
    return null;
  }

  return {
    access_token: session.access_token,
    refresh_token: session.refresh_token,
  };
};
