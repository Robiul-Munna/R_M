import * as React from "react"
import { cn } from "@/lib/utils"

export function Dialog({ open, onOpenChange, children }: { open: boolean, onOpenChange: (open: boolean) => void, children: React.ReactNode }) {
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        {children}
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => onOpenChange(false)}>Continue</button>
      </div>
    </div>
  ) : null;
}

export function DialogContent({ className, children }: { className?: string, children: React.ReactNode }) {
  return <div className={cn("", className)}>{children}</div>;
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 dark:text-gray-300">{children}</p>;
}
