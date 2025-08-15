"use client";
import Sidebar from "@/components/Sidebar";
import WelcomePopup from "@/components/WelcomePopup";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { UserIcon, BellIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

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
        <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Live Metrics Cards */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Test Cases</h2>
            <span className="text-4xl font-bold text-blue-600 animate-pulse">{metrics.testCases}</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Defects</h2>
            <span className="text-4xl font-bold text-red-600 animate-pulse">{metrics.defectsOpen}</span>
            <span className="text-sm text-gray-500">Open</span>
            <span className="text-4xl font-bold text-green-600 animate-pulse mt-2">{metrics.defectsClosed}</span>
            <span className="text-sm text-gray-500">Closed</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Test Runs</h2>
            <span className="text-4xl font-bold text-green-600 animate-pulse">{metrics.testRunsPass}</span>
            <span className="text-sm text-gray-500">Pass</span>
            <span className="text-4xl font-bold text-red-600 animate-pulse mt-2">{metrics.testRunsFail}</span>
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
          {/* Demo App Previews */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3">
            <h2 className="text-xl font-bold mb-4">Demo App Previews</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {demoApps.map(app => (
                <a
                  key={app.name}
                  href={app.href}
                  className={`block ${app.color} rounded-xl shadow p-4 hover:shadow-lg transition-shadow group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center justify-center">
                    <app.icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform mb-2" />
                    <span className="font-semibold text-gray-700 group-hover:text-blue-700">{app.name}</span>
                  </div>
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
