"use client"; // ✅ Context ต้องเป็น Client Component

import { createContext, useContext, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ lang, children }) {
  // try {
  //   document.documentElement.setAttribute('lang', lang);
  // } catch (error) {}
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang ต้องใช้ภายใต้ <LangProvider>");
  }
  return context;
}
