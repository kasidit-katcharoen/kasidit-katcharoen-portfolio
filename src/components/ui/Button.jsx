"use client";

import Link from "next/link";
import "@/src/styles/ui/Button.scss";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";

export default function Button({
  children,
  type = "button",
  className = "",
  onClick = () => {},
  href = null,
  dataBtn = "outline",
  icon = <i className="fa-solid fa-arrow-right"></i>,
  iconPosition = "right",
  download = false,
  target = "_self",
}) {
  const locale = useLocale();
  const t_general = messages?.[locale]?.["general"] || "";
  const handleClick = () => {
    onClick();
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`${className || ""}`}
          download={download}
          target={target}
          rel="noreferrer"
          data-btn={`${dataBtn || ""} ${iconPosition || ""}`}
          data-cursor-label={t_general?.click || ""}
        >
          <div className="box-1">
            {iconPosition == "right" ? <div className="dot"></div> : ""}
            <span>{children}</span>
            {iconPosition == "left" ? <div className="dot"></div> : ""}
          </div>
          <div className="box-2">
            {iconPosition == "left" ? icon || "" : ""}
            <span>{children}</span>
            {iconPosition == "right" ? icon || "" : ""}
          </div>
        </Link>
      ) : (
        <button
          type={type || ""}
          className={`${className || ""}`}
          data-btn={dataBtn || ""}
          data-cursor-label={t_general?.click || ""}
          onClick={(e) => {
            handleClick(e);
          }}
          title="button"
        >
          <div className="box-1">
            {iconPosition == "right" ? <div className="dot"></div> : ""}
            <span>{children}</span>
            {iconPosition == "left" ? <div className="dot"></div> : ""}
          </div>
          <div className="box-2">
            {iconPosition == "left" ? icon || "" : ""}
            <span>{children}</span>
            {iconPosition == "right" ? icon || "" : ""}
          </div>
        </button>
      )}
    </>
  );
}
