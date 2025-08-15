export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">AI QA Tool for Healthcare</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl text-center">
        Welcome! This is your all-in-one QA platform for healthcare applications. Use the sidebar to explore features like Natural Language Test Mode, Coding Mode Editor, Chatbot, Defect Logging, Reporting, and Demo Hospital Workflows.
      </p>
      <div className="flex gap-4">
        <a href="/cases" className="px-4 py-2 bg-blue-600 text-white rounded">Try Natural Language Test Mode</a>
        <a href="/runs" className="px-4 py-2 bg-green-600 text-white rounded">Try Coding Mode Editor</a>
        <a href="/defects" className="px-4 py-2 bg-red-600 text-white rounded">Log a Defect</a>
      </div>
    </main>
  );
}
