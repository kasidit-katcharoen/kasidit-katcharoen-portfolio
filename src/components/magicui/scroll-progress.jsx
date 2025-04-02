"use client";;
import { cn } from "@/src/lib/utils";
import { motion, useScroll } from "motion/react";
import React from "react";

export const ScrollProgress = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#07b2ce] via-[#304ee3] to-[#6f22e9]",
        // "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#ff0080] via-[#7928ca] via-[#0070f3] via-[#38bdf8] to-[#ff0080]",
        // "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props} />
  );
});

ScrollProgress.displayName = "ScrollProgress";
