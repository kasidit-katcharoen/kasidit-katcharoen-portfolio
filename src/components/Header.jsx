"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/images/logo.png";
import "@/src/styles/Header.scss";
import SearchHighlight from "@/src/components/SearchHighlight";
import { usePathname } from "next/navigation";

import Lenis from "@studio-freight/lenis";
import { useLocale } from "next-intl";
import Link from "next/link";
import DropdownLang from "@/src/components/ui/DropdownLang";
import { locales } from "../i18n/routing";
import messages from "@/src/messages/messages.jsx";
import useScrollDirection from "../hooks/useScrollDirection";
import useScrolled from "../hooks/useScrolled";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import { scrollTo } from "../hooks/useCommon";

export default function Header() {
  const locale = useLocale();
  const t = messages?.[locale]?.["Header"] || "";
  const t_general = messages?.[locale]?.["general"] || "";
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [pageActive, setPageActive] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const scrollDirection = useScrollDirection();
  const [width, setWidth] = useState(0);
  const [isDestop, setIsDestop] = useState(false);
  const scrolled = useScrolled(100);

  // const lenisRef = useRef(null);
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     smooth: true,
  //   });
  //   lenisRef.current = lenis;
  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };
  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);
  // const handleStopScroll = () => {
  //   lenisRef.current?.stop(); // ปิด Scroll
  // };
  // const handleStartScroll = () => {
  //   lenisRef.current?.start(); // เปิด Scroll
  // };
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
      // handleStopScroll();
    } else {
      document.body.style.overflow = "auto";
      // handleStartScroll();
    }
  }, [openMenu]);

  useEffect(() => {
    // console.log("router", router);
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsDestop(width > 767 ? true : false);
  }, [width]);

  useEffect(() => {
    // console.log("isDestop", isDestop);
  }, [isDestop]);

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight); // เก็บค่าความสูงของ header
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, [headerHeight]);

  useEffect(() => {
    // console.log("pathname", pathname);
    setPageActive(() => pathname.split("/")[pathname.split("/")?.length - 1]);
    setOpenMenu(false);
  }, [pathname]);
  useEffect(() => {}, [pageActive]);

  return (
    <>
      <header
        id="header"
        className={`header ${
          scrollDirection === "down" ? "scroll-down" : "scroll-up"
        } ${scrolled ? "scrolled" : ""}`}
      >
        <div className="wrap-header shadow">
          <div
            className="logo"
            onClick={() => {
              scrollTo("#sec-home-banner");
              setOpenMenu(false);
            }}
            data-cursor-label={t_general?.click || ""}
          >
            <div className="icon">
              <img src={Logo.Image} wigth="30" alt="" />
            </div>
            <div className="txt f-bol">
              KASIDIT<span className="c-gd"></span>
            </div>
          </div>
          <div className="hide-xs">
            <div className="menu-page">
              <ul className="wrap-menu">
                <li className="item-menu">
                  <div
                    onClick={() => {
                      scrollTo("#sec-home-banner");
                    }}
                    data-cursor-label={t_general?.click || ""}
                    data-hover="underline"
                  >
                    {t?.home || ""}
                  </div>
                </li>
                <li className="item-menu">
                  <div
                    onClick={() => {
                      scrollTo("#sec-about");
                    }}
                    data-cursor-label={t_general?.click || ""}
                    data-hover="underline"
                  >
                    {t?.about || ""}
                  </div>
                </li>
                <li className="item-menu">
                  <div
                    onClick={() => {
                      scrollTo("#sec-skills");
                    }}
                    data-cursor-label={t_general?.click || ""}
                    data-hover="underline"
                  >
                    {t?.skills || ""}
                  </div>
                </li>
                <li className="item-menu">
                  <div
                    onClick={() => {
                      scrollTo("#sec-experiences");
                    }}
                    data-cursor-label={t_general?.click || ""}
                    data-hover="underline"
                  >
                    {t?.experiences || ""}
                  </div>
                </li>
                <li className="item-menu">
                  <div
                    onClick={() => {
                      scrollTo("#sec-contact");
                    }}
                    data-cursor-label={t_general?.click || ""}
                    data-hover="underline"
                  >
                    {t?.contact || ""}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="navigator-box">
            {/* <div className="hide-xs">
                <SearchHighlight />
              </div> */}
            <div className="hide-xs">
              <ThemeSwitcher />
            </div>
            <div className="hide-xs">
              <DropdownLang />
            </div>
            <div className="navigator-inner" data-hover="solid">
              <div
                className={`btn-menu ${openMenu ? "active" : ""}`}
                // data-hover="solid"
                onClick={(e) => {
                  setOpenMenu(!openMenu);
                }}
                data-cursor-label={t_general?.click || ""}
              >
                <div className="line n1"></div>
                <div className="line n2"></div>
                <div className="line n3"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav id="navbar" className={`navbar ${openMenu ? "active" : ""}`}>
        <div
          className="bg-dim"
          data-cursor-label={t_general?.close || ""}
          onClick={(e) => {
            setOpenMenu(false);
          }}
        ></div>
        <div className="navbar-card">
          <div className="navigatorbar">
            <div className="show-xs">
              <ThemeSwitcher />
            </div>
            <div className="show-xs">
              <DropdownLang />
            </div>
            <div
              className="btn-close"
              data-hover="solid"
              data-cursor-label={t_general?.close || ""}
              onClick={(e) => {
                setOpenMenu(false);
              }}
            >
              <div className="line n1"></div>
              <div className="line n2"></div>
            </div>
          </div>
          <div className="navbar-wrapper">
            <div className="card-inner">
              <div className="top-box">
                {/* <div className="navbar-search-box">
                <SearchHighlight />
              </div> */}
                <ul className="wrap-menu f-med">
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-home-banner");
                        setOpenMenu(false);
                      }}
                      data-cursor-label={t_general?.click || ""}
                    >
                      {t?.home || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-about");
                        setOpenMenu(false);
                      }}
                      data-cursor-label={t_general?.click || ""}
                    >
                      {t?.about || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-skills");
                        setOpenMenu(false);
                      }}
                      data-cursor-label={t_general?.click || ""}
                    >
                      {t?.skills || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-experiences");
                        setOpenMenu(false);
                      }}
                      data-cursor-label={t_general?.click || ""}
                    >
                      {t?.experiences || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-contact");
                        setOpenMenu(false);
                      }}
                      data-cursor-label={t_general?.click || ""}
                    >
                      {t?.contact || ""}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bottom-box">
                <div className="hr"></div>
                <div className="address-txt">{t?.address || ""}</div>
                <div className="contact-box">
                  <Link
                    className="list-cc tel"
                    href="tel:0935460996"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-solid fa-phone c-gd"></i>
                    {/* <div className="val-txt">0935460996</div> */}
                  </Link>
                  <Link
                    className="list-cc email"
                    href="mailto:kasidit.kat@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-solid fa-envelope c-gd"></i>
                    {/* <div className="val-txt">kasidit.kat@gmail.com</div> */}
                  </Link>
                  <Link
                    className="list-cc facebook"
                    href="https://www.facebook.com/profile.php?id=61554603137737&locale=th_TH"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-brands fa-facebook"></i>
                    {/* <div className="val-txt">Kasidit Katcharoen</div> */}
                  </Link>
                  <Link
                    className="list-cc lineid"
                    href="https://line.me/ti/p/~kasidit2408"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-brands fa-line c-gd"></i>
                    {/* <div className="val-txt">kasidit2408</div> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
