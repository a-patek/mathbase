import { NextResponse } from "next/server";

export const runtime = "nodejs";

type TutoringRequestBody = {
  name?: unknown;
  email?: unknown;
  school?: unknown;
  grade?: unknown;
  focusArea?: unknown;
  details?: unknown;
  availability?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatValue = (value: string) => escapeHtml(value || "(not provided)");

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.TUTORING_NOTIFY_EMAIL ?? "ayaan.s.saini@gmail.com";
  const fromEmail = process.env.TUTORING_FROM_EMAIL ?? "MathBase <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Tutoring email is not configured on the server." },
      { status: 500 }
    );
  }

  const body = (await request.json().catch(() => ({}))) as TutoringRequestBody;
  const name = asText(body.name);
  const email = asText(body.email).toLowerCase();
  const school = asText(body.school);
  const grade = asText(body.grade);
  const focusArea = asText(body.focusArea);
  const details = asText(body.details);
  const availability = asText(body.availability);

  if (!name) {
    return NextResponse.json({ error: "Please enter the student's name." }, { status: 400 });
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!focusArea && !details) {
    return NextResponse.json(
      { error: "Please tell us what you want help with." },
      { status: 400 }
    );
  }

  const text = [
    "New MathBase tutoring inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `School: ${school || "(not provided)"}`,
    `Grade / Year: ${grade || "(not provided)"}`,
    "",
    `Focus area / course: ${focusArea || "(not provided)"}`,
    "",
    "What they want help with:",
    details || "(not provided)",
    "",
    "Typical availability:",
    availability || "(not provided)",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #0f172a;">
      <h2>New MathBase tutoring inquiry</h2>
      <p><strong>Name:</strong> ${formatValue(name)}</p>
      <p><strong>Email:</strong> ${formatValue(email)}</p>
      <p><strong>School:</strong> ${formatValue(school)}</p>
      <p><strong>Grade / Year:</strong> ${formatValue(grade)}</p>
      <p><strong>Focus area / course:</strong> ${formatValue(focusArea)}</p>
      <h3>What they want help with</h3>
      <p>${formatValue(details).replaceAll("\n", "<br />")}</p>
      <h3>Typical availability</h3>
      <p>${formatValue(availability).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: notifyEmail,
      reply_to: email,
      subject: `MathBase tutoring inquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend tutoring email error:", errorText);

    return NextResponse.json(
      { error: "Could not send the tutoring request. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Tutoring request sent." });
}
