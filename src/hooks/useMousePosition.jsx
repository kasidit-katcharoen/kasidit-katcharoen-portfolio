import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    isHover: false,
    label: "",
  });

  const updateMousePosition = (e) => {
    const disableArrEeclector = [
      ".cursor-label-none",
      ".disable",
      ".event-none",
      ".swiper-button-disabled",
    ];
    const disableStr = disableArrEeclector
      .map((v, i) => {
        return ":not(" + v + ")";
      })
      .join("")||'';

    const element = e.target.closest("[data-cursor-label]" + disableStr);
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
