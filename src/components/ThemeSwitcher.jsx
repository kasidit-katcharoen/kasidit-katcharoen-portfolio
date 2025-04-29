"use client";
import "@/src/styles/ThemeSwitcher.scss";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import messages from "../messages/messages";

export default function ThemeSwitcher() {
  const locale = useLocale();
  const t_general = messages?.[locale]?.general || {};
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ป้องกัน hydration error

  return (
    <div
      className="swicth-theme"
      // data-cursor-label={t_general?.click}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <i className="fa-solid fa-circle-half-stroke"></i>
    </div>
  );
}
