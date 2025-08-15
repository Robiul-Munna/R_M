"use client";
import { useState } from "react";

const DEMO_PATIENTS = [
  { mrn: "12345", name: "John Doe", allergies: ["Penicillin", "Latex"] },
  { mrn: "67890", name: "Jane Smith", allergies: ["None"] },
];

export default function PatientSearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof DEMO_PATIENTS>([]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setResults(DEMO_PATIENTS.filter(p => p.mrn === query || p.name.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Patient Search</h1>
      <form onSubmit={handleSearch}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Search by MRN or name"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </form>
      <div className="mt-4">
        {results.length === 0 ? (
          <div className="text-gray-500">No results</div>
        ) : (
          <ul>
            {results.map(p => (
              <li key={p.mrn} className="mb-2 p-2 border rounded">
                <strong>{p.name}</strong> (MRN: {p.mrn})<br />
                Allergies: {p.allergies.join(", ")}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
