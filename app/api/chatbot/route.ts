import { NextResponse } from "next/server";

const HUGGING_FACE_API = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct";
const HUGGING_FACE_API_KEY = process.env.HF_API_KEY;

const SYSTEM_PROMPT = `You are a Senior QA Specialist for healthcare IT. Always:
- Write test cases and defects with clear steps and expected vs actual results
- Recommend root causes and fixes
- Generate Playwright code on request
- Never request or store PHI
- Use HIPAA-safe language
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 });
    }

    const prompt = `${SYSTEM_PROMPT}\nUser: ${message}`;

    const response = await fetch(HUGGING_FACE_API, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const data = await response.json();
    const output = data?.[0]?.generated_text || "Failed to generate response";

    return NextResponse.json({ result: output });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
