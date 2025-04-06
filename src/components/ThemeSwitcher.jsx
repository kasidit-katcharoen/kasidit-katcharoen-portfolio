"use client";
import "@/src/styles/ThemeSwitcher.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ป้องกัน hydration error

  return (
    <div
      className="swicth-theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <i className="fa-solid fa-circle-half-stroke"></i>
    </div>
  );
}
