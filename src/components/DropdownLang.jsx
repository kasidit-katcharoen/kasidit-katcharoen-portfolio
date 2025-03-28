"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { localeDefault, locales, routing } from "../i18n/routing";
import "@/src/styles/DropdownLang.scss";
import { useLocale } from "next-intl";

export default function DropdownLang() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [lang, setLang] = useState(useLocale());
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const ddRef = useRef(null);
  const ddScrollRef = useRef(null);

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
      if (ddRef.current && !ddRef.current.contains(event.target)) {
        setIsOpen(false); // ปิดเมื่อคลิกข้างนอก
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (!ddScrollRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = ddScrollRef.current;

      setIsTop(scrollTop === 0);
      setIsBottom(scrollTop + clientHeight >= scrollHeight);
    };

    const dropdown = ddScrollRef.current;
    dropdown?.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => dropdown?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    setLang(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <>
      <div ref={ddRef} className={`dd-lang ${isOpen ? "active" : ""}`}>
        <div className="dd-inner" onClick={() => setIsOpen(!isOpen)}>
          <img
            className="dd-flag"
            src={`/flags/${findObjLang(lang)?.flag || ""}.svg`}
            width={20}
            alt={`flags_${findObjLang(lang)?.flag || ""}`}
          />
          {/* <span className="dd-label">{findObjLang(lang)?.label||''}</span> */}
          <input
            type="hidden"
            name="lang"
            className="dd-input"
            defaultValue={lang}
          />
          <i className="ic-dd fa-solid fa-caret-down"></i>
        </div>
        <div className="dd-popup shadow" data-lenis-prevent>
          <div className="dd-popup-card">
            <div className="dd-wrapper" ref={ddScrollRef}>
              {locales.map((v, i) => (
                <div
                  key={i}
                  className={`dd-list ${v.code === lang ? "active" : ""}`}
                  onClick={() => changeLanguage(v.code)}
                >
                  <div className="dd-txt">
                    <div className="img-box">
                      <img
                        className="dd-flag"
                        src={`/flags/${v.flag}.svg`}
                        width={20}
                        alt={`flags_${v.flag}`}
                      />
                    </div>
                    <span>{v.label}</span>
                  </div>
                  {v.code === lang ? <i className="fa-solid fa-check"></i> : ""}
                </div>
              ))}
            </div>
            {!isBottom ? <div className="fade-scroll"></div> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
