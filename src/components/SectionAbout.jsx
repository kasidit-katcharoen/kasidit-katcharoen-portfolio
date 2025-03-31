"use client";

import React from "react";
import "@/src/styles/SectionAbout.scss";
import Link from "next/link";
import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";

export default function About() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionAbout"] || "";
  return (
    <>
      <div className="sec-about">
        <div className="absolute inset-0 z-1 flex size-full items-center justify-center">
          {/* <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
            )}
          /> */}
        </div>
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once={true}
          >
            <span className="c-gd f-bol" data-underline="gradient">
              {t?.title || ""}
            </span>
          </div>
          <div className="content-box">
            <div className="img-box">
              <img
                className="img-profile"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once={true}
                width={100}
                height={100}
                src={`/images/profile/profile1.jpeg`}
                alt="imgProfile"
              />
            </div>
            <div className="detail-box">
              <div
                className="txt-title"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once={true}
              >
                {t?.title_sub || ""}
              </div>
              <div
                className="txt-desc"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once={true}
              >
                {t?.desc || ""}
              </div>
              <Link
                href="/about"
                className="btn-view-more"
                data-btn="solid"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once={true}
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
