"use client";

import React from "react";
import "@/src/styles/SectionAbout.scss";
import Link from "next/link";
import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";

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
            data-aos-duration="800"
            data-aos-once={false}
          >
            <span className="c-gd f-bol" data-underline="gradient">
              {t?.title || ""}
            </span>
          </div>
          <div className="content-box">
            <div className="img-box">
                <img
                  className="img-profile shadow"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-once={false}
                  width={100}
                  height={100}
                  src={`/images/profile/profile1.jpeg`}
                  alt="imgProfile"
                />
            </div>
            <div className="detail-box">
              <div
                className="txt-title f-reg"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once={false}
              >
                {t?.title_sub || ""}
              </div>
              <div
                className="txt-desc f-lig"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once={false}
              >
                {t?.desc || ""}
              </div>
              <Link
                href="/about"
                className="btn-view-more"
                data-btn="solid"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once={false}
              >
                <span>{t?.btnViewMore || ""}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
