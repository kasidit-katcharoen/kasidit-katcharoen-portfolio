"use client";

import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import React, { useEffect, useState } from "react";

export default function PreNextTopLoader() {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <NextTopLoader
        color={color}
        initialPosition={0.08}
        crawlSpeed={200}
        height={1}
        crawl={true}
        showSpinner={false}
        easing="ease-in-out"
        speed={200}
        shadow="0 0 10px #000,0 0 5px #000"
      />
    </>
  );
}
