"use client"; // ใช้ใน Next.js 13+ เพื่อให้ทำงานฝั่ง Client

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectFade,
  Navigation,
  Autoplay,
  Parallax,
  EffectCards,
} from "swiper/modules"; // นำเข้าโมดูลที่ต้องใช้
import "@/src/styles/SectionHomeBanner.scss";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { useEffect } from "react";

import { useLocale } from "next-intl";
import messages from "@/src/messages/messages";

export default function SectionHomeBanner() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionHomeBanner"] || "";
  const getApiHomebanner = async () => {
    try {
      const res = await axios.get("/api/homebanner");
      console.log("res", res.data);

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getApiHomebanner();
  }, []);
  return (
    <>
      <div className="sec-banner">
        <div className="wrapper">
          <div className="overlay-box">
            <div
              className="txt-box"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once={false}
            >
              <div className="txt-1 f-lig">{t?.hello}</div>
              <span className="txt-2 f-bol c-gd">
                {t?.fname} {t?.lname}
              </span>
              <br />
              <TypeAnimation
                wrapper="div"
                sequence={[`${t?.position}`, 5000, "", 1500,]}
                className="txt-3"
                speed={30}
                deletionSpeed={30}
                repeat={Infinity}
              />
              <div className="txt-4 f-lig">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                accusamus?
              </div>
              <a href="/contact" className="btn-view-more" data-btn="solid">
                <span>{t?.btnContact}</span>
              </a>
            </div>
          </div>
          <Swiper
            className="swiper-banner"
            modules={[
              EffectFade,
              EffectCards,
              Navigation,
              Pagination,
              Autoplay,
              Parallax,
            ]}
            speed={2000}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            navigation
            pagination={{ clickable: true }}
            parallax={true}
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-once={false}
          >
            {[...Array(1)].map((v, k) => {
              return (
                <>
                  <SwiperSlide key={`${k}${new Date().getTime()}`}>
                    <img
                      className="img-banner"
                      src={`/images/profile/profile1.jpeg`}
                      width={100}
                      height={100}
                      alt="banner"
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
