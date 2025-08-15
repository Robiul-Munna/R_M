"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { createJiraIssue } from "@/lib/jira";
import { addTestRailCase } from "@/lib/testrail";

const DEFAULT_CODE = `import { test, expect } from '@playwright/test';

test('login fails with wrong password', async ({ page }) => {
  await page.goto('https://your-demo-app-url/auth/login');
  await page.fill('#username', 'test.user');
  await page.fill('#password', 'wrongpassword');
  await page.click('button[type=submit]');
  await expect(page.locator('.error')).toHaveText('Invalid credentials');
});
`;

export default function CodingModeEditor() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [jiraStatus, setJiraStatus] = useState("");
  const [testrailStatus, setTestRailStatus] = useState("");
  const [history, setHistory] = useState<{ code: string; result: string; date: string }[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  async function handleRun() {
    setLoading(true);
    setError("");
    setResult("");
    setJiraStatus("");
    setTestRailStatus("");
    try {
      const res = await fetch("/api/runs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
        setHistory(h => [
          { code, result: data.result, date: new Date().toLocaleString() },
          ...h.slice(0, 9)
        ]);
        // Simulate defect logging if test fails
        if (/FAIL|Error|failed|not found/i.test(data.result)) {
          const jiraRes = await createJiraIssue({
            summary: "Playwright test failure",
            description: data.result,
            severity: "High",
          });
          setJiraStatus(`Jira Issue Created: ${jiraRes.issueKey}`);
        }
      } else setError(data.error || "Unknown error");
    } catch (err) {
      setError("Failed to run Playwright test");
    } finally {
      setLoading(false);
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  async function handleSaveTestCase() {
    setTestRailStatus("");
    setLoading(true);
    try {
      const res = await addTestRailCase({
        title: code.slice(0, 50) || "Playwright Test Case",
        steps: code,
        expectedResult: "See Playwright test result above.",
      });
      setTestRailStatus(`TestRail Case Created: ${res.caseId}`);
    } catch {
      setTestRailStatus("Failed to create TestRail case.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Coding Mode: Playwright Editor</h1>
      <Editor
        height="400px"
        defaultLanguage="typescript"
        value={code}
        onChange={value => setCode(value || "")}
        theme="vs-dark"
        options={{ fontSize: 16 }}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={handleRun}
        disabled={loading}
      >
        {loading ? "Running..." : "Run Playwright Test"}
      </button>
      {error && <div className="text-red-500 mt-2 animate-pulse">{error}</div>}
      {result && (
        <div ref={resultRef} className="bg-gray-100 p-4 rounded mt-4 whitespace-pre-wrap animate-fade-in">
          <strong>Test Result:</strong>
          <div>{result}</div>
          {jiraStatus && <div className="mt-2 text-green-600 animate-pulse">{jiraStatus}</div>}
        </div>
      )}
      {result && (
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          onClick={handleSaveTestCase}
          disabled={loading}
        >
          Save Test Case to TestRail
        </button>
      )}
      {testrailStatus && <div className="mt-2 text-green-600 animate-pulse">{testrailStatus}</div>}
      {/* Test Execution History */}
      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Test Execution History</h2>
          <ul className="space-y-2">
            {history.map((h, i) => (
              <li key={i} className="bg-white border rounded p-2 shadow-sm">
                <div className="text-xs text-gray-500">{h.date}</div>
                <div className="font-mono text-xs text-blue-700">{h.code.slice(0, 60)}...</div>
                <div className={/PASS|Success/i.test(h.result) ? "text-green-600" : "text-red-600"}>{h.result.slice(0, 80)}...</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
