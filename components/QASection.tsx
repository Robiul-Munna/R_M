"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ClipboardIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  PlayIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface QAStage {
  name: string;
  icon: string;
  href: string;
  status: "Planned" | "In Progress" | "Completed" | "Blocked";
  progress: number;
}

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  ClipboardIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  PlayIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
};

const API_URL = "/api/qa-status";

export function QASection() {
  const [stages, setStages] = useState<QAStage[]>([]);

  // Fetch QA stage data
  const fetchQAData = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch QA stages");
      const data: QAStage[] = await res.json();
      setStages(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Initial fetch + polling
  useEffect(() => {
    fetchQAData();
    const interval = setInterval(() => {
      fetchQAData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const statusToVariant = {
    Completed: "green",
    "In Progress": "yellow",
    Blocked: "red",
    Planned: "gray",
  } as const;

  const statusToProgressColor = {
    Completed: "bg-green-500",
    "In Progress": "bg-yellow-500",
    Blocked: "bg-red-500",
    Planned: "bg-gray-400",
  } as const;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stages.map((stage) => {
        const Icon = iconMap[stage.icon] || ClipboardIcon;
        return (
          <motion.div
            key={stage.name}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg border p-4 shadow-sm hover:shadow-lg bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Icon className="w-5 h-5" />
                {stage.name}
              </h3>
              <motion.div
                className="inline-block"
                initial={{ backgroundColor: "#9CA3AF" }}
                animate={{
                  backgroundColor:
                    stage.status === "Completed"
                      ? "#22C55E"
                      : stage.status === "In Progress"
                      ? "#EAB308"
                      : stage.status === "Blocked"
                      ? "#EF4444"
                      : "#9CA3AF",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Badge className="px-2 py-1">{stage.status}</Badge>
              </motion.div>
            </div>

            <div className="mt-3">
              <div className="w-full h-2 bg-gray-200 rounded">
                <motion.div
                  className={`${statusToProgressColor[stage.status]} h-2 rounded`}
                  style={{ width: `${stage.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${stage.progress}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
            </div>

            <div className="mt-4">
              <Button asChild className="w-full">
                <Link href={stage.href}>Go to {stage.name}</Link>
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
