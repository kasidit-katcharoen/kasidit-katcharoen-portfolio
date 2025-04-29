"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/images/logo.png";
import "@/src/styles/Header.scss";
import SearchHighlight from "@/src/components/SearchHighlight";
import { usePathname } from "next/navigation";

import Lenis from "@studio-freight/lenis";
import { useLocale } from "next-intl";
import { Link } from "../i18n/navigation";
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
      <div
        id="header"
        className={`header ${
          scrollDirection === "down" ? "scroll-down" : "scroll-up"
        } ${scrolled ? "scrolled" : ""}`}
      >
        <div className="wrap-header shadow">
          <div className="logo">
            <div className="icon">
              <img src={Logo.Image} wigth="30" alt="" />
            </div>
            <div className="txt f-bol">
              KK<span className="c-gd">DEV</span>
            </div>
          </div>
          <div className="wrapper">
            <div className="hide-xs">
              <div className="menu-page">
                <ul className="wrap-menu">
                  <li className="item-menu">
                    <div
                      onClick={() => {
                        scrollTo("#sec-home-banner");
                      }}
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
                      data-hover="underline"
                    >
                      {t?.skills || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      onClick={() => {
                        scrollTo("#sec-works");
                      }}
                      data-hover="underline"
                    >
                      {t?.works || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      onClick={() => {
                        scrollTo("#sec-contact");
                      }}
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
                >
                  <div className="line n1"></div>
                  <div className="line n2"></div>
                  <div className="line n3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              onClick={(e) => {
                setOpenMenu(false);
              }}
            >
              <div className="line n1"></div>
              <div className="line n2"></div>
            </div>
          </div>
          <div className="navbar-wrapper" data-lenis-prevent>
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
                    >
                      {t?.skills || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-works");
                        setOpenMenu(false);
                      }}
                    >
                      {t?.works || ""}
                    </div>
                  </li>
                  <li className="item-menu">
                    <div
                      className="txt-menu"
                      onClick={() => {
                        scrollTo("#sec-contact");
                        setOpenMenu(false);
                      }}
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
                  <div className="list-cc tel">
                    <div className="label-txt">Tel :</div>
                    <div
                      onClick={() => {
                        scrollTo("");
                      }}
                      href="tel:0935460996"
                      className="val-txt"
                    >
                      0935460996
                    </div>
                  </div>
                  <div className="list-cc email">
                    <div className="label-txt">Email :</div>
                    <div
                      onClick={() => {
                        scrollTo("");
                      }}
                      href="mailto:kasidit.kat@gmail.com"
                      className="val-txt"
                    >
                      kasidit.kat@gmail.com
                    </div>
                  </div>
                  <div className="list-cc lineid">
                    <div className="label-txt">Line ID :</div>
                    <div className="val-txt">kasidit2408</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
