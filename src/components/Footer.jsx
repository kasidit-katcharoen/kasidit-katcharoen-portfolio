"use client";

import React, { use, useEffect, useState } from "react";
import "@/src/styles/Footer.scss";
import Link from "next/link";
import messages from "../messages/messages";
import { useLocale } from "next-intl";
import { locales } from "../i18n/routing";
import { usePathname } from "next/navigation";
import { scrollTo } from "../hooks/useCommon";

export default function Footer() {
    const pathname = usePathname();
  const [pageActive, setPageActive] = useState(null);
  const locale = useLocale();
  const t = messages?.[locale]?.["Footer"] || "";
    useEffect(() => {
      setPageActive(() => pathname.split("/")[pathname.split("/")?.length - 1]);
    }, [pathname]);
  return (
    <>
      <div id="footer" className="">
        <div className="wrapper">
          <div className="inner">
            <div className="row">
              <div className="col left">
                <div className="logo-box" onClick={()=>{scrollTo('#sec-home-banner')}}>
                  <span className="f-bol">
                    KK<span className="c-gd">DEV</span>
                  </span>
                </div>
              </div>
              <div className="col center">
                {/* <div className="tt-col ">Menu</div> */}
                <div className="group-menu">
                  <div className="row-menu">
                    <div className="col-menu">
                      <div onClick={()=>{scrollTo('#sec-home-banner')}}
                        className={`list-menu`}
                        data-hover="underline"
                      >
                        {t?.home || ""}
                      </div>
                      <div onClick={()=>{scrollTo('#sec-about')}}
                        className={`list-menu`}
                        data-hover="underline"
                      >
                        {t?.about || ""}
                      </div>
                      <div onClick={()=>{scrollTo('#sec-skills')}}
                        className={`list-menu`}
                        data-hover="underline"
                      >
                        {t?.skills || ""}
                      </div>
                    </div>
                    <div className="col-menu">
                      <div onClick={()=>{scrollTo('#sec-works')}}
                        className={`list-menu`}
                        data-hover="underline"
                      >
                        {t?.works || ""}
                      </div>
                      <div onClick={()=>{scrollTo('#sec-contact')}}
                        className={`list-menu`}
                        data-hover="underline"
                      >
                        {t?.contact || ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col right">
                <div className="tt-col ">{t?.contact || ""}</div>
                <div className="group-contact">
                  <Link href="tel:0935460996" className="contact-list">
                    {/* <img src="/icon/mobile.png" width="15" alt="" /> */}
                    <i className="fa-solid fa-phone c-gd"></i>
                    <span className="txt">0935460996</span>
                  </Link>
                  <Link
                    href="mailto:kasidit.kat@gmail.com"
                    className="contact-list"
                  >
                    {/* <img src="/icon/gmail1.png" width="15" alt="" /> */}
                    <i className="fa-solid fa-envelope c-gd"></i>
                    <span className="txt">kasidit.kat@gmail.com</span>
                  </Link>
                  <div className="contact-list">
                    {/* <img src="/icon/line.png" width="15" alt="" /> */}
                    <i className="fa-brands fa-line c-gd"></i>
                    <span className="txt">kasidit2408</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-box">
          <div className="inner-box">
            <div className="copyright-box">
              <span>Copyright {new Date().getFullYear()} by Kasidit Katcharoen</span>
            </div>
            <div className="des-box">
              <span>Portfolio kasidit katcharoen developer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
