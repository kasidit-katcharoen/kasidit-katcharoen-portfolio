import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    isHover: false,
    label: "",
  });

  const updateMousePosition = (e) => {
    const element = e.target.closest("[data-cursor-label]");
    const label = element?.getAttribute("data-cursor-label") || "";
    
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      isHover: !!element,
      label: label || "",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
