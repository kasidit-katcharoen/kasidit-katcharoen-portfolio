"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/images/logo.png";
import "@/src/styles/Header.scss";
import SearchHighlight from "@/src/components/SearchHighlight";
import { usePathname } from "next/navigation";

import Lenis from "@studio-freight/lenis";
import { useLocale } from "next-intl";
import { Link } from "../i18n/navigation";
import DropdownLang from "@/src/components/DropdownLang";
import { locales } from "../i18n/routing";
import messages from "@/src/messages/messages.jsx";
import useScrollDirection from "../hooks/useScrollDirection";
import useScrolled from "../hooks/useScrolled";

export default function Header() {
  const locale = useLocale();
  const t = messages?.[locale]?.["Header"] || "";
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
  // useEffect(() => {
  //   if (openMenu) {
  //     handleStopScroll();
  //   } else {
  //     handleStartScroll();
  //   }
  // }, [openMenu]);

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
    console.log("pathname", pathname);
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
          <Link href="/home" className="logo">
            <div className="icon">
              <img src={Logo.Image} wigth="30" alt="" />
            </div>
            <div className="txt f-bol">KK<span className="c-gd">DEV</span></div>
          </Link>
          {isDestop ? (
            <>
              <div className="menu-page">
                <ul className="wrap-menu">
                  <li className="item-menu">
                    <Link
                      className={`f-reg ${
                        pageActive == "home" ||
                        locales
                          .map((locale) => locale.code)
                          .includes(pageActive)
                          ? "active"
                          : ""
                      }`}
                      data-hover="underline"
                      href="/home"
                    >
                      {t?.home || ""}
                    </Link>
                  </li>
                  <li className="item-menu">
                    <Link
                      className={`f-reg ${
                        pageActive == "about" ? "active" : ""
                      }`}
                      data-hover="underline"
                      href="/about"
                    >
                      {t?.about || ""}
                    </Link>
                  </li>
                  <li className="item-menu">
                    <Link
                      className={`f-reg ${
                        pageActive == "skills" ? "active" : ""
                      }`}
                      data-hover="underline"
                      href="/skills"
                    >
                      {t?.skills || ""}
                    </Link>
                  </li>
                  <li className="item-menu">
                    <Link
                      className={`f-reg ${
                        pageActive == "works" ? "active" : ""
                      }`}
                      data-hover="underline"
                      href="/works"
                    >
                      {t?.works || ""}
                    </Link>
                  </li>
                  <li className="item-menu">
                    <Link
                      className={`f-reg ${
                        pageActive == "contact" ? "active" : ""
                      }`}
                      data-hover="underline"
                      href="/contact"
                    >
                      {t?.contact || ""}
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="navigator-box">
            {/* {isDestop ? <SearchHighlight /> : ""} */}
            {isDestop ? <DropdownLang /> : ""}
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
      <nav id="navbar" className={`navbar ${openMenu ? "active" : ""}`}>
        <div
          className="bg-dim"
          onClick={(e) => {
            setOpenMenu(false);
          }}
        ></div>
        <div className="navbar-card">
          <div className="navigatorbar">
            <DropdownLang />
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
                <ul className="wrap-menu">
                  <li className="item-menu">
                    <Link href="/home">{t?.home || ""}</Link>
                  </li>
                  <li className="item-menu">
                    <Link href="/about">{t?.about || ""}</Link>
                  </li>
                  <li className="item-menu">
                    <Link href="/skills">{t?.skills || ""}</Link>
                  </li>
                  <li className="item-menu">
                    <Link href="/works">{t?.works || ""}</Link>
                  </li>
                  <li className="item-menu">
                    <Link href="/contact">{t?.contact || ""}</Link>
                  </li>
                </ul>
              </div>
              <div className="bottom-box f-reg">
                <div className="hr"></div>
                <div className="address-txt">{t?.address || ""}</div>
                <div className="contact-box">
                  <div className="list-cc tel">
                    <div className="label-txt">Tel :</div>
                    <Link href="tel:0935460996" className="val-txt">
                      0935460996
                    </Link>
                  </div>
                  <div className="list-cc email">
                    <div className="label-txt">Email :</div>
                    <Link
                      href="mailto:kasidit.kat@gmail.com"
                      className="val-txt"
                    >
                      kasidit.kat@gmail.com
                    </Link>
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
