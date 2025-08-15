"use client";
import WelcomePopup from "@/components/WelcomePopup";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserIcon, ClipboardDocumentCheckIcon, BugAntIcon, ChartBarIcon, DocumentArrowUpIcon, CalendarDaysIcon, UsersIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

// Main landing page for the AI QA Tool
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
      {/* Welcome Popup shows once per session */}
      <WelcomePopup />

      {/* Main Heading */}
      <h1 className="text-5xl font-bold mb-4 text-center text-blue-700 drop-shadow-lg">
        Welcome to the AI QA Tool
      </h1>

      {/* Description */}
      <p className="text-lg mb-8 text-center max-w-xl text-gray-700">
        Explore Natural Language Test Mode, Coding Mode Editor, Chatbot, Defect Logging, Reporting, and Demo App Pages. Use the sidebar or buttons below to navigate quickly.
      </p>

      {/* Navigation Buttons - major sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
        <Link href="/cases" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg py-4" aria-label="Test Cases">
            <ClipboardDocumentCheckIcon className="h-6 w-6" /> Test Cases
          </Button>
        </Link>
        <Link href="/runs" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg py-4" aria-label="Coding Mode">
            <UserIcon className="h-6 w-6" /> Coding Mode
          </Button>
        </Link>
        <Link href="/defects" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-lg py-4" aria-label="Defects">
            <BugAntIcon className="h-6 w-6" /> Defects
          </Button>
        </Link>
        <Link href="/reports" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-lg py-4" aria-label="Reports">
            <ChartBarIcon className="h-6 w-6" /> Reports
          </Button>
        </Link>
      </div>

      {/* Demo app quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
        <Link href="/patients" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white text-lg py-4" aria-label="Patients">
            <UsersIcon className="h-6 w-6" /> Patients
          </Button>
        </Link>
        <Link href="/orders" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-4" aria-label="Orders">
            <ShoppingBagIcon className="h-6 w-6" /> Orders
          </Button>
        </Link>
        <Link href="/upload" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-lg py-4" aria-label="Upload Docs">
            <DocumentArrowUpIcon className="h-6 w-6" /> Upload Docs
          </Button>
        </Link>
        <Link href="/scheduling" passHref legacyBehavior>
          <Button className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-lg py-4" aria-label="Scheduling">
            <CalendarDaysIcon className="h-6 w-6" /> Scheduling
          </Button>
        </Link>
      </div>
    </main>
  );
}

/*
Key sections:
- <WelcomePopup />: Modal shown once per session.
- Heading & description: Clear intro for users.
- Quick links: Buttons to main QA features and demo workflows, with icons.
- Responsive, modern design: Tailwind CSS utility classes.
- Accessible: aria-labels, large touch targets, color contrast.
- Compatible with app/layout.tsx and shadcn/ui.
- All links use Next.js <Link> for client-side navigation.
- Button uses shadcn/ui Button component for consistency.
- Heroicons for visual cues.
*/
