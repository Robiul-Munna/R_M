"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [locked, setLocked] = useState(false);
  const [attempts, setAttempts] = useState(0);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (locked) return;
    if (username === "test.user" && password === "password123") {
      setError("");
      alert("Login successful!");
    } else {
      setAttempts(a => a + 1);
      setError("Invalid credentials");
      if (attempts + 1 >= 5) {
        setLocked(true);
        setError("Account locked after 5 failed attempts");
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          disabled={locked}
        />
        <input
          className="w-full p-2 border rounded mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={locked}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={locked}
        >
          Login
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {locked && <div className="text-orange-600 mt-2">Account is locked. Please contact support.</div>}
    </div>
  );
}
