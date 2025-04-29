"use client";

import Link from "next/link";
import "@/src/styles/ui/Button.scss";
import { useEffect, useState } from "react";

export default function Button({
  children,
  type = "button",
  className = "",
  onClick = () => {},
  href = null,
  dataBtn = "outline",
  icon = <i className="fa-solid fa-arrow-right"></i>,
  iconPosition = "right",
}) {
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
          data-btn={`${dataBtn || ""} ${iconPosition || ""}`}
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
          onClick={(e) => {
            handleClick(e);
          }}
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
