import { NextResponse } from "next/server";
import {
  getEmailRedirectTo,
  getSupabaseAuthClient,
  parseAuthBody,
  serializeSession,
  type AuthRequestBody,
} from "@/lib/authServer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const supabase = getSupabaseAuthClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "Auth is not configured on the server." },
      { status: 500 }
    );
  }

  const body = (await request.json().catch(() => ({}))) as AuthRequestBody;
  const parsed = parseAuthBody(body);

  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { data, error } = await supabase.auth.signUp({
    email: parsed.email,
    password: parsed.password,
    options: {
      emailRedirectTo: getEmailRedirectTo(request.url, parsed.redirectTo),
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({
    user: data.user
      ? {
          id: data.user.id,
          email: data.user.email,
        }
      : null,
    session: serializeSession(data.session),
    message: data.session
      ? "Account created."
      : "Account created. Check your email to confirm your address, then come back to log in.",
  });
}
