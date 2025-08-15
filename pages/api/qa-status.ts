import type { NextApiRequest, NextApiResponse } from "next";

interface QAStage {
  name: string;
  icon: string;
  href: string;
  status: "Planned" | "In Progress" | "Completed" | "Blocked";
  progress: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QAStage[]>
) {
  const qaStages: QAStage[] = [
    { name: "Test Planning", icon: "ClipboardIcon", href: "/test-plans", status: "Completed", progress: 100 },
    { name: "Requirements", icon: "DocumentTextIcon", href: "/requirements", status: "In Progress", progress: 65 },
    { name: "Test Cases", icon: "ClipboardDocumentCheckIcon", href: "/test-cases", status: "Planned", progress: 10 },
    { name: "Test Execution", icon: "PlayIcon", href: "/runs", status: "In Progress", progress: 50 },
    { name: "Defects", icon: "ExclamationTriangleIcon", href: "/defects", status: "Blocked", progress: 0 },
    { name: "Reports", icon: "ChartBarIcon", href: "/reports", status: "Completed", progress: 100 },
    { name: "Optimization", icon: "AdjustmentsHorizontalIcon", href: "/optimization", status: "Planned", progress: 0 },
  ];

  res.status(200).json(qaStages);
}
