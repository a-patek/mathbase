import { NextResponse } from "next/server";

export const runtime = "nodejs";

type CompetitionTeamRequestBody = {
  name?: unknown;
  email?: unknown;
  school?: unknown;
  grade?: unknown;
  location?: unknown;
  parentEmail?: unknown;
  contests?: unknown;
  travelExperience?: unknown;
  whyJoin?: unknown;
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

const buildMailtoUrl = ({
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
}: {
  name: string;
  email: string;
  school: string;
  grade: string;
  location: string;
  parentEmail: string;
  contests: string;
  travelExperience: string;
  whyJoin: string;
  availability: string;
}) => {
  const recipient = process.env.COMPETITION_TEAM_NOTIFY_EMAIL ?? "ayaan.s.saini@gmail.com";
  const subject = `MathBase competition team application from ${name || "student"}`;
  const body = [
    "New MathBase competition team application",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `School: ${school}`,
    `Grade / Year: ${grade}`,
    `Location: ${location || "(not provided)"}`,
    `Parent / Guardian Email: ${parentEmail || "(not provided)"}`,
    "",
    "Competition background:",
    contests || "(not provided)",
    "",
    "Travel / team experience:",
    travelExperience || "(not provided)",
    "",
    "Why they want to join:",
    whyJoin,
    "",
    "Availability / constraints:",
    availability || "(not provided)",
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail =
    process.env.COMPETITION_TEAM_NOTIFY_EMAIL ??
    process.env.TUTORING_NOTIFY_EMAIL ??
    "ayaan.s.saini@gmail.com";
  const fromEmail =
    process.env.COMPETITION_TEAM_FROM_EMAIL ??
    process.env.TUTORING_FROM_EMAIL ??
    "MathBase <onboarding@resend.dev>";

  const body = (await request.json().catch(() => ({}))) as CompetitionTeamRequestBody;
  const name = asText(body.name);
  const email = asText(body.email).toLowerCase();
  const school = asText(body.school);
  const grade = asText(body.grade);
  const location = asText(body.location);
  const parentEmail = asText(body.parentEmail).toLowerCase();
  const contests = asText(body.contests);
  const travelExperience = asText(body.travelExperience);
  const whyJoin = asText(body.whyJoin);
  const availability = asText(body.availability);

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (parentEmail && !emailPattern.test(parentEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid parent or guardian email." },
      { status: 400 }
    );
  }

  if (!grade || !school) {
    return NextResponse.json(
      { error: "Please enter your school and grade." },
      { status: 400 }
    );
  }

  if (!whyJoin) {
    return NextResponse.json(
      { error: "Please tell us why you want to join the team." },
      { status: 400 }
    );
  }

  const mailtoUrl = buildMailtoUrl({
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
  });

  if (!resendApiKey) {
    return NextResponse.json(
      {
        error:
          "Email sending is not configured yet. Your email app will open with the application filled in.",
        mailtoUrl,
      },
      { status: 503 }
    );
  }

  const text = [
    "New MathBase competition team application",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `School: ${school}`,
    `Grade / Year: ${grade}`,
    `Location: ${location || "(not provided)"}`,
    `Parent / Guardian Email: ${parentEmail || "(not provided)"}`,
    "",
    "Competition background:",
    contests || "(not provided)",
    "",
    "Travel / team experience:",
    travelExperience || "(not provided)",
    "",
    "Why they want to join:",
    whyJoin,
    "",
    "Availability / constraints:",
    availability || "(not provided)",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #0f172a;">
      <h2>New MathBase competition team application</h2>
      <p><strong>Name:</strong> ${formatValue(name)}</p>
      <p><strong>Email:</strong> ${formatValue(email)}</p>
      <p><strong>School:</strong> ${formatValue(school)}</p>
      <p><strong>Grade / Year:</strong> ${formatValue(grade)}</p>
      <p><strong>Location:</strong> ${formatValue(location)}</p>
      <p><strong>Parent / Guardian Email:</strong> ${formatValue(parentEmail)}</p>
      <h3>Competition background</h3>
      <p>${formatValue(contests).replaceAll("\n", "<br />")}</p>
      <h3>Travel / team experience</h3>
      <p>${formatValue(travelExperience).replaceAll("\n", "<br />")}</p>
      <h3>Why they want to join</h3>
      <p>${formatValue(whyJoin).replaceAll("\n", "<br />")}</p>
      <h3>Availability / constraints</h3>
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
      subject: `MathBase competition team application from ${name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend competition team email error:", errorText);

    return NextResponse.json(
      {
        error:
          "Could not send the application automatically. Your email app will open with the application filled in.",
        mailtoUrl,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Competition team application sent." });
}
