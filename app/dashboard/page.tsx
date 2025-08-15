"use client";
import Sidebar from "@/components/Sidebar";
import WelcomePopup from "@/components/WelcomePopup";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { UserIcon, BellIcon } from '@heroicons/react/24/outline';

export default function DashboardPage() {
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
          {/* Placeholder cards for metrics, charts, previews */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Test Cases</h2>
            <p className="text-gray-600">Total: 120</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Defects</h2>
            <p className="text-gray-600">Open: 5 | Closed: 15</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Test Runs</h2>
            <p className="text-gray-600">Pass: 110 | Fail: 10</p>
          </div>
          {/* Add more cards for charts, demo previews, etc. */}
        </main>
        {/* Welcome Popup and Chatbot */}
        <WelcomePopup />
        <ChatbotWidget />
      </div>
    </div>
  );
}
