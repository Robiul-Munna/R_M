"use client";
import { useState } from "react";

export default function DocumentUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    if (f) {
      if (!["application/pdf", "image/jpeg"].includes(f.type)) {
        setError("Only PDF or JPG files are allowed");
        setFile(null);
      } else if (f.size > 5 * 1024 * 1024) {
        setError("File size must be ≤ 5MB");
        setFile(null);
      } else {
        setError("");
        setFile(f);
      }
    }
  }

  function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setError("No valid file selected");
      return;
    }
    alert("File uploaded successfully!");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Document Upload</h1>
      <form onSubmit={handleUpload}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="file"
          accept="application/pdf,image/jpeg"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Upload
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
