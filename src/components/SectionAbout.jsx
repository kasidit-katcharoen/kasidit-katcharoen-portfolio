"use client";

import React from "react";
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

export default function About() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionAbout"] || "";
  return (
    <>
      <div className="sec-about">
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <span className="c-gd f-bol" data-underline="gradient">
              {t?.title || ""}
            </span>
          </div>
          <div className="content-box">
            <div className="detail-box">
              {/* <div
                  className="txt-title f-med"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once={true}
                >
                  {t?.title_sub || ""}
                </div> */}
              <div
                className="txt-desc"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={true}
              >
                {t?.desc || ""}
              </div>
              <div
                className="wrap-btn"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={true}
              >
                <Button href={"/about"}>{t?.btnViewMore || ""}</Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-box"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          <MarqueeScroll
            className={"marquee-text f-bol"}
            direction={"left"}
            gradient={true}
            gradientWidth={"100px"}
            speed={0.8}
          >
            {[...Array(99)].map((v, i) => (
              <p key={i}>&nbsp;KASIDIT KATCHAROEN GUN&nbsp;</p>
            ))}
          </MarqueeScroll>
        </div>
      </div>
    </>
  );
}
