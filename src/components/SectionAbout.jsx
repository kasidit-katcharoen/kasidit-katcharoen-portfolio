"use client";

import React from "react";
import "@/src/styles/SectionAbout.scss";
import Link from "next/link";
import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";
import { Globe } from "./magicui/globe";
import Button from "./ui/Button";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionAbout"] || "";
  return (
    <>
      <div className="sec-about">
        <div className="absolute inset-0 z-1 flex size-full items-center justify-center">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
            )}
          />
        </div>
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
            <div className="img-box">
              <Parallax speed={5}>
                <img
                  className="img-profile"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once={true}
                  width={100}
                  height={100}
                  src={`/images/profile/profile3.jpg`}
                  alt="imgProfile"
                  data-cursor-label="ดูรูปภาพ"
                />
              </Parallax>
              <div
                className="animation-box"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-once={true}
              >
                <div data-dot={1}></div>
                <div data-dot={2}></div>
                <div data-dot={3}></div>
                <div data-dot={4}></div>
              </div>
            </div>

            <div className="detail-box">
              <div
                className="txt-title f-med"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={true}
              >
                {t?.title_sub || ""}
              </div>
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
                <Button url={"/about"}>{t?.btnViewMore || ""}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
