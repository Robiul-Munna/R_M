import * as React from "react";
import { motion } from "framer-motion";

export function SchedulingWorkflowSVG({ className = "w-full h-40" }) {
  return (
    <motion.svg
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="schedulingGradient" x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E42" />
          <stop offset="1" stopColor="#A7F3D0" />
        </linearGradient>
        <filter id="shadow" x="0" y="0" width="400" height="160" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect x="40" y="40" width="320" height="80" rx="24" fill="url(#schedulingGradient)" filter="url(#shadow)" />
      <rect x="120" y="70" width="32" height="32" rx="8" fill="#fff" />
      <rect x="200" y="70" width="32" height="32" rx="8" fill="#fff" />
      <rect x="280" y="70" width="32" height="32" rx="8" fill="#fff" />
      <circle cx="136" cy="86" r="8" fill="#F59E42" />
      <circle cx="216" cy="86" r="8" fill="#A7F3D0" />
      <circle cx="296" cy="86" r="8" fill="#F472B6" />
      <text x="60" y="100" fontSize="16" fill="#F59E42" fontWeight="bold">Scheduling</text>
      <text x="120" y="95" fontSize="10" fill="#F59E42">Book</text>
      <text x="200" y="95" fontSize="10" fill="#A7F3D0">Confirm</text>
      <text x="280" y="95" fontSize="10" fill="#F472B6">Reschedule</text>
    </motion.svg>
  );
}
