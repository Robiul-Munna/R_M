"use client";
import { useState } from "react";

export default function MedicationOrderPage() {
  const [role, setRole] = useState("Nurse");
  const [medication, setMedication] = useState("");
  const [error, setError] = useState("");

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    if (role === "Nurse" && medication === "Warfarin") {
      setError("High risk medication requires provider co-sign");
    } else {
      setError("");
      alert("Order placed successfully!");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Medication Order</h1>
      <form onSubmit={handleOrder}>
        <select
          className="w-full p-2 border rounded mb-2"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <option>Nurse</option>
          <option>Provider</option>
        </select>
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Medication name"
          value={medication}
          onChange={e => setMedication(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Place Order
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
