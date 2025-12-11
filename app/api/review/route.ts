// app/api/review/route.ts

import { NextResponse } from "next/server";

// Use GPT-4.1-mini (cheapest & fastest high-quality model)
const MODEL = "gpt-4.1-mini";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { solution, moduleSlug, subsectionSlug, subsectionTitle } = body;

    if (!solution || typeof solution !== "string") {
      return NextResponse.json(
        { error: "Missing solution text" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("Missing OPENAI_API_KEY");
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

const prompt = `
You are an expert math instructor evaluating a student's conceptual understanding.

Topic: ${moduleSlug}
Subsection: ${subsectionSlug} (${subsectionTitle})

The student gave this explanation:

"${solution}"

Please evaluate it and respond with:

1. Overall Judgement (Correct / Partially Correct / Incorrect)
2. Strengths (what they understood well)
3. Misconceptions or Missing Ideas
4. Suggestions for a clearer, more complete understanding
5. A short ideal explanation (2–4 sentences)
6. Optional: Give a 0–10 score for conceptual understanding

Be clear, concise, kind, and accurate.
`;

    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: "system", content: "You are a helpful math proof tutor." },
            { role: "user", content: prompt },
          ],
          temperature: 0.4,
        }),
      }
    );

    if (!openaiRes.ok) {
      const error = await openaiRes.text();
      console.error("OpenAI error:", error);
      return NextResponse.json(
        { error: "Failed to fetch from OpenAI" },
        { status: 500 }
      );
    }

    const data = await openaiRes.json();
    const feedback =
      data.choices?.[0]?.message?.content ??
      "No feedback generated. Try again.";

    return NextResponse.json({ feedback });
  } catch (err) {
    console.error("Review API error:", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}