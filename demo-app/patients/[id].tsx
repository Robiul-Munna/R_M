
"use client";
import { useParams } from "next/navigation";

// Demo patient data
const DEMO_PATIENTS: Record<string, { name: string; allergies: string[] }> = {
  "12345": { name: "John Doe", allergies: ["Penicillin", "Latex"] },
  "67890": { name: "Jane Smith", allergies: ["None"] },
};

export default function PatientProfilePage() {
  const params = useParams();
  const patientId = params?.id as string | undefined;
  const patient = patientId ? DEMO_PATIENTS[patientId] : undefined;

  if (!patient) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-xl font-semibold mb-2">Patient not found</h1>
        <p className="text-gray-600">Please check the patient ID and try again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      {/* Welcome note at the top */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-blue-900 text-center">
        Welcome, Mr. Robiul Munna! Here is the patient chart overview.
      </div>
      <h1 className="text-2xl font-bold mb-4">Patient Chart</h1>
      <div className="mb-2">
        <strong>Name:</strong> {patient.name}
      </div>
      <div className="mb-2">
        <strong>Allergies:</strong>{" "}
        <span className={patient.allergies[0] !== "None" ? "text-red-600" : "text-green-600"}>
          {patient.allergies.join(", ")}
        </span>
      </div>
      {patient.allergies[0] !== "None" && (
        <div className="bg-red-100 text-red-800 p-2 rounded mb-2">
          <strong>Allergy Banner:</strong> {patient.allergies.join(", ")}
        </div>
      )}
    </div>
  );
}
