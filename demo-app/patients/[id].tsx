"use client";
import { useParams } from "next/navigation";

const DEMO_PATIENTS = {
  "12345": { name: "John Doe", allergies: ["Penicillin", "Latex"] },
  "67890": { name: "Jane Smith", allergies: ["None"] },
};

export default function PatientProfilePage() {
  const params = useParams();
  const patient = DEMO_PATIENTS[params.id as keyof typeof DEMO_PATIENTS];

  if (!patient) {
    return <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">Patient not found.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Patient Chart</h1>
      <div className="mb-2"><strong>Name:</strong> {patient.name}</div>
      <div className="mb-2"><strong>Allergies:</strong> <span className="text-red-600">{patient.allergies.join(", ")}</span></div>
      {patient.allergies[0] !== "None" && (
        <div className="bg-red-100 text-red-800 p-2 rounded mb-2">Allergy Banner: {patient.allergies.join(", ")}</div>
      )}
    </div>
  );
}
