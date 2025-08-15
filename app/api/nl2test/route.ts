import { NextResponse } from "next/server";

const HUGGING_FACE_API = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct";
const HUGGING_FACE_API_KEY = process.env.HF_API_KEY; // free Hugging Face API key

export async function POST(req: Request) {
  try {
    const { testDescription } = await req.json();

    if (!testDescription) {
      return NextResponse.json({ error: "No test description provided" }, { status: 400 });
    }

    const prompt = `\nConvert this plain English test description into structured QA steps with:\n1. Preconditions\n2. Test Steps\n3. Expected Results\n4. Optional Playwright code snippet\n\nTest Description: "${testDescription}"\n`;

    const response = await fetch(HUGGING_FACE_API, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const data = await response.json();
    const output = data?.[0]?.generated_text || "Failed to generate steps";

    return NextResponse.json({ result: output });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
