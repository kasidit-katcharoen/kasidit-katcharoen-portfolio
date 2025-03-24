"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import "@/src/styles/SectionAbout.scss";
import imgProfile from "@/public/images/profile.jpg";
// import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("SectionAbout");
  return (
    <>
      {/* <Marquee speed={50} gradient={true} pauseOnHover={true}>
          🚀 Welcome to Next.js Marquee! 🌟
        </Marquee> */}
      <div className="sec-about">
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="c-gd f-bol" data-underline="gradient">
              {t("title")}
            </span>
          </div>
          <div className="content-box">
            <div className="img-box">
              <img
                className="img-profile shadow"
                data-aos="fade-up"
                data-aos-duration="1000"
                src={`/images/profile.jpg`}
                alt="imgProfile"
              />
            </div>
            <div className="detail-box">
              <div
                className="txt-title f-reg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {t("title_sub")}
              </div>
              <div
                className="txt-desc f-lig"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {t("desc")}
              </div>
              <Link
                href="/about"
                className="btn-view-more"
                data-btn="solid"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span>{t("btn-view-more")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
