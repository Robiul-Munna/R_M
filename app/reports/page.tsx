"use client";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

// Dummy data for reporting
const demoReport = {
  totalTests: 8,
  pass: 6,
  fail: 2,
  topFailing: ["REQ 001", "REQ 004"],
  defects: [
    { id: 1, summary: "Login lockout not triggered", severity: "High", status: "Open" },
    { id: 2, summary: "File upload error message missing", severity: "Medium", status: "Open" },
  ],
};

export default function ReportsPage() {
  const [report, setReport] = useState(demoReport);

  function exportPDF() {
    const doc = new jsPDF();
    doc.text("QA Test Report", 10, 10);
    doc.text(`Total Tests: ${report.totalTests}`, 10, 20);
    doc.text(`Passed: ${report.pass}`, 10, 30);
    doc.text(`Failed: ${report.fail}`, 10, 40);
    doc.text(`Top Failing Requirements: ${report.topFailing.join(", ")}`, 10, 50);
    doc.text("Defects:", 10, 60);
    report.defects.forEach((d, i) => {
      doc.text(`${d.id}. ${d.summary} [${d.severity}] (${d.status})`, 10, 70 + i * 10);
    });
    doc.save("qa-report.pdf");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">QA Reports</h1>
      <div className="mb-2">Total Tests: <strong>{report.totalTests}</strong></div>
      <div className="mb-2 text-green-700">Passed: <strong>{report.pass}</strong></div>
      <div className="mb-2 text-red-700">Failed: <strong>{report.fail}</strong></div>
      <div className="mb-2">Top Failing Requirements: <strong>{report.topFailing.join(", ")}</strong></div>
      <div className="mb-4">
        <strong>Defects:</strong>
        <ul>
          {report.defects.map(d => (
            <li key={d.id} className="mb-1">
              {d.summary} <span className="text-xs text-gray-500">[{d.severity}] ({d.status})</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={exportPDF}
      >
        Export PDF
      </button>
    </div>
  );
}
