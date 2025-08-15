import * as React from "react";
import { motion } from "framer-motion";

export function LabWorkflowSVG({ className = "w-full h-40" }) {
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
        <linearGradient id="labGradient" x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
        <filter id="shadow" x="0" y="0" width="400" height="160" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect x="40" y="40" width="320" height="80" rx="24" fill="url(#labGradient)" filter="url(#shadow)" />
      <ellipse cx="120" cy="80" rx="16" ry="24" fill="#fff" />
      <ellipse cx="200" cy="80" rx="16" ry="24" fill="#fff" />
      <ellipse cx="280" cy="80" rx="16" ry="24" fill="#fff" />
      <circle cx="120" cy="80" r="6" fill="#34D399" />
      <circle cx="200" cy="80" r="6" fill="#818CF8" />
      <circle cx="280" cy="80" r="6" fill="#F59E42" />
      <text x="60" y="100" fontSize="16" fill="#059669" fontWeight="bold">Lab/Test</text>
      <text x="110" y="85" fontSize="10" fill="#059669">Order</text>
      <text x="190" y="85" fontSize="10" fill="#818CF8">Collect</text>
      <text x="270" y="85" fontSize="10" fill="#F59E42">Result</text>
    </motion.svg>
  );
}
