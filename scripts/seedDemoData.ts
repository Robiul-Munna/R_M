// scripts/seedDemoData.ts

export async function seedDemoData() {
  // Example: Seed IndexedDB or local storage with demo patients, orders, appointments
  const patients = [
    { mrn: "12345", name: "John Doe", allergies: ["Penicillin", "Latex"] },
    { mrn: "67890", name: "Jane Smith", allergies: ["None"] },
  ];
  const orders = [
    { id: 1, patientMrn: "12345", medication: "Warfarin", status: "Pending" },
    { id: 2, patientMrn: "67890", medication: "Aspirin", status: "Completed" },
  ];
  const appointments = [
    { id: 1, patientMrn: "12345", date: "2025-08-15", time: "10:00", task: "Checkup" },
    { id: 2, patientMrn: "67890", date: "2025-08-16", time: "14:00", task: "Follow-up" },
  ];

  // Save to localStorage for demo (replace with IndexedDB for production)
  localStorage.setItem("demo_patients", JSON.stringify(patients));
  localStorage.setItem("demo_orders", JSON.stringify(orders));
  localStorage.setItem("demo_appointments", JSON.stringify(appointments));

  return true;
}

// To run: import and call seedDemoData() in your app's entry point or a setup page
