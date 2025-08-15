import WelcomePopup from "@/components/WelcomePopup";
import ChatbotWidget from "@/components/ChatbotWidget";
import Sidebar from "@/components/Sidebar";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <WelcomePopup />
          {children}
          <ChatbotWidget />
        </div>
      </body>
    </html>
  );
}
