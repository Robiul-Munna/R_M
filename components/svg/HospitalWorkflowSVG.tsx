import * as React from "react";
import { motion } from "framer-motion";

export function HospitalWorkflowSVG({ className = "w-full h-40" }) {
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
        <linearGradient id="hospitalGradient" x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#A7F3D0" />
        </linearGradient>
        <filter id="shadow" x="0" y="0" width="400" height="160" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect x="40" y="40" width="320" height="80" rx="24" fill="url(#hospitalGradient)" filter="url(#shadow)" />
      <rect x="120" y="60" width="40" height="40" rx="8" fill="#fff" />
      <rect x="240" y="60" width="40" height="40" rx="8" fill="#fff" />
      <rect x="180" y="60" width="40" height="40" rx="8" fill="#fff" />
      <circle cx="140" cy="80" r="8" fill="#60A5FA" />
      <circle cx="200" cy="80" r="8" fill="#34D399" />
      <circle cx="260" cy="80" r="8" fill="#FBBF24" />
      <text x="60" y="100" fontSize="16" fill="#2563EB" fontWeight="bold">Hospital</text>
      <text x="130" y="85" fontSize="10" fill="#2563EB">Ward</text>
      <text x="190" y="85" fontSize="10" fill="#059669">Lab</text>
      <text x="250" y="85" fontSize="10" fill="#F59E42">Pharmacy</text>
    </motion.svg>
  );
}
