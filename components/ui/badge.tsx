import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "yellow" | "red" | "gray";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-white",
    red: "bg-red-500 text-white",
    gray: "bg-gray-400 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
