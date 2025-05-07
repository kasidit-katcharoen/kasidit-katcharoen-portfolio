"use client"; // ใช้ใน Next.js 13+ เพื่อให้ทำงานฝั่ง Client

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectFade,
  Navigation,
  Autoplay,
  EffectCards,
} from "swiper/modules"; // นำเข้าโมดูลที่ต้องใช้
import "@/src/styles/SectionHomeBanner.scss";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { useEffect, useState } from "react";

import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";
import { Particles } from "./magicui/particles";
import { useTheme } from "next-themes";
import { getTheme } from "../hooks/useThemeData";
import Button from "@/src/components/ui/Button";
import { Parallax } from "react-scroll-parallax";
import { scrollTo } from "../hooks/useCommon";
import Image from "next/image";
import imgProfile from "@/public/images/profile/profile3.jpg";
import Link from "next/link";

export default function SectionHomeBanner() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionHomeBanner"] || "";
  const t_general = messages?.[locale]?.["general"] || "";
  const { theme, setTheme } = useTheme();
  const [particlesColor, setParticlesColor] = useState(
    getTheme(theme).particlesColor || []
  );
  const [elementParticles, setElementParticles] = useState("");

  useEffect(() => {
    setParticlesColor(getTheme(theme).particlesColor || []);
  }, [theme]);

  useEffect(() => {
    setElementParticles(() => (
      <>
        {particlesColor
          ? particlesColor.map((v, k) => (
              <Particles
                key={k}
                className="absolute inset-0 z-2"
                size={0.8}
                staticity={50}
                quantity={
                  getTheme(theme).particlesQuantity / particlesColor.length
                }
                ease={80}
                color={v || ""}
                refresh
              />
            ))
          : ""}
      </>
    ));
  }, [particlesColor]);

  const getApiHomebanner = async () => {
    try {
      const res = await axios.get("/api/users");
      console.log("res", res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiHomebanner();
  }, []);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      <div id="sec-home-banner" className="sec-home-banner">
        {elementParticles || ""}
        <div className="wrapper">
          <div className="overlay-box">
            <div
              className="txt-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={false}
            >
              <div className="txt-1">{t?.hello}</div>
              <h1 className="txt-2 f-bol c-gd">
                {t?.fname} {t?.lname}
              </h1>
              <TypeAnimation
                wrapper="div"
                sequence={[`${t?.position || ""}`, 5000, ``, 1000]}
                className="txt-3 f-reg"
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
              <h2 className="d-none">{t?.position || ""}</h2>
              <h3 className="txt-4">{t?.sub || ""}</h3>
              <div className="wrap-bottom">
                <Button
                  // href={"/contact"}
                  onClick={() => {
                    scrollTo("#sec-contact");
                  }}
                >
                  {t?.btnContact || ""}
                </Button>
                <div className="hr-x hide-xs"></div>
                <div className="group-contact">
                  <Link
                    href="tel:0935460996"
                    target="_blank"
                    rel="noreferrer"
                    className="list-contact"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-solid fa-phone c-gd"></i>
                  </Link>
                  <Link
                    href="mailto:kasidit.kat@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="list-contact"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-solid fa-envelope c-gd"></i>
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61554603137737&locale=th_TH"
                    target="_blank"
                    rel="noreferrer"
                    className="list-contact"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link
                    href="https://line.me/ti/p/~kasidit2408"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-brands fa-line c-gd"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="img-box">
            <Parallax speed={0}>
              <Image
                src={imgProfile}
                alt="banner"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={false}
                className="img-banner shadow"
                // data-cursor-label="ดูรูปภาพ"
              />
            </Parallax>
            {/* <div
              className="animation-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={false}
            >
              <div data-dot={1}></div>
              <div data-dot={2}></div>
              <div data-dot={3}></div>
              <div data-dot={4}></div>
            </div> */}
          </div>
        </div>

        <div
          className="srolling-down"
          // data-aos="fade-up"
          // data-aos-duration="1000"
          // data-aos-once={false}
        >
          <span>SCROLL</span>
          <i className="fa-solid fa-angles-down"></i>
        </div>
      </div>
    </>
  );
}
