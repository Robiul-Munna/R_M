"use client";
import { useState } from "react";
import { createJiraIssue } from "@/lib/jira";

export default function DefectLogger() {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const res = await createJiraIssue({ summary, description, severity });
      setResult(`Jira Issue Created: ${res.issueKey}`);
    } catch {
      setResult("Failed to create Jira issue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Log a Defect</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows={3}
          placeholder="Description (steps to reproduce, expected vs actual)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <select
          className="w-full p-2 border rounded mb-2"
          value={severity}
          onChange={e => setSeverity(e.target.value)}
        >
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Logging..." : "Log Defect"}
        </button>
      </form>
      {result && <div className="mt-4 text-green-600">{result}</div>}
    </div>
  );
}
