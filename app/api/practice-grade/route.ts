import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = await req.json();
    const {
      problemTitle,
      problemTopic,
      prompt,
      hint,
      outline,
      modelProof,
      userSolution,
    } = body ?? {};

    if (!prompt || !userSolution) {
      return NextResponse.json(
        { error: "Missing problem prompt or user solution." },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are a strict but helpful proof grader for advanced high school mathematics.

Return ONLY valid JSON with this exact shape:
{
  "verdict": "Correct" | "Mostly correct" | "Partially correct" | "Incorrect",
  "score": number,
  "feedback": string,
  "missing_steps": string[],
  "next_steps": string[]
}`,
        },
        {
          role: "user",
          content: `
Title: ${problemTitle ?? ""}
Topic: ${problemTopic ?? ""}

Problem:
${prompt}

Hint:
${hint ?? ""}

Outline:
${outline ?? ""}

Model proof:
${modelProof ?? ""}

Student LaTeX solution:
${userSolution}
          `,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    const parsed = JSON.parse(raw);

    return NextResponse.json(parsed);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to grade solution." },
      { status: 500 }
    );
  }
}