import { NextResponse } from "next/server";
import { exec } from "child_process";
import { writeFile, unlink } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // Write code to a temp file
    const tempFile = path.join(process.cwd(), "temp-playwright-test.spec.ts");
    await writeFile(tempFile, code, "utf8");

    // Run Playwright test using npx
    const command = `npx playwright test ${tempFile} --reporter=line`;
    const execPromise = () => new Promise<string>((resolve, reject) => {
      exec(command, { timeout: 30000 }, (error, stdout, stderr) => {
        if (error) {
          resolve(stderr || error.message);
        } else {
          resolve(stdout);
        }
      });
    });

    const result = await execPromise();
    await unlink(tempFile);

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
