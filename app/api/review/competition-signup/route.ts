// app/api/review/competition-signup/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, school, grade, timezone, notes } = body;

    if (!full_name || !email) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("competition_signups")
      .insert([
        {
          full_name,
          email,
          school: school ?? null,
          grade: grade ?? null,
          timezone: timezone ?? null,
          notes: notes ?? null,
        },
      ])
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, inserted: data });
  } catch (err: any) {
    console.error("Route error:", err);
    console.error("Cause:", err?.cause);
    return NextResponse.json(
      { error: err?.message || "Unknown server error" },
      { status: 400 }
    );
  }
}
