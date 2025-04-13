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

export default function SectionHomeBanner() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionHomeBanner"] || "";
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
      const res = await axios.get("/api/homebanner");
      // console.log("res", res.data);

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiHomebanner();
  }, []);
  return (
    <>
      <div className="sec-banner">
        {elementParticles || ""}
        <div className="wrapper">
          <div className="overlay-box">
            <div
              className="txt-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={true}
            >
              <div className="txt-1">{t?.hello}</div>
              <span className="txt-2 f-bol c-gd">
                {t?.fname} {t?.lname}
              </span>
              <br />
              <TypeAnimation
                wrapper="div"
                sequence={[
                  `${t?.position || ""}`,
                  5000,``,1000,
                ]}
                className="txt-3 f-reg"
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
              <div className="txt-4">{t?.sub || ""}</div>
              <div className="wrap-bottom">
                <Button href={"/contact"}>{t?.btnContact || ""}</Button>
                <div className="group-contact">
                  <div className="list-contact"></div>
                  <div className="list-contact"></div>
                  <div className="list-contact"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-box">
            <Parallax speed={0}>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={true}
                className="img-banner shadow"
                src={`/images/profile/profile3.jpg`}
                width={100}
                height={100}
                alt="banner"
                // data-cursor-label="ดูรูปภาพ"
              />
            </Parallax>
            {/* <div
              className="animation-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={true}
            >
              <div data-dot={1}></div>
              <div data-dot={2}></div>
              <div data-dot={3}></div>
              <div data-dot={4}></div>
            </div> */}
          </div>
        </div>

        <div className="srolling-down">SCROLL</div>
      </div>
    </>
  );
}
