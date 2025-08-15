"use client";
import Sidebar from "@/components/Sidebar";
import WelcomePopup from "@/components/WelcomePopup";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { UserIcon, BellIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import CodingModeEditor from "@/app/runs/CodingModeEditor";
import { ClipboardDocumentListIcon, PencilSquareIcon, DocumentTextIcon, Cog6ToothIcon, PlayCircleIcon, BugAntIcon, MagnifyingGlassCircleIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { HospitalWorkflowSVG } from "@/components/svg/HospitalWorkflowSVG";
import { PatientWorkflowSVG } from "@/components/svg/PatientWorkflowSVG";
import { MedicationWorkflowSVG } from "@/components/svg/MedicationWorkflowSVG";
import { SchedulingWorkflowSVG } from "@/components/svg/SchedulingWorkflowSVG";
import { LabWorkflowSVG } from "@/components/svg/LabWorkflowSVG";

const sampleMetrics = {
  testCases: 120,
  defectsOpen: 5,
  defectsClosed: 15,
  testRunsPass: 110,
  testRunsFail: 10,
};

const testRunData = [
  { name: "Mon", pass: 20, fail: 2 },
  { name: "Tue", pass: 18, fail: 1 },
  { name: "Wed", pass: 22, fail: 3 },
  { name: "Thu", pass: 25, fail: 2 },
  { name: "Fri", pass: 25, fail: 2 },
];

const defectTrendData = [
  { name: "Week 1", open: 8, closed: 2 },
  { name: "Week 2", open: 5, closed: 5 },
  { name: "Week 3", open: 3, closed: 7 },
  { name: "Week 4", open: 2, closed: 10 },
];

// Demo App Preview Cards
const demoApps = [
  { name: "Login", href: "/demo-app/auth/login", color: "bg-blue-100", icon: UserIcon },
  { name: "Patient Search", href: "/demo-app/patients/search", color: "bg-teal-100", icon: UserIcon },
  { name: "Orders", href: "/demo-app/orders/medication", color: "bg-indigo-100", icon: UserIcon },
  { name: "Upload", href: "/demo-app/documents/upload", color: "bg-pink-100", icon: UserIcon },
  { name: "Scheduling", href: "/demo-app/scheduling", color: "bg-yellow-100", icon: UserIcon },
];

const lifecycleStages = [
  { name: "Requirements Analysis", icon: ClipboardDocumentListIcon, href: "/requirements" },
  { name: "Test Planning", icon: PencilSquareIcon, href: "/plans" },
  { name: "Test Case Design", icon: DocumentTextIcon, href: "/cases" },
  { name: "Test Environment Setup", icon: Cog6ToothIcon, href: "/dashboard" },
  { name: "Test Execution", icon: PlayCircleIcon, href: "/runs" },
  { name: "Defect Logging", icon: BugAntIcon, href: "/defects" },
  { name: "Defect Tracking", icon: MagnifyingGlassCircleIcon, href: "/defects" },
  { name: "Test Reporting", icon: ChartBarIcon, href: "/reports" },
  { name: "Test Closure", icon: CheckCircleIcon, href: "/dashboard" },
];

export default function DashboardPage() {
  const [metrics, setMetrics] = useState(sampleMetrics);

  // Animate counters (simple demo)
  useEffect(() => {
    // Could add animated increment logic here
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Bar / Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b">
          <div className="flex items-center gap-4">
            <UserIcon className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-gray-700">QA User</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" aria-label="Notifications">
              <BellIcon className="h-6 w-6 text-blue-600" />
            </Button>
            <Button variant="outline">Quick Action</Button>
          </div>
        </header>
        {/* Dashboard Content */}
        <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
          {/* Live Metrics Cards */}
          <div className="rounded-2xl shadow-xl p-6 flex flex-col items-center bg-white/80 backdrop-blur-md border border-blue-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold mb-2 text-blue-700">Test Cases</h2>
            <span className="text-4xl font-bold text-blue-600 animate-pulse drop-shadow-lg">{metrics.testCases}</span>
          </div>
          <div className="rounded-2xl shadow-xl p-6 flex flex-col items-center bg-white/80 backdrop-blur-md border border-red-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold mb-2 text-red-700">Defects</h2>
            <span className="text-4xl font-bold text-red-600 animate-pulse drop-shadow-lg">{metrics.defectsOpen}</span>
            <span className="text-sm text-gray-500">Open</span>
            <span className="text-4xl font-bold text-green-600 animate-pulse mt-2 drop-shadow-lg">{metrics.defectsClosed}</span>
            <span className="text-sm text-gray-500">Closed</span>
          </div>
          <div className="rounded-2xl shadow-xl p-6 flex flex-col items-center bg-white/80 backdrop-blur-md border border-green-100 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold mb-2 text-green-700">Test Runs</h2>
            <span className="text-4xl font-bold text-green-600 animate-pulse drop-shadow-lg">{metrics.testRunsPass}</span>
            <span className="text-sm text-gray-500">Pass</span>
            <span className="text-4xl font-bold text-red-600 animate-pulse mt-2 drop-shadow-lg">{metrics.testRunsFail}</span>
            <span className="text-sm text-gray-500">Fail</span>
          </div>
          {/* Charts */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-xl font-bold mb-4">Test Run Results (Weekly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={testRunData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pass" fill="#22c55e" name="Pass" />
                <Bar dataKey="fail" fill="#ef4444" name="Fail" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-xl font-bold mb-4">Defect Trends (Monthly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={defectTrendData}>
                <defs>
                  <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClosed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="open" stroke="#ef4444" fillOpacity={1} fill="url(#colorOpen)" name="Open" />
                <Area type="monotone" dataKey="closed" stroke="#22c55e" fillOpacity={1} fill="url(#colorClosed)" name="Closed" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Demo App Previews with SVGs */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-xl font-bold mb-4">Demo App Previews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow">
                <HospitalWorkflowSVG className="w-32 h-20 mb-2" />
                <span className="font-semibold text-gray-700 mt-2">Hospital Workflow</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow">
                <PatientWorkflowSVG className="w-32 h-20 mb-2" />
                <span className="font-semibold text-gray-700 mt-2">Patient Workflow</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow">
                <MedicationWorkflowSVG className="w-32 h-20 mb-2" />
                <span className="font-semibold text-gray-700 mt-2">Medication Workflow</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow">
                <SchedulingWorkflowSVG className="w-32 h-20 mb-2" />
                <span className="font-semibold text-gray-700 mt-2">Scheduling Workflow</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow">
                <LabWorkflowSVG className="w-32 h-20 mb-2" />
                <span className="font-semibold text-gray-700 mt-2">Lab/Test Workflow</span>
              </div>
            </div>
          </div>
          {/* Coding Mode Editor */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-xl font-bold mb-4">Coding Mode</h2>
            <CodingModeEditor />
          </div>
          {/* QA Lifecycle Progress Flow */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3 mb-8">
            <h2 className="text-xl font-bold mb-4">QA Lifecycle</h2>
            <div className="flex flex-row items-center justify-between gap-2 overflow-x-auto pb-2">
              {lifecycleStages.map((stage, idx) => (
                <a
                  key={stage.name}
                  href={stage.href}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg bg-white shadow hover:bg-blue-50 transition-colors group ${idx === 0 ? 'border-blue-600 border-2' : 'border border-gray-200'}`}
                  style={{ minWidth: 120 }}
                >
                  <stage.icon className="h-6 w-6 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-700 text-center">{stage.name}</span>
                  {idx < lifecycleStages.length - 1 && (
                    <span className="w-8 h-1 bg-blue-300 rounded-full mt-2 mx-auto" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </main>
        {/* Welcome Popup and Chatbot */}
        <WelcomePopup />
        <ChatbotWidget />
      </div>
    </div>
  );
}
