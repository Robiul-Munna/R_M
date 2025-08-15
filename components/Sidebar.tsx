"use client";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/plans", label: "Test Plans" },
  { href: "/requirements", label: "Requirements" },
  { href: "/cases", label: "Test Cases" },
  { href: "/suites", label: "Test Suites" },
  { href: "/runs", label: "Runs" },
  { href: "/defects", label: "Defects" },
  { href: "/reports", label: "Reports" },
  { href: "/demo-app/auth/login", label: "Demo: Login" },
  { href: "/demo-app/patients/search", label: "Demo: Patient Search" },
  { href: "/demo-app/orders/medication", label: "Demo: Medication Order" },
  { href: "/demo-app/documents/upload", label: "Demo: Document Upload" },
  { href: "/demo-app/scheduling", label: "Demo: Scheduling" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40 flex flex-col">
      <div className="p-4 font-bold text-blue-700 text-xl border-b">AI QA Tool</div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul>
          {NAV_ITEMS.map(item => (
            <li key={item.href} className="mb-2">
              <Link href={item.href} className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-800 dark:text-gray-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
