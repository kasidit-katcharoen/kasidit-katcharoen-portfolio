"use client";

import '@/src/styles/cursor.scss';
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import { useEffect, useState } from "react";

export const Cursor = () => {
  const { x, y, isHover, label } = useMousePosition();
  const size = isHover ? 80 : 6;
  
  return (
    <motion.div
      className={`hide-xs blend ${isHover?'is-hover':''} shadow`}
      animate={{
        width: size,
        height: size,
        x: x - size / 2,
        y: y - size / 2,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      <div className="cursor-label" dangerouslySetInnerHTML={{ __html: label }}></div>
    </motion.div>
  );
};
