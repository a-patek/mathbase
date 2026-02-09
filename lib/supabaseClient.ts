import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const createStubClient = (): SupabaseClient => {
  const error = { message: "Supabase is not configured" };

  const auth = {
    getSession: async () => ({ data: { session: null }, error }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => undefined } },
    }),
    signInWithOtp: async () => ({ data: null, error }),
    signOut: async () => ({ error }),
  };

  const from = () => ({
    select: () => ({
      eq: () => ({
        maybeSingle: async () => ({ data: null, error }),
      }),
    }),
    upsert: async () => ({ data: null, error }),
  });

  return { auth, from } as unknown as SupabaseClient;
};

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : createStubClient();
