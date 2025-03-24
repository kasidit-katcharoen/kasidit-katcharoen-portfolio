"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { localeDefault, locales, routing } from "../i18n/routing";
import "@/src/styles/DropdownLang.scss";
import { useLang } from "../context/LangContext";

export default function DropdownLang() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [lang, setLang] = useState(useLang());
  const [isOpen, setIsOpen] = useState(false);
  const ddLangRef = useRef(null);

  const changeLanguage = (_lang) => {
    // if (lang == _lang) return;
    const segments = pathname.split("/").filter(Boolean);
    if (locales.some((l) => l.code === segments[0])) {
      segments[0] = _lang;
    } else {
      segments.unshift(_lang);
    }
    setIsOpen(false);
    setLang(_lang);
    startTransition(() => {
      router.push(`/${segments.join("/")}`);
      router.refresh();
    });
  };

  const findObjLang = (_lang) => {
    return (
      locales.filter((v) => v.code === _lang)?.[0] ||
      locales.filter((v) => v.code === localeDefault)?.[0]
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ddLangRef.current && !ddLangRef.current.contains(event.target)) {
        setIsOpen(false); // ปิดเมื่อคลิกข้างนอก
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setLang(pathname.split('/')[1]);
  },[pathname])

  return (
    <>
      <div ref={ddLangRef} className={`dd-lang ${isOpen ? "active" : ""}`}>
        <div className="dd-inner">
          <div
            className={`dd-label ${isOpen ? "active" : ""}`}
            data-hover="underline"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{findObjLang(lang)?.label}</span>
          </div>
          <input
            type="hidden"
            name="lang"
            className="dd-input"
            defaultValue={lang}
          />
          <i className="ic-dd"></i>
        </div>
        <div className="dd-popup shadow">
          <div className="dd-wrapper">
            {locales.map((v, i) => (
              <div
                key={i}
                className={`dd-list ${v.code === lang ? "active" : ""}`}
                onClick={() => changeLanguage(v.code)}
              >
                <img
                  src={`/flags/${v.flag}.svg`}
                  width={20}
                  alt={`flags_${v.flag}`}
                />
                <span>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
