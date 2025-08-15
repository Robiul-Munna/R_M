import * as React from "react";
import { motion } from "framer-motion";

export function PatientWorkflowSVG({ className = "w-full h-40" }) {
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
        <linearGradient id="patientGradient" x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F472B6" />
          <stop offset="1" stopColor="#A7F3D0" />
        </linearGradient>
        <filter id="shadow" x="0" y="0" width="400" height="160" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect x="40" y="40" width="320" height="80" rx="24" fill="url(#patientGradient)" filter="url(#shadow)" />
      <ellipse cx="120" cy="80" rx="20" ry="28" fill="#fff" />
      <ellipse cx="200" cy="80" rx="20" ry="28" fill="#fff" />
      <ellipse cx="280" cy="80" rx="20" ry="28" fill="#fff" />
      <circle cx="120" cy="80" r="8" fill="#F472B6" />
      <circle cx="200" cy="80" r="8" fill="#34D399" />
      <circle cx="280" cy="80" r="8" fill="#FBBF24" />
      <text x="60" y="100" fontSize="16" fill="#DB2777" fontWeight="bold">Patient</text>
      <text x="110" y="85" fontSize="10" fill="#DB2777">Search</text>
      <text x="190" y="85" fontSize="10" fill="#059669">Details</text>
      <text x="270" y="85" fontSize="10" fill="#F59E42">History</text>
    </motion.svg>
  );
}
