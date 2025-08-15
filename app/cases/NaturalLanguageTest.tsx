"use client";
import { useState } from "react";
import { addTestRailCase } from "@/lib/testrail";

export default function NaturalLanguageTest() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await fetch("/api/nl2test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testDescription: input }),
      });
      const data = await res.json();
      if (data.result) setResult(data.result);
      else setError(data.error || "Unknown error");
    } catch (err) {
      setError("Failed to fetch AI result");
    } finally {
      setLoading(false);
    }
  }

  // Placeholder for IndexedDB save logic
  async function handleSave() {
    // Simulate saving to TestRail
    setLoading(true);
    try {
      const res = await addTestRailCase({
        title: input.slice(0, 50) || "AI Generated Test Case",
        steps: result,
        expectedResult: "See generated steps above.",
      });
      alert(`TestRail Case Created: ${res.caseId}`);
    } catch {
      alert("Failed to create TestRail case.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Natural Language Test Mode</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows={4}
          placeholder="Describe your test in plain English..."
          value={input}
          onChange={e => setInput(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Test Steps"}
        </button>
      </form>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {result && (
        <div className="bg-gray-100 p-4 rounded mb-2 whitespace-pre-wrap">
          <strong>AI Generated Test Steps:</strong>
          <div>{result}</div>
        </div>
      )}
      {result && (
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={handleSave}
        >
          Save Test Case
        </button>
      )}
    </div>
  );
}
