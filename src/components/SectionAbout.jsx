"use client";

import React, { useEffect, useState } from "react";
import "@/src/styles/SectionAbout.scss";
import Link from "next/link";
import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";
import Button from "./ui/Button";
import { Parallax } from "react-scroll-parallax";
import Marquee from "react-fast-marquee";
import MarqueeScroll from "@/src/hooks/MarqueeScroll";
import { getTheme } from "../hooks/useThemeData";
import { useTheme } from "next-themes";
import { Particles } from "./magicui/particles";

export default function About() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionAbout"] || "";
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      <div id="sec-about" className="sec-about">
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={false}
          >
            <h2 className="c-gd f-bol" data-underline="gradient">
              {t?.title || ""}
            </h2>
          </div>
          <div className="content-box">
            <div className="detail-box">
              {/* <div
                  className="txt-title f-med"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once={false}
                >
                  {t?.title_sub || ""}
                </div> */}
              <h3
                className="txt-desc"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={false}
              >
                {t?.desc || ""}
              </h3>
              {/* <div
                className="wrap-btn"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={false}
              >
                <Button href={"/about"}>{t?.btnViewMore || ""}</Button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="bg-box"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={false}
        >
          <MarqueeScroll
            className={"marquee-text f-bol"}
            direction={"left"}
            gradient={true}
            gradientWidth={"15vw"}
            speed={0.9}
          >
            {[...Array(10)].map((v, i) => (
              <span key={i}>KASIDIT KATCHAROEN GUN&nbsp;</span>
            ))}
          </MarqueeScroll>
          <MarqueeScroll
            className={"marquee-text f-size-sm f-reg"}
            direction={"left"}
            gradient={true}
            gradientWidth={"15vw"}
            speed={0.5}
          >
            {[...Array(20)].map((v, i) => (
              <span key={i}>FRONTEND DEVELOPER | FULLSTSCK DEVELOPER |&nbsp;</span>
            ))}
          </MarqueeScroll>
        </div>
      </div>
    </>
  );
}
