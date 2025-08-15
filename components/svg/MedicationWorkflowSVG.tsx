import * as React from "react";
import { motion } from "framer-motion";

export function MedicationWorkflowSVG({ className = "w-full h-40" }) {
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
        <linearGradient id="medicationGradient" x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818CF8" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>
        <filter id="shadow" x="0" y="0" width="400" height="160" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect x="40" y="40" width="320" height="80" rx="24" fill="url(#medicationGradient)" filter="url(#shadow)" />
      <rect x="120" y="70" width="24" height="24" rx="6" fill="#fff" />
      <rect x="200" y="70" width="24" height="24" rx="6" fill="#fff" />
      <rect x="280" y="70" width="24" height="24" rx="6" fill="#fff" />
      <circle cx="132" cy="82" r="6" fill="#818CF8" />
      <circle cx="212" cy="82" r="6" fill="#FDE68A" />
      <circle cx="292" cy="82" r="6" fill="#F59E42" />
      <text x="60" y="100" fontSize="16" fill="#6366F1" fontWeight="bold">Medication</text>
      <text x="120" y="95" fontSize="10" fill="#6366F1">Order</text>
      <text x="200" y="95" fontSize="10" fill="#F59E42">Review</text>
      <text x="280" y="95" fontSize="10" fill="#F59E42">Dispense</text>
    </motion.svg>
  );
}
