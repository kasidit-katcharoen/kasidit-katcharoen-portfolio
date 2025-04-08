"use client";
import { useEffect, useRef, useState } from "react";
import "@/src/styles/ui/MarqueeScroll.scss";

export default function MarqueeScroll({
  className = "",
  speed = 0.5,
  direction = "right",
  gradient = false,
  gradientColor = "",
  gradientWidth = "",
  children,
}) {
  const wrapperRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    if (gradientColor) {
      document.documentElement.style.setProperty(
        "--c-marquee-scroll-gradient",
        `${gradientColor}`
      );
    }
  }, [gradientColor]);

  useEffect(() => {
    if (gradientWidth) {
      document.documentElement.style.setProperty(
        "--w-marquee-scroll-gradient",
        `${gradientWidth}`
      );
    }
  }, [gradientWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollValue = scrollTop * speed;
      setScrollX(direction === "right" ? scrollValue : -scrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={wrapperRef}
      className={`marquee-scroll ${className} ${gradient ? "scroll-fade" : ""}`}
    >
      <div
        className={`marquee-scroll-content`}
        style={{
          willChange: "transform",
          transform: `translateX(${scrollX}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
